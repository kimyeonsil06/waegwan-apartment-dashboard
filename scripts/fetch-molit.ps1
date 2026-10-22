param(
  [string]$ServiceKey,
  [string]$StartMonth = "202501",
  [string]$EndMonth = "202610",
  [string]$OutputPath = "dist/data/molit-transactions.json"
)

$ErrorActionPreference = "Stop"
$secureKey = $null
$keyPtr = [IntPtr]::Zero

try {
  if ([string]::IsNullOrWhiteSpace($ServiceKey)) {
    $secureKey = Read-Host "공공데이터포털 일반 인증키" -AsSecureString
    $keyPtr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)
    $ServiceKey = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($keyPtr)
  }

  $saleEndpoint = "https://apis.data.go.kr/1613000/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev"
  $rentEndpoint = "https://apis.data.go.kr/1613000/RTMSDataSvcAptRent/getRTMSDataSvcAptRent"
  $months = [ordered]@{}

  function Get-MonthSequence([string]$Start, [string]$End) {
    $cursor = [datetime]::ParseExact("${Start}01", "yyyyMMdd", $null)
    $last = [datetime]::ParseExact("${End}01", "yyyyMMdd", $null)
    while ($cursor -le $last) {
      $cursor.ToString("yyyyMM")
      $cursor = $cursor.AddMonths(1)
    }
  }

  function Get-OfficialItems([string]$Endpoint, [string]$Month) {
    $query = [System.Web.HttpUtility]::ParseQueryString("")
    $query["serviceKey"] = $ServiceKey
    $query["LAWD_CD"] = "47850"
    $query["DEAL_YMD"] = $Month
    $query["numOfRows"] = "1000"
    $query["pageNo"] = "1"
    $response = Invoke-RestMethod -Method Get -Uri "${Endpoint}?$($query.ToString())"
    $code = [string]$response.response.header.resultCode
    if ($code -notin @("000", "00")) {
      throw "공공데이터포털 요청 실패 ${Month}: ${code} $($response.response.header.resultMsg)"
    }
    return @($response.response.body.items.item)
  }

  foreach ($month in Get-MonthSequence -Start $StartMonth -End $EndMonth) {
    $saleRows = [System.Collections.Generic.List[object]]::new()
    foreach ($item in Get-OfficialItems -Endpoint $saleEndpoint -Month $month) {
      $umd = ([string]$item.umdNm).Trim()
      if (-not $umd.StartsWith("왜관읍") -or ([string]$item.cdealType).Trim() -eq "O") { continue }
      $ri = $umd -replace '^왜관읍\s*', ''
      $saleRows.Add(@(
        ([string]$item.aptNm).Trim(),
        $(if ($ri) { $ri } else { "기타" }),
        [int]$item.buildYear,
        [double]$item.excluUseAr,
        [int]$item.floor,
        [int]$item.dealDay,
        [int](([string]$item.dealAmount).Replace(",", "").Trim()),
        ([string]$item.jibun).Trim(),
        ([string]$item.roadNm).Trim()
      ))
    }

    $rentRows = [System.Collections.Generic.List[object]]::new()
    foreach ($item in Get-OfficialItems -Endpoint $rentEndpoint -Month $month) {
      $umd = ([string]$item.umdNm).Trim()
      if (-not $umd.StartsWith("왜관읍")) { continue }
      $ri = $umd -replace '^왜관읍\s*', ''
      $rentRows.Add(@(
        ([string]$item.aptNm).Trim(),
        $(if ($ri) { $ri } else { "기타" }),
        [int]$item.buildYear,
        [double]$item.excluUseAr,
        [int]$item.floor,
        [int]$item.dealDay,
        [int](([string]$item.deposit).Replace(",", "").Trim()),
        [int](([string]$item.monthlyRent).Replace(",", "").Trim()),
        ([string]$item.jibun).Trim(),
        ([string]$item.contractType).Trim()
      ))
    }

    if ($saleRows.Count -gt 0 -or $rentRows.Count -gt 0) {
      $months[$month] = [ordered]@{ s = $saleRows; r = $rentRows }
      Write-Output "${month}: 매매 $($saleRows.Count)건, 임대차 $($rentRows.Count)건"
    }
  }

  $payload = [ordered]@{
    schemaVersion = 1
    source = "국토교통부 실거래가 공개자료 (공공데이터포털)"
    sourceUrls = [ordered]@{
      sale = "https://www.data.go.kr/data/15126469/openapi.do"
      rent = "https://www.data.go.kr/data/15126474/openapi.do"
    }
    regionCode = "47850"
    region = "경상북도 칠곡군 왜관읍"
    fetchedDate = (Get-Date).ToString("yyyy-MM-dd")
    months = $months
  }

  $fullPath = Join-Path (Get-Location) $OutputPath
  New-Item -ItemType Directory -Force -Path (Split-Path $fullPath -Parent) | Out-Null
  $payload | ConvertTo-Json -Depth 10 -Compress | Set-Content -Path $fullPath -Encoding utf8
  Write-Output "저장 완료: $OutputPath"
}
finally {
  if ($keyPtr -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($keyPtr)
  }
  Remove-Variable ServiceKey -ErrorAction SilentlyContinue
}

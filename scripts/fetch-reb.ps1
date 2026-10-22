param(
  [string]$OutputPath = "dist/data/reb-price-index.json"
)

$ErrorActionPreference = "Stop"
$secureKey = Read-Host "R-ONE API key" -AsSecureString
$keyPtr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)

try {
  $apiKey = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($keyPtr)
  $tables = @(
    @{ key = "sale"; label = "매매가격지수"; id = "A_2024_00045" },
    @{ key = "jeonse"; label = "전세가격지수"; id = "A_2024_00050" },
    @{ key = "monthly"; label = "월세통합가격지수"; id = "A_2024_00054" }
  )
  $series = [ordered]@{}

  foreach ($table in $tables) {
    $query = [System.Web.HttpUtility]::ParseQueryString("")
    $query["KEY"] = $apiKey
    $query["STATBL_ID"] = $table.id
    $query["DTACYCLE_CD"] = "MM"
    $query["CLS_ID"] = "510109"
    $query["ITM_ID"] = "100001"
    $query["START_WRTTIME"] = "2023"
    $query["END_WRTTIME"] = "2026"
    $query["pIndex"] = "1"
    $query["pSize"] = "100"
    $query["Type"] = "json"

    $uri = "https://www.reb.or.kr/r-one/openapi/SttsApiTblData.do?$($query.ToString())"
    $response = Invoke-RestMethod -Method Get -Uri $uri
    $head = $response.SttsApiTblData[0].head
    $result = $head | Where-Object { $_.RESULT } | Select-Object -ExpandProperty RESULT
    if ($result.CODE -ne "INFO-000") {
      throw "R-ONE request failed for $($table.label): $($result.CODE) $($result.MESSAGE)"
    }

    $rows = @($response.SttsApiTblData[1].row | ForEach-Object {
      [ordered]@{
        period = [string]$_.WRTTIME_IDTFR_ID
        label = [string]$_.WRTTIME_DESC
        value = [math]::Round([double]$_.DTA_VAL, 2)
      }
    })
    $series[$table.key] = [ordered]@{
      label = $table.label
      tableId = $table.id
      rows = $rows
    }
  }

  $payload = [ordered]@{
    source = "한국부동산원 R-ONE"
    sourceUrl = "https://www.reb.or.kr/r-one/portal/stat/easyStatPage.do"
    fetchedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssK")
    area = [ordered]@{
      name = "경북 > 칠곡군"
      clsId = "510109"
      legalCode = "47850000"
      granularity = "시군구"
    }
    unit = "지수"
    frequency = "월"
    series = $series
  }

  $fullPath = Join-Path (Get-Location) $OutputPath
  $directory = Split-Path $fullPath -Parent
  New-Item -ItemType Directory -Force -Path $directory | Out-Null
  $payload | ConvertTo-Json -Depth 8 | Set-Content -Path $fullPath -Encoding utf8
  Write-Output "Saved official R-ONE price index data to $OutputPath"
  foreach ($key in $series.Keys) {
    $rows = $series[$key].rows
    Write-Output "${key}: $($rows.Count) rows, latest $($rows[-1].period)"
  }
}
finally {
  if ($keyPtr -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($keyPtr)
  }
  Remove-Variable apiKey -ErrorAction SilentlyContinue
}

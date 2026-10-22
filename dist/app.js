const datasets={
 sale:{label:'매매',index:[99.1,100.0,101.3,100.8,102.4,103.7,104.1,105.8,106.3,107.2,106.9,108.7],county:[100,100.4,101,101.8,102.5,103.4,104,104.8,105.3,105.9,106.5,107.1],price:'2억 8,450',priceSub:'전년 동기 대비 +3.2%',pyeongAvg:'927',pyeongSub:'칠곡군 평균보다 6.4% ↑',deals:'47',indexChange:'↗ 1.8%',note:'금리 변동에도 생활권 중심 단지의 실거래가는 완만한 회복세입니다.',ratio:'71.6',vol:[11,17,14,20,19,25,31,28,34,39,36,47],
   prices:[['왜관한양수자인','2025년 · 84㎡',41500],['왜관 태왕아너스 센텀','2022년 · 84㎡',39700],['왜관역 신일해피트리','2020년 · 84㎡',37100],['왜관 삼부르네상스','2017년 · 84㎡',34800],['왜관 대동다숲','2006년 · 84㎡',29600],['왜관 우방타운','1995년 · 84㎡',26800],['왜관 주공3단지','1998년 · 59㎡',22300],['왜관 대화전원타운','1992년 · 84㎡',21200],['석전 한빛타운','2001년 · 59㎡',19800],['왜관 주공2단지','1992년 · 49㎡',16800]],
   pyeong:[['왜관한양수자인','2025년 · 84㎡',1186],['왜관 태왕아너스 센텀','2022년 · 84㎡',1129],['왜관역 신일해피트리','2020년 · 84㎡',1087],['왜관 삼부르네상스','2017년 · 84㎡',1021],['왜관 주공3단지','1998년 · 59㎡',936],['석전 한빛타운','2001년 · 59㎡',891],['왜관 대동다숲','2006년 · 84㎡',872],['왜관 우방타운','1995년 · 84㎡',804],['왜관 주공2단지','1992년 · 49㎡',786],['대화전원타운','1992년 · 84㎡',701]]},
 jeonse:{label:'전세',index:[100,99.4,98.8,99.1,100.2,101.5,102.7,103.9,104.8,105.1,105.9,107.3],county:[100,99.7,99.5,99.8,100.5,101.3,102.1,103,103.7,104.2,104.8,105.6],price:'2억 370',priceSub:'전년 동기 대비 +2.7%',pyeongAvg:'664',pyeongSub:'보증금 기준 환산 평균',deals:'31',indexChange:'↗ 1.4%',note:'입주 연식이 짧고 학군 접근성이 좋은 단지를 중심으로 보증금이 견조합니다.',ratio:'71.6',vol:[8,11,10,13,17,19,16,23,21,28,26,31],
   prices:[['왜관한양수자인','2025년 · 84㎡',30200],['왜관 태왕아너스 센텀','2022년 · 84㎡',28400],['왜관역 신일해피트리','2020년 · 84㎡',26500],['왜관 삼부르네상스','2017년 · 84㎡',24800],['왜관 대동다숲','2006년 · 84㎡',21100],['왜관 우방타운','1995년 · 84㎡',18300],['왜관 주공3단지','1998년 · 59㎡',15800],['석전 한빛타운','2001년 · 59㎡',14700],['대화전원타운','1992년 · 84㎡',14200],['왜관 주공2단지','1992년 · 49㎡',11900]],
   pyeong:[['왜관한양수자인','2025년 · 84㎡',863],['왜관 태왕아너스 센텀','2022년 · 84㎡',808],['왜관역 신일해피트리','2020년 · 84㎡',776],['왜관 삼부르네상스','2017년 · 84㎡',727],['왜관 주공3단지','1998년 · 59㎡',663],['석전 한빛타운','2001년 · 59㎡',661],['왜관 대동다숲','2006년 · 84㎡',621],['왜관 주공2단지','1992년 · 49㎡',557],['왜관 우방타운','1995년 · 84㎡',549],['대화전원타운','1992년 · 84㎡',469]]},
 monthly:{label:'월세',index:[100,100.5,101.2,102,102.8,103.1,103.9,105,105.6,106.1,107,108.1],county:[100,100.2,100.7,101.3,102,102.6,103.2,103.9,104.5,105.1,105.7,106.4],price:'1,500 / 68',priceSub:'평균 보증금 / 월세',pyeongAvg:'2.2',pyeongSub:'3.3㎡당 월 환산액',deals:'23',indexChange:'↗ 1.0%',note:'소형·중소형 면적의 임차 수요가 이어지며 월세 지수는 완만하게 상승 중입니다.',ratio:'—',vol:[5,8,7,10,12,11,13,17,15,19,20,23],
   prices:[['왜관한양수자인','보증금 3,000',95],['왜관 태왕아너스 센텀','보증금 2,000',88],['왜관역 신일해피트리','보증금 2,000',83],['왜관 삼부르네상스','보증금 1,500',78],['왜관 대동다숲','보증금 1,000',70],['왜관 우방타운','보증금 1,000',65],['왜관 주공3단지','보증금 1,000',58],['석전 한빛타운','보증금 500',55],['대화전원타운','보증금 500',50],['왜관 주공2단지','보증금 500',45]],
   pyeong:[['왜관한양수자인','월세 환산',3.8],['왜관 태왕아너스 센텀','월세 환산',3.5],['왜관역 신일해피트리','월세 환산',3.3],['석전 한빛타운','월세 환산',3.1],['왜관 주공3단지','월세 환산',2.9],['왜관 삼부르네상스','월세 환산',2.8],['왜관 주공2단지','월세 환산',2.7],['왜관 대동다숲','월세 환산',2.6],['왜관 우방타운','월세 환산',2.5],['대화전원타운','월세 환산',2.3]]}
};

const locationData={
 school:{kicker:'EDUCATION · 교육',title:'도보 생활권에 모인<br>안정적인 교육 인프라',body:'읍 중심부를 기준으로 초·중·고가 비교적 고르게 분포해 통학 동선이 짧습니다. 단지별 실제 배정학교와 통학구역은 계약 전 반드시 확인하세요.',stats:[['생활권 내 학교','초·중·고'],['통학 환경','도보권 중심']],note:'학령기 수요는 역·상권 접근성과 함께 왜관읍 내 단지 선호도를 가르는 핵심 요인입니다.',labels:['왜관역','왜관초','석전중','왜관고'],theme:'#dce9e2'},
 traffic:{kicker:'MOBILITY · 도로교통',title:'도심과 산업 거점을 잇는<br>효율적인 도로 네트워크',body:'왜관읍은 국도와 고속도로 진입축을 통해 칠곡군 일대와 대구권을 연결합니다. 출퇴근 시간대 체감 소요시간은 출발 단지와 교통 상황에 따라 달라질 수 있습니다.',stats:[['핵심 이동축','국도 4호선'],['광역 접근','고속도로 연계']],note:'차량 중심 생활자라면 IC 접근 시간과 교차로 정체를 단지별로 함께 비교하는 것이 좋습니다.',labels:['왜관IC','국도 4호선','산업단지','대구 방향'],theme:'#e7e2d5'},
 rail:{kicker:'RAILWAY · 철도',title:'왜관역을 중심으로<br>넓어지는 광역 생활권',body:'경부선 왜관역이 읍 중심에 있어 일반열차 이용이 편리합니다. KTX 이용은 동대구역 또는 김천(구미)역까지의 연계 이동을 함께 고려해야 합니다.',stats:[['지역 거점','왜관역'],['KTX 연계','환승 필요']],note:'역 접근성이 매일의 편의성을 높이지만, KTX 직접 정차 여부와 실제 환승 시간을 반드시 확인하세요.',labels:['왜관역','경부선','동대구 연계','김천(구미) 연계'],theme:'#dfe6ea'},
 future:{kicker:'FUTURE · 미래교통',title:'확정 노선보다 중요한<br>실현 가능성의 구분',body:'현재 왜관읍은 GTX 직접 수혜 지역으로 보기 어렵습니다. 발표·검토·계획·착공을 구분하고 공식 고시와 사업 진행률을 기준으로 보수적으로 판단해야 합니다.',stats:[['GTX 직접 연결','해당 없음'],['검토 원칙','공식 고시 확인']],note:'미래 교통 호재는 가격에 선반영될 수 있습니다. 확정되지 않은 계획은 투자 판단에서 별도 시나리오로 분리하세요.',labels:['왜관 생활권','광역철도 검토','대구권 연계','계획 단계'],theme:'#e8e3db'}
};

const riProfiles={
 all:{label:'왜관읍 전체',price:1,index:0,volume:1,seed:1},
 waegwan:{label:'왜관리',price:1.06,index:.8,volume:1.22,seed:2},
 seokjeon:{label:'석전리',price:.94,index:-.3,volume:.88,seed:3},
 maewon:{label:'매원리',price:.91,index:-.7,volume:.72,seed:4},
 bonggye:{label:'봉계리',price:.96,index:.2,volume:.81,seed:5},
 samcheong:{label:'삼청리',price:.92,index:-.5,volume:.68,seed:6},
 geumsan:{label:'금산리',price:1.01,index:.4,volume:.93,seed:7},
 geumnam:{label:'금남리',price:.89,index:-.8,volume:.61,seed:8},
 naksan:{label:'낙산리',price:.93,index:-.2,volume:.76,seed:9},
 agok:{label:'아곡리',price:.87,index:-1.1,volume:.54,seed:10},
 daechon:{label:'대촌리',price:.90,index:-.6,volume:.64,seed:11}
};
const maxDate='2026-10-22',minDate='2025-01-01';
let activeType='sale'; let activePeriod='3Y'; let selectedRi='all'; let selectedDate=maxDate;
let rebData=null; let rebLoadError=false;
let molitData=null; let molitLoadError=false;
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const fmt=v=>Number.isInteger(v)?v.toLocaleString('ko-KR'):v.toFixed(1);

function dateValue(value){return new Date(`${value}T12:00:00`)}
function dateLabel(value){const [y,m,d]=value.split('-');return `${y}. ${m}. ${d}`}
function amountValue(text){const eok=Number(text.match(/(\d+)억/)?.[1]||0)*10000;const rest=Number(text.split('억')[1]?.replace(/[^0-9]/g,'')||0);return eok+rest}
function amountLabel(value){const rounded=Math.max(0,Math.round(value/50)*50),eok=Math.floor(rounded/10000),rest=rounded%10000;return eok?`${eok}억${rest?` ${rest.toLocaleString('ko-KR')}`:''}`:rounded.toLocaleString('ko-KR')}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}
function molitRecordsForMonth(month,type,scope){
 const bucket=molitData?.months?.[month];if(!bucket)return [];
 let rows=type==='sale'?[...(bucket.s||[])]:[...(bucket.r||[])];
 if(type==='jeonse')rows=rows.filter(row=>Number(row[7])===0);
 if(type==='monthly')rows=rows.filter(row=>Number(row[7])>0);
 if(scope!=='all')rows=rows.filter(row=>row[1]===riProfiles[scope].label);
 return rows;
}
function selectedMolitRecords(){
 if(!molitData)return null;
 const targetMonth=selectedDate.slice(0,7).replace('-',''),targetDay=Number(selectedDate.slice(8,10));
 const months=Object.keys(molitData.months).filter(month=>month<=targetMonth).sort().reverse();
 for(const month of months){
  let rows=molitRecordsForMonth(month,activeType,selectedRi);
  if(month===targetMonth)rows=rows.filter(row=>Number(row[5])<=targetDay);
  if(rows.length)return {month,rows,fallback:month!==targetMonth};
 }
 return {month:targetMonth,rows:[],fallback:false};
}
function molitVolume(type,scope,throughMonth){
 if(!molitData)return [];
 const months=Object.keys(molitData.months).filter(month=>month<=throughMonth).sort().slice(-12);
 return months.map(month=>molitRecordsForMonth(month,type,scope).length);
}
function applyOfficialTransactions(view){
 const official=selectedMolitRecords();if(!official)return view;
 const {month,rows,fallback}=official,periodLabel=`${month.slice(0,4)}.${month.slice(4)}`;
 const volume=molitVolume(activeType,selectedRi,month),priceIndex=activeType==='sale'?6:activeType==='jeonse'?6:7;
 if(!rows.length)return {...view,prices:[],pyeong:[],vol:volume.length?volume:Array(12).fill(0),deals:'0',price:'—',pyeongAvg:'—',priceSub:`${dateLabel(selectedDate)}까지 공식 신고 없음`,pyeongSub:'국토부 공식 신고 없음',official:true,officialEmpty:true,dataMonth:month,dataStatus:'선택 조건에 해당하는 공식 실거래 신고가 없습니다.'};
 const average=values=>values.reduce((sum,value)=>sum+value,0)/values.length;
 const rankRow=(row,value)=>{const day=String(row[5]).padStart(2,'0'),deposit=activeType==='monthly'?` · 보증금 ${Number(row[6]).toLocaleString('ko-KR')}만`:'';return [row[0],`${periodLabel}.${day} · ${Number(row[3]).toFixed(1)}㎡ · ${row[4]}층${deposit}`,value]};
 const prices=rows.map(row=>rankRow(row,Number(row[priceIndex]))).sort((a,b)=>b[2]-a[2]).slice(0,10);
 const pyeong=rows.map(row=>rankRow(row,+(Number(row[priceIndex])/(Number(row[3])/3.3058)).toFixed(1))).sort((a,b)=>b[2]-a[2]).slice(0,10);
 let price,pyeongAvg;
 if(activeType==='monthly'){
  const avgDeposit=Math.round(average(rows.map(row=>Number(row[6])))),avgRent=average(rows.map(row=>Number(row[7])));
  price=`${avgDeposit.toLocaleString('ko-KR')} / ${avgRent.toFixed(1)}`;pyeongAvg=average(rows.map(row=>Number(row[7])/(Number(row[3])/3.3058))).toFixed(1);
 }else{
  const avgPrice=average(rows.map(row=>Number(row[6])));price=amountLabel(avgPrice);pyeongAvg=Math.round(average(rows.map(row=>Number(row[6])/(Number(row[3])/3.3058)))).toLocaleString('ko-KR');
 }
 const fallbackText=fallback?`선택일 이전 최근 신고월 ${periodLabel}`:`${dateLabel(selectedDate)}까지 신고`;
 return {...view,prices,pyeong,vol:volume,deals:String(rows.length),price,pyeongAvg,priceSub:`${fallbackText} · 국토부 공식자료`,pyeongSub:`${periodLabel} 신고 기준`,official:true,officialEmpty:false,dataMonth:month,dataStatus:`${periodLabel} ${datasets[activeType].label} 공식 신고 ${rows.length}건${fallback?' · 직전 신고월 적용':''}`};
}
function getViewData(){
 const base=datasets[activeType],profile=riProfiles[selectedRi];
 const days=Math.round((dateValue(selectedDate)-dateValue(maxDate))/86400000);
 const seasonal=1+Math.sin((dateValue(selectedDate).getMonth()+1)*.72+profile.seed)*.06;
 const priceScale=Math.max(.82,profile.price*(1+days*.0001));
 const indexShift=profile.index+days*.004;
 const index=base.index.map((v,i)=>+(v+indexShift*(.25+.75*i/(base.index.length-1))).toFixed(1));
 const county=base.county.map((v,i)=>+(v+days*.0025*(.25+.75*i/(base.county.length-1))).toFixed(1));
 const rowScale=(value,i,monthly=false)=>{const variation=1+(((profile.seed+i*7)%9)-4)*.006;const scaled=value*priceScale*variation;return monthly?+scaled.toFixed(1):Math.round(scaled/10)*10};
 const prices=base.prices.map((r,i)=>[...r.slice(0,2),rowScale(r[2],i,activeType==='monthly')]).sort((a,b)=>b[2]-a[2]);
 const pyeong=base.pyeong.map((r,i)=>[...r.slice(0,2),rowScale(r[2],i,activeType==='monthly')]).sort((a,b)=>b[2]-a[2]);
 const volumeScale=profile.volume*seasonal;
 const vol=base.vol.map((v,i)=>Math.max(1,Math.round(v*volumeScale*(.92+i*.007))));
 const deals=String(Math.max(1,Math.round(Number(base.deals)*volumeScale)));
 let price,pyeongAvg;
 if(activeType==='monthly'){const [deposit,rent]=base.price.split('/').map(v=>Number(v.replace(/[^0-9.]/g,'')));const scaledDeposit=Math.round(deposit*priceScale/10)*10;price=`${scaledDeposit.toLocaleString('ko-KR')} / ${Math.round(rent*priceScale)}`;pyeongAvg=(Number(base.pyeongAvg)*priceScale).toFixed(1)}
 else{price=amountLabel(amountValue(base.price)*priceScale);pyeongAvg=Math.round(Number(base.pyeongAvg)*priceScale).toLocaleString('ko-KR')}
 const change=((index.at(-1)/index.at(-4)-1)*100).toFixed(1);
 const view={...base,index,county,prices,pyeong,vol,deals,price,pyeongAvg,indexChange:`${Number(change)>=0?'↗':'↘'} ${Math.abs(change)}%`,priceSub:`${dateLabel(selectedDate)} 기준 · ${base.priceSub}`};
 return applyOfficialTransactions(view);
}

function sparkline(el,values){const min=Math.min(...values)-1,max=Math.max(...values)+1;const pts=values.map((v,i)=>`${(i/(values.length-1))*136+2},${40-((v-min)/(max-min))*36}`).join(' ');el.innerHTML=`<defs><linearGradient id="sparkG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f7863" stop-opacity=".28"/><stop offset="1" stop-color="#2f7863" stop-opacity="0"/></linearGradient></defs><polygon points="2,42 ${pts} 138,42" fill="url(#sparkG)"/><polyline points="${pts}" fill="none" stroke="#1c5d4b" stroke-width="2"/>`;}

function chart(values,benchmark){const w=760,h=260,p={l:35,r:18,t:16,b:30};const all=[...values,...benchmark];const min=Math.floor(Math.min(...all)-2),max=Math.ceil(Math.max(...all)+2);const x=i=>p.l+i*(w-p.l-p.r)/(values.length-1);const y=v=>p.t+(max-v)*(h-p.t-p.b)/(max-min);const path=arr=>arr.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');const area=`${path(values)} L${x(values.length-1)},${h-p.b} L${x(0)},${h-p.b} Z`;const labels=['23.12','24.03','24.06','24.09','24.12','25.03','25.06','25.09','25.12','26.03','26.06','26.10'];let grids='';for(let i=0;i<5;i++){const val=min+(max-min)*i/4;const yy=y(val);grids+=`<line class="chart-grid" x1="${p.l}" x2="${w-p.r}" y1="${yy}" y2="${yy}"/><text class="chart-axis" x="0" y="${yy+4}">${val.toFixed(0)}</text>`}const ticks=labels.map((l,i)=>i%2===0?`<text class="chart-axis" x="${x(i)}" y="${h-6}" text-anchor="middle">${l}</text>`:'').join('');return `<svg viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6eac96" stop-opacity=".35"/><stop offset="1" stop-color="#6eac96" stop-opacity="0"/></linearGradient></defs>${grids}<path class="chart-area" d="${area}"/><path class="chart-benchmark" d="${path(benchmark)}"/><path class="chart-line" d="${path(values)}"/><circle class="chart-dot" cx="${x(values.length-1)}" cy="${y(values.at(-1))}" r="5"/>${ticks}</svg>`}

function rebTrendChart(rows){
 const w=900,h=230,p={l:42,r:18,t:14,b:34},values=rows.map(row=>row.value);
 let min=Math.min(...values),max=Math.max(...values);if(min===max){min-=1;max+=1}else{const pad=(max-min)*.14;min-=pad;max+=pad}
 const x=i=>p.l+i*(w-p.l-p.r)/Math.max(1,rows.length-1),y=v=>p.t+(max-v)*(h-p.t-p.b)/(max-min);
 const path=values.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' '),area=`${path} L${x(values.length-1)},${h-p.b} L${x(0)},${h-p.b} Z`;
 let grids='';for(let i=0;i<4;i++){const val=min+(max-min)*i/3,yy=y(val);grids+=`<line class="chart-grid" x1="${p.l}" x2="${w-p.r}" y1="${yy}" y2="${yy}"/><text class="chart-axis" x="2" y="${yy+4}">${val.toFixed(1)}</text>`}
 const tickEvery=Math.max(1,Math.ceil(rows.length/6));const ticks=rows.map((row,i)=>(i%tickEvery===0||i===rows.length-1)?`<text class="chart-axis" x="${x(i)}" y="${h-7}" text-anchor="middle">${row.period.slice(2,4)}.${row.period.slice(4)}</text>`:'').join('');
 return `<svg viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="rebGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5d9b83" stop-opacity=".3"/><stop offset="1" stop-color="#5d9b83" stop-opacity="0"/></linearGradient></defs>${grids}<path class="reb-area" d="${area}"/><path class="reb-line" d="${path}"/><circle class="reb-dot" cx="${x(values.length-1)}" cy="${y(values.at(-1))}" r="5"/>${ticks}</svg>`;
}

function officialRow(rows){const target=selectedDate.slice(0,7).replace('-','');return rows.filter(row=>row.period<=target).at(-1)||rows[0]}
function renderReb(){
 const chartEl=$('#rebChart');
 if(!rebData){if(rebLoadError)chartEl.innerHTML='<div class="reb-error">공식지표를 불러오지 못했습니다. R-ONE 원문에서 확인해 주세요.</div>';return}
 const ids={sale:['#rebSaleValue','#rebSalePeriod','#rebSaleChange'],jeonse:['#rebJeonseValue','#rebJeonsePeriod','#rebJeonseChange'],monthly:['#rebMonthlyValue','#rebMonthlyPeriod','#rebMonthlyChange']};
 Object.entries(rebData.series).forEach(([key,series])=>{const row=officialRow(series.rows),idx=series.rows.indexOf(row),prev=series.rows[Math.max(0,idx-1)],delta=row.value-prev.value;$(ids[key][0]).textContent=row.value.toFixed(2);$(ids[key][1]).textContent=row.label;const change=$(ids[key][2]);change.textContent=idx?`전월 ${delta>=0?'+':''}${delta.toFixed(2)}p`:'첫 공표월';change.classList.toggle('down',delta<0)});
 $$('.reb-card').forEach(card=>card.classList.toggle('active',card.dataset.rebKey===activeType));
 const series=rebData.series[activeType],current=officialRow(series.rows),currentIndex=series.rows.indexOf(current),months={"1Y":12,"3Y":36,"5Y":60}[activePeriod]||36,start=Math.max(0,currentIndex-months+1),visible=series.rows.slice(start,currentIndex+1);
 $('#rebTrendTitle').textContent=`칠곡군 ${series.label} 추이`;$('#rebAsOf').textContent=`공표 기준 ${current.label}`;chartEl.innerHTML=rebTrendChart(visible);
 const requested=selectedDate.slice(0,7).replace('-',''),fallback=current.period<requested;$('#rebDateNote').textContent=fallback?`선택일 ${dateLabel(selectedDate)}에는 더 최근 공표값이 없어 ${current.label} 공식지수를 적용했습니다.`:`선택일 ${dateLabel(selectedDate)}에 해당하는 ${current.label} 공식지수입니다.`;
 $('#rebScopeNote').textContent=selectedRi==='all'?'한국부동산원 통계의 제공 단위는 경북 칠곡군입니다. 왜관읍 상세 실거래 지표와 구분해 확인하세요.':`현재 ${riProfiles[selectedRi].label}를 선택했지만, 한국부동산원 공식지표는 경북 칠곡군 단위로 동일하게 표시됩니다.`;
}
async function loadReb(){try{const response=await fetch('./data/reb-price-index.json',{cache:'no-cache'});if(!response.ok)throw new Error(response.status);rebData=await response.json()}catch(error){rebLoadError=true}renderReb()}
async function loadMolit(){try{const response=await fetch('./data/molit-transactions.json',{cache:'no-cache'});if(!response.ok)throw new Error(response.status);molitData=await response.json()}catch(error){molitLoadError=true}render()}

function rankings(el,rows,isMonthly=false,isPyeong=false){if(!rows.length){el.innerHTML='<div class="rank-empty">선택 조건에 해당하는 공식 신고가 없습니다.</div>';return}const max=rows[0][2]||1,scope=selectedRi==='all'?'경상북도 칠곡군 왜관읍':`경상북도 칠곡군 왜관읍 ${riProfiles[selectedRi].label}`;el.innerHTML=rows.map((r,i)=>{const name=escapeHtml(r[0]),meta=escapeHtml(r[1]),mapUrl=`https://map.naver.com/p/search/${encodeURIComponent(`${scope} ${r[0]}`)}`,caption=isPyeong?'3.3㎡당':isMonthly?'월세':'신고가';return `<div class="rank-row" tabindex="0" data-name="${name}" data-meta="${meta}" data-value="${r[2]}"><span class="rank-no ${i<3?'top':''}">${i+1}</span><span class="rank-name"><span class="rank-title-line"><strong>${name}</strong><a class="map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="${name} 지도에서 보기"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 14s4-4.4 4-8A4 4 0 0 0 4 6c0 3.6 4 8 4 8Z"/><circle cx="8" cy="6" r="1.4"/></svg>지도</a></span><small>${meta}</small></span><span class="rank-bar"><i style="width:${Math.max(15,r[2]/max*100)}%"></i></span><span class="rank-value">${fmt(r[2])}만<small>${caption}</small></span></div>`}).join('');}

function render(){
 const d=getViewData(),scope=riProfiles[selectedRi].label;
 $('#metricIndexLabel').textContent=`${scope} ${d.label} 시연 지수`;$('#metricIndex').textContent=d.index.at(-1);$('#metricIndexChange').textContent=d.indexChange;$('#metricPriceLabel').textContent=activeType==='monthly'?'평균 보증금 / 월세':'평균 실거래가';$('#metricPrice').textContent=d.price;$('#metricPriceSub').textContent=d.priceSub;$('#metricPyeong').textContent=d.pyeongAvg;$('#metricPyeongSub').textContent=`${scope} · ${d.pyeongSub}`;$('#metricDeals').textContent=d.deals;
 $('#chartTitle').textContent=`${scope} ${d.label} 실거래 시연 지수`;$('#chartValue').textContent=d.index.at(-1);$('#chartChange').textContent=`선택 기준 ${d.indexChange}`;$('#chartNote').textContent=`${scope} · ${dateLabel(selectedDate)} 기준. ${d.note}`;$('#topPriceTitle').textContent=`${scope} ${d.label} 국토부 실거래 TOP 10`;$('#topPyeongTitle').textContent=`${scope} ${d.label} 3.3㎡당 TOP 10`;$('#ratioValue').innerHTML=`${d.ratio}<small>${d.ratio==='—'?'':'%'}</small>`;$('#filterStatus').textContent=`${scope} · ${dateLabel(selectedDate)}`;$('#dateInput').value=selectedDate;$('#prevDate').disabled=selectedDate<=minDate;$('#nextDate').disabled=selectedDate>=maxDate;
 const sourceStatus=$('#molitStatus');if(sourceStatus)sourceStatus.textContent=molitLoadError?'공식 실거래 자료를 불러오지 못했습니다.':d.official?d.dataStatus:'국토부 공식 실거래 자료를 불러오는 중입니다.';
 sparkline($('#indexSpark'),d.index);$('#mainChart').innerHTML=chart(d.index,d.county);const maxVolume=Math.max(1,...d.vol);$('#volumeBars').innerHTML=d.vol.map(v=>`<i style="height:${v?Math.max(5,v/maxVolume*28):2}px"></i>`).join('');rankings($('#priceRanking'),d.prices,activeType==='monthly',false);rankings($('#pyeongRanking'),d.pyeong,activeType==='monthly',true);bindRankings();renderReb();
}

function bindRankings(){$$('.rank-row').forEach(row=>{const open=()=>{const name=row.dataset.name,meta=row.dataset.meta,value=row.dataset.value;$('#dialogContent').innerHTML=`<span class="dialog-eyebrow">OFFICIAL TRANSACTION · ${datasets[activeType].label}</span><h3>${name}</h3><div class="dialog-meta">${meta}</div><div class="dialog-grid"><div><span>표시 가격</span><strong>${Number(value).toLocaleString('ko-KR')}만원</strong></div><div><span>시장 순위</span><strong>${[...row.parentElement.children].indexOf(row)+1}위</strong></div><div><span>자료 출처</span><strong>국토교통부</strong></div><div><span>데이터 상태</span><strong>공식 신고자료</strong></div></div><p>공공데이터포털의 국토교통부 아파트 매매·전월세 실거래 자료입니다. 신고 취소·정정이 반영될 수 있으므로 계약 전 원문을 다시 확인하세요.</p>`;$('#detailDialog').showModal();};row.addEventListener('click',open);row.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.target.closest('.map-link'))open()});row.querySelector('.map-link')?.addEventListener('click',e=>e.stopPropagation())})}

function renderLocation(key){const d=locationData[key];$('#insightKicker').textContent=d.kicker;$('#insightTitle').innerHTML=d.title;$('#insightBody').textContent=d.body;$('#insightStats').innerHTML=d.stats.map(x=>`<div><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');$('#insightNote').textContent=d.note;$('#mapCanvas').style.background=d.theme;$$('.map-label').forEach((el,i)=>el.textContent=d.labels[i]);}

function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),1600)}
function setSelectedDate(value){if(!value)return;selectedDate=value<minDate?minDate:value>maxDate?maxDate:value;render();showToast(`${riProfiles[selectedRi].label} · ${dateLabel(selectedDate)} 데이터 적용`)}
function stepDate(days){const next=dateValue(selectedDate);next.setDate(next.getDate()+days);setSelectedDate(next.toISOString().slice(0,10))}

$('#riSelect').addEventListener('change',e=>{selectedRi=e.target.value;render();showToast(`${riProfiles[selectedRi].label} 데이터가 적용되었습니다`)});
$('#dateInput').addEventListener('change',e=>setSelectedDate(e.target.value));
$('#prevDate').addEventListener('click',()=>stepDate(-1));
$('#nextDate').addEventListener('click',()=>stepDate(1));
$$('.trade-tab').forEach(btn=>btn.addEventListener('click',()=>{$$('.trade-tab').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');activeType=btn.dataset.type;render()}));
$$('.period-tabs button').forEach(btn=>btn.addEventListener('click',()=>{$$('.period-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activePeriod=btn.dataset.period;renderReb();showToast(`${btn.textContent} 조회 범위가 적용되었습니다`)}));
$$('.location-tab').forEach(btn=>btn.addEventListener('click',()=>{$$('.location-tab').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');renderLocation(btn.dataset.location)}));
$('#detailDialog .dialog-close').addEventListener('click',()=>$('#detailDialog').close());
$('#helpBtn').addEventListener('click',()=>{$('#dialogContent').innerHTML='<span class="dialog-eyebrow">DATA GUIDE</span><h3>데이터 안내</h3><div class="dialog-meta">공식 자료와 화면 시연 지표를 구분해 표시합니다.</div><div class="dialog-grid"><div><span>공식 가격지수</span><strong>한국부동산원</strong></div><div><span>공식 실거래</span><strong>국토교통부</strong></div><div><span>실거래 지역 단위</span><strong>왜관읍·리</strong></div><div><span>화면 시연 항목</span><strong>가격지수·시장온도</strong></div></div><p>매매·전세·월세 실거래가, 거래량, 단지순위와 3.3㎡당 가격은 공공데이터포털의 공식 신고자료를 사용합니다. 상단 시연 가격지수·시장온도·수요 신호는 설명용이며, 한국부동산원 공식 지수는 별도 섹션에서 확인할 수 있습니다.</p>';$('#detailDialog').showModal()});
$('#reportBtn').addEventListener('click',()=>{$('#location').scrollIntoView({behavior:'smooth'})});
document.addEventListener('click',e=>{const a=e.target.closest('.topnav a');if(a){$$('.topnav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}});
renderLocation('school');render();loadReb();loadMolit();

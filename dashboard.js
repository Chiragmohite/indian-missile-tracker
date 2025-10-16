
/* dashboard.js - rotating globe dashboard integration (plain JS) */

const container = document.getElementById('globeViz');
const missileListEl = document.getElementById('missileList');
const yearRange = document.getElementById('yearRange');
const yearLabel = document.getElementById('yearLabel');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');
const selectedEl = document.getElementById('selected');
const searchInput = document.getElementById('search');
const filterClass = document.getElementById('filterClass');

// create globe
const Globe = window.Globe;
const globe = Globe()(container)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('rgba(0,0,0,0)')
  .pointLabel(d=>`<b>${d.name}</b><br>${d.type} — ${d.year}`)
  .onPointClick(d=>showDetails(d));

function buildVisualData(dataset){
  const points = dataset.map(d=>({lat:d.startLat,lng:d.startLng,name:d.name,year:d.year,type:d.type,range_km:d.range_km,country:d.country,color:'#ff6b6b',size:Math.max(0.2,Math.log10((d.range_km||10)+1))}));
  const arcs = dataset.map(d=>({startLat:d.startLat,startLng:d.startLng,endLat:d.endLat,endLng:d.endLng,color:'#ff6b6b',altitude:Math.min(6,Math.log10((d.range_km||10)+10)/2),name:d.name,year:d.year,type:d.type,range_km:d.range_km}));
  return {points,arcs};
}

let allData = window.MISSILE_DATA.slice();
let visual = buildVisualData(allData);

globe.pointsData(visual.points).pointColor(p=>p.color).pointAltitude(0.02).pointRadius(p=>p.size*0.25);
globe.arcsData(visual.arcs).arcColor(a=>a.color).arcAltitude(a=>a.altitude).arcStroke(0.9).arcLabel(a=>`${a.name} (${a.year})`).arcDashLength(0.4).arcDashGap(0.6).arcDashAnimateTime(2200);

try{globe.controls().autoRotate=true;globe.controls().autoRotateSpeed=0.35;}catch(e){}

// populate side list under search
function renderMissileList(dataset){
  missileListEl.innerHTML='';
  dataset.forEach(d=>{
    const el = document.createElement('div');
    el.className='missile-item';
    el.innerHTML = `<div><div class="missile-name">${d.name}</div><div class="missile-meta">${d.type} • ${d.year}</div></div><div class="missile-range">${d.range_km?d.range_km+' km':''}</div>`;
    el.onclick = ()=>{ globe.pointOfView({lat:d.startLat,lng:d.startLng,altitude:2},1000); showDetails(d); };
    missileListEl.appendChild(el);
  });
}
renderMissileList(allData);

function showDetails(d){
  selectedEl.innerHTML = `<div class="selected-title">${d.name}</div><div>Year: ${d.year}</div><div>Type: ${d.type}</div><div>Range: ${d.range_km||'—'} km</div><div>Source: ${d.source||'—'}</div>`;
}

// timeline filter
yearRange.addEventListener('input', ()=>{
  const yr = Number(yearRange.value);
  yearLabel.innerText = yr===2025?'All':yr;
  filterByYear(yr===2025?null:yr);
});

function filterByYear(year){
  const filtered = year? allData.filter(d=>d.year===year): allData;
  renderMissileList(filtered);
  updateVisual(filtered);
}

let playInterval=null;
playBtn.addEventListener('click', ()=>{
  if(playInterval){clearInterval(playInterval);playInterval=null;playBtn.innerText='Play ▶';return;}
  playBtn.innerText='Pause ⏸';
  let y=1990; yearRange.value=y;
  playInterval=setInterval(()=>{ yearRange.value=y; yearRange.dispatchEvent(new Event('input')); y++; if(y>2025){clearInterval(playInterval);playInterval=null;playBtn.innerText='Play ▶'; } },600);
});

resetBtn.addEventListener('click', ()=>{ yearRange.value=2025; yearLabel.innerText='All'; filterByYear(null); });

// search & classification filter
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ renderMissileList(allData); updateVisual(allData); return; }
  const filtered = allData.filter(d => (d.name+' '+d.type+' '+d.year).toLowerCase().includes(q));
  renderMissileList(filtered); updateVisual(filtered);
});

filterClass.addEventListener('change', ()=>{
  const cls = filterClass.value;
  if(cls==='all'){ renderMissileList(allData); updateVisual(allData); return; }
  const names = window.MISSILE_CLASSIFICATION[cls].map(m=>m.name);
  const filtered = allData.filter(d=> names.includes(d.name));
  renderMissileList(filtered); updateVisual(filtered);
});

function updateVisual(dataset){ visual = buildVisualData(dataset); globe.pointsData(visual.points); globe.arcsData(visual.arcs); }


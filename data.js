
/* India-only non-cruise missile tests (best-effort, approximate)
Fields: id, name, country, year, date, startLat, startLng, endLat, endLng, type, range_km, source
*/
const MISSILE_DATA = [
  {id:'ind_prithvi_1996', name:'Prithvi-II developmental', country:'India', year:1996, date:'1996-01-01', startLat:20.637, startLng:86.689, endLat:21.5, endLng:87.5, type:'Prithvi-II', range_km:250, source:'Wisconsin Project / press'},
  {id:'ind_agni_i_1999', name:'Agni-I test', country:'India', year:1999, date:'1999-04-01', startLat:20.637, startLng:86.689, endLat:25.0, endLng:85.5, type:'Agni-I', range_km:700, source:'Wisconsin Project'},
  {id:'ind_agni_ii_1999', name:'Agni-II test', country:'India', year:1999, date:'1999-04-15', startLat:20.637, startLng:86.689, endLat:30.0, endLng:86.0, type:'Agni-II', range_km:2000, source:'Wisconsin Project'},
  {id:'ind_dhanush_2004', name:'Dhanush naval test', country:'India', year:2004, date:'2004-06-01', startLat:11.7, startLng:92.7, endLat:12.5, endLng:93.0, type:'Dhanush', range_km:350, source:'Wisconsin Project'},
  {id:'ind_shourya_2008', name:'Shaurya road-mobile test', country:'India', year:2008, date:'2008-10-01', startLat:28.0, startLng:77.0, endLat:29.0, endLng:78.0, type:'Shaurya', range_km:700, source:'Wisconsin Project'},
  {id:'ind_k15_2013', name:'K-15 Sagarika SLBM test', country:'India', year:2013, date:'2013-01-01', startLat:15.0, startLng:73.0, endLat:16.0, endLng:74.0, type:'K-15 SLBM', range_km:750, source:'Press reports'},
  {id:'ind_agni_v_2012', name:'Agni-V test', country:'India', year:2012, date:'2012-04-19', startLat:20.637, startLng:86.689, endLat:45.0, endLng:85.0, type:'Agni-V', range_km:5000, source:'CNS / press'},
  {id:'ind_agni_iii_2017', name:'Agni-III test', country:'India', year:2017, date:'2017-06-07', startLat:20.637, startLng:86.689, endLat:40.0, endLng:85.0, type:'Agni-III', range_km:3500, source:'Press'},
  {id:'ind_prithvi_2018', name:'Prithvi-II test', country:'India', year:2018, date:'2018-03-28', startLat:21.54, startLng:87.10, endLat:21.9, endLng:88.0, type:'Prithvi-II', range_km:350, source:'DRDO / press'},
  {id:'ind_asat_2019', name:'Mission Shakti (ASAT)', country:'India', year:2019, date:'2019-03-27', startLat:20.642, startLng:86.840, endLat:0, endLng:0, type:'ASAT', range_km:null, source:'Press'},
  {id:'ind_pralay_2021', name:'Pralay maiden test', country:'India', year:2021, date:'2021-12-22', startLat:20.637, startLng:86.689, endLat:24.0, endLng:85.0, type:'Pralay', range_km:400, source:'Press / Wikipedia'},
  {id:'ind_agni_prime_2024', name:'Agni-Prime test', country:'India', year:2024, date:'2024-04-03', startLat:20.637, startLng:86.689, endLat:35.0, endLng:87.0, type:'Agni-Prime', range_km:2000, source:'PIB / press'},
  {id:'ind_pralay_2025', name:'Pralay user trial', country:'India', year:2025, date:'2025-07-28', startLat:20.637, startLng:86.689, endLat:30.0, endLng:85.0, type:'Pralay', range_km:1500, source:'Press (Times of India)'},
  {id:'ind_agni_i_2025', name:'Agni-I test 2025', country:'India', year:2025, date:'2025-07-18', startLat:20.637, startLng:86.689, endLat:25.0, endLng:85.5, type:'Agni-I', range_km:700, source:'Press'},
  {id:'ind_agni_prime_2025_rail', name:'Agni-Prime rail-launch', country:'India', year:2025, date:'2025-09-24', startLat:20.637, startLng:86.689, endLat:35.0, endLng:87.0, type:'Agni-Prime', range_km:2000, source:'PIB / press'}
];

window.MISSILE_DATA = MISSILE_DATA;


const MISSILE_CLASSIFICATION = {
  intermediate: [
    { name: "Agni-III", type: "IRBM", range_km: 3000 },
    { name: "Agni-IIIA", type: "IRBM", range_km: 3500 },
    { name: "Agni-IV", type: "IRBM", range_km: 4000 },
    { name: "Agni-V", type: "IRBM", range_km: 5000 }
  ],
  medium: [
    { name: "Agni-II", type: "MRBM", range_km: 2000 },
    { name: "Agni-P (Prime)", type: "MRBM", range_km: 1500 },
    { name: "Shaurya", type: "MRBM-Hypersonic", range_km: 1900 }
  ],
  short: [
    { name: "Agni-I", type: "SRBM", range_km: 700 },
    { name: "Prithvi-I", type: "SRBM", range_km: 150 },
    { name: "Prithvi-II", type: "SRBM", range_km: 350 },
    { name: "Prithvi-III", type: "SRBM", range_km: 350 },
    { name: "Dhanush", type: "SRBM (ship-launched)", range_km: 350 },
    { name: "Pralay", type: "Quasi-Ballistic", range_km: 500 },
    { name: "Prahaar", type: "SRBM", range_km: 150 }
  ],
  submarine: [
    { name: "K-15 Sagarika", type: "SLBM", range_km: 750 },
    { name: "K-4", type: "SLBM", range_km: 3500 },
    { name: "K-5", type: "SLBM (future)", range_km: 5000 },
    { name: "K-6", type: "SLBM (future)", range_km: 6000 },
    { name: "LRaSHM", type: "Hypersonic SLBM (proposed)", range_km: null }
  ]
};
window.MISSILE_CLASSIFICATION = MISSILE_CLASSIFICATION;

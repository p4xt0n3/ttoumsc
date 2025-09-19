export const LANG = { EN: 'en', CN: 'cn' };
let current = LANG.EN;

const ui = {
  siteTitle: { en: 'The Tale of Universe : Character Theme', cn: '宇宙物语：角色专属歌曲' },
  langLabel: { en: 'EN', cn: '中文' }
};

const names = {
  gp: { en: 'Geneti Phulst', cn: '杰尼提·法斯特' },
  nr: { en: 'Nathan Redshed', cn: '内森·雷德谢德' },
  px: { en: 'Paxton', cn: '帕克斯顿' },
  da: { en: 'Deep Abyss', cn: '极渊' },
  lr: { en: 'Lauris RaruzY', cn: '劳瑞斯·拉鲁齐' },
  '87': { en: '87', cn: '87' },
  tm: { en: 'The Manifestation', cn: '表·现·形·式' }
};

// songs keyed by character id
const songs = {
  gp: [
    { file: 'The Alternate Scientist.mp3', en: 'The Alternate Scientist', cn: '伪人科学家' },
    { file: 'The Most Perfect Alternate Exist.mp3', en: 'The Most Perfect Alternate Exist', cn: '最完美的伪人' },
    { file: 'Maladaptive Anomalous Distortion.mp3', en: 'Maladaptive Anomalous Distortion', cn: '实体异常扭曲症状' },
    { file: 'Stare.mp3', en: 'Stare', cn: '目盯' },
    { file: 'Chaotic.mp3', en: 'Chaotic', cn: '混乱' },
    { file: 'Incoercibilis.mp3', en: 'Incoercibilis', cn: '无法控制' },
    { file: 'Caedes Fluitans.mp3', en: 'Caedes Fluitans', cn: '漂浮屠杀' },
    { file: 'Vera Alternativa.mp3', en: 'Vera Alternativa', cn: '真实伪人' },
    { file: 'Smoothly.mp3', en: 'Smoothly', cn: '平滑'}
  ],
  nr: [
    { file: 'Eos Trucidavit.mp3', en: 'Eos Trucidavit', cn: '他屠杀了他们' },
    { file: 'Ashes Drop Hard.mp3', en: 'Ashes Drop Hard', cn: '尘落' }
  ],
  px: [
    { file: 'Guardian of the Cosmos.mp3', en: 'Guardian of the Cosmos', cn: '宇宙的守卫' },
    { file: 'Core of The Universe and All Knowledge.mp3', en: 'Core of The Universe and All Knowledge', cn: '宇宙与全部知识核心' }
  ],
  da: [
    { file: 'Lethal in the Dark Shadow.mp3', en: 'Lethal in the Dark Shadow', cn: '影中之危' },
    { file: 'Trandril Sprint.mp3', en: 'Trandril Sprint', cn: '安静追逐' },
    { file: 'Silence.mp3', en: 'Silence', cn: '静' },
    { file: 'THE DEEP ABYSS!!.mp3', en: 'THE DEEP ABYSS!!', cn: '极度深渊！！' },
    { file: 'Calm.mp3', en: 'Calm', cn: '平静' },
    { file: 'The time is up.mp3', en: 'The time is up', cn: '时辰已到' },
    { file: 'Uneasy.mp3', en: 'Uneasy', cn: '非简' }
  ],
  // new entries with no songs yet
  lr: [
    { file: 'The True Speech.mp3', en: 'The True Speech', cn: '真实之言' },
    { file: 'Voidus Fists.mp3', en: 'Voidus Fists', cn: '虚渊之拳' }
  ],
  '87': [
    { file: 'The 87.mp3', en: 'The 87', cn: '87' },
    { file: 'THE DEATH OF 87!!.mp3', en: 'THE DEATH OF 87!!', cn: '87之死！！' },
    { file: 'WATASHIWA 87!!.mp3', en: 'WATASHIWA 87!!', cn: '吾为87！！' }
  ],
  tm: [
    { file: 'Manifestating into You.mp3', en: 'Manifestating into You', cn: '表现为你' },
    { file: 'The Manifestation.mp3', en: 'The Manifestation', cn: '表·现·形·式' }
  ]
};

export function getSongs(id) { return (songs[id] || []).map(s => ({ ...s, title: s[current] ? s[current] : s })); }
export function tSongTitle(id, index) { const s = songs[id] && songs[id][index]; return s ? (s[current === LANG.CN ? 'cn' : 'en']) : ''; }

const listeners = new Set();
export function getLang() { return current; }
export function toggleLang() { current = current === LANG.EN ? LANG.CN : LANG.EN; listeners.forEach(fn => fn(current)); }
export function onLangChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function tUI(key) { return (ui[key] && ui[key][current]) || key; }
export function tName(id) { return (names[id] && names[id][current]) || id; }
export function tNameCn(id) { return (names[id] && names[id]['cn']) || ''; }

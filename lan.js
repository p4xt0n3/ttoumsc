export const LANG = { EN: 'en', CN: 'cn' };
let current = LANG.EN;

const ui = {
  siteTitle: { en: 'The Tale of Universe : Character Theme', cn: '宇宙物语：角色专属歌曲' },
  langLabel: { en: 'EN', cn: '中文' }
};

const names = {
  gp: { en: 'Geneti Phulst', cn: '杰尼提·法斯特' },
  nr: { en: 'Nathan Redshed', cn: '内森·雷德谢德' },
  px: { en: 'Paxton', cn: '帕克斯顿' }
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
    { file: 'Vera Alternativa.mp3', en: 'Vera Alternativa', cn: '真实伪人' }
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
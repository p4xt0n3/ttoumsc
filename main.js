import { toggleLang, onLangChange, getLang, tUI, getSongs, tSongTitle, tName, tNameCn } from '#lan';
import { renderCards, characters } from '#chr';

const grid = document.getElementById('cardGrid');
const title = document.querySelector('[data-i18n="siteTitle"]');
const langBtn = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

function renderUI() {
  title.textContent = tUI('siteTitle');
  langLabel.textContent = tUI('langLabel');
  renderCards(grid);
}

langBtn.addEventListener('click', () => toggleLang());
onLangChange(() => renderUI());

// initial render
renderUI();
document.documentElement.lang = getLang();
onLangChange(l => document.documentElement.lang = l);

function openModalFor(id) {
  const modal = document.getElementById('charModal');
  const thumb = document.getElementById('modalThumb');
  const name = document.getElementById('modalName');
  const nameCn = document.getElementById('modalNameCn');
  const songsList = document.getElementById('modalSongs');
  const ch = characters.find(c => c.id === id);
  // hide image for Geneti (gp) to free space; show for others
  if (id === 'gp' || id === 'nr' || id === 'px') { thumb.style.display = 'none'; thumb.src = ''; thumb.alt = ''; }
  else { thumb.style.display = ''; thumb.src = ch ? ch.img : ''; thumb.alt = ch ? ch.alt : ''; }
  name.textContent = tName(id);
  nameCn.textContent = tNameCn(id);
  songsList.innerHTML = getSongs(id).map((s, i) => `
    <li class="song-item">
      <div class="song-title">${tSongTitle(id, i)}</div>
      <audio controls preload="none" src="${s.file}"></audio>
    </li>
  `).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('charModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

window.addEventListener('char:open', e => {
  if (e?.detail?.id) openModalFor(e.detail.id);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('charModal').addEventListener('click', (ev) => {
  if (ev.target.id === 'charModal') closeModal();
});
document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeModal(); });
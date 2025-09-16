import { getLang, tName } from '#lan';

export const characters = [
  { id: 'gp', img: 'gp.jpg', alt: 'Geneti Phulst' },
  { id: 'nr', img: 'nr.jpg', alt: 'Nathan Redshed' },
  { id: 'px', img: 'px.jpg', alt: 'Paxton' }
];

export function renderCards(container) {
  const lang = getLang();
  container.innerHTML = characters.map(c => `
    <article class="card" tabindex="0" data-id="${c.id}">
      <img class="thumb" src="${c.img}" alt="${c.alt}" loading="lazy" />
      <div class="meta">
        <div class="name">${tName(c.id)}</div>
        <div class="tag">${lang === 'en' ? 'Character' : '角色'}</div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointerdown', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      // dispatch an event so main can open modal / handle details
      window.dispatchEvent(new CustomEvent('char:open', { detail: { id } }));
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
}
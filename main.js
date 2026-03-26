// main.js extraído de index.html
async function loadContributors() {
  const mural = document.getElementById('mural');
  const countEl = document.getElementById('count');

  try {
    const res = await fetch('./contributors.json');
    if (!res.ok) throw new Error('No se pudo cargar contributors.json');
    const contributors = await res.json();

    countEl.textContent = contributors.length;
    mural.innerHTML = '';

    contributors.forEach((p, i) => {
      const nivel  = (p.nivel || 'participante').toLowerCase();
      const initials = (p.nombre || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${i * 60}ms`;
      card.innerHTML = `
        <div class="card-bar">
          <span class="dot r"></span>
          <span class="dot y"></span>
          <span class="dot g"></span>
          <span class="card-filename">${initials.toLowerCase()}_${nivel}.sh</span>
        </div>
        <div class="card-body">
          <div class="card-name">${escHtml(p.nombre || 'Anónimo')}</div>
          <div class="card-city">📍 ${escHtml(p.ciudad || 'Desconocida')}</div>
          ${p.mensaje ? `<div class="card-msg">${escHtml(p.mensaje)}</div>` : ''}
          <span class="card-badge badge-${nivel}">${nivel}</span>
        </div>`;
      mural.appendChild(card);
    });

    if (contributors.length === 0) {
      mural.innerHTML = '<p class="empty">Todavía no hay participantes.<br>¡Sé el primero en abrir un PR!</p>';
    }

  } catch (err) {
    mural.innerHTML = `<p class="empty">⚠ No se pudo cargar contributors.json<br><small>${err.message}</small></p>`;
    countEl.textContent = '0';
  }
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

loadContributors();

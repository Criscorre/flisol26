# 🐧 FLISoL — Mural de Participantes

Sitio web de demostración para la charla
**"Software Libre y repositorios"** — FLISoL

**Demo en vivo →** `https://TUUSUARIO.github.io/flisol-web`

---

## ¿Qué es esto?

Un mural colaborativo donde cada participante de la charla puede
aparecer con su nombre, ciudad y mensaje. Cada contribución es
un Pull Request real a un proyecto de Software Libre.

---

## Cómo contribuir según tu nivel

### 🔵 Nivel 1 — Tester (sin instalar nada)

1. Abrí el sitio en tu navegador o celular
2. ¿Algo se ve raro? ¿Algún error?
3. Abrí un **Issue** en este repositorio
4. Describí el problema y en qué dispositivo lo viste

Eso ya es una contribución valiosa.

---

### 🟡 Nivel 2 — Contribuidor (solo necesitás una cuenta)

1. Creá una cuenta en [GitHub](https://github.com) o [Codeberg](https://codeberg.org)
2. Abrí el archivo [`contributors.json`](./contributors.json)
3. Hacé clic en el ícono del lápiz ✏️ (Edit this file)
4. Agregá tu entrada **antes del último `]`**, siguiendo este formato:

```json
  {
    "nombre": "Tu Nombre",
    "ciudad": "Tu Ciudad, País",
    "mensaje": "Lo que quieras decir 🐧",
    "nivel": "curioso"
  }
```

Valores válidos para `nivel`: `curioso`, `curiosa`, `sugeridor`, `sugeridora`, `dev`

5. Al final de la página, hacé clic en **"Propose changes"**
6. Luego en **"Create pull request"**

¡Listo! Tu nombre aparecerá en el mural cuando el PR sea aprobado.

---

### 🟢 Nivel 3 — Desarrollador (con Git)

```bash
# 1. Fork del repo desde la web

# 2. Clonar tu fork
git clone https://github.com/TUUSUARIO/flisol-web
cd flisol-web

# 3. Crear una rama
git checkout -b mi-mejora

# 4. Modificar index.html, contributors.json, o lo que quieras

# 5. Commit y push
git add .
git commit -m "Descripción de tu cambio"
git push origin mi-mejora

# 6. Abrir Pull Request desde GitHub
```

Ideas para mejorar el sitio:
- Agregar un modo claro (light theme)
- Mejorar el diseño en móvil
- Agregar filtro por ciudad o nivel
- Agregar animaciones al cargar las tarjetas
- Soporte para avatares en las tarjetas

---

## Estructura del proyecto

```
flisol-web/
├── index.html           ← el sitio completo (HTML + CSS + JS)
├── contributors.json    ← los datos del mural — acá contribuís
├── README.md            ← esta guía
├── LICENCIA             ← GPL-3.0
└── .github/
    └── pull_request_template.md
```

---

## Desplegar en GitHub Pages

1. Ir a **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `(root)`
4. Guardar

El sitio queda en `https://TUUSUARIO.github.io/flisol-web`
Cada merge a `main` actualiza el sitio automáticamente.

---

## Licencia

**GPL-3.0** — Podés usar, estudiar, modificar y redistribuir este código,
siempre que tus versiones conserven la misma licencia.

Ver [LICENCIA](./LICENCIA) · [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0)

---

*Hecho con 🐧 para FLISoL*

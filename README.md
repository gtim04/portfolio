# portfolio
Personal Portfolio for Gerald Jay Timtiman.

## What changed

Dark-theme redesign of the original static page. Built with hand-written CSS (CSS variables), Inter typography, card-based layouts, scroll-reveal animations (via AOS), and subtle gradient/glow effects. No Bootstrap, no jQuery — lightweight and static.

### Sections
- **Hero** — profile photo with glow ring, name, role, social links
- **About Me** — card grid of work experience and education
- **Certifications** — dedicated card grid populated from your [Credly profile](https://www.credly.com/users/gerald-jay-timtiman) (Professional Cloud Architect, Associate Cloud Engineer, Google Cloud skill badges, CCNA, MTA, etc.), each with a short description
- **Skills** — categorized chips (Cloud & DevOps, Frontend, Backend, Database, Tools) derived from your certifications and badges
- **Portfolio** — featured Reservation & Billing System card, plus a teaser strip for internal work (Forecast AI, Automated Problem Solver, Weather API Data Automation) shown as "Details on request" — no demos/links
- **Contact** — UI-only form (backend not connected yet — see below)

## Setup

### 1. Open locally
Open `index.html` in any browser. No build step or local server required.

### 2. Contact form (backend pending)
The form currently shows a "coming soon" message on submit — it does not send email yet.

To wire it up later:
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy its endpoint URL (`https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, change the Contact form's `action="#"` to your endpoint and remove the submit handler in `js/main.js` (or let it POST normally).

### 3. Add your own certifications
Copy the `cert-card` block in `index.html` (under Certifications), then replace:
- the icon class inside `.cert-icon`,
- the `.cert-title` text,
- the `.cert-issuer` text,
- the `.cert-year` text,
- optionally add a `.cert-desc` paragraph for a short summary.

You can source these from your [Credly profile](https://www.credly.com/users/gerald-jay-timtiman).

### 4. Add your own portfolio projects or teasers
- **Public project:** copy the featured `project-card` block in `index.html` (under Portfolio), then replace the image, `.project-title`, `.project-desc`, and the `href` on `.project-link`.
- **Teaser (work you can't share publicly):** copy a `teaser-card` block inside `.teaser-grid`, then replace the icon, `.teaser-title`, and `.teaser-desc`. Teasers deliberately have no links — visitors are directed to `#contact`.

### 5. Rebrand colors
Open `css/portfolio.css` and change `--brand` at the top of `:root`. Buttons, links, glows, and accents update from that single variable.

```css
:root {
	--brand: #818cf8;   /* indigo/violet — change this to your preferred accent color */
	...
}
```

## Deployment
The site is pure static HTML/CSS/JS. Host it anywhere static hosting is supported:
- GitHub Pages (recommended, free)
- Netlify Drop
- Vercel
- Any static file host

No build step, no server, no database.

## File structure
```
index.html        # markup
css/
  portfolio.css   # all styles (dark theme CSS variables, cards, grid, responsive, gradient mesh)
js/
  main.js         # AOS init, navbar scroll effect, mobile menu, contact form intercept
image/
  dp.jpg          # profile photo
  kenyo.png       # portfolio project thumbnail
```

## Credits
- [Inter](https://fonts.google.com/specimen/Inter) — typography (Google Fonts)
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Font Awesome](https://fontawesome.com/) — icons

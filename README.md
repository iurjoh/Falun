# Falun: Life is more exciting here!

[View the live site here.](https://iurjoh.github.io/Falun/)

> **Unofficial academic project.** This site was built as a Code Institute
> Portfolio Project 1 (HTML/CSS). It is not affiliated with, endorsed by, or
> connected to Falu kommun, Visit Dalarna, or any official body. For official
> visitor information, see [Visit Dalarna](https://www.visitdalarna.se) and
> [falun.se](https://www.falun.se).

"Falun: Life is more exciting here!" is a website that intends to publicize and promote tourism in the city of Falun, Sweden for all those who enjoy an exciting life, be it full of historic sites, beautiful natural landscapes full of wildlife or even attending cultural and sporting events.

We invite all tourists to get to know our wonderful city, showing on this website adapted for mobiles, tablets and desktops a panorama that we can offer throughout the 4 seasons of the year. Let's make your next trip more exciting!

# Features

- **Navigation bar** - links to the About Us, Gallery and Sign Up sections, with a skip link for keyboard users and a wrapping layout that works down to 320px wide screens.
- **Bilingual EN/SV** - a language switcher in the header (EN / SV buttons with `aria-pressed`). Exactly one language is rendered at a time (the other exists only in the JS dictionary, never on screen), the choice persists in `localStorage`, and `html lang`, `<title>`, meta description, alt texts and ARIA labels all switch with the content.
- **Hero section** - a responsive photo of the Lugnet ski jumps in the snow (`<picture>` with WebP/JPEG in 640/1280/1600px), overlaid with the site slogan. Height is balanced with `clamp()` instead of a fixed 90vh.
- **About Us** - a short overview of Falun, including the municipality population with source (about 60,000 inhabitants, SCB 2025).
- **Info section** - History, Nature and Events highlights, reviewed in September 2026 against official sources (see Content sources below).
- **Gallery** - sixteen real Falun photos, four per season (spring, summer, autumn, winter), all from Wikimedia Commons with verified free licenses (see Image credits below). Season groups with headings, responsive grid, lazy loading below the fold, WebP/JPEG variants.
- **Sign Up (demonstration form)** - see the limitation note below.
- **Footer** - links to the official Falu kommun social media profiles, each with an accessible name.

## Demonstration form limitation

The sign-up form is a **front-end demonstration only**. It has no `action` and
no back-end: submitting it is intercepted in the browser (JavaScript) and only
shows a confirmation message. **No name, email, or any other data is ever sent
or stored**, and nothing is added to the URL. The confirmation message and the
page itself point visitors who want real information to
[Visit Dalarna](https://www.visitdalarna.se), the official tourism site.

# Content sources (reviewed 2026-09-30)

- Population: about 60,000 inhabitants in **Falun Municipality**, SCB statistics for 2025 (via [Kommunatlas](https://www.kommunatlas.se/befolkning/falun/)).
- [FIS Nordic World Ski Championships 2027 in Falun, 24 February - 7 March 2027](https://falun2027.com/en/) (official event site; [dates announcement](https://falun2027.com/falun-2027-dates-of-the-competitions-february-24-march-7-2027/)).
- [Cross-country skiing World Cup in Falun](https://falun2027.com/sv/tavlingar/cross-country-world-cup-2026/) (Lugnet).
- [Åfesten](https://www.falun.se/gora--uppleva/det-hander-i-falun/afesten.html) - free city festival organised by Falu kommun (5-7 June 2026 edition confirmed).
- [IBF Falun](https://en.wikipedia.org/wiki/IBF_Falun) is a **floorball (innebandy)** club - Swedish champions - not a bandy team.
- [Sabaton Open Air](https://www.sabaton.net/news/sabaton-open-air/sabaton-open-air-taking-a-hiatus/) - official hiatus announcement (2022). Listed as historic.
- Vasaloppet was removed from the Falun events list: it runs [Sälen-Mora](https://vasaloppet.se/skidor/vasaloppet/), elsewhere in the Dalarna region.
- [Naturkartan - Falun](https://www.naturkartan.se/sv/municipalities/falun) - real trails/outdoor map link replacing the "app link" placeholder.
- Falupodden (podcast) link removed: the page returns 404.

# Image credits and licenses

All photos were replaced in September 2026. The previous background photo
("ArtknubbenView", 18MB, © Visit Dalarna / Anna Holm) and other unlicensed or
unverifiable images were removed to respect copyright. Current photos are from
Wikimedia Commons with verified free licenses, served as optimized JPEG/WebP in
640/1280/1920px variants (all under 500KB).

| Use | File | Author | License | Source |
|-----|------|--------|---------|--------|
| Hero | `hero-lugnet-*` | Nelinjo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Falun Lugnet K120 K90.JPG](https://commons.wikimedia.org/wiki/File:Falun_Lugnet_K120_K90.JPG) |
| Form background | `bg-falun-view-*` | m.prinke | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) | [File:Falun View.jpg](https://commons.wikimedia.org/wiki/File:Falun_View.jpg) |
| Gallery - spring | `gallery-spring-*` | "The rog wikings" | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Lurån vid mynningen in i Rogsjön](https://commons.wikimedia.org/wiki/File:Lur%C3%A5n_vid_mynningen_in_i_Rogsj%C3%B6n-_2013-05-01_23-51.jpg) |
| Gallery - spring | `gallery-spring2-*` | Hans Lindqvist | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falun Copper Mine 02.jpg](https://commons.wikimedia.org/wiki/File:Falun_Copper_Mine_02.jpg) |
| Gallery - spring | `gallery-spring3-*` | Calle Eklund/V-wolf | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Magasinbron, Falun.jpg](https://commons.wikimedia.org/wiki/File:Magasinbron,_Falun.jpg) |
| Gallery - spring | `gallery-spring4-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Faluåns kraftstation 01.jpg](https://commons.wikimedia.org/wiki/File:Falu%C3%A5ns_kraftstation_01.jpg) |
| Gallery - summer | `gallery-summer-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Främby udde från ovan.JPG](https://commons.wikimedia.org/wiki/File:Fr%C3%A4mby_udde_fr%C3%A5n_ovan.JPG) |
| Gallery - summer | `gallery-summer2-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falu gruva från ovan (4).JPG](https://commons.wikimedia.org/wiki/File:Falu_gruva_fr%C3%A5n_ovan_(4).JPG) |
| Gallery - summer | `gallery-summer3-*` | Mattias Blomgren | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Ernst Rolf-gården i Falun.jpg](https://commons.wikimedia.org/wiki/File:Ernst_Rolf-g%C3%A5rden_i_Falun.jpg) |
| Gallery - summer | `gallery-summer4-*` | Arild Vågen | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Kristine kyrka July 2017 03.jpg](https://commons.wikimedia.org/wiki/File:Kristine_kyrka_July_2017_03.jpg) |
| Gallery - autumn | `gallery-autumn-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Källviken november 2008 2.jpg](https://commons.wikimedia.org/wiki/File:K%C3%A4llviken_november_2008_2.jpg) |
| Gallery - autumn | `gallery-autumn2-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falun från Radiohuset.jpg](https://commons.wikimedia.org/wiki/File:Falun_fr%C3%A5n_Radiohuset.jpg) |
| Gallery - autumn | `gallery-autumn3-*` | Mojj | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falu koppargruva med Creutz lave.jpg](https://commons.wikimedia.org/wiki/File:Falu_koppargruva_med_Creutz_lave.jpg) |
| Gallery - autumn | `gallery-autumn4-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Gruvarbetarstugan Östanfors Falun 120922.jpg](https://commons.wikimedia.org/wiki/File:Gruvarbetarstugan_%C3%96stanfors_Falun_120922.jpg) |
| Gallery - winter | `gallery-winter-*` | Calle Eklund | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Falu gruva 2014-12-06.jpg](https://commons.wikimedia.org/wiki/File:Falu_gruva_2014-12-06.jpg) |
| Gallery - winter | `gallery-winter2-*` | Hyperbore | Public domain | [File:Kronobranneriet.JPG](https://commons.wikimedia.org/wiki/File:Kronobranneriet.JPG) |
| Gallery - winter | `gallery-winter3-*` | Jake73 (Wikivoyage) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:GreatPitFalunJake73.jpg](https://commons.wikimedia.org/wiki/File:GreatPitFalunJake73.jpg) |
| Gallery - winter | `gallery-winter4-*` | LZ6387 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Incline elevator at the ski jumping hills in Falun (LZ) 3.JPG](https://commons.wikimedia.org/wiki/File:Incline_elevator_at_the_ski_jumping_hills_in_Falun_(LZ)_3.JPG) |

The Falu kommun logotype images were removed: a municipal logotype is not free
to reuse, and this is not an official site. The header now uses a plain text
wordmark.

# Testing (matrix, 2026-09-30)

| Test | Method | Result |
|------|--------|--------|
| HTML validation | [W3C Nu validator](https://validator.w3.org/nu/) (file upload) | 0 errors, 0 warnings |
| CSS validation | [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) (file upload, css3svg) | 0 errors |
| Horizontal overflow | Headless Chrome, `scrollWidth - innerWidth` | 0px at 320, 390, 834 and 1440px |
| Layout | Full-page screenshots at 320/390 (mobile), 834 (tablet), 1440 (desktop) | No overlap, menu wraps, form labels above fields, stacked radios, centered button |
| Keyboard | Tab walk from page top | Skip link appears first, then logo, menu, content links, form fields, submit button - logical order |
| Button hover/focus | Headless Chrome hover + focus screenshots | Button stays in place; only colors change (was: disappeared on hover) |
| Contrast | Computed ratios of the palette | `#a63822` on white and white on `#a63822` ≈ 6.6:1; darker `#7d2a19` variants higher - all body text ≥ 4.5:1 |
| Demo form flow | Filled and submitted in headless Chrome | URL unchanged (no data in URL), no request made, confirmation shown |
| External links | `curl` status checks | All 200. Facebook/Instagram return 400/429 to bots (Meta bot protection) but were confirmed live via search; Falupodden 404 removed |
| Background image weight | File sizes | 51KB (640) / 205KB (1280) / 419KB (1920) - target < 500KB met |

## Fixed bugs (revival branch, 2026-09-30)

- Form without `action`/`method` leaked names and emails into the URL and saved nothing - now an explicitly marked client-side demo.
- "Ready to go!" button disappeared on hover (margin/position changed) - hover/focus now only change colors.
- 18MB copyrighted Visit Dalarna background - replaced with a licensed 419KB (max) responsive image; other unlicensed/unverifiable images also replaced.
- Form contrast below 4:1 on a busy photo - now a solid panel with dark text, opaque 44px+ inputs, `fieldset`/`legend`, and `autocomplete`.
- Social icons had no accessible names - added `aria-label` per network; dead Falupodden link removed.
- 2px horizontal overflow on all viewports (4px at 320px) - global `box-sizing: border-box` and fluid menu.
- Gallery anchor pointed at the photo grid instead of the section title; hero was a fixed 90vh.
- Heading hierarchy fixed (one `h1`, `h2` for sections), `<main>` landmark and skip link added.
- Content errors: Midssomar → Midsommar, snowmobil → snowmobile, tradtional → traditional, Vasalopet removed (Sälen-Mora race, not Falun), IBF Falun corrected to floorball, "World Cup Finals" replaced by the verified 2026 World Cup and 2027 World Championships, Sabaton Open Air marked as on hiatus, population attributed to the municipality with source/year.
- `.vscode/` directory from the Code Institute template (telemetry scripts with API keys) removed.

# Quality certification results (2026-09-30)

Measured against the acceptance matrix (Lighthouse, WCAG 2.2 AA, W3C, security
hygiene) on the revival build. Preview deployed to Cloudflare Pages:

**https://falun-revival-preview.pages.dev/**

| Criterion | Target | Result (measured) |
|-----------|--------|-------------------|
| Lighthouse Performance | >= 95 | **100** mobile, **100** desktop (live URL, 3 runs each, worst run 100) |
| Lighthouse Accessibility | 100 | **100** mobile and desktop (live URL) |
| Lighthouse Best Practices | 100 | **100** mobile and desktop (live URL) |
| Lighthouse SEO | 100 | **100** mobile and desktop (live URL; a real `robots.txt` was needed - Pages serves the HTML fallback at `/robots.txt` otherwise) |
| axe (WCAG 2.0/2.1/2.2 A+AA tags) | 0 violations | **0 violations, 0 incomplete** - 9/9 Playwright+axe tests pass against the live URL (home, form confirmation state, overflow; viewports 320/390/1440) |
| W3C HTML (Nu) | 0 errors | **0 errors, 0 warnings** |
| W3C CSS (Jigsaw) | 0 errors | **0 errors** |
| `npm audit` (QA dev dependencies) | clean | **0 vulnerabilities** |
| gitleaks secret scan | clean | Working tree clean. 1 finding in **git history only**: a Code Institute template telemetry API key in `.vscode/uptime.sh` (commit `691017f`). Purging history requires the planned clean repo recreation. |

Note on headers: GitHub Pages (and this preview) are static hosts - the site
cannot set its own HTTP security headers, so a security-headers grade is not
promised. What the site controls (a `Content-Security-Policy` meta tag with a
sha256 hash, `referrer-policy`, self-hosted fonts, no third-party scripts)
is in place.

## Build and QA notes (revival branch)

- `index.html` carries the CSS **inlined** (with a CSP `style-src 'sha256-...'`
  hash). After editing `assets/css/style.css`, regenerate with
  `node qa/inline-css.js` (it re-inlines the CSS, rewrites `../images/` and
  `../fonts/` paths, and recomputes the hash).
- QA tooling (`qa/`, `package.json`): local server, Lighthouse runner, axe
  Playwright tests, link checker. All dev dependencies, all free.
- Translations live in `assets/js/i18n.js`; page elements carry
  `data-i18n` / `data-i18n-alt` / `data-i18n-value` / `data-i18n-aria` /
  `data-i18n-html` attributes that the switcher fills.
- `.github/workflows/quality.yml` runs W3C validation, Lighthouse CI, axe,
  gitleaks, npm audit and the link check on every push (actions pinned by SHA).

# Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)

# Deployment
The site deployment was deployed through the GitHub repository. The steps are as follows:
- In the GitHub repository, click on Settings tab;
- Navigate to the menu on the left side and select Pages;
- Set the source in the Build and deployment item as "Deploy from a branch". Then, in the Branch item, the Main option was chosen, /(root) folder and finishing the settings with the Save button.

The link to the deployed website is: https://iurjoh.github.io/Falun/

# Credits

Sites such as:
- [Stack Overflow](https://stackoverflow.co/) were used at various times to clear up recurring doubts,
- [Google Fonts](https://fonts.google.com/) to insert new fonts;
- [Font Awesome Free](https://fontawesome.com/) SVG icons (inline, no kit script) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/);
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) self-hosted WOFF2 - [SIL Open Font License 1.1](https://openfontlicense.org/);
- [CSS Tricks](https://css-tricks.com/) to answer CSS questions;
- [Code Institute](https://learn.codeinstitute.net/) to review material of study explanatory videos and guides on how to set up a complete website;
- [W3C](https://www.w3.org/) to read the tutorials and understand basic rules of HTML and CSS;
- [Wikipedia](https://www.wikipedia.org/) and [Wikimedia Commons](https://commons.wikimedia.org/) for facts and freely licensed photos;
- [Falun official site](https://www.falun.se/) and [Falun 2027](https://falun2027.com/en/) for event information.

## Acknowledgements
- My mentor for continuous helpful feedback.

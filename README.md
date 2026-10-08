# Falun - portfolio revival review

**English** | [Português (Brasil)](README.pt-BR.md)

An unofficial tourism site about Falun, built as Code Institute Portfolio Project 1. Not endorsed by the municipality or tourism authority.

Documentation draft, 2026-10-08. Public source; no publication or code change made by this review.

**Source / Código:** https://github.com/iurjoh/Falun

**Inspected commit / Commit inspecionado:** `425e9f4ece60447334a92a56d62688ec74317259`

**Live demo:** https://iurjoh.github.io/Falun/

Mobile capture prepared on 2026-10-08; repository upload is pending. No image embed is included until the asset exists.

390x844, 2026-10-08. New capture supplied in this review package; upload together with the README.

## Idea and planning

The original goal was a responsive introduction to the city across four seasons. The retained project record describes About, Gallery and a sign-up demonstration. The 2026 revival added one-language-at-a-time EN/SV content, accessible navigation and better image delivery. Missing early wireframes are not reconstructed.

## Features and limits

About/history/nature/events, sixteen seasonal gallery photos, EN/SV switch and a demonstration form. The form is not a newsletter service. Current content is not freshly fact-checked event-by-event in this review.

## Architecture

Static HTML/CSS with local JavaScript for language selection and the demo form. Responsive picture variants and lazy gallery loading; no application backend. Node tooling is development-only.

## Design and screenshots

Warm red accents, photography, seasonal groups and wrapping navigation. New mobile capture below shows the public hero, not the complete gallery or all form states.

## Build history

Academic HTML/CSS project, followed by the September 2026 revival documented in source: official-source review, Wikimedia image credits, responsive images, EN/SV controls and accessibility work. The October 1 commit adds the Portuguese README. Exact early implementation dates are not inferred from recreated history.

## Performance

Existing documentation records Lighthouse results from 2026-09-30. No new Lighthouse run was made; no fresh score is claimed. Image variants and lazy loading are implemented, not proof of a current performance grade.

## Security and privacy

Keep the unofficial-project notice. Use no personal data in the demo form. Images need the retained Wikimedia author/license notices. A no-backend form is not real registration. This is not a fresh security or legal certification.

## Testing evidence

2026-10-08: live home and mobile hero visually inspected at 390x844; root width matched viewport (390px). Full lazy gallery, EN/SV persistence, keyboard/form and complete routes were not rerun. Historical QA exists in the previous README; treat it as dated evidence.

## Run locally

```sh
python3 -m http.server 8000
```

## Deployment and roadmap

Retest all gallery assets after scrolling; language, keyboard and form flows; capture desktop/tablet; run current validation, dependencies and performance checks; preserve photo attribution.

No hosting account/cost settings or deployment branch were changed or freshly verified. Reachable pages do not prove source/deployment parity.

## Credits and license

Code Institute PP1, HTML/CSS study resources, official visitor sources and Wikimedia Commons media. The original image attributions are retained below.

No root LICENSE exists in the inspected checkout. Do not advertise MIT until original-code rights and third-party terms are checked and a license is approved. No license changed.


## Retained original attributions

### Content sources (reviewed 2026-09-30)

- Population: about 60,000 inhabitants in **Falun Municipality**, SCB statistics for 2025 (via [Kommunatlas](https://www.kommunatlas.se/befolkning/falun/)).
- [FIS Nordic World Ski Championships 2027 in Falun, 24 February - 7 March 2027](https://falun2027.com/en/) (official event site; [dates announcement](https://falun2027.com/falun-2027-dates-of-the-competitions-february-24-march-7-2027/)).
- [Cross-country skiing World Cup in Falun](https://falun2027.com/sv/tavlingar/cross-country-world-cup-2026/) (Lugnet).
- [Åfesten](https://www.falun.se/gora--uppleva/det-hander-i-falun/afesten.html) - free city festival organised by Falu kommun (5-7 June 2026 edition confirmed).
- [IBF Falun](https://en.wikipedia.org/wiki/IBF_Falun) is a **floorball (innebandy)** club - Swedish champions - not a bandy team.
- [Sabaton Open Air](https://www.sabaton.net/news/sabaton-open-air/sabaton-open-air-taking-a-hiatus/) - official hiatus announcement (2022). Listed as historic.
- Vasaloppet was removed from the Falun events list: it runs [Sälen-Mora](https://vasaloppet.se/skidor/vasaloppet/), elsewhere in the Dalarna region.
- [Naturkartan - Falun](https://www.naturkartan.se/sv/municipalities/falun) - real trails/outdoor map link replacing the "app link" placeholder.
- Falupodden (podcast) link removed: the page returns 404.

### Image credits and licenses

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

### Credits

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

### Acknowledgements
- My mentor for continuous helpful feedback.

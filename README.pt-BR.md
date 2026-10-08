# Falun - estudo de turismo não oficial

**Português (Brasil)** | [English](README.md)

Site de turismo não oficial sobre Falun, criado como Portfolio Project 1 do Code Institute. Não é endossado pela prefeitura ou autoridade turística.

Projeto acadêmico público com demo ao vivo. Atualização de README em PR draft; sem mudança de runtime nem merge nesta rodada.

**Source / Código:** https://github.com/iurjoh/Falun

**Inspected commit / Commit inspecionado:** `425e9f4ece60447334a92a56d62688ec74317259`

**Live demo:** https://iurjoh.github.io/Falun/

Captura mobile preparada em 08/10/2026; upload no repositório pendente. Sem imagem embutida até o asset existir.

390x844, 2026-10-08. Captura nova no pacote; enviar junto com o README.

## Ideia e planejamento

Objetivo original: apresentar a cidade nas quatro estações, em layout responsivo. O registro preservado descreve About, Gallery e demonstração de inscrição. O revival de 2026 acrescentou EN/SV, um idioma por vez, navegação acessível e melhor entrega de imagens. Não reconstruímos wireframes ausentes.

## Funcionalidades e limites

Sobre/história/natureza/eventos, dezesseis fotos sazonais, seletor EN/SV e formulário demonstrativo. Não é serviço de newsletter. Cada informação/evento não foi reconferido nesta revisão.

## Arquitetura

HTML/CSS estático, JavaScript local para idioma/formulário demo. Variantes responsivas de imagem e galeria lazy; sem backend de aplicação. Ferramentas Node só para desenvolvimento.

## Design e capturas

Vermelho quente, fotografia, grupos por estação e navegação flexível. A captura móvel preparada separadamente mostra hero público, não toda a galeria ou estados do formulário.

## Histórico do build

Projeto acadêmico HTML/CSS, seguido pelo revival de setembro de 2026 documentado no código: revisão de fontes oficiais, créditos Wikimedia, imagens responsivas, EN/SV e acessibilidade. Commit de 1º de outubro adiciona README português. Datas iniciais não são inferidas de histórico recriado.

## Desempenho

O README anterior registrou Lighthouse em 30/09/2026 contra um preview Cloudflare retirado. Essa URL histórica não é a demo atual nem é oferecida como link ao vivo. As notas não comprovam desempenho do GitHub Pages de hoje. Nenhum Lighthouse novo foi executado. Variantes/lazy loading implementados não comprovam uma nota.

## Segurança e privacidade

Manter aviso de projeto não oficial. Não usar dados pessoais no formulário demo. Fotos precisam dos avisos de autor/licença Wikimedia preservados. Formulário sem backend não é cadastro real. Não é certificação jurídica ou de segurança.

## Evidência de testes

08/10/2026: home ao vivo/hero móvel inspecionados em 390x844; largura raiz igual viewport (390px). Galeria lazy completa, persistência EN/SV, teclado/formulário e rotas não repetidos. QA anterior é evidência datada.

## Executar localmente

```sh
python3 -m http.server 8000
```

## Publicação e roadmap

Retestar galeria após scroll, idiomas/teclado/formulário; capturar desktop/tablet; validar dependências/desempenho atuais e preservar créditos.

Nenhuma configuração de host/custo/branch alterada ou reconferida. Página acessível não prova paridade source/deploy.

## Créditos e licença

Code Institute PP1, recursos de estudo HTML/CSS, fontes oficiais de turismo e mídia Wikimedia. Preservar a lista de autores/licenças por imagem na publicação.

Sem LICENSE na raiz inspecionada. Não anunciar MIT antes de conferir direitos autorais/terceiros e aprovar licença. Nenhuma licença alterada.


## Atribuições originais preservadas

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

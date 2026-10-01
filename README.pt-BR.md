# Falun: Life is more exciting here!

**Português (Brasil)** | [English](README.md)

[Veja o site ativo aqui.](https://iurjoh.github.io/Falun/)

> **Projeto acadêmico não oficial.** Este site foi construído como Code Institute
> Portfolio Project 1 (HTML/CSS). Não é afiliado, endossado ou
> conectado a Falu kommun, Visit Dalarna ou qualquer órgão oficial. Para informação
> oficial a visitantes, veja [Visit Dalarna](https://www.visitdalarna.se) e
> [falun.se](https://www.falun.se).

"Falun: Life is more exciting here!" é um website que pretende divulgar e promover o turismo na cidade de Falun, Suécia, para todos que gostam de uma vida empolgante, seja cheia de sítios históricos, belas paisagens naturais com vida selvagem ou eventos culturais e esportivos.

Convidamos todos os turistas a conhecer nossa cidade maravilhosa, mostrando neste site adaptado para celulares, tablets e desktops um panorama do que podemos oferecer ao longo das 4 estações do ano. Vamos tornar sua próxima viagem mais empolgante!

# Funcionalidades

- **Barra de navegação** - links para as seções About Us, Gallery e Sign Up, com skip link para usuários de teclado e layout quebra-linha que funciona até telas de 320px.
- **Bilíngue EN/SV** - um seletor de idioma no cabeçalho (botões EN / SV com `aria-pressed`). Exatamente um idioma é renderizado por vez (o outro existe apenas no dicionário JS, nunca na tela), a escolha persiste em `localStorage`, e `html lang`, `<title>`, meta description, textos alt e ARIA labels mudam junto com o conteúdo.
- **Seção hero** - foto responsiva dos saltos de esqui de Lugnet na neve (`<picture>` com WebP/JPEG em 640/1280/1600px), com o slogan do site sobreposto. Altura balanceada com `clamp()` em vez de 90vh fixo.
- **About Us** - um panorama curto de Falun, incluindo a população do município com fonte (cerca de 60.000 habitantes, SCB 2025).
- **Seção de informações** - destaques de História, Natureza e Eventos, revisados em setembro de 2026 contra fontes oficiais (ver Fontes de conteúdo abaixo).
- **Galeria** - dezesseis fotos reais de Falun, quatro por estação (primavera, verão, outono, inverno), todas do Wikimedia Commons com licenças livres verificadas (ver Créditos de imagem abaixo). Grupos por estação com títulos, grade responsiva, lazy loading abaixo da dobra, variantes WebP/JPEG.
- **Sign Up (formulário de demonstração)** - ver a nota de limitação abaixo.
- **Rodapé** - links para os perfis oficiais de redes sociais de Falu kommun, cada um com nome acessível.

## Limitação do formulário de demonstração

O formulário de inscrição é **apenas uma demonstração de front-end**. Não tem `action` nem back-end: o envio é interceptado no navegador (JavaScript) e apenas mostra uma mensagem de confirmação. **Nenhum nome, e-mail ou outro dado é enviado ou armazenado**, e nada é adicionado à URL. A mensagem de confirmação e a própria página direcionam visitantes que querem informação real para [Visit Dalarna](https://www.visitdalarna.se), o site oficial de turismo.

# Fontes de conteúdo (revisadas em 30/09/2026)

- População: cerca de 60.000 habitantes no **Município de Falun**, estatísticas SCB de 2025 (via [Kommunatlas](https://www.kommunatlas.se/befolkning/falun/)).
- [FIS Nordic World Ski Championships 2027 em Falun, 24 de fevereiro - 7 de março de 2027](https://falun2027.com/en/) (site oficial do evento; [anúncio das datas](https://falun2027.com/falun-2027-dates-of-the-competitions-february-24-march-7-2027/)).
- [Copa do Mundo de esqui cross-country em Falun](https://falun2027.com/sv/tavlingar/cross-country-world-cup-2026/) (Lugnet).
- [Åfesten](https://www.falun.se/gora--uppleva/det-hander-i-falun/afesten.html) - festival gratuito da cidade organizado por Falu kommun (edição de 5-7 de junho de 2026 confirmada).
- [IBF Falun](https://en.wikipedia.org/wiki/IBF_Falun) é um clube de **floorball (innebandy)** - campeão sueco - não um time de bandy.
- [Sabaton Open Air](https://www.sabaton.net/news/sabaton-open-air/sabaton-open-air-taking-a-hiatus/) - anúncio oficial de hiato (2022). Listado como histórico.
- Vasaloppet foi removido da lista de eventos de Falun: a prova corre [Sälen-Mora](https://vasaloppet.se/skidor/vasaloppet/), em outra parte da região de Dalarna.
- [Naturkartan - Falun](https://www.naturkartan.se/sv/municipalities/falun) - link real de mapa de trilhas/ar livre substituindo o placeholder de "link do app".
- Link do Falupodden (podcast) removido: a página retorna 404.

# Créditos e licenças de imagem

Todas as fotos foram substituídas em setembro de 2026. A foto de fundo anterior
("ArtknubbenView", 18MB, © Visit Dalarna / Anna Holm) e outras imagens sem licença ou
não verificáveis foram removidas para respeitar direitos autorais. As fotos atuais são do
Wikimedia Commons com licenças livres verificadas, servidas como JPEG/WebP otimizados em
variantes de 640/1280/1920px (todas abaixo de 500KB).

| Uso | Arquivo | Autor | Licença | Fonte |
|-----|------|--------|---------|--------|
| Hero | `hero-lugnet-*` | Nelinjo | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Falun Lugnet K120 K90.JPG](https://commons.wikimedia.org/wiki/File:Falun_Lugnet_K120_K90.JPG) |
| Fundo do formulário | `bg-falun-view-*` | m.prinke | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) | [File:Falun View.jpg](https://commons.wikimedia.org/wiki/File:Falun_View.jpg) |
| Galeria - primavera | `gallery-spring-*` | "The rog wikings" | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Lurån vid mynningen in i Rogsjön](https://commons.wikimedia.org/wiki/File:Lur%C3%A5n_vid_mynningen_in_i_Rogsj%C3%B6n-_2013-05-01_23-51.jpg) |
| Galeria - primavera | `gallery-spring2-*` | Hans Lindqvist | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falun Copper Mine 02.jpg](https://commons.wikimedia.org/wiki/File:Falun_Copper_Mine_02.jpg) |
| Galeria - primavera | `gallery-spring3-*` | Calle Eklund/V-wolf | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Magasinbron, Falun.jpg](https://commons.wikimedia.org/wiki/File:Magasinbron,_Falun.jpg) |
| Galeria - primavera | `gallery-spring4-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Faluåns kraftstation 01.jpg](https://commons.wikimedia.org/wiki/File:Falu%C3%A5ns_kraftstation_01.jpg) |
| Galeria - verão | `gallery-summer-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Främby udde från ovan.JPG](https://commons.wikimedia.org/wiki/File:Fr%C3%A4mby_udde_fr%C3%A5n_ovan.JPG) |
| Galeria - verão | `gallery-summer2-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falu gruva från ovan (4).JPG](https://commons.wikimedia.org/wiki/File:Falu_gruva_fr%C3%A5n_ovan_(4).JPG) |
| Galeria - verão | `gallery-summer3-*` | Mattias Blomgren | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Ernst Rolf-gården i Falun.jpg](https://commons.wikimedia.org/wiki/File:Ernst_Rolf-g%C3%A5rden_i_Falun.jpg) |
| Galeria - verão | `gallery-summer4-*` | Arild Vågen | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Kristine kyrka July 2017 03.jpg](https://commons.wikimedia.org/wiki/File:Kristine_kyrka_July_2017_03.jpg) |
| Galeria - outono | `gallery-autumn-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Källviken november 2008 2.jpg](https://commons.wikimedia.org/wiki/File:K%C3%A4llviken_november_2008_2.jpg) |
| Galeria - outono | `gallery-autumn2-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falun från Radiohuset.jpg](https://commons.wikimedia.org/wiki/File:Falun_fr%C3%A5n_Radiohuset.jpg) |
| Galeria - outono | `gallery-autumn3-*` | Mojj | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Falu koppargruva med Creutz lave.jpg](https://commons.wikimedia.org/wiki/File:Falu_koppargruva_med_Creutz_lave.jpg) |
| Galeria - outono | `gallery-autumn4-*` | Calle Eklund/V-wolf | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:Gruvarbetarstugan Östanfors Falun 120922.jpg](https://commons.wikimedia.org/wiki/File:Gruvarbetarstugan_%C3%96stanfors_Falun_120922.jpg) |
| Galeria - inverno | `gallery-winter-*` | Calle Eklund | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Falu gruva 2014-12-06.jpg](https://commons.wikimedia.org/wiki/File:Falu_gruva_2014-12-06.jpg) |
| Galeria - inverno | `gallery-winter2-*` | Hyperbore | Domínio público | [File:Kronobranneriet.JPG](https://commons.wikimedia.org/wiki/File:Kronobranneriet.JPG) |
| Galeria - inverno | `gallery-winter3-*` | Jake73 (Wikivoyage) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [File:GreatPitFalunJake73.jpg](https://commons.wikimedia.org/wiki/File:GreatPitFalunJake73.jpg) |
| Galeria - inverno | `gallery-winter4-*` | LZ6387 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [File:Incline elevator at the ski jumping hills in Falun (LZ) 3.JPG](https://commons.wikimedia.org/wiki/File:Incline_elevator_at_the_ski_jumping_hills_in_Falun_(LZ)_3.JPG) |

As imagens do logotipo de Falu kommun foram removidas: um logotipo municipal não é livre
para reuso, e este não é um site oficial. O cabeçalho agora usa um wordmark em texto simples.

# Testes (matriz, 30/09/2026)

| Teste | Método | Resultado |
|------|--------|-----------|
| Validação HTML | [W3C Nu validator](https://validator.w3.org/nu/) (upload de arquivo) | 0 erros, 0 avisos |
| Validação CSS | [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) (upload de arquivo, css3svg) | 0 erros |
| Overflow horizontal | Chrome headless, `scrollWidth - innerWidth` | 0px em 320, 390, 834 e 1440px |
| Layout | Screenshots de página inteira em 320/390 (mobile), 834 (tablet), 1440 (desktop) | Sem sobreposição, menu quebra linha, labels do formulário acima dos campos, radios empilhados, botão centralizado |
| Teclado | Percurso de Tab do topo da página | Skip link aparece primeiro, depois logo, menu, links de conteúdo, campos do formulário, botão de envio - ordem lógica |
| Hover/focus do botão | Screenshots de hover + focus no Chrome headless | Botão permanece no lugar; só as cores mudam (antes: desaparecia no hover) |
| Contraste | Razões computadas da paleta | `#a63822` sobre branco e branco sobre `#a63822` ≈ 6.6:1; variantes mais escuras `#7d2a19` maiores - todo texto corrido ≥ 4.5:1 |
| Fluxo do formulário demo | Preenchido e enviado no Chrome headless | URL inalterada (sem dados na URL), nenhuma requisição feita, confirmação exibida |
| Links externos | Verificações de status via `curl` | Todos 200. Facebook/Instagram retornam 400/429 para bots (proteção anti-bot da Meta), mas foram confirmados ativos via busca; Falupodden 404 removido |
| Peso da imagem de fundo | Tamanhos de arquivo | 51KB (640) / 205KB (1280) / 419KB (1920) - meta < 500KB atingida |

## Bugs corrigidos (branch de revival, 30/09/2026)

- Formulário sem `action`/`method` vazava nomes e e-mails para a URL e não salvava nada - agora é uma demo client-side explicitamente marcada.
- Botão "Ready to go!" desaparecia no hover (margin/position mudavam) - hover/focus agora só mudam cores.
- Fundo de 18MB com direitos autorais da Visit Dalarna - substituído por imagem responsiva licenciada de no máximo 419KB; outras imagens sem licença/não verificáveis também substituídas.
- Contraste do formulário abaixo de 4:1 sobre foto cheia de elementos - agora um painel sólido com texto escuro, inputs opacos de 44px+, `fieldset`/`legend` e `autocomplete`.
- Ícones sociais sem nomes acessíveis - adicionado `aria-label` por rede; link morto do Falupodden removido.
- Overflow horizontal de 2px em todos os viewports (4px em 320px) - `box-sizing: border-box` global e menu fluido.
- Âncora da galeria apontava para a grade de fotos em vez do título da seção; o hero era 90vh fixo.
- Hierarquia de títulos corrigida (um `h1`, `h2` para seções), landmark `<main>` e skip link adicionados.
- Erros de conteúdo: Midssomar → Midsommar, snowmobil → snowmobile, tradtional → traditional, Vasalopet removido (prova Sälen-Mora, não Falun), IBF Falun corrigido para floorball, "World Cup Finals" substituído pela Copa do Mundo 2026 e o Mundial 2027 verificados, Sabaton Open Air marcado como em hiato, população atribuída ao município com fonte/ano.
- Diretório `.vscode/` do template da Code Institute (scripts de telemetria com chaves de API) removido.

# Resultados da certificação de qualidade (30/09/2026)

Medido contra a matriz de aceitação (Lighthouse, WCAG 2.2 AA, W3C, higiene de
segurança) no build de revival. Preview publicado no Cloudflare Pages:

**https://falun-revival-preview.pages.dev/**

| Critério | Meta | Resultado (medido) |
|-----------|------|--------------------|
| Lighthouse Performance | >= 95 | **100** mobile, **100** desktop (URL ativa, 3 execuções cada, pior execução 100) |
| Lighthouse Accessibility | 100 | **100** mobile e desktop (URL ativa) |
| Lighthouse Best Practices | 100 | **100** mobile e desktop (URL ativa) |
| Lighthouse SEO | 100 | **100** mobile e desktop (URL ativa; um `robots.txt` real foi necessário - o Pages serve o fallback HTML em `/robots.txt` caso contrário) |
| axe (tags WCAG 2.0/2.1/2.2 A+AA) | 0 violações | **0 violações, 0 incompletas** - 9/9 testes Playwright+axe passam contra a URL ativa (home, estado de confirmação do formulário, overflow; viewports 320/390/1440) |
| W3C HTML (Nu) | 0 erros | **0 erros, 0 avisos** |
| W3C CSS (Jigsaw) | 0 erros | **0 erros** |
| `npm audit` (dependências dev de QA) | limpo | **0 vulnerabilidades** |
| Varredura de segredos gitleaks | limpa | Working tree limpa. 1 achado apenas no **histórico git**: uma chave de API de telemetria do template da Code Institute em `.vscode/uptime.sh` (commit `691017f`). Purgar o histórico exige a recriação limpa planejada do repo. |

Nota sobre headers: GitHub Pages (e este preview) são hosts estáticos - o site
não pode definir seus próprios headers HTTP de segurança, então uma nota de
security-headers não é prometida. O que o site controla (uma meta tag
`Content-Security-Policy` com hash sha256, `referrer-policy`, fontes
auto-hospedadas, nenhum script de terceiros) está em vigor.

## Notas de build e QA (branch de revival)

- `index.html` carrega o CSS **inline** (com um hash CSP `style-src 'sha256-...'`).
  Depois de editar `assets/css/style.css`, regenere com
  `node qa/inline-css.js` (re-inline o CSS, reescreve os caminhos `../images/` e
  `../fonts/` e recalcula o hash).
- Ferramentas de QA (`qa/`, `package.json`): servidor local, runner do Lighthouse, testes
  axe com Playwright, verificador de links. Todas dev dependencies, todas gratuitas.
- As traduções ficam em `assets/js/i18n.js`; os elementos da página carregam
  atributos `data-i18n` / `data-i18n-alt` / `data-i18n-value` / `data-i18n-aria` /
  `data-i18n-html` que o seletor preenche.
- `.github/workflows/quality.yml` roda validação W3C, Lighthouse CI, axe,
  gitleaks, npm audit e a verificação de links a cada push (actions fixadas por SHA).

# Linguagens usadas
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)

# Deploy
O deploy do site foi feito pelo repositório do GitHub. Os passos são:
- No repositório do GitHub, clicar na aba Settings;
- Navegar no menu à esquerda e selecionar Pages;
- Definir a fonte no item Build and deployment como "Deploy from a branch". Depois, no item Branch, a opção Main foi escolhida, pasta /(root), finalizando com o botão Save.

O link do site publicado é: https://iurjoh.github.io/Falun/

# Créditos

Sites como:
- [Stack Overflow](https://stackoverflow.co/) foram usados em vários momentos para esclarecer dúvidas recorrentes,
- [Google Fonts](https://fonts.google.com/) para inserir novas fontes;
- Ícones SVG [Font Awesome Free](https://fontawesome.com/) (inline, sem script de kit) - [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/);
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) WOFF2 auto-hospedada - [SIL Open Font License 1.1](https://openfontlicense.org/);
- [CSS Tricks](https://css-tricks.com/) para responder dúvidas de CSS;
- [Code Institute](https://learn.codeinstitute.net/) para revisar material de estudo, vídeos explicativos e guias de como montar um website completo;
- [W3C](https://www.w3.org/) para ler os tutoriais e entender regras básicas de HTML e CSS;
- [Wikipedia](https://www.wikipedia.org/) e [Wikimedia Commons](https://commons.wikimedia.org/) para fatos e fotos com licença livre;
- [Site oficial de Falun](https://www.falun.se/) e [Falun 2027](https://falun2027.com/en/) para informações de eventos.

## Agradecimentos
- Ao meu mentor, pelo feedback contínuo e útil.

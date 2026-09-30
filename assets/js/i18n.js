// Bilingual EN/SV switcher. Exactly one language is rendered at a time:
// the inactive language exists only in this dictionary, never in the visible page.
(function () {
    'use strict';

    var dict = {
        en: {
            docTitle: 'Falun: Life is more exciting here!',
            metaDesc: 'A Falun website to improve tourism - unofficial academic project',
            skip: 'Skip to main content',
            logoAria: 'Falun - back to top',
            navAria: 'Main navigation',
            navAbout: 'About Us',
            navGallery: 'Gallery',
            navSignup: 'Sign Up',
            coverAria: 'Welcome',
            heroAlt: 'Snow-covered ski jumps at the Lugnet sports complex in Falun',
            heroTitle: 'Life is more exciting here!',
            aboutTitle: 'About Us',
            aboutText: 'Falun is the seat of Falun Municipality and the capital of the Dalarna Region in Sweden. The municipality has about 60,000 inhabitants (SCB, 2025). The city is known for its rural landscapes, copper mining, long history, folk culture and sports events. The extraction of copper and gold can be traced back to the 1000s, with continuous extraction and on an industrial scale close to the 1300s by the company Stora Kopparberget, which is possibly the oldest still-existing enterprise in the world, proved active since 1347, when its charter was granted by King Magnus IV of Sweden. The first share in the company is dated as early as 1288.',
            infoAria: 'Highlights of Falun',
            histTitle: 'History',
            hist1: 'UNESCO World Heritage Site',
            hist2: 'Stora Kopparberget Company',
            hist3: 'Falun and World War II',
            hist4: 'Dalregementet (the Dalarna Regiment)',
            hist5: 'Gruvmuseet - the Mine Museum',
            hist6: 'Great Copper Mountain - Kopparberget',
            hist7: 'Traditional red paint - Falu rödfärg',
            hist8: 'Traditional food - falukorv',
            natTitle: 'Nature',
            nat1: 'Hiking, biking or riding',
            nat2: 'Fishing',
            nat3: 'Camping',
            nat4: 'Källviksbacken ski and snowboard',
            nat5: 'Lake Runn - winter and summer',
            nat6: 'Boat trip or snowmobile',
            nat7: 'Lakes and nature reserves',
            nat8: 'Naturkartan - trails and outdoor map of Falun',
            evtTitle: 'Events',
            evt1: 'Midsommar (Midsummer)',
            evt2: 'Åfesten - free city festival every June',
            evt3: 'FIS Nordic World Ski Championships 2027 (24 February - 7 March)',
            evt4: 'Cross-country skiing World Cup at Lugnet',
            evt5: 'Falun Ski Jumping at Lugnet',
            evt6: 'Valborg (Walpurgis Night)',
            evt7: 'IBF Falun - Swedish floorball champions',
            evt8: 'Sabaton Open Air - metal festival 2008-2022, on hiatus',
            galTitle: 'Gallery',
            galSpring: 'Spring',
            galSummer: 'Summer',
            galAutumn: 'Autumn',
            galWinter: 'Winter',
            galAlt5: 'Visitors looking out over the Great Pit at Falun Copper Mine',
            galAlt6: 'The Faluån river at Magasinbron with old red warehouses',
            galAlt7: 'The old Faluån power station surrounded by spring greenery',
            galAlt8: 'Aerial view of the Falun mine area with its red tower in summer',
            galAlt9: 'A traditional Falu red timber house in Falun in summer',
            galAlt10: 'Falu Kristine kyrka and the main square on a bright summer night',
            galAlt11: 'View over Falun with autumn colours from the Radio House hill',
            galAlt12: 'The Creutz headframe at Falun Copper Mine in autumn',
            galAlt13: "A historic miner's cottage in the Östanfors district in autumn",
            galAlt14: 'The Kronobränneriet building by the icy Faluån river in winter',
            galAlt15: 'Winter view over Falun and the Great Pit of the copper mine',
            galAlt16: 'The Lugnet ski jumping hills in the snow',
            galAlt1: 'A stream with fresh green spring growth in Falun municipality',
            galAlt2: 'Främby udde on Lake Runn in Falun on a summer day',
            galAlt3: 'The small boat harbour at Källviken, Lake Runn, in late autumn',
            galAlt4: 'Falu gruva mine area in the snow with Christmas lights in December',
            signTitle: 'Sign Up',
            demoNote: '<strong>Demonstration only:</strong> this form does not send or store any data.',
            formTitle: "Let's make your next trip more exciting!",
            labelFname: 'First Name:',
            labelLname: 'Last Name:',
            labelEmail: 'Email Address:',
            legendInterest: "I'm interested in:",
            optHistory: 'History',
            optNature: 'Nature',
            optEvents: 'Events',
            optAll: 'Everything',
            submitBtn: 'Ready to go!',
            confTitle: 'Thank you!',
            confP1: 'Your demo sign-up worked, and nothing was sent or stored. This site is an unofficial study project, so no real data is collected here.',
            confP2: 'Planning a real trip? Start at <a href="https://www.visitdalarna.se">Visit Dalarna</a>, the official tourism site for the region.',
            footerNote: 'Unofficial academic project - not affiliated with Falu kommun. Photo credits and licenses are listed in the project README.'
        },
        sv: {
            docTitle: 'Falun: Livet är mer spännande här!',
            metaDesc: 'En webbplats om Falun för att främja turism - inofficiellt studieprojekt',
            skip: 'Hoppa till huvudinnehållet',
            logoAria: 'Falun - tillbaka till toppen',
            navAria: 'Huvudmeny',
            navAbout: 'Om oss',
            navGallery: 'Galleri',
            navSignup: 'Anmäl dig',
            coverAria: 'Välkommen',
            heroAlt: 'Snötäckta backhoppningsbackar på Lugnets sportanläggning i Falun',
            heroTitle: 'Livet är mer spännande här!',
            aboutTitle: 'Om oss',
            aboutText: 'Falun är centralort i Falu kommun och residensstad i Dalarnas län. Kommunen har cirka 60 000 invånare (SCB, 2025). Staden är känd för sina lantliga landskap, sin koppargruvbrytning, sin långa historia, sin folkkultur och sina idrottsevenemang. Brytningen av koppar och guld kan spåras tillbaka till 1000-talet, med kontinuerlig brytning i industriell skala från omkring 1300-talet av bolaget Stora Kopparberget, som möjligen är världens äldsta ännu verksamma företag, dokumenterat aktivt sedan 1347 då kung Magnus IV av Sverige utfärdade dess privilegiebrev. Det första aktiebrevet i bolaget är daterat redan 1288.',
            infoAria: 'Höjdpunkter i Falun',
            histTitle: 'Historia',
            hist1: 'UNESCO:s världsarv',
            hist2: 'Bolaget Stora Kopparberget',
            hist3: 'Falun och andra världskriget',
            hist4: 'Dalregementet',
            hist5: 'Gruvmuseet',
            hist6: 'Stora Kopparberget',
            hist7: 'Falu rödfärg - traditionell rödfärg',
            hist8: 'Falukorv - traditionell mat',
            natTitle: 'Natur',
            nat1: 'Vandring, cykling eller ridning',
            nat2: 'Fiske',
            nat3: 'Camping',
            nat4: 'Källviksbacken - skidåkning och snowboard',
            nat5: 'Sjön Runn - vinter och sommar',
            nat6: 'Båttur eller snöskoter',
            nat7: 'Sjöar och naturreservat',
            nat8: 'Naturkartan - leder och friluftskarta över Falun',
            evtTitle: 'Evenemang',
            evt1: 'Midsommar',
            evt2: 'Åfesten - gratis stadsfestival varje juni',
            evt3: 'Skid-VM 2027 i Falun (24 februari - 7 mars)',
            evt4: 'Världscupen i längdskidåkning på Lugnet',
            evt5: 'Backhoppning på Lugnet',
            evt6: 'Valborg',
            evt7: 'IBF Falun - svenska mästare i innebandy',
            evt8: 'Sabaton Open Air - metalfestival 2008-2022, pausad',
            galTitle: 'Galleri',
            galSpring: 'Vår',
            galSummer: 'Sommar',
            galAutumn: 'Höst',
            galWinter: 'Vinter',
            galAlt5: 'Besökare tittar ut över Stora Stöten vid Falu koppargruva',
            galAlt6: 'Faluån vid Magasinbron med gamla röda magasin',
            galAlt7: 'Gamla Faluåns kraftstation omgiven av vårgrönska',
            galAlt8: 'Flygvy över Falu gruvområde med det röda gruvtornet på sommaren',
            galAlt9: 'Ett traditionellt falurött timmerhus i Falun på sommaren',
            galAlt10: 'Falu Kristine kyrka och Stora torget en ljus sommarnatt',
            galAlt11: 'Vy över Falun i höstfärger från Radiohuset',
            galAlt12: 'Creutz lave vid Falu koppargruva på hösten',
            galAlt13: 'En historisk gruvarbetarstuga i Östanfors på hösten',
            galAlt14: 'Kronobränneriet vid den isiga Faluån en vinterdag',
            galAlt15: 'Vintervy över Falun och koppargruvans Stora Stöten',
            galAlt16: 'Backhoppningsbackarna på Lugnet i snön',
            galAlt1: 'En bäck med frisk vårgrönska i Falu kommun',
            galAlt2: 'Främby udde vid sjön Runn i Falun en sommardag',
            galAlt3: 'Småbåtshamnen i Källviken vid sjön Runn en sen höstdag',
            galAlt4: 'Falu gruvområde i snö med julebelysning i december',
            signTitle: 'Anmäl dig',
            demoNote: '<strong>Endast demonstration:</strong> det här formuläret skickar eller sparar ingen data.',
            formTitle: 'Låt oss göra din nästa resa mer spännande!',
            labelFname: 'Förnamn:',
            labelLname: 'Efternamn:',
            labelEmail: 'E-postadress:',
            legendInterest: 'Jag är intresserad av:',
            optHistory: 'Historia',
            optNature: 'Natur',
            optEvents: 'Evenemang',
            optAll: 'Allt',
            submitBtn: 'Kör igång!',
            confTitle: 'Tack!',
            confP1: 'Din demoanmälan fungerade, och ingenting skickades eller sparades. Den här webbplatsen är ett inofficiellt studieprojekt, så ingen riktig data samlas in här.',
            confP2: 'Planerar du en riktig resa? Börja på <a href="https://www.visitdalarna.se">Visit Dalarna</a>, regionens officiella turismwebbplats.',
            footerNote: 'Inofficiellt studieprojekt - ingen koppling till Falu kommun. Fotokrediter och licenser finns i projektets README.'
        }
    };

    function setText(el, value) {
        // Replace the visible text run while keeping element children (SVG icons)
        // and the surrounding whitespace of the original text node.
        var nodes = el.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                node.textContent = node.textContent.replace(/\S[\s\S]*\S|\S/, value);
                return;
            }
        }
        el.textContent = value;
    }

    function applyLang(lang) {
        var d = dict[lang] || dict.en;
        document.documentElement.lang = lang;
        document.title = d.docTitle;
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', d.metaDesc);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (key in d) setText(el, d[key]);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (key in d) el.innerHTML = d[key];
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-alt');
            if (key in d) el.setAttribute('alt', d[key]);
        });
        document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-value');
            if (key in d) el.setAttribute('value', d[key]);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            if (key in d) el.setAttribute('aria-label', d[key]);
        });
        document.querySelectorAll('.lang-switch button').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
        });
        try { localStorage.setItem('falun-lang', lang); } catch (e) { /* private mode */ }
    }

    var saved = 'en';
    try { saved = localStorage.getItem('falun-lang') || 'en'; } catch (e) { /* private mode */ }

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyLang(btn.getAttribute('data-lang'));
        });
    });

    applyLang(saved);
})();

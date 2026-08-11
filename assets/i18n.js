/* S1LEX — i18n statique (FR / EN / ES), sans build, sans dépendance.
   Détection : préférence sauvegardée > langue du navigateur > FR par défaut. */
(function(){
  var STORAGE_KEY = 's1lex-lang';

  var translations = {
    fr: {
      common: {
        nav: { portfolio:'Portfolio', about:'À propos', contact:'Contact' },
        ariaHome:'S1LEX — retour à l’accueil',
        ariaBackToTop:'Retour en haut',
        footer:'S1LEX — San Pedro de Quillota / Chili',
        footerYears:'© 2024 — 2026'
      },
      index: {
        meta:{
          title:'S1LEX — Agence créative digitale',
          description:'S1LEX, agence de création digitale : identité, direction artistique, sites et applications. Des expériences numériques précises, construites avec soin.',
          ogTitle:'S1LEX — Agence créative digitale',
          ogDescription:'On grave. On code. On avance. Agence de création digitale pour celles et ceux qui préfèrent les traces durables aux effets de mode.'
        },
        hero:{
          tag:'(01) Agence créative digitale',
          h1_1:'On taille', h1_2:'des idées', h1_3:'dans le web.',
          lede:'S1LEX est une agence de création digitale pour celles et ceux qui préfèrent les traces durables aux effets de mode.',
          cta:'Voir le portfolio ↓',
          imgAlt:'Illustration au trait d’un artisan préhistorique gravant du code sur un ordinateur en pierre — on grave, on code, on avance.'
        },
        maniere:{
          tag:'(02) Notre manière', h2:'Brut par choix.',
          imgAlt:'Illustration au trait d’un artisan pensif, avec une bulle de pensée façon peinture rupestre — cerf, feu, abri, poisson',
          p:'Pas de jargon. Pas de fumée. Des expériences numériques précises, construites avec soin et un peu d’instinct.',
          label1:'Champs d’action', value1:'Identité · Direction artistique · Sites · Applications',
          label2:'Méthode', value2:'De la première étincelle au dernier pixel.'
        },
        work:{
          tag:'(03) Travaux sélectionnés', h2:'Quelques traces.',
          imgAlt:'Illustration au trait d’un sentier menant à un abri de pierre dans la montagne, jalonné de symboles de code',
          cat1:'Expéditions nature · Pichilemu',
          cat2:'Ecocamp · Punta de Lobos',
          cat3:'Application · Hôtellerie côtière',
          cat4:'Identité & plateforme · Architecture',
          note:'Un portfolio imaginaire, en attendant de laisser les vraies traces.'
        },
        qui:{
          tag:'(04) Qui suis-je', h2:'Un artisan, une signature.',
          imgAlt:'Portrait de Nils Van Brabant, fondateur de S1LEX',
          p:'Belge d’origine, installé au Chili. Vingt ans à créer des applications, gérer des sites et diriger des équipes — la même rigueur, où que ce soit dans le monde.',
          label1:'Origine', value1:'Belgique — basé au Chili',
          label2:'Clients', value2:'Europe · Amérique du Sud · États-Unis'
        },
        contact:{
          tag:'(05) Un projet en tête ?', h2:'On se parle<br>autour d’un feu.',
          phone:'+56 9 64251236',
          imgAlt:'Illustration au trait de trois silhouettes assises autour d’un feu de camp, symbole des échanges chez S1LEX'
        }
      },
      projet:{
        meta:{
          title:'Santuario Expediciones — S1LEX',
          description:'Santuario Expediciones — étude de cas S1LEX : plateforme de réservation d’expéditions nature à Pichilemu, Chili. Identité, UX et développement sur-mesure.',
          ogTitle:'Santuario Expediciones — S1LEX',
          ogDescription:'Une plateforme pensée comme un sentier : sobre, guidée, sans détour. Étude de cas S1LEX pour Santuario Expediciones, Pichilemu.'
        },
        back:'← Retour au portfolio',
        tag:'(01) Étude de cas',
        h1_1:'Santuario', h1_2:'Expediciones',
        metaLabels:{ client:'Client', category:'Catégorie', place:'Lieu', year:'Année' },
        metaValues:{ category:'Expéditions nature', place:'Pichilemu, Chili' },
        lede:'Une plateforme pensée comme un sentier : sobre, guidée, sans détour. Réservation d’expéditions, cartographie du territoire, récits de terrain — chaque écran sert la marche, rien d’autre.',
        visual1:'Vue 01 — Accueil', visual2:'Vue 02 — Itinéraires',
        detailsTitle:'Le contexte.',
        detailsP:'Santuario Expediciones organise des marches et traversées le long de la côte de Pichilemu. Leur présence en ligne ne racontait pas la rigueur du travail sur le terrain — nous avons repris la plateforme à zéro.',
        specsLabels:{ role:'Rôle', stack:'Stack', duration:'Durée', deliverables:'Livrables' },
        specsValues:{ role:'Identité, UX, développement', stack:'Système statique, CMS léger', duration:'7 semaines', deliverables:'Site, système de réservation' },
        nextTag:'Projet suivant', nextLink:'Olas de Chile'
      }
    },
    en: {
      common: {
        nav: { portfolio:'Portfolio', about:'About', contact:'Contact' },
        ariaHome:'S1LEX — back to home',
        ariaBackToTop:'Back to top',
        footer:'S1LEX — San Pedro de Quillota / Chile',
        footerYears:'© 2024 — 2026'
      },
      index: {
        meta:{
          title:'S1LEX — Creative digital agency',
          description:'S1LEX, digital creative agency: identity, art direction, websites and applications. Precise digital experiences, built with care.',
          ogTitle:'S1LEX — Creative digital agency',
          ogDescription:'We carve. We code. We move forward. A digital creative agency for those who prefer lasting marks over passing trends.'
        },
        hero:{
          tag:'(01) Creative digital agency',
          h1_1:'We carve', h1_2:'ideas', h1_3:'into the web.',
          lede:'S1LEX is a digital creative agency for those who prefer lasting marks over passing trends.',
          cta:'See the portfolio ↓',
          imgAlt:'Line illustration of a prehistoric craftsman carving code onto a stone computer — we carve, we code, we move forward.'
        },
        maniere:{
          tag:'(02) Our approach', h2:'Raw by choice.',
          imgAlt:'Line illustration of a thoughtful craftsman with a cave-painting-style thought bubble — deer, fire, shelter, fish',
          p:'No jargon. No smoke and mirrors. Precise digital experiences, built with care and a bit of instinct.',
          label1:'Areas of focus', value1:'Identity · Art direction · Websites · Applications',
          label2:'Method', value2:'From the first spark to the last pixel.'
        },
        work:{
          tag:'(03) Selected work', h2:'A few traces.',
          imgAlt:'Line illustration of a trail leading to a stone shelter in the mountains, marked with code symbols',
          cat1:'Nature expeditions · Pichilemu',
          cat2:'Ecocamp · Punta de Lobos',
          cat3:'Application · Coastal hospitality',
          cat4:'Identity & platform · Architecture',
          note:'An imaginary portfolio, until the real traces are left.'
        },
        qui:{
          tag:'(04) Who I am', h2:'One craftsman, one signature.',
          imgAlt:'Portrait of Nils Van Brabant, founder of S1LEX',
          p:'Belgian by origin, based in Chile. Twenty years building applications, running websites and leading teams — the same rigor, wherever in the world.',
          label1:'Origin', value1:'Belgium — based in Chile',
          label2:'Clients', value2:'Europe · South America · United States'
        },
        contact:{
          tag:'(05) A project in mind?', h2:'Let’s talk<br>around a fire.',
          phone:'+56 9 64251236',
          imgAlt:'Line illustration of three silhouettes sitting around a campfire, symbol of exchange at S1LEX'
        }
      },
      projet:{
        meta:{
          title:'Santuario Expediciones — S1LEX',
          description:'Santuario Expediciones — S1LEX case study: nature expedition booking platform in Pichilemu, Chile. Custom identity, UX and development.',
          ogTitle:'Santuario Expediciones — S1LEX',
          ogDescription:'A platform designed like a trail: sober, guided, without detours. S1LEX case study for Santuario Expediciones, Pichilemu.'
        },
        back:'← Back to portfolio',
        tag:'(01) Case study',
        h1_1:'Santuario', h1_2:'Expediciones',
        metaLabels:{ client:'Client', category:'Category', place:'Location', year:'Year' },
        metaValues:{ category:'Nature expeditions', place:'Pichilemu, Chile' },
        lede:'A platform designed like a trail: sober, guided, without detours. Expedition booking, territory mapping, field stories — every screen serves the walk, nothing else.',
        visual1:'View 01 — Home', visual2:'View 02 — Itineraries',
        detailsTitle:'The context.',
        detailsP:'Santuario Expediciones organizes hikes and crossings along the Pichilemu coast. Their online presence didn’t reflect the rigor of their fieldwork — we rebuilt the platform from scratch.',
        specsLabels:{ role:'Role', stack:'Stack', duration:'Duration', deliverables:'Deliverables' },
        specsValues:{ role:'Identity, UX, development', stack:'Static system, lightweight CMS', duration:'7 weeks', deliverables:'Website, booking system' },
        nextTag:'Next project', nextLink:'Olas de Chile'
      }
    },
    es: {
      common: {
        nav: { portfolio:'Portfolio', about:'Nosotros', contact:'Contacto' },
        ariaHome:'S1LEX — volver al inicio',
        ariaBackToTop:'Volver arriba',
        footer:'S1LEX — San Pedro de Quillota / Chile',
        footerYears:'© 2024 — 2026'
      },
      index: {
        meta:{
          title:'S1LEX — Agencia creativa digital',
          description:'S1LEX, agencia de creación digital: identidad, dirección de arte, sitios y aplicaciones. Experiencias digitales precisas, construidas con cuidado.',
          ogTitle:'S1LEX — Agencia creativa digital',
          ogDescription:'Grabamos. Programamos. Avanzamos. Agencia de creación digital para quienes prefieren las huellas duraderas a los efectos de moda.'
        },
        hero:{
          tag:'(01) Agencia creativa digital',
          h1_1:'Tallamos', h1_2:'ideas', h1_3:'en la web.',
          lede:'S1LEX es una agencia de creación digital para quienes prefieren las huellas duraderas a los efectos de moda.',
          cta:'Ver el portfolio ↓',
          imgAlt:'Ilustración de un artesano prehistórico grabando código en un computador de piedra — grabamos, programamos, avanzamos.'
        },
        maniere:{
          tag:'(02) Nuestra manera', h2:'Bruto por elección.',
          imgAlt:'Ilustración de un artesano pensativo, con una nube de pensamiento estilo pintura rupestre — ciervo, fuego, refugio, pez',
          p:'Sin jerga. Sin humo. Experiencias digitales precisas, construidas con cuidado y algo de instinto.',
          label1:'Áreas de trabajo', value1:'Identidad · Dirección de arte · Sitios · Aplicaciones',
          label2:'Método', value2:'De la primera chispa al último píxel.'
        },
        work:{
          tag:'(03) Trabajos seleccionados', h2:'Algunas huellas.',
          imgAlt:'Ilustración de un sendero que lleva a un refugio de piedra en la montaña, marcado con símbolos de código',
          cat1:'Expediciones de naturaleza · Pichilemu',
          cat2:'Ecocamp · Punta de Lobos',
          cat3:'Aplicación · Hotelería costera',
          cat4:'Identidad y plataforma · Arquitectura',
          note:'Un portfolio imaginario, mientras llegan las huellas reales.'
        },
        qui:{
          tag:'(04) Quién soy', h2:'Un artesano, una firma.',
          imgAlt:'Retrato de Nils Van Brabant, fundador de S1LEX',
          p:'Belga de origen, radicado en Chile. Veinte años creando aplicaciones, gestionando sitios y liderando equipos — el mismo rigor, en cualquier parte del mundo.',
          label1:'Origen', value1:'Bélgica — radicado en Chile',
          label2:'Clientes', value2:'Europa · Sudamérica · Estados Unidos'
        },
        contact:{
          tag:'(05) ¿Un proyecto en mente?', h2:'Hablemos<br>junto al fuego.',
          phone:'+56 9 64251236',
          imgAlt:'Ilustración de tres siluetas sentadas alrededor de una fogata, símbolo del intercambio en S1LEX'
        }
      },
      projet:{
        meta:{
          title:'Santuario Expediciones — S1LEX',
          description:'Santuario Expediciones — caso de estudio S1LEX: plataforma de reservas de expediciones de naturaleza en Pichilemu, Chile. Identidad, UX y desarrollo a medida.',
          ogTitle:'Santuario Expediciones — S1LEX',
          ogDescription:'Una plataforma pensada como un sendero: sobria, guiada, sin rodeos. Caso de estudio S1LEX para Santuario Expediciones, Pichilemu.'
        },
        back:'← Volver al portfolio',
        tag:'(01) Caso de estudio',
        h1_1:'Santuario', h1_2:'Expediciones',
        metaLabels:{ client:'Cliente', category:'Categoría', place:'Lugar', year:'Año' },
        metaValues:{ category:'Expediciones de naturaleza', place:'Pichilemu, Chile' },
        lede:'Una plataforma pensada como un sendero: sobria, guiada, sin rodeos. Reserva de expediciones, cartografía del territorio, relatos de terreno — cada pantalla sirve a la caminata, nada más.',
        visual1:'Vista 01 — Inicio', visual2:'Vista 02 — Itinerarios',
        detailsTitle:'El contexto.',
        detailsP:'Santuario Expediciones organiza caminatas y travesías por la costa de Pichilemu. Su presencia en línea no reflejaba el rigor del trabajo en terreno — reconstruimos la plataforma desde cero.',
        specsLabels:{ role:'Rol', stack:'Stack', duration:'Duración', deliverables:'Entregables' },
        specsValues:{ role:'Identidad, UX, desarrollo', stack:'Sistema estático, CMS liviano', duration:'7 semanas', deliverables:'Sitio, sistema de reservas' },
        nextTag:'Siguiente proyecto', nextLink:'Olas de Chile'
      }
    }
  };

  var SUPPORTED = Object.keys(translations);

  function getNested(obj, path){
    return path.split('.').reduce(function(o,k){ return (o && o[k] !== undefined) ? o[k] : undefined; }, obj);
  }

  function detectLang(){
    try{
      var saved = localStorage.getItem(STORAGE_KEY);
      if(saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    }catch(e){}
    var navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || 'fr'];
    for(var i=0;i<navLangs.length;i++){
      var code = String(navLangs[i]).toLowerCase().slice(0,2);
      if(SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'fr';
  }

  function applyLang(lang){
    if(SUPPORTED.indexOf(lang) === -1) lang = 'fr';
    var dict = translations[lang];
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = getNested(dict, el.getAttribute('data-i18n'));
      if(val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        var attr = parts[0].trim();
        var key = parts[1] ? parts[1].trim() : '';
        var val = getNested(dict, key);
        if(val !== undefined) el.setAttribute(attr, val);
      });
    });

    var page = document.body.getAttribute('data-page') || 'index';
    var pageMeta = dict[page] && dict[page].meta;
    if(pageMeta){
      if(pageMeta.title) document.title = pageMeta.title;
      var setMeta = function(sel, val){
        var el = document.querySelector(sel);
        if(el && val) el.setAttribute('content', val);
      };
      if(pageMeta.description) setMeta('meta[name="description"]', pageMeta.description);
      if(pageMeta.ogTitle) setMeta('meta[property="og:title"]', pageMeta.ogTitle);
      if(pageMeta.ogDescription) setMeta('meta[property="og:description"]', pageMeta.ogDescription);
    }

    document.querySelectorAll('.lang-switch a').forEach(function(a){
      a.classList.toggle('active', a.getAttribute('data-lang') === lang);
    });

    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll('.lang-switch a').forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        applyLang(a.getAttribute('data-lang'));
      });
    });
  }

  initLangSwitch();
  applyLang(detectLang());

  window.s1lexI18n = { applyLang: applyLang, detectLang: detectLang, translations: translations };
})();

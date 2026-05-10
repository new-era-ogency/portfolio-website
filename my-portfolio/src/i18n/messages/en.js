/** @typedef {typeof import('./ru.js').ru} Messages */

/** @type {Messages} */
export const en = {
  nav: {
    brand: 'New Era Agency',
    projects: 'Work',
    contact: 'Contact',
    about: 'About',
    github: 'GitHub',
    language: 'Language',
  },
  hero: {
    badge: 'New Era Agency · open for projects',
    title1: 'Web Developer',
    title2: 'for Boutique & HoReCa',
    lead:
      'Digital architecture for HoReCa and boutiques. We ship premium web experiences where refined aesthetics meet disciplined engineering.',
    ctaWork: 'View selected work',
    ctaContact: 'Get in touch',
    ctaGithub: 'GitHub profile',
    focusLabel: 'Focus',
    focusValue: 'Boutiques, floristry, dining',
    stackLabel: 'Stack',
    stackValue: 'React · Tailwind · modern UX',
    locationLabel: 'Location',
    locationValue: 'Remote · EU‑friendly hours',
    orgHandle: '@new-era-ogency',
  },
  why: {
    title: 'Why us?',
    body:
      'We specialise in hospitality and boutique brands: interfaces that look the part and load instantly on the phones guests actually use—so more people discover your venue and convert.',
  },
  work: {
    title: 'Selected projects',
    lead:
      'Restaurants, cafés, HoReCa groups alongside boutiques and dessert bars — one calm digital language for guests.',
    period: '2024 — 2026',
    task: 'Challenge',
    solution: 'Approach',
    stack: 'Stack',
    boutique: 'Boutique',
    horeca: 'HoReCa',
    screenshotAltSuffix: 'home page screenshot',
    mobileBadge: 'Mobile Optimized',
  },
  footer: {
    title: "Let's talk",
    lead:
      'Tell us about your brand, goals, and timeline — we’ll reply with direction and timings.',
    note: ({ year }) =>
      `© ${year} New Era Agency — React & Tailwind`,
  },
  projects: {
    lulu: {
      title: 'Lulu Flower Boutique',
      tagline: 'Digital atelier for premium floristry',
      task:
        'Pair high‑end aesthetics with architectural minimalism: an immersive storefront where choosing blooms becomes emotional, not transactional.',
      solution:
        'Privacy‑first — no personally identifiable storage on‑site; conversations move to secure messenger channels. Intersection Observer for lazy visuals and buttery reveals. Triple locale EN / UA / BG with instant, in‑place switching. Thumb‑reachable mobile UX for predominantly mobile visitors. Editorial Playfair + restrained palette signalling quiet luxury.',
      stack:
        'Vanilla JS (ES6+) · HTML5/CSS3 (Grid · Flexbox) · Motion API',
      linkLabel: 'Live soon',
    },
    stepGarden: {
      title: 'theStepGarden',
      tagline: 'Multilingual platform for a restaurant',
      task:
        'Ship a seamless UX for international guests in a gastrobar setting — navigation, storytelling, menu, bookings.',
      solution:
        'Three languages — EN, UA & BG — without dropping scroll context when switching languages. Structured digital menus replacing laminated PDF churn. Performance‑forward Next/React stack optimised for flaky mobile uplinks. Editorial UI spotlighting ambience and plating instead of gimmicks.',
      stack: 'Next.js · Tailwind CSS · TypeScript',
      linkLabel: 'View live',
    },
    stella: {
      title: 'Stella',
      tagline: 'Minimal web craft & quiet luxury',
      task:
        'Express brand character through restrained layout and pacing — breathable space, tactile contrast, restrained motion.',
      solution:
        'Typography choreography and calibrated spacing conveying premium cues. Lightweight interaction layer with tasteful easing. Lightweight assets enabling instant paints. Responsive behaviour as polished mobile as widescreen desktops.',
      stack: 'HTML5 · CSS3 · JavaScript (UI animation)',
      linkLabel: 'View live',
    },
    barDinnerVitosha: {
      title:
        'Digital refresh for Bar & Dinner on Vitosha Boulevard',
      tagline: 'Sofia · bar & dinner · Vitosha Blvd',
      task:
        'Ship a contemporary web interface for one of Sofia’s most recognisable venues — translating the interior story (brick, copper, neon glow) onto every device screen.',
      solution:
        'Visual identity: a deep dark theme built around “Patina Copper” and “Graphite”. UX/UI: multilingual interactive menu with smooth navigation tuned for fast first paint. Architecture: lightweight single‑page app structure for instant response on mobile.',
      stack: 'SPA · HTML5 · CSS3 · JavaScript',
      linkLabel: 'Live soon',
    },
    blackLabelCoffee: {
      title: 'Black Label Coffee House & Bakery',
      tagline:
        'Neo‑Noir Gothic Coffee Cult · Sofia · digital by New Era Agency',
      task:
        'Digital Agency: New Era Agency. The site channels underground Tokyo at night — premium coffee meets a “night city” aesthetic. A refuge from the everyday in deep shadow and neon: the Neo‑Noir Gothic Coffee Cult concept for a Sofia coffee house & bakery.',
      solution:
        'Design system — The Void: #000 so content feels suspended. Vibrant Neon: #00FF41 / #39FF14 on CTAs, kanji, and interactive lines. Warm Wood: #3E2723 for coffee‑toned calm. Type: Oswald / Anton headlines, JetBrains Mono for terminal body copy. Atmosphere: vertical kanji (e.g. 珈琲), “skele‑rista” 3D baristas, flickering neon on links, light glitch on headings, smooth scroll, and a subtle brown‑tinted matrix rain.',
      stack: 'HTML5 · CSS3 · JavaScript',
      linkLabel: 'View live',
    },
    mistralCafe: {
      title: 'Mistral Cafe',
      tagline: 'Welcoming coastal digital hospitality',
      task:
        'Translate on‑site ambience into pixels while keeping utility obvious — patrons find reservations, menus, and hours effortlessly.',
      solution:
        'Photography‑led pacing with skim‑friendly typography. Responsive menu optimised for phones used table‑side and on the waterfront promenade. One‑tap anchors for contacts / hours / menu. Lean JS footprint translating into fast paints.',
      stack: 'HTML5 · CSS3 · JavaScript',
      linkLabel: 'View live',
    },
    mistralPizza: {
      title: 'Mistral Pizza',
      tagline: 'Crave‑worthy landing for takeaway & delivery',
      task:
        'Make the homepage sell flavour within seconds — crave photography, unmistakable hierarchy, decisive CTAs.',
      solution:
        'Product grids that read like plating inspiration. Reduced nav depth for frantic dinner decisions. Responsive grid equally confident on desktops and sweaty‑palmed mobile thumbs. Tweaked cascade + optimised JS gifting strong PageSpeed/Lighthouse vibes.',
      stack: 'HTML5 · CSS3 (Flexbox · Grid) · JavaScript',
      linkLabel: 'View live',
    },
    sweetFantasy: {
      title: 'Sweet Fantasy',
      tagline: 'Landing for dessert obsessions',
      task:
        'Feel indulgent instantly — luscious visuals plus calm motion signalling boutique craft without heaviness.',
      solution:
        'Layered confection photography with editorial rhythm across breakpoints — critical because guests arrive from instagram stories. Lightweight bundle + conscientious typography keep scroll silky on mid‑range phones.',
      stack: 'HTML5 · CSS3 (Flexbox · Grid) · JavaScript',
      linkLabel: 'View live',
    },
    cakery: {
      title: 'Cakery',
      tagline: 'Modern web application for artisan pastry',
      task:
        'Marry instantaneous UI response with mouth‑watering visuals using a contemporary stack geared for iterative growth.',
      solution:
        'Global edge delivery via Vercel. Modular React / Next primitives ready for cart/checkout layers later. Behaviour closer to SPA than static leaflet. Media pipeline tuned — crisp tiers with minimal payloads.',
      stack: 'React · Next.js · Tailwind CSS · Vercel',
      linkLabel: 'View live',
    },
  },
}

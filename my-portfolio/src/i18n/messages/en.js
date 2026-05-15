/** @typedef {typeof import('./ru.js').ru} Messages */

/** @type {Messages} */
export const en = {
  nav: {
    brand: 'DevEra agency',
    projects: 'Work',
    contact: 'Contact',
    about: 'About',
    github: 'GitHub',
    language: 'Language',
    pricing: 'Pricing',
  },
  hero: {
    badge: 'DevEra agency · open for projects',
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
  pricing: {
    title: 'Pricing',
    lead:
      'Starter packages — scope and timeline are always tailored to your brief.',
    colPackage: 'Package',
    colIncludes: "What's included",
    colPrice: 'Price',
    rows: [
      {
        name: 'Basic',
        includes: 'One-page brochure site',
        price: '200€',
      },
      {
        name: 'Standard',
        includes: 'Site + SEO setup + Google Maps',
        price: '300€',
      },
      {
        name: 'Premium',
        includes: 'Site + SEO + booking form + 1 month support',
        price: '400€',
      },
    ],
  },
  footer: {
    title: "Let's talk",
    lead:
      'Tell us about your brand, goals, and timeline — we’ll reply with direction and timings.',
    instagramLabel: 'Instagram',
    phoneLabel: 'Phone',
    note: ({ year }) =>
      `© ${year} DevEra agency — React & Tailwind`,
  },
  contactForm: {
    badge: 'Concierge',
    title: 'Leave a brief',
    hint:
      'We read every message — expect a thoughtful reply within one business day.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@brand.com',
    messagePlaceholder: 'Project scope, venue, timeline…',
    submit: 'Send message',
    sending: 'Sending...',
    successTitle: 'Request submitted!',
    successBody: 'We’ll get back to you shortly.',
    errorTitle: 'Something went wrong',
    errorGeneric: 'Please try again in a moment.',
    errorSupabase:
      'Step: database (Supabase). The lead could not be saved.',
    errorEmailJs:
      'Step: EmailJS. The lead is saved in the leads table, but the email was not sent.',
    errorConfigSupabase:
      'Add to .env: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
    errorConfigEmailJs:
      'Add to .env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
    valNameRequired: 'Please enter your name.',
    valNameMin: 'Name looks too short.',
    valEmailRequired: 'Please enter your email.',
    valEmailInvalid: 'Please enter a valid email address.',
    valMessageRequired: 'Please tell us a bit about the project.',
    valMessageMin: 'A few more details help us respond faster.',
    valMessageMax: 'Please shorten your message (max 4000 characters).',
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
      linkLabel: 'View live',
    },
    barDinner88: {
      title: 'Bar & Dinner 88',
      tagline: 'Sofia · Vitosha Blvd · premium digital experience',
      task:
        'Deliver a high-end one-page experience for an elite Vitosha restaurant — translate premium dining into cinematic visuals, fluid motion, and a booking path guests complete in seconds.',
      solution:
        'Luxury dark aesthetic — obsidian base with gold accents and editorial typography. Dynamic menu (breakfast, lunch, dinner, drinks) built for fast scanning on mobile. Tablein integration for real-time reservations under ~60 seconds. Full BG / EN localisation. Parallax and Motion (Framer Motion) for depth without clutter. Map module with a precise Vitosha marker. Implementation: HTML5 + modular app.js, Tailwind for theming velocity, Motion for animation; GitHub Pages delivery targeting fast loads and strong Lighthouse scores.',
      stack: 'HTML5 · Tailwind CSS · Motion · GitHub Pages',
      linkLabel: 'View live',
    },
    opaRestaurant: {
      title: 'Opa! Greek Restaurant',
      tagline: 'Sofia · authentic Greek cuisine · Vitosha Blvd',
      task:
        'Ship a polished one-page landing for a premium Greek restaurant in central Sofia — Mediterranean hospitality, reservations, and menu discovery in a single calm narrative.',
      solution:
        'Visual language: Greek palette with Santorini blue accents, high-contrast typography, and generous negative space for a refined, modern read. Structure: hero with decisive headline + booking/menu CTAs; story block with chef quote and freshness cues; social proof (Google/TripAdvisor, weekly booking counters); tabbed menu across mezze, grill, seafood, and wines; Pinterest-style responsive gallery. Booking flow with date, time, and party size plus a friendly BG confirmation state. Trilingual header (BG / EN / EL); footer with Vitosha 42, hours, and contacts. Built as index.html + app.js + Tailwind for a lightweight, presentation-ready static site.',
      stack: 'HTML5 · Tailwind CSS · JavaScript',
      linkLabel: 'View live',
    },
    blackLabelCoffee: {
      title: 'Black Label Coffee House & Bakery',
      tagline:
        'Neo‑Noir Gothic Coffee Cult · Sofia · digital by DevEra agency',
      task:
        'Digital Agency: DevEra agency. The site channels underground Tokyo at night — premium coffee meets a “night city” aesthetic. A refuge from the everyday in deep shadow and neon: the Neo‑Noir Gothic Coffee Cult concept for a Sofia coffee house & bakery.',
      solution:
        'Design system — The Void: #000 so content feels suspended. Vibrant Neon: #00FF41 / #39FF14 on CTAs, kanji, and interactive lines. Warm Wood: #3E2723 for coffee‑toned calm. Type: Oswald / Anton headlines, JetBrains Mono for terminal body copy. Atmosphere: vertical kanji (e.g. 珈琲), “skele‑rista” 3D baristas, flickering neon on links, light glitch on headings, smooth scroll, and a subtle brown‑tinted matrix rain.',
      stack: 'HTML5 · CSS3 · JavaScript',
      linkLabel: 'View live',
    },
    betterSpecialtyCoffee: {
      title: 'Better Specialty Coffee',
      tagline: 'Sofia · specialty slow bar · premium shop & immersive ritual',
      task:
        'A high‑tech digital platform for people serious about coffee: merge a premium storefront with the atmosphere of an immersive slow bar, and communicate uncompromising quality from farm to cup.',
      solution:
        'Philosophy “Coffee till I Die” — Edgy Sophistication: dark academia and street culture instead of generic bright café clichés. Palette: deep black (#000), bone‑white type (#FFFFFF), forest‑green accents. Mascot: stylized skeleton baristas framing brewing as timeless craft. Swiss minimalist UI — strict grid, generous space, editorial imagery. Product engine: Bean Matrix (sensorial bean search — acidity, sweetness, body, process, elevation), SCA 80+ transparency from named farm to roast date, Integrated Brewing Intelligence (V60, AeroPress, Espresso) with live ratio calculators, Coffee Concierge subscriptions. Stack tuned for LCP < 1.5s: Next.js App Router, Tailwind, Shopify Storefront API, Sanity CMS, Vercel Edge. Active Phase 1 MVP; loyalty program “The Bone Club” in development.',
      stack: 'Next.js · Tailwind CSS · Shopify · Sanity · Vercel',
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

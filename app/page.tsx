"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CustomCursor, type CursorVariant } from "@/components/custom-cursor";
import { useI18n } from "@/components/i18n-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { LocationSection } from "@/components/location-section";
import { MehanaBookingForm } from "@/components/mehana-booking-form";
import { RevealSection } from "@/components/reveal-section";
import {
  MENU_CATEGORY_ORDER,
  MENU_ITEMS,
  type MenuCategory,
  type MenuItem,
} from "@/lib/mehana-menu-data";

const GALLERY: {
  src: string;
  alt: string;
  caption: string;
  initialX: number;
  initialY: number;
  initialRotate: number;
  zIndex: number;
}[] = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Charcoal grill with meat and vegetables — craftsmanship of the grill at Mehana Manastira Sveti Vlas, Dinevi Marina",
    caption: "Grill",
    initialX: -280,
    initialY: -40,
    initialRotate: -8,
    zIndex: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh seafood platter by the water — Mehana Manastira Sveti Vlas marina dining, Sveti Vlas",
    caption: "Sea & catch",
    initialX: -80,
    initialY: -80,
    initialRotate: 3,
    zIndex: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    alt: "Stone terrace and warm evening light — traditional Bulgarian mehana atmosphere at Dinevi Marina",
    caption: "Terrace",
    initialX: 120,
    initialY: -20,
    initialRotate: -4,
    zIndex: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    alt: "Shared table with wine and salads — quiet luxury dining at Mehana Manastira, Sveti Vlas",
    caption: "The table",
    initialX: 300,
    initialY: -60,
    initialRotate: 7,
    zIndex: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Interior beams and soft lamplight — monastery-inspired mehana interior, Mehana Manastira Sveti Vlas",
    caption: "Interior calm",
    initialX: -200,
    initialY: 160,
    initialRotate: 5,
    zIndex: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    alt: "Yachts and calm marina water at dusk — Dinevi Marina beside Mehana Manastira Sveti Vlas",
    caption: "Dinevi Marina",
    initialX: 60,
    initialY: 140,
    initialRotate: -6,
    zIndex: 6,
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=max&w=1920&q=85";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=max&w=1200&q=80";

/* ─── Draggable photo (Aceternity-style stack, Framer Motion) ─── */

function DraggableCard({
  src,
  alt,
  caption,
  initialX = 0,
  initialY = 0,
  initialRotate = 0,
  zIndex = 1,
  onGalleryPointer,
}: {
  src: string;
  alt: string;
  caption?: string;
  initialX?: number;
  initialY?: number;
  initialRotate?: number;
  zIndex?: number;
  onGalleryPointer?: (active: boolean) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentZ, setCurrentZ] = useState(zIndex);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const springX = useSpring(x, { stiffness: 165, damping: 46, mass: 1.05 });
  const springY = useSpring(y, { stiffness: 165, damping: 46, mass: 1.05 });
  const rotateZ = useTransform([springX, springY], ([latestX, latestY]) => {
    return initialRotate + (latestX as number) * 0.015;
  });

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.06}
      data-cursor="gallery"
      style={{ x: springX, y: springY, rotateZ, zIndex: currentZ, position: "absolute" }}
      onDragStart={() => {
        setIsDragging(true);
        setCurrentZ(100);
      }}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ scale: 1.03, cursor: "grabbing" }}
      onPointerEnter={() => onGalleryPointer?.(true)}
      onPointerLeave={() => onGalleryPointer?.(false)}
      className="cursor-grab touch-none select-none"
    >
      <div
        className={`overflow-hidden rounded-[1rem] border-[3px] border-white/90 bg-alabaster shadow-2xl ring-1 ring-espresso/5 transition-[box-shadow] duration-500 ${
          isDragging ? "shadow-[0_32px_96px_rgba(45,27,20,0.22)]" : ""
        }`}
        style={{ width: 260, height: 340 }}
      >
        <div className="relative h-full w-full">
          <Image src={src} alt={alt} fill className="object-cover" sizes="260px" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-espresso/65 via-espresso/25 to-transparent" />
          {caption ? (
            <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/35 bg-white/18 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-alabaster [text-shadow:0_1px_2px_rgba(45,27,20,0.45)]">
                {caption}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Menu: bento-style side drawer ─── */

function MenuBentoDrawer({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[120]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        aria-label="Затвори детайлите за ястието"
        className="absolute inset-0 bg-espresso/35 backdrop-blur-[3px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={`mehana-menu-${item.id}-title`}
        className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col overflow-hidden border-l border-espresso/10 bg-alabaster/90 shadow-[-32px_0_120px_rgba(45,27,20,0.14)] backdrop-blur-2xl md:max-w-xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 42, mass: 0.92 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-fog/35 px-6 py-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.32em] text-stone">
            Mehana Manastira
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-fog/70 px-4 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-espresso transition hover:border-espresso hover:bg-alabaster-dark"
          >
            Затвори
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-8">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 rounded-[1.35rem] border border-fog/25 bg-gradient-to-br from-alabaster-dark/90 via-alabaster to-alabaster-dark/50 p-7 shadow-inner">
              <h2
                id={`mehana-menu-${item.id}-title`}
                className="font-display text-balance text-2xl tracking-[0.08em] text-espresso sm:text-[1.85rem] sm:leading-snug md:text-3xl md:tracking-[0.1em]"
              >
                {item.name}
              </h2>
              <p className="mt-3 font-body text-lg leading-snug text-stone">{item.nameBG}</p>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-12 sm:grid-cols-5">
              <div className="col-span-1 rounded-2xl border border-espresso/15 bg-espresso px-5 py-5 text-alabaster shadow-md sm:col-span-2">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-amber">
                  Цена
                </p>
                <p className="mt-2 font-mono text-3xl tracking-tight md:text-4xl">
                  €{item.price.toFixed(2)}
                </p>
              </div>
              <div className="col-span-1 rounded-2xl border border-fog/30 bg-white/55 px-5 py-5 shadow-sm backdrop-blur-md sm:col-span-3">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-stone">
                  Порция
                </p>
                <p className="font-display mt-2 text-xl tracking-[0.06em] text-espresso">
                  {item.weight}
                </p>
                {item.isPopular ? (
                  <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-amber-deep">
                    Предпочитано от гостите
                  </p>
                ) : null}
              </div>
            </div>

            <div className="col-span-12 rounded-[1.25rem] border border-fog/20 bg-alabaster-dark/35 p-6 backdrop-blur-sm">
              <p className="text-justify font-body text-[1.08rem] leading-[1.8] text-espresso/92">
                {item.description}
              </p>
            </div>

            <div className="col-span-12">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-stone">
                Състав
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {item.ingredients.map((ing, i) => (
                  <div
                    key={ing}
                    className={`rounded-xl border border-fog/25 bg-alabaster/85 px-4 py-3.5 font-mono text-[0.78rem] font-medium leading-snug tracking-tight text-espresso shadow-[0_2px_12px_rgba(45,27,20,0.06)] ${
                      i === 0
                        ? "border-amber/35 bg-gradient-to-br from-amber/12 to-alabaster sm:col-span-2"
                        : ""
                    }`}
                  >
                    {ing}
                  </div>
                ))}
              </div>
            </div>

            {item.allergens?.length ? (
              <div className="col-span-12 rounded-xl border border-amber/30 bg-amber/12 px-5 py-4">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-espresso/75">
                  Алергени
                </p>
                <p className="mt-1.5 font-body text-[0.95rem] text-espresso/90">
                  {item.allergens.join(" · ")}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

/* ─── Page ─── */

export default function HomePage() {
  const { messages: m, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenuCat, setActiveMenuCat] = useState<MenuCategory>("salads");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = MENU_CATEGORY_ORDER.map((c) =>
      document.getElementById(`menu-${c}`),
    ).filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = hit?.target?.id;
        if (id?.startsWith("menu-")) {
          setActiveMenuCat(id.replace("menu-", "") as MenuCategory);
        }
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: [0, 0.12, 0.25] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main id="main-content">
        {/* Header */}
        <header
          className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
            scrolled
              ? "border-b border-fog/40 bg-alabaster/92 shadow-sm backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <Link
              href="#hero"
              className={`font-display text-xl tracking-[0.06em] transition-colors sm:text-2xl sm:tracking-[0.08em] ${
                scrolled ? "text-espresso" : "text-alabaster"
              }`}
            >
              Mehana Manastira
            </Link>
            <nav
              aria-label={m.nav.aria}
              className={`hidden items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] lg:flex ${
                scrolled ? "text-espresso" : "text-alabaster"
              }`}
            >
              <Link href="#story" className="hover:text-amber">
                {m.nav.story}
              </Link>
              <Link href="#menu" className="hover:text-amber">
                {m.nav.menu}
              </Link>
              <Link href="#gallery" className="hover:text-amber">
                {m.nav.gallery}
              </Link>
              <Link href="#location" className="hover:text-amber">
                {m.nav.location}
              </Link>
              <Link href="#booking" className="hover:text-amber">
                {m.nav.booking}
              </Link>
              <Link href="#contacts" className="hover:text-amber">
                {m.nav.contacts}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <div className={scrolled ? "" : "brightness-110"}>
                <LanguageToggle />
              </div>
              <Link
                href="#booking"
                onPointerEnter={() => setCursorVariant("cta")}
                onPointerLeave={() => setCursorVariant("default")}
                className="rounded-full bg-amber px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-espresso shadow-[0_0_40px_rgba(253,186,116,0.25)] transition hover:bg-amber-deep"
              >
                {m.nav.reserve}
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 grain">
            <Image
              src={HERO_IMAGE}
              alt="Waterfront evening at Dinevi Marina — approach to Mehana Manastira Sveti Vlas, traditional Bulgarian mehana on the first marina line"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/55 to-espresso/80" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14 } },
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="font-mono text-[0.72rem] uppercase tracking-[0.35em] text-amber"
              >
                Dinevi Marina · Sveti Vlas
              </motion.p>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="font-display mt-6 text-balance text-4xl leading-[1.05] tracking-[0.06em] text-alabaster sm:text-6xl sm:tracking-[0.08em] md:text-7xl md:tracking-[0.1em]"
              >
                Still waters.
                <br />
                Live coals.
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mx-auto mt-6 max-w-2xl font-body text-lg italic text-fog sm:text-xl"
              >
                Monastery stones meet sea air — Mehana Manastira holds space for
                those who moor here and choose tradition without exaggeration.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="#booking"
                  onPointerEnter={() => setCursorVariant("cta")}
                  onPointerLeave={() => setCursorVariant("default")}
                  className="rounded-full bg-amber px-8 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-espresso hover:bg-amber-deep"
                >
                  Поканете маса
                </Link>
                <Link
                  href="#menu"
                  className="rounded-full border border-alabaster/50 px-8 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-alabaster hover:border-amber hover:text-amber"
                >
                  Менюто
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              aria-hidden
              className="mt-24 flex justify-center"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-fog/80">
                Scroll
              </span>
            </motion.div>
          </div>
        </section>

        {/* Our story + guest journey */}
        <section id="story" className="bg-alabaster-dark/50 py-24 sm:py-28">
          <RevealSection className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone">
                Mehana Manastira Sveti Vlas
              </p>
              <h2 className="font-display mt-4 text-balance text-3xl tracking-[0.06em] text-espresso sm:text-4xl sm:tracking-[0.08em] md:text-[2.75rem] md:tracking-[0.1em]">
                A monastery calm above the marina thread
              </h2>
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:text-amber mt-8 text-justify font-body text-[1.125rem] leading-[1.85] text-espresso/90">
                On the first line of Dinevi Marina, white arches and seasoned
                timber hold an unhurried room apart from the promenade’s bright
                noise. We inherit the mehana’s monastic patience: cured beams,
                stone underfoot, and a kitchen that regards the grill as a
                discipline — measured heat, respected cuts, fish that tasted the
                Black Sea that morning when the boats allow.
              </p>
              <p className="mt-6 text-justify font-body text-[1.125rem] leading-[1.85] text-espresso/90">
                For guests who arrive by yacht or by quiet intention, this is
                where Bulgarian tradition reads as restraint — no spectacle, only
                craft, salt breeze through open terraces, and the composed calm of
                a harbor at rest. An evening here should feel privately yours.
              </p>
              <blockquote className="mt-10 border-l-2 border-amber pl-6 font-display text-xl tracking-[0.04em] text-espresso/85 sm:text-2xl sm:tracking-[0.06em]">
                “The grill remembers; the marina waits. Between them, the table.”
              </blockquote>
            </div>
            <div className="relative">
              <div className="arch-frame relative aspect-[4/5] overflow-hidden shadow-xl">
                <Image
                  src={STORY_IMAGE}
                  alt="Stone architecture and warm facade — visual cue for Mehana Manastira monastery-inspired mehana setting at Sveti Vlas marina"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>
          </RevealSection>
        </section>
        {/* Menu */}
        <section id="menu" className="py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RevealSection>
              <div className="max-w-2xl">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone">
                  {m.menu.intro}
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-[0.06em] text-espresso sm:text-4xl sm:tracking-[0.08em]">
                  {m.menu.title}
                </h2>
                <p className="mt-4 font-body text-stone">{m.menu.subtitle}</p>
              </div>
            </RevealSection>

            <nav
              aria-label={m.menu.categoryNavAria}
              className="sticky top-[4.75rem] z-40 -mx-2 mt-10 border-b border-fog/35 bg-alabaster/90 px-2 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-alabaster/78 sm:mx-0 sm:rounded-none"
            >
              <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
                {MENU_CATEGORY_ORDER.map((cat) => {
                  const active = activeMenuCat === cat;
                  return (
                    <a
                      key={cat}
                      href={`#menu-${cat}`}
                      className={`shrink-0 rounded-full px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] transition ${
                        active
                          ? "bg-espresso text-alabaster shadow-md"
                          : "bg-alabaster-dark text-stone hover:text-espresso"
                      }`}
                    >
                      {m.menu.categories[cat]}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="mt-8 space-y-16">
              {MENU_CATEGORY_ORDER.map((cat) => {
                const items = MENU_ITEMS.filter((i) => i.category === cat);
                return (
                  <section
                    key={cat}
                    id={`menu-${cat}`}
                    className="scroll-mt-[6.5rem] sm:scroll-mt-[7.25rem]"
                  >
                    <h3 className="font-display border-b border-fog/40 pb-3 text-2xl tracking-[0.07em] text-espresso">
                      {m.menu.categories[cat]}
                    </h3>
                    <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                      {items.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => setSelectedItem(item)}
                            className="group flex w-full flex-col rounded-2xl border border-fog/60 bg-alabaster p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-amber/50 hover:shadow-md"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                {item.isPopular ? (
                                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-amber-deep">
                                    {m.menu.popular}
                                  </span>
                                ) : null}
                                <h4 className="font-display mt-1 text-xl tracking-[0.04em] text-espresso">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-stone">{item.nameBG}</p>
                              </div>
                              <span className="font-mono text-lg text-espresso">
                                €{item.price.toFixed(2)}
                              </span>
                            </div>
                            <p className="mt-3 font-mono text-[0.72rem] text-fog">{item.weight}</p>
                            <p className="mt-2 line-clamp-2 font-body text-sm text-stone">
                              {item.description}
                            </p>
                            <span className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-amber-deep group-hover:text-espresso">
                              {m.menu.ingredientsCta}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="gallery"
          className="border-y border-fog/50 bg-alabaster-dark/40 py-24 sm:py-28"
        >
          <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl tracking-[0.06em] text-espresso sm:text-4xl sm:tracking-[0.08em]">
              The room in fragments
            </h2>
            <p className="mt-3 max-w-xl font-body text-stone">
              Плъзнете картите — настроение от кухнята, марината и вечерния
              пристанищен ред. Снимките са ориентировъчни; в Mehana Manastira светлината е винаги жива.
            </p>
            <div className="relative mx-auto mt-16 h-[560px] max-w-5xl overflow-visible sm:h-[620px]">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-dashed border-fog/50" />
              {GALLERY.map((img, i) => (
                <DraggableCard
                  key={i}
                  {...img}
                  onGalleryPointer={(active) =>
                    setCursorVariant(active ? "gallery" : "default")
                  }
                />
              ))}
            </div>
          </RevealSection>
        </section>

        <LocationSection />

        {/* Booking */}
        <section id="booking" className="py-24 sm:py-28">
          <RevealSection className="mx-auto max-w-3xl px-4 sm:px-6">
            <MehanaBookingForm
              key={locale}
              onCursorCTAEnter={() => setCursorVariant("cta")}
              onCursorCTALeave={() => setCursorVariant("default")}
            />
          </RevealSection>
        </section>
        <footer id="contacts" className="border-t border-fog/50 bg-espresso py-20 text-alabaster">
          <RevealSection
            className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3"
            y={28}
          >
            <div>
              <p className="font-display text-2xl tracking-[0.08em]">Mehana Manastira</p>
              <p className="mt-3 font-body text-fog/90">{m.footer.tagline}</p>
            </div>
            <div className="font-mono text-sm">
              <p className="uppercase tracking-widest text-amber">{m.footer.address}</p>
              <p className="mt-2 text-fog/90">{m.location.address}</p>
              <p className="mt-6 uppercase tracking-widest text-amber">{m.footer.link}</p>
              <p className="mt-2">
                <a href="tel:+359XXXXXXXXX" className="text-fog/90 hover:text-amber">
                  +359 XXX XXX XXX
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:reservations@mehana-manastira.example"
                  className="text-fog/90 hover:text-amber"
                >
                  reservations@mehana-manastira.example
                </a>
              </p>
            </div>
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-amber">
                {m.footer.hours}
              </p>
              <p className="mt-2 text-fog/90">{m.location.hours}</p>
              <p className="text-fog/70">{m.location.hoursKitchen}</p>
            </div>
          </RevealSection>
          <div className="mx-auto mt-14 max-w-6xl px-4 text-center sm:px-6">
            <Link
              href="#location"
              className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-amber hover:text-alabaster"
            >
              {m.footer.mapLink}
            </Link>
            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-fog/60">
              © {new Date().getFullYear()} Mehana Manastira Sveti Vlas · {m.footer.rights}
            </p>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {selectedItem ? (
          <MenuBentoDrawer item={selectedItem} onClose={() => setSelectedItem(null)} />
        ) : null}
      </AnimatePresence>
      <CustomCursor variant={cursorVariant} />
    </>
  );
}

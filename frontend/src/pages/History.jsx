import { Leaf, Settings2, ShieldCheck, Package } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const EZ = "cubic-bezier(0.22, 1, 0.36, 1)";

const STORY_IMG =
  "https://images.unsplash.com/photo-1683858222142-e5596d680fe3?auto=format&fit=crop&w=900&q=80";

const HERITAGE_TICKER = [
  "Est. Kigali · Rwanda",
  "1,800m+ Elevation",
  "100% Hand-Picked",
  "Farm to Cup",
  "Pure Arabica Coffee",
  "Single-Origin Tea",
  "Highland Heritage",
  "Sustainable Farming",
];

const JOURNEY_STEPS = [
  {
    number: "01",
    icon: Leaf,
    title: "Highland Harvest",
    desc: "In the cool, misty mornings of Rwanda's highlands, our skilled farmers hand-select only the finest tea leaves and coffee cherries. Each picking is timed to perfection, ensuring optimal flavour development at elevations above 1,800 metres.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Expert Processing",
    desc: "At our modern facility, traditional techniques meet contemporary precision. Our master processors oversee every stage — from withering and rolling to fermentation and drying — ensuring consistent quality in every batch.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Every batch is rigorously tested for flavour profile, aroma, colour, and purity before it leaves our facility. Only products that meet our exacting standards carry the Damarara name.",
  },
  {
    number: "04",
    icon: Package,
    title: "Refined Packaging",
    desc: "Each product is thoughtfully packaged to preserve freshness and purity. Our packaging reflects the full journey — from the highland farms to your table — with elegant simplicity and sustainable materials.",
  },
];

/* Decorative auto-rotating ring */
function HeaderRing() {
  const r = 90;
  const cx = 100;
  const cy = 100;
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
      style={{ animation: "rotate-ring 22s linear infinite" }}
    >
      <circle
        cx={cx} cy={cy} r={r}
        fill="none" stroke="#e07748"
        strokeWidth="1" strokeOpacity="0.3"
        strokeDasharray="4 10"
      />
      {[0, 120, 240].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={cx + r * Math.sin(rad)}
            cy={cy - r * Math.cos(rad)}
            r="3.5" fill="#e07748" fillOpacity="0.55"
          />
        );
      })}
    </svg>
  );
}

export default function History() {
  useReveal();

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{ background: "radial-gradient(ellipse at 60% 0%, #2a1508 0%, #1a0e08 40%, #110a06 100%)" }}
    >
      {/* Warm glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-130 w-130 rounded-full bg-[#e07748]/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-20 h-105 w-105 rounded-full bg-[#cc5832]/8 blur-[110px]" />
        <div className="absolute bottom-10 left-10 h-95 w-120 rounded-full bg-[#e07748]/7 blur-[110px]" />
      </div>

      <div className="relative z-10">

        {/* ══ Page header ══════════════════════════════════════════════ */}
        <div className="relative">

          {/* Auto-rotate ring decoration — top left of header */}
          <div className="pointer-events-none absolute left-6 top-28 h-24 w-24 opacity-20 md:h-40 md:w-40">
            <HeaderRing />
          </div>

          {/* Header text exits as section scrolls past viewport (view() animation-range) */}
          <div className="section-hero-exit mx-auto max-w-3xl px-6 pt-36 pb-16 text-center md:px-10">

            {/* Eyebrow — smooth blur entrance */}
            <span
              className="mb-5 inline-flex items-center gap-3 font-serif text-base italic font-semibold text-[#e07748]"
              style={{ animation: `blur-in 1s ${EZ} 0.1s both` }}
            >
              <span className="h-px w-6 bg-[#e07748]" />
              Rooted in Rwanda
              <span className="h-px w-6 bg-[#e07748]" />
            </span>

            {/* Heading — fade-up */}
            <h1
              className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              style={{ animation: `fade-up-hero 0.9s ${EZ} 0.28s both` }}
            >
              Our Heritage
            </h1>

            {/* Divider — bar-expand */}
            <div
              className="mx-auto mt-5 mb-8 h-0.75 bg-[#e07748]/70"
              style={{ animation: `bar-expand 0.9s ${EZ} 0.45s both` }}
            />

            {/* Description — fade-up staggered */}
            <p
              className="text-[17px] leading-relaxed text-[#cfc7c9]"
              style={{ animation: `fade-up-hero 0.9s ${EZ} 0.6s both` }}
            >
              A story rooted in Rwanda's highland farms, nurtured by tradition,
              and refined through craftsmanship.
            </p>
          </div>
        </div>

        {/* ══ Heritage ticker — horizontal scroll animation ═══════════ */}
        <div className="overflow-hidden border-y border-[#e07748]/10 py-3">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "ticker 26s linear infinite" }}
          >
            {[...HERITAGE_TICKER, ...HERITAGE_TICKER].map((item, i) => (
              <span key={i} className="flex shrink-0 items-center gap-8 px-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a89b9a]">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#e07748]/40" />
              </span>
            ))}
          </div>
        </div>

        {/* ══ Two columns ══════════════════════════════════════════════ */}
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:flex lg:items-start lg:gap-20">

          {/* LEFT — Heritage story (sticky on desktop, slides in from left)
              NO nested data-reveal inside to avoid opacity compounding */}
          <div
            data-reveal="left"
            className="w-full lg:sticky lg:top-32 lg:w-[45%]"
          >
            <span className="mb-5 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
              <span className="h-px w-6 bg-[#e07748]" />
              The Story
            </span>

            <p className="mb-6 text-[16px] leading-relaxed text-[#d4cbc8]">
              <span className="float-left mr-3 font-serif text-7xl font-bold leading-[0.8] text-[#e07748]">
                I
              </span>
              n the misty highlands of Rwanda, where the morning light touches
              the land with golden fingers, our story begins. Generations of
              farmers have tended these fertile hills, cultivating tea and coffee
              with knowledge passed down through time.
            </p>

            {/* Story image — image reveal (clip-path left→right wipe, parent-triggered) */}
            <div className="mb-6 overflow-hidden rounded-xl">
              <img
                src={STORY_IMG}
                alt="Rwanda highland farms"
                className="product-img h-52 w-full object-cover md:h-64"
              />
            </div>

            <p className="mb-6 text-[16px] leading-relaxed text-[#a89b9a]">
              Damarara represents more than a beverage. It embodies the spirit
              of Rwandan soil, the dedication of our farmers, and the heritage
              of a nation. Each leaf is hand-picked at the peak of its
              perfection — a tradition we have upheld since our founding.
            </p>

            <p className="mb-8 text-[16px] leading-relaxed text-[#a89b9a]">
              From volcanic-rich soils above 1,800 metres to our state-of-the-art
              processing facility, every step of our process is guided by one
              principle: quality is not an event — it is a culture. We carry
              Rwanda's finest to every cup, everywhere.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#e07748]/15 pt-8">
              {[
                { value: "1,800m+", label: "Elevation" },
                { value: "100%",    label: "Hand-Picked" },
                { value: "Rwanda",  label: "Origin" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-xl font-bold text-[#e07748]">{value}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest text-[#a89b9a]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Journey timeline
              No wrapper data-reveal so steps can each reveal independently
              (avoids nested data-reveal opacity issue) */}
          <div className="mt-16 w-full lg:mt-0 lg:w-[55%]">

            {/* "The Journey" header — smooth blur reveal */}
            <div data-reveal="blur" className="mb-12">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">The Journey</h2>
              <p className="mt-3 text-[15px] text-[#a89b9a]">
                From highland harvest to your cup — every step handled with care.
              </p>
            </div>

            {/* Timeline — each step reveals with fade-up + stagger */}
            <div className="relative pl-14">
              <div className="absolute left-[2.6rem] top-2 h-[calc(100%-1rem)] w-px bg-[#e07748]/20" />

              <div className="flex flex-col gap-14">
                {JOURNEY_STEPS.map(({ number, icon: Icon, title, desc }, i) => (
                  <div
                    key={number}
                    data-reveal="up"
                    style={{ transitionDelay: `${i * 110}ms` }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-1.65rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#e07748]/50 bg-[#1a0e08]">
                      <div className="h-2 w-2 rounded-full bg-[#e07748]" />
                    </div>

                    {/* Step number (decorative) */}
                    <p className="mb-1 select-none font-serif text-5xl font-bold leading-none text-[#e07748]/12">
                      {number}
                    </p>

                    {/* Icon + title */}
                    <div className="mb-2 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e07748]/30 bg-[#e07748]/10">
                        <Icon size={15} strokeWidth={1.5} className="text-[#e07748]" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[#e07748]">
                        {title}
                      </h3>
                    </div>

                    <p className="text-[15px] leading-relaxed text-[#a89b9a]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

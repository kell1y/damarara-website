import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import img02 from "../assets/product_images/02.jpeg";
import img07 from "../assets/product_images/07.jpeg";
import { useReveal } from "../hooks/useReveal";

const HERO_IMG =
  "https://images.unsplash.com/photo-1678019940462-490ab4f9579a?auto=format&fit=crop&w=900&q=85";

const TICKER_ITEMS = [
  "Rwanda · Northern Highlands",
  "100% Hand-Picked",
  "Pure Arabica Coffee",
  "Single-Origin Tea",
  "Sustainably Sourced",
  "Farm to Cup",
  "Est. Kigali · Rwanda",
];

const FEATURED = [
  {
    img: img02,
    category: "Coffee",
    badge: "bg-[#e07748]/15 text-[#e07748] border-[#e07748]/30",
    name: "Instant Coffee Jars",
    desc: "Our signature Pure & Elegant instant coffee in 50-cup and 100-cup glass jars — rich in flavour, dissolved in seconds.",
    price: "$14.99",
  },
  {
    img: img07,
    category: "Tea",
    badge: "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
    name: "Damarara Rwanda Tea Bags",
    desc: "Individually wrapped tea bags in the iconic yellow-green Rwanda Tea box — fresh, amber-bright, and gently malty.",
    price: "$9.99",
  },
];

const EZ = "cubic-bezier(0.22, 1, 0.36, 1)";

function RotatingRing() {
  const r = 186;
  const cx = 200;
  const cy = 200;
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ animation: "rotate-ring 30s linear infinite" }}
    >
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#e07748"
        strokeWidth="1"
        strokeOpacity="0.22"
        strokeDasharray="7 13"
      />
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={cx + r * Math.sin(rad)}
            cy={cy - r * Math.cos(rad)}
            r="5"
            fill="#e07748"
            fillOpacity="0.65"
          />
        );
      })}
    </svg>
  );
}

export default function Hero() {
  useReveal();

  return (
    <>
      {/* ════════════════════════════════════════════
          HERO SPLASH
      ════════════════════════════════════════════ */}
      <div
        className="relative flex min-h-screen w-full flex-col overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #2a0e08 0%, #180808 40%, #0f0c11 100%)",
        }}
      >
        {/* Warm glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-125 w-125 rounded-full bg-[#e07748]/10 blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 h-100 w-125 rounded-full bg-[#cc5832]/8 blur-[120px]" />
        </div>

        {/* Main content — exits via CSS scroll-timeline */}
        <div className="hero-scroll-exit relative z-10 flex flex-1 items-center">
          <div className="mx-auto flex w-full max-w-7xl items-center gap-10 px-8 pt-28 pb-10 md:px-14 lg:gap-16">

            {/* LEFT — staggered text entrances */}
            <div className="w-full lg:w-[52%]">
              <p
                className="mb-4 font-serif text-2xl italic font-semibold text-[#e07748] md:text-3xl"
                style={{ animation: `blur-in 1s ${EZ} 0.1s both` }}
              >
                Pure Tea &amp; Coffee
              </p>
              <h1
                className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
                style={{ animation: `fade-up-hero 0.9s ${EZ} 0.28s both` }}
              >
                Taste the Highlands
                <br className="hidden sm:block" />
                in Every Cup!
              </h1>
              <p
                className="mb-10 max-w-md text-[16px] leading-relaxed text-[#cfc7c9]"
                style={{ animation: `fade-up-hero 0.9s ${EZ} 0.46s both` }}
              >
                Hand-picked in Rwanda&apos;s misty highlands and crafted with
                care — every cup carries the richness of volcanic soil and
                generations of farming tradition.
              </p>
              <div
                className="flex flex-wrap gap-4"
                style={{ animation: `fade-up-hero 0.85s ${EZ} 0.62s both` }}
              >
                <Link
                  to="/products"
                  className="rounded-full bg-[#e07748] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#cc5832]/30 transition-transform hover:-translate-y-0.5"
                >
                  Order Now
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#e07748] hover:text-[#e07748]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT — auto-rotate ring + image reveal */}
            <div
              className="relative hidden lg:flex lg:w-[48%] items-center justify-center"
              style={{ animation: `fade-right 0.85s ${EZ} 0.35s both` }}
            >
              <div className="absolute -inset-12">
                <RotatingRing />
              </div>
              <img
                src={HERO_IMG}
                alt="Dramatic coffee cup splash"
                className="relative z-10 w-full max-w-130 object-contain"
                style={{
                  filter: "drop-shadow(0 30px 60px rgba(224,119,72,0.28))",
                  animation: `img-reveal 1.15s ${EZ} 0.5s both`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal ticker — also exits on scroll */}
        <div className="hero-scroll-exit relative z-10 overflow-hidden border-t border-white/8 pb-14">
          <div
            className="flex whitespace-nowrap py-4"
            style={{ animation: "ticker 34s linear infinite" }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="flex shrink-0 items-center gap-10 px-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#e07748]/40" />
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll down"
          className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 transition-colors hover:text-[#e07748]"
          style={{ animation: "bounce-scroll 2s ease-in-out infinite" }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* ════════════════════════════════════════════
          FEATURED PRODUCTS
      ════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#130f12] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">

          {/* Section header — smooth blur reveal */}
          <div data-reveal="blur" className="mb-16 text-center">
            <span className="mb-4 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
              <span className="h-px w-6 bg-[#e07748]" />
              Crafted for your cup
              <span className="h-px w-6 bg-[#e07748]" />
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
            <div className="mx-auto mt-4 h-0.75 w-14 bg-[#e07748]" />
          </div>

          {/* Two featured cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {FEATURED.map(({ img, category, badge, name, desc, price }, i) => (
              <div
                key={name}
                data-reveal={i === 0 ? "left" : "right"}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1a1118] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#1a1118] to-transparent" />

                  {/* Category badge */}
                  <span
                    className={[
                      "absolute top-3 left-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm",
                      badge,
                    ].join(" ")}
                  >
                    {category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="mb-3 font-serif text-xl font-semibold leading-snug text-white">
                    {name}
                  </h3>
                  <p className="mb-6 flex-1 text-[14px] leading-relaxed text-[#a89b9a]">
                    {desc}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#e07748]">
                      {price}
                    </span>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 rounded-full bg-[#e07748] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white shadow shadow-[#cc5832]/30 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#cc5832]/40"
                    >
                      Order Now
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all products CTA */}
          <div data-reveal="up" className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full border border-[#e07748]/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#e07748] transition-all hover:bg-[#e07748]/10 hover:border-[#e07748]"
            >
               View all products
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

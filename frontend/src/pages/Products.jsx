import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import img01 from "../assets/product_images/01.jpeg";
import img02 from "../assets/product_images/02.jpeg";
import img03 from "../assets/product_images/03.jpeg";
import img04 from "../assets/product_images/04.jpeg";
import img05 from "../assets/product_images/05.jpeg";
import img06 from "../assets/product_images/06.jpeg";
import img07 from "../assets/product_images/07.jpeg";
import img08 from "../assets/product_images/08.jpeg";
import img09 from "../assets/product_images/09.jpeg";
import { useReveal } from "../hooks/useReveal";

const EZ = "cubic-bezier(0.22, 1, 0.36, 1)";
const CATEGORIES = ["All", "Coffee", "Tea"];

const PRODUCTS = [
  { img: img01, category: "Coffee", name: "Instant Coffee — Gift Set",          price: "$24.99" },
  { img: img02, category: "Coffee", name: "Instant Coffee Jars",                price: "$14.99" },
  { img: img03, category: "Coffee", name: "Instant Coffee Sachets",             price: "$12.99" },
  { img: img04, category: "Coffee", name: "Dark Roasted Ground Coffee",         price: "$16.99" },
  { img: img05, category: "Coffee", name: "Rwanda Coffee Blend",                price: "$18.99" },
  { img: img06, category: "Coffee", name: "Coffee Yacu — Arabica Beans",        price: "$22.99" },
  { img: img07, category: "Tea",    name: "Damarara Rwanda Tea Bags",           price: "$9.99"  },
  { img: img08, category: "Tea",    name: "Premium Rwandan Tea — Full Range",   price: "$19.99" },
  { img: img09, category: "Tea",    name: "Premium Rwandan Tea — Variety Set",  price: "$24.99" },
];

const BADGE_COLORS = {
  Coffee: "bg-[#e07748]/15 text-[#e07748] border-[#e07748]/30",
  Tea:    "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
};

/* Decorative auto-rotating ring near the section header */
function HeaderRing() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
      style={{ animation: "rotate-ring 20s linear infinite" }}
    >
      <circle
        cx="100" cy="100" r="90"
        fill="none" stroke="#e07748"
        strokeWidth="1" strokeOpacity="0.3"
        strokeDasharray="4 10"
      />
      {[0, 120, 240].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={100 + 90 * Math.sin(rad)}
            cy={100 - 90 * Math.cos(rad)}
            r="3.5" fill="#e07748" fillOpacity="0.55"
          />
        );
      })}
    </svg>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quantities, setQuantities] = useState(
    Object.fromEntries(PRODUCTS.map((p) => [p.name, 0]))
  );

  /* Re-observe when filter changes so newly rendered cards animate in */
  useReveal([activeCategory]);

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const increment = (name) =>
    setQuantities((q) => ({ ...q, [name]: q[name] + 1 }));
  const decrement = (name) =>
    setQuantities((q) => ({ ...q, [name]: Math.max(0, q[name] - 1) }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0c11] text-white">

      {/* ── Scroll progress bar (animation-range: 0% 100%, animation-timeline: scroll()) ── */}
      <div className="scroll-progress fixed top-0 left-0 z-50 h-0.5 w-full bg-linear-to-r from-[#e07748] to-[#cc5832]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-130 w-130 rounded-full bg-[#e07748]/8 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-120 w-120 rounded-full bg-[#cc5832]/7 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-100 w-150 -translate-x-1/2 rounded-full bg-[#e07748]/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10">

        {/* ── Section header — CSS keyframe animations ── */}
        <div className="relative mb-10 text-center">

          {/* Auto-rotate ring decoration (top-right of header) */}
          <div className="pointer-events-none absolute -right-2 top-0 h-28 w-28 -translate-y-1/3 opacity-25 md:h-44 md:w-44">
            <HeaderRing />
          </div>

          {/* Smooth blur entrance on eyebrow */}
          <span
            className="mb-4 inline-flex items-center gap-3 font-serif text-base italic font-semibold text-[#e07748]"
            style={{ animation: `blur-in 1s ${EZ} 0.1s both` }}
          >
            <span className="h-px w-6 bg-[#e07748]" />
            Straight from Rwanda's Northern Hills
            <span className="h-px w-6 bg-[#e07748]" />
          </span>

          {/* Fade-up on heading */}
          <h2
            className="font-serif text-4xl font-bold uppercase tracking-widest md:text-5xl"
            style={{ animation: `fade-up-hero 0.9s ${EZ} 0.28s both` }}
          >
            Our Products
          </h2>

          {/* Bar-expand on divider */}
          <div
            className="mx-auto mt-4 h-0.75 bg-[#e07748]"
            style={{ animation: `bar-expand 0.9s ${EZ} 0.45s both` }}
          />
        </div>

        {/* ── Category filter — horizontal scroll animation on mobile ── */}
        <div
          data-reveal="up"
          className="-mx-6 mb-12 overflow-x-auto px-6 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          <div className="flex w-max items-center gap-3 sm:w-auto sm:justify-center">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat).length;
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300",
                    active
                      ? "bg-[#e07748] text-white shadow shadow-[#cc5832]/30"
                      : "border border-white/10 text-[#a89b9a] hover:border-[#e07748]/40 hover:text-white",
                  ].join(" ")}
                >
                  {cat}
                  <span
                    className={[
                      "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                      active ? "bg-white/20 text-white" : "bg-white/10 text-[#a89b9a]",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ img, category, name, price }, i) => (
            <div
              key={name}
              data-reveal="up"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#130f12] transition-shadow duration-300 hover:shadow-lg hover:shadow-black/40"
            >
              {/* Image — clip-path left→right wipe (parent-triggered .product-img) */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="product-img h-full w-full object-cover group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-[#130f12] to-transparent" />

                {/* Category badge */}
                <span
                  className={[
                    "absolute top-3 left-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm",
                    BADGE_COLORS[category],
                  ].join(" ")}
                >
                  {category}
                </span>

                {/* More-options button (placeholder for backend) */}
                <button
                  aria-label="More options"
                  className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1a1018] shadow transition-transform duration-200 hover:scale-110 hover:bg-white"
                >
                  <MoreHorizontal size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="mb-4 font-serif text-[15px] font-semibold leading-snug text-white">
                  {name}
                </h3>

                {/* Price + quantity counter */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-[#e07748]">
                    {price}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(name)}
                      aria-label="Decrease quantity"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-[#e07748] hover:text-[#e07748]"
                    >
                      <span className="text-base leading-none">−</span>
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-white">
                      {quantities[name]}
                    </span>
                    <button
                      onClick={() => increment(name)}
                      aria-label="Increase quantity"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e07748] text-white shadow shadow-[#cc5832]/30 transition-opacity hover:opacity-90"
                    >
                      <span className="text-base leading-none">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

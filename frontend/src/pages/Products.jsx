import img01 from "../assets/product_images/01.jpeg";
import img02 from "../assets/product_images/02.jpeg";
import img03 from "../assets/product_images/03.jpeg";
import img04 from "../assets/product_images/04.jpeg";
import img05 from "../assets/product_images/05.jpeg";
import img06 from "../assets/product_images/06.jpeg";
import img07 from "../assets/product_images/07.jpeg";
import img08 from "../assets/product_images/08.jpeg";
import img09 from "../assets/product_images/09.jpeg";

const PRODUCTS = [
  {
    img: img01,
    category: "Coffee",
    name: "Instant Coffee — Gift Set",
    desc: "Two premium jars (50 & 100 cups) plus a box — hand-picked highland beans freeze-dried to preserve their bold, smooth character.",
  },
  {
    img: img02,
    category: "Coffee",
    name: "Instant Coffee Jars",
    desc: "Our signature Pure & Elegant instant coffee in 50-cup and 100-cup glass jars — rich in flavour, dissolved in seconds.",
  },
  {
    img: img03,
    category: "Coffee",
    name: "Instant Coffee Sachets",
    desc: "Box of 50 individually wrapped sachets — pure natural coffee, hand-picked and hand-sorted. Perfect for travel or gifting.",
  },
  {
    img: img04,
    category: "Coffee",
    name: "Dark Roasted Ground Coffee",
    desc: "High-quality Arabica beans dark-roasted for a bold, deep cup. Available in 250 g and 500 g resealable bags.",
  },
  {
    img: img05,
    category: "Coffee",
    name: "Rwanda Coffee Blend",
    desc: "A true taste from the land of a thousand hills — available in craft and dark-roasted bags for every brewing style.",
  },
  {
    img: img06,
    category: "Coffee",
    name: "Coffee Yacu — Arabica Beans",
    desc: "\"Coffee Yacu\" (Our Coffee) — single-origin Rwandan Arabica in gold 250 g and 500 g bags. An opportunity not to miss.",
  },
  {
    img: img07,
    category: "Tea",
    name: "Damarara Rwanda Tea Bags",
    desc: "Individually wrapped tea bags in the iconic yellow-green Rwanda Tea box — fresh, amber-bright, and gently malty.",
  },
  {
    img: img08,
    category: "Tea",
    name: "Premium Rwandan Tea — Full Range",
    desc: "The complete tea line: 500 g loose-leaf bag, premium box, and tea-bag display box — pure highland leaves for every occasion.",
  },
  {
    img: img09,
    category: "Tea",
    name: "Premium Rwandan Tea — Variety Set",
    desc: "Showcase set featuring loose-leaf pouch, retail box, individual sachet, and open display box — perfect for gifting.",
  },
];

const BADGE_COLORS = {
  Coffee: "bg-[#e07748]/15 text-[#e07748] border-[#e07748]/30",
  Tea:    "bg-[#cc5832]/15 text-[#f4a96a] border-[#cc5832]/30",
};

export default function Products() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0c11] text-white">

      {/* ── Brand-palette glow blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#e07748]/8 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[#cc5832]/7 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#e07748]/6 blur-3xl" />
      </div>

      {/* ── Page content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10">

        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-3 font-serif text-base italic font-semibold text-[#e07748]">
            <span className="h-px w-6 bg-[#e07748]" />
            Straight from Rwanda's Northern Hills
            <span className="h-px w-6 bg-[#e07748]" />
          </span>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-widest md:text-5xl">
            Our Products
          </h2>
          <div className="mx-auto mt-4 h-0.75 w-16 bg-[#e07748]" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(({ img, category, name, desc }) => (
            <div
              key={name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#130f12] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* subtle gradient fade at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#130f12] to-transparent" />

                {/* Category badge — top right */}
                <span
                  className={[
                    "absolute top-3 right-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm",
                    BADGE_COLORS[category],
                  ].join(" ")}
                >
                  {category}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col items-center px-6 py-6 text-center">
                <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-white">
                  {name}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#a89b9a]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

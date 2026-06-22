import { Leaf, Settings2, ShieldCheck, Package } from "lucide-react";

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

export default function History() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white" style={{ background: "radial-gradient(ellipse at 60% 0%, #2a1508 0%, #1a0e08 40%, #110a06 100%)" }}>

      {/* Warm glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-[#e07748]/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-20 h-[420px] w-[420px] rounded-full bg-[#cc5832]/8 blur-[110px]" />
        <div className="absolute bottom-10 left-10 h-[380px] w-[480px] rounded-full bg-[#e07748]/7 blur-[110px]" />
      </div>

      <div className="relative z-10">

        {/* ── Heritage header ── */}
        <div className="mx-auto max-w-3xl px-6 pt-36 pb-20 text-center md:px-10">
        
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Our Heritage
          </h1>
          <div className="mx-auto mt-5 mb-8 h-px w-24 bg-[#e07748]/50" />
          <p className="text-[17px] leading-relaxed text-[#cfc7c9]">
            A story rooted in Rwanda's highland farms, nurtured by tradition,
            and refined through craftsmanship.
          </p>
        </div>

        {/* ── Two columns: Story left / Journey right ── */}
        <div className="mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:flex lg:items-start lg:gap-20">

          {/* LEFT — Heritage story (sticky) */}
          <div className="w-full lg:sticky lg:top-32 lg:w-[45%]">
            <span className="mb-5 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
              <span className="h-px w-6 bg-[#e07748]" />
              The Story
            </span>

            {/* Drop-cap paragraph */}
            <p className="mb-6 text-[16px] leading-relaxed text-[#d4cbc8]">
              <span className="float-left mr-3 font-serif text-7xl font-bold leading-[0.8] text-[#e07748]">
                I
              </span>
              n the misty highlands of Rwanda, where the morning light touches
              the land with golden fingers, our story begins. Generations of
              farmers have tended these fertile hills, cultivating tea and coffee
              with knowledge passed down through time.
            </p>

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

            {/* Divider stat row */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#e07748]/15 pt-8">
              {[
                { value: "1,800m+", label: "Elevation" },
                { value: "100%", label: "Hand-Picked" },
                { value: "Rwanda", label: "Origin" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-xl font-bold text-[#e07748]">{value}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest text-[#a89b9a]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Journey timeline */}
          <div className="mt-16 w-full lg:mt-0 lg:w-[55%]">

            <div className="mb-12">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">The Journey</h2>
              <p className="mt-3 text-[15px] text-[#a89b9a]">
                From highland harvest to your cup — every step handled with care.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-14">

              {/* Vertical line */}
              <div className="absolute left-[2.6rem] top-2 h-[calc(100%-1rem)] w-px bg-[#e07748]/20" />

              <div className="flex flex-col gap-14">
                {JOURNEY_STEPS.map(({ number, icon: Icon, title, desc }, i) => (
                  <div key={number} className="relative">

                    {/* Dot on the line */}
                    <div className="absolute -left-[1.65rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#e07748]/50 bg-[#1a0e08]">
                      <div className="h-2 w-2 rounded-full bg-[#e07748]" />
                    </div>

                    {/* Faded step number — sits above content */}
                    <p className="mb-1 font-serif text-5xl font-bold leading-none text-[#e07748]/12 select-none">
                      {number}
                    </p>

                    {/* Title + icon */}
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

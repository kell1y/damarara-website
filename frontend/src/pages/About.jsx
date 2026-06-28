import { Compass, Eye, Heart, Leaf, Globe, Award, Users } from "lucide-react";
import founderImg from "../assets/product_images/10.jpeg";
import { useReveal } from "../hooks/useReveal";

const EZ = "cubic-bezier(0.22, 1, 0.36, 1)";

const PILLARS = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "To bring the finest Rwandan tea and coffee to every home — sourced responsibly from our northern highlands, processed with precision, and delivered with pride.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To establish Damarara as a leading symbol of Rwandan excellence — first across East Africa, then on the global stage, representing quality, heritage, and community.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Authenticity, sustainability, and farmer empowerment guide everything we do. Quality is not an event for us — it is a culture, from the seed to the cup.",
  },
];

/* Rotating ring for founder photo — 3 dots at 120° intervals */
function FounderRing() {
  const r = 105;
  const cx = 110;
  const cy = 110;
  return (
    <svg
      viewBox="0 0 220 220"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ animation: "rotate-ring 22s linear infinite" }}
    >
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#e07748"
        strokeWidth="1"
        strokeOpacity="0.28"
        strokeDasharray="5 11"
      />
      {[0, 120, 240].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={cx + r * Math.sin(rad)}
            cy={cy - r * Math.cos(rad)}
            r="4"
            fill="#e07748"
            fillOpacity="0.6"
          />
        );
      })}
    </svg>
  );
}

export default function About() {
  useReveal();

  return (
    <section className="bg-[#0f0c11] text-white">

      {/* ══ 1. Hero image section ══════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden min-h-150 lg:min-h-170 flex items-center">

        {/* Background image — Ken Burns slow zoom */}
        <img
          src="https://images.unsplash.com/photo-1683858222142-e5596d680fe3?auto=format&fit=crop&w=1600&q=80"
          alt="Tea plantation at sunset in the highlands"
          className="absolute inset-0 h-full w-full object-cover origin-center"
          style={{ animation: "ken-burns 18s ease-in-out infinite alternate" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f0c11]/65" />

        {/* Left orange border — bar-height grow animation */}
        <div
          className="absolute left-0 top-0 w-1 bg-[#e07748]"
          style={{ animation: `bar-height 1.4s ${EZ} 0.1s both` }}
        />

        {/* Text content — section-hero-exit: blurs + drifts up as section scrolls off (animation-range via view()) */}
        <div className="section-hero-exit relative z-10 mx-auto w-full max-w-7xl px-10 pt-36 pb-24 md:px-14">
          <div className="max-w-xl">

            {/* Eyebrow — smooth blur entrance */}
            <span
              className="mb-4 inline-flex items-center gap-3 font-serif text-lg italic font-semibold text-[#e07748]"
              style={{ animation: `blur-in 1s ${EZ} 0.15s both` }}
            >
              <span className="h-px w-7 bg-[#e07748]" />
              Who We Are
            </span>

            {/* Heading — fade-up */}
            <h2
              className="font-serif text-4xl font-bold leading-tight md:text-5xl"
              style={{ animation: `fade-up-hero 0.9s ${EZ} 0.32s both` }}
            >
              About Us
            </h2>

            {/* Divider bar — width expand */}
            <div
              className="mt-3 mb-8 h-0.75 bg-[#cc5832]"
              style={{ animation: `bar-expand 0.9s ${EZ} 0.5s both` }}
            />

            {/* Paragraphs — fade-up staggered */}
            <p
              className="text-[16px] leading-relaxed text-[#cfc7c9] mb-5"
              style={{ animation: `fade-up-hero 0.9s ${EZ} 0.6s both` }}
            >
              At Damarara Tea &amp; Coffee Ltd., we believe quality begins with
              the seed. Born from Rwanda&apos;s breathtaking northern hills, we work
              hand in hand with local farmers who share our commitment to
              excellence — nurturing every tea bush and coffee tree with patience,
              care, and pride.
            </p>
            <p
              className="text-[16px] leading-relaxed text-[#cfc7c9]"
              style={{ animation: `fade-up-hero 0.9s ${EZ} 0.74s both` }}
            >
              From volcanic soils and cool highland climates to modern processing
              facilities and carefully designed packaging, every step of our
              journey reflects our dedication to delivering premium, authentic
              Rwandan tea and coffee to homes across Rwanda and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* ══ 2. Founder section ═════════════════════════════════════════ */}
      <div className="bg-[#0f0c11] px-6 py-20 md:px-10">

        {/* Eyebrow — smooth blur scroll-reveal */}
        <p
          data-reveal="blur"
          className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#a89b9a]"
        >
          Meet with the person behind every cup
        </p>

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-[#150f12] px-8 py-10 md:flex md:items-center md:gap-12">

          {/* Left — rotating ring + circular photo reveal */}
          <div
            data-reveal="left"
            className="mb-8 flex shrink-0 justify-center md:mb-0"
          >
            <div className="relative">
              {/* Auto-rotate ring (auto-rotate scroll animation) */}
              <div className="absolute -inset-10 pointer-events-none">
                <FounderRing />
              </div>

              {/* Founder photo — circle expands when parent data-reveal fires */}
              <div
                className="founder-photo relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-[#e07748]/40 ring-offset-2 ring-offset-[#150f12]"
              >
                <img
                  src={founderImg}
                  alt="Damarara Founder & CEO"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right — text content fade-in from right */}
          <div
            data-reveal="right"
            className="flex-1 text-center md:text-left"
          >
            <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
              Founder &amp; CEO
            </h3>
            <p className="mt-1 mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#e07748]">
              Brand Visionary
            </p>
            <p className="mb-7 text-[15px] leading-relaxed text-[#cfc7c9]">
              Leading Damarara&apos;s mission to bring Rwanda&apos;s finest tea and coffee
              to the world — while empowering the local farming communities who
              make every cup possible.
            </p>

            {/* Trait pills — staggered fade-up */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: Leaf,  label: "Sustainability Champion" },
                { icon: Globe, label: "East Africa & Beyond" },
                { icon: Award, label: "Excellence in Every Batch" },
                { icon: Users, label: "Farmer Community Builder" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#1e1619] px-4 py-3"
                >
                  <Icon size={16} strokeWidth={1.5} className="shrink-0 text-[#e07748]" />
                  <span className="text-[13px] font-medium text-[#f1ece8]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ 3. Pillars section ═════════════════════════════════════════ */}
      <div className="border-t border-white/10 bg-[#130f12]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">

          {/* Section header — smooth blur reveal */}
          <div data-reveal="blur" className="mb-14 text-center">
            <span className="mb-3 inline-flex items-center gap-3 font-serif text-sm italic font-semibold text-[#e07748]">
              <span className="h-px w-6 bg-[#e07748]" />
              What drives us
              <span className="h-px w-6 bg-[#e07748]" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">Our Foundation</h2>
          </div>

          {/* Horizontal scroll on mobile / grid on sm+
              (horizontal scroll animation) */}
          <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="flex w-max gap-8 sm:grid sm:w-auto sm:grid-cols-3 sm:gap-12">
              {PILLARS.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 110}ms` }}
                  className="flex w-72 flex-col items-start gap-5 sm:w-auto"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cc5832]/40 bg-[#cc5832]/10">
                    <Icon size={26} strokeWidth={1.5} className="text-[#e07748]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#a89b9a]">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

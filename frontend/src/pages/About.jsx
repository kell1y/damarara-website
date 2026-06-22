import { Link } from "react-router-dom";
import { Compass, Eye, Heart, Leaf, Globe, Award, Users } from "lucide-react";
import founderImg from "../assets/product_images/10.jpeg";

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

export default function About() {
  return (
    <section className="bg-[#0f0c11] text-white">

      {/* Top: full-width image with text overlaid */}
      <div className="relative w-full overflow-hidden min-h-150 lg:min-h-170 flex items-center">

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1683858222142-e5596d680fe3?auto=format&fit=crop&w=1600&q=80"
          alt="Tea plantation at sunset in the highlands"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f0c11]/65" />

        {/* Left border accent — mirrors the screenshot */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#e07748]" />

        {/* Text content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-10 pt-36 pb-24 md:px-14">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-3 font-serif text-lg italic font-semibold text-[#e07748]">
              <span className="h-px w-7 bg-[#e07748]" />
              Who We Are
            </span>

            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              About Us
            </h2>

            <div className="mt-3 mb-8 h-0.75 w-16 bg-[#cc5832]" />

            <p className="text-[16px] leading-relaxed text-[#cfc7c9] mb-5">
              At Damarara Tea &amp; Coffee Ltd., we believe quality begins with
              the seed. Born from Rwanda's breathtaking northern hills, we work
              hand in hand with local farmers who share our commitment to
              excellence — nurturing every tea bush and coffee tree with patience,
              care, and pride.
            </p>
            <p className="text-[16px] leading-relaxed text-[#cfc7c9] mb-10">
              From volcanic soils and cool highland climates to modern processing
              facilities and carefully designed packaging, every step of our
              journey reflects our dedication to delivering premium, authentic
              Rwandan tea and coffee to homes across Rwanda and beyond.
            </p>

          </div>
        </div>
      </div>

      {/* ── Founder section ── */}
      <div className="bg-[#0f0c11] px-6 py-20 md:px-10">

        {/* Eyebrow */}
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#a89b9a]">
          Meet with the person behind every cup
        </p>

        {/* Card */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-[#150f12] px-8 py-10 md:flex md:items-center md:gap-12">

          {/* Left — circular photo */}
          <div className="mb-8 flex shrink-0 justify-center md:mb-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-[#e07748]/40 ring-offset-2 ring-offset-[#150f12]">
              <img
                src={founderImg}
                alt="Damarara Founder & CEO"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
              Founder &amp; CEO
            </h3>
            <p className="mt-1 mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#e07748]">
              Brand Visionary
            </p>
            <p className="mb-7 text-[15px] leading-relaxed text-[#cfc7c9]">
              Leading Damarara's mission to bring Rwanda's finest tea and coffee
              to the world — while empowering the local farming communities who
              make every cup possible.
            </p>

            {/* Trait grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: Leaf,  label: "Sustainability Champion" },
                { icon: Globe, label: "East Africa & Beyond" },
                { icon: Award, label: "Excellence in Every Batch" },
                { icon: Users, label: "Farmer Community Builder" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
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

      {/* Bottom: three pillars */}
      <div className="border-t border-white/10 bg-[#130f12]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cc5832]/40 bg-[#cc5832]/10">
                  <Icon size={26} strokeWidth={1.5} className="text-[#e07748]" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="text-[15px] leading-relaxed text-[#a89b9a]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

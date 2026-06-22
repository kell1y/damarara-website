import { useState, useEffect } from "react";
import img01 from "../assets/product_images/01.jpeg";
import img07 from "../assets/product_images/07.jpeg";
import img09 from "../assets/product_images/09.jpeg";

const FADE_MS = 1500;
const AUTO_ADVANCE_MS = 5000;

const slides = [
  { url: img01, alt: "Damarara instant coffee jars and box with coffee beans" },
  { url: img07, alt: "Damarara Tea with teapot and tea bags" },
  { url: img09, alt: "Full Damarara Tea product range" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-screen min-h-160 w-full overflow-hidden bg-[#0f0c11] text-white">
      {slides.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
          aria-hidden={i !== active}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Text card — remounts on slide change to retrigger the pop-up animation */}
      <div
        key={active}
        className="absolute bottom-50 left-0 max-w-xl z-20"
        style={{ animation: "slide-up 0.6s ease-out 0.3s both" }}
      >
        <div className="bg-[#0f0c11]/70 backdrop-blur-sm px-6 py-5">
          <span className="mb-2 inline-flex items-center gap-2.5 font-serif text-sm italic font-semibold text-[#e07748]">
            <span className="h-px w-6 bg-[#e07748]" />
            From Rwanda&apos;s Northern Hills
          </span>
          <h1 className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
            Pure Tea &amp; Coffee, Grown With Pride
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-[#dcd5d3] sm:text-sm">
            Hand-picked in Rwanda&apos;s misty highlands and crafted with
            care; every cup carries the richness of volcanic soil and
            generations of farming tradition.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-linear-to-br from-[#e07748] to-[#cc5832] px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#cc5832]/35 transition-transform hover:-translate-y-0.5"
            >
              Order Now
            </a>
            <a
              href="#"
              className="rounded-full border border-white/40 px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:border-[#e07748] hover:text-[#e07748]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              i === active ? "w-8 h-2 bg-[#e07748]" : "w-2 h-2 bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

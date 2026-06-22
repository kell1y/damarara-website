import { Link } from "react-router-dom";
import logo from "../assets/damarara_logo.jpg";

/* ── Brand social SVGs ── */
function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function XIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ── Data ── */
const SOCIALS = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon,  href: "#", label: "Facebook"  },
  { Icon: XIcon,         href: "#", label: "X / Twitter" },
  { Icon: LinkedInIcon,  href: "#", label: "LinkedIn"  },
];

const PRODUCTS = [
  { label: "Instant Coffee Jars",    to: "/products" },
  { label: "Coffee Sachets",         to: "/products" },
  { label: "Ground Coffee",          to: "/products" },
  { label: "Rwanda Tea Bags",        to: "/products" },
  { label: "Premium Rwandan Tea",    to: "/products" },
];

const COMPANY = [
  { label: "About Us",    to: "/about"    },
  { label: "Our History", to: "/history"  },
  { label: "Products",    to: "/products" },
  { label: "Contact Us",  to: "/contact"  },
];

/* ── Component ── */
export default function Footer() {
  return (
    <footer className="relative bg-[#08050a] text-white">

      {/* Top orange accent line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#e07748]/50 to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#e07748]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-5 flex items-center gap-3">
              <img src={logo} alt="Damarara logo" className="h-10 w-auto rounded-md" />
              <span className="font-serif text-xl tracking-[0.3em] text-[#e07748]">DAMARARA</span>
            </Link>

            <p className="mb-7 text-[14px] leading-relaxed text-[#7a6f6c]">
              From the misty hills of Rwanda to your cup — premium tea and
              coffee crafted with care, honouring tradition and empowering
              farming communities.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-2.5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-[#7a6f6c] transition-all duration-200 hover:border-[#e07748]/40 hover:bg-[#e07748]/10 hover:text-[#e07748]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Products ── */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e07748]">
              Products
            </h4>
            <ul className="space-y-3.5">
              {PRODUCTS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] text-[#7a6f6c] transition-colors duration-200 hover:text-[#f1ece8]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e07748]">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] text-[#7a6f6c] transition-colors duration-200 hover:text-[#f1ece8]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Follow ── */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e07748]">
              Follow
            </h4>
            <ul className="space-y-3.5">
              {SOCIALS.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 text-[14px] text-[#7a6f6c] transition-colors duration-200 hover:text-[#f1ece8]"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-12 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[13px] text-[#4a3f3c]">
            © 2026 Damarara Tea &amp; Coffee. All rights reserved.{" "}
            <span className="text-[#e07748]/70">Proudly Rwandan.</span>
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] text-[#4a3f3c] transition-colors duration-200 hover:text-[#a89b9a]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

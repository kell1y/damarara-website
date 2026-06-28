import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/damarara_logo.jpg";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Products", to: "/products" },
  { label: "History",  to: "/history" },
  { label: "Contact",  to: "/contact" },
];

const EZ = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Lock body scroll when sidebar is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Header — nav-enter replays on every route change ── */}
      <header
        key={pathname}
        className={[
          "fixed top-0 left-0 w-full z-9999 transition-all duration-500",
          scrolled
            ? "bg-[#0f0c11]/95 backdrop-blur-md border-b border-[#e07748]/10 shadow-sm shadow-black/30"
            : "bg-[#0f0c11]/70 backdrop-blur-sm",
        ].join(" ")}
        style={{ animation: `nav-enter 0.7s ${EZ} 0.05s both` }}
      >

        {/* ── Mobile bar ── */}
        <div className="flex lg:hidden items-center justify-between h-20 px-6">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="text-white hover:text-[#e07748] transition-colors duration-200"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>

          {/* Mobile logo — blur-in */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5"
            style={{ animation: `blur-in 0.8s ${EZ} 0.2s both` }}
          >
            <img src={logo} alt="Damarara logo" className="h-9 w-auto" />
          </NavLink>

          <div className="w-6.5" />
        </div>

        {/* ── Desktop bar ── */}
        <div className="hidden lg:flex items-center h-22.5 px-10">

          {/* Logo — blur-in */}
          <NavLink
            to="/"
            className="shrink-0 flex items-center gap-3"
            style={{ animation: `blur-in 0.9s ${EZ} 0.15s both` }}
          >
            <img src={logo} alt="Damarara logo" className="h-11 w-auto" />
            <span className="font-serif text-2xl tracking-[0.35em] text-[#e07748] whitespace-nowrap">
              DAMARARA
            </span>
          </NavLink>

          {/* Nav links — staggered fade-up entrance */}
          <nav className="flex-1 flex items-center justify-end gap-10 xl:gap-12">
            {NAV_LINKS.map(({ label, to }, i) => (
              <NavLink
                key={label}
                to={to}
                end={to === "/"}
                style={{ animation: `fade-up-hero 0.55s ${EZ} ${0.22 + i * 0.08}s both` }}
                className={({ isActive }) => [
                  "relative pb-1 text-sm uppercase tracking-[0.18em] font-medium whitespace-nowrap transition-colors duration-200",
                  isActive ? "text-[#e07748]" : "text-white hover:text-[#e07748]",
                ].join(" ")}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {/* Animated active underline */}
                    <span
                      className="absolute bottom-0 left-0 h-px bg-[#e07748] transition-all duration-300 ease-out"
                      style={{ width: isActive ? "100%" : "0%" }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 bg-black/50 z-10000 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* ── Mobile sidebar ── */}
      <nav
        className={[
          "fixed top-0 left-0 h-full z-10001",
          "w-full sm:w-75",
          "bg-[#0f0c11]",
          "flex flex-col pt-6 px-8",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between mb-10">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5"
          >
            <img src={logo} alt="Damarara logo" className="h-9 w-auto" />
            <span className="font-serif text-base tracking-[0.3em] text-[#e07748]">
              DAMARARA
            </span>
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white hover:text-[#e07748] transition-colors duration-200"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Sidebar links — remounted on open to replay stagger animation */}
        <ul key={String(isOpen)} className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }, i) => (
            <li
              key={label}
              style={
                isOpen
                  ? { animation: `fade-up-hero 0.4s ${EZ} ${0.08 + i * 0.07}s both` }
                  : { opacity: 0 }
              }
            >
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => [
                  "block w-full py-3 uppercase text-sm font-medium tracking-[0.18em] transition-colors border-b border-white/10",
                  isActive ? "text-[#e07748]" : "text-[#f1ece8] hover:text-[#e07748]",
                ].join(" ")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

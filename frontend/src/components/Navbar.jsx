import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/damarara_logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "History", to: "/history" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#0f0c11]/70 backdrop-blur-sm z-9999">

        {/* Mobile bar (hidden on lg+) */}
        <div className="flex lg:hidden items-center justify-between h-20 px-6">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="text-white hover:text-[#e07748] transition-colors"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>

          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Damarara logo" className="h-9 w-auto" />
          </Link>

          <div className="w-6.5" />
        </div>

        {/* Desktop bar (hidden below lg) */}
        <div className="hidden lg:flex items-center h-22.5 px-10">

          {/* Logo — left */}
          <Link to="/" className="shrink-0 flex items-center gap-3">
            <img src={logo} alt="Damarara logo" className="h-11 w-auto" />
            <span className="font-serif text-2xl tracking-[0.35em] text-[#e07748] whitespace-nowrap">
              DAMARARA
            </span>
          </Link>

          {/* Nav links — right */}
          <nav className="flex-1 flex items-center justify-end gap-10 xl:gap-12">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm uppercase tracking-[0.18em] font-medium whitespace-nowrap text-white transition-colors hover:text-[#e07748]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 bg-black/50 z-10000 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Sidebar */}
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
        <div className="flex items-center justify-between mb-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
            <img src={logo} alt="Damarara logo" className="h-9 w-auto" />
            <span className="font-serif text-base tracking-[0.3em] text-[#e07748]">
              DAMARARA
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white hover:text-[#e07748] transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-[#f1ece8] uppercase text-sm font-medium tracking-[0.18em] hover:text-[#e07748] transition-colors border-b border-white/10"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

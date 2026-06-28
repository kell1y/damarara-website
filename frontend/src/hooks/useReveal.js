import { useEffect } from "react";

export function useReveal(deps = []) {
  useEffect(() => {
    // Query only elements not yet revealed so re-runs (e.g. after filter change)
    // don't reset already-animated elements.
    const els = document.querySelectorAll("[data-reveal]:not(.is-revealed)");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

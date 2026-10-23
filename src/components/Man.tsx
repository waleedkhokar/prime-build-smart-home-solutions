"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Standing / walking man (cap, white tee, jeans, sneakers) as SVG groups so the story can animate limbs. */
export function Man({ walking = false, wave = false, className = "" }: { walking?: boolean; wave?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 120 240" className={className} role="img" aria-label="Prime Build team member">
      {/* legs */}
      <g className={walking ? "leg-a" : ""}>
        <path d="M52 118 L46 176 L44 214" stroke="#33526e" strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M36 216 h16" stroke="#f4f4f4" strokeWidth="8" strokeLinecap="round" />
      </g>
      <g className={walking ? "leg-b" : ""}>
        <path d="M68 118 L76 174 L80 214" stroke="#3d607f" strokeWidth="13" strokeLinecap="round" fill="none" />
        <path d="M72 216 h16" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* torso: oversized white tee */}
      <path d="M38 52 q22 -10 44 0 l8 14 -12 4 v48 q-18 7 -36 0 V70 L30 66 Z" fill="#f7f5ef" stroke="#e3ded2" />
      {/* left arm */}
      <g className={walking ? "arm-a" : ""}>
        <path d="M34 62 L24 104" stroke="#f0ead9" strokeWidth="11" strokeLinecap="round" />
        <circle cx="23" cy="108" r="5.5" fill="#c98d64" />
      </g>
      {/* right arm (waves at the end) */}
      <g className={wave ? "arm-wave" : walking ? "arm-b" : ""} style={{ transformOrigin: "86px 62px" }}>
        <path d="M86 62 L96 104" stroke="#f0ead9" strokeWidth="11" strokeLinecap="round" />
        <circle cx="97" cy="108" r="5.5" fill="#c98d64" />
      </g>
      {/* head + cap */}
      <circle cx="60" cy="34" r="15" fill="#d69c6e" />
      <path d="M44 30 a16 14 0 0 1 32 0 Z" fill="#17181c" />
      <path d="M74 28 h16" stroke="#17181c" strokeWidth="5" strokeLinecap="round" />
      <style>{`
        .leg-a{transform-origin:56px 116px;animation:stepA .62s ease-in-out infinite alternate}
        .leg-b{transform-origin:66px 116px;animation:stepB .62s ease-in-out infinite alternate}
        .arm-a{transform-origin:36px 60px;animation:stepB .62s ease-in-out infinite alternate}
        .arm-b{transform-origin:84px 60px;animation:stepA .62s ease-in-out infinite alternate}
        @keyframes stepA{from{transform:rotate(13deg)}to{transform:rotate(-13deg)}}
        @keyframes stepB{from{transform:rotate(-13deg)}to{transform:rotate(13deg)}}
        .arm-wave{animation:waveArm 1s ease-in-out infinite alternate}
        @keyframes waveArm{from{transform:rotate(118deg)}to{transform:rotate(150deg)}}
        @media (prefers-reduced-motion: reduce){.leg-a,.leg-b,.arm-a,.arm-b,.arm-wave{animation:none}}
      `}</style>
    </svg>
  );
}

/**
 * Adds .in to .sr elements when they scroll into view.
 * Re-runs on every route change: this component lives in the root
 * layout, so without the pathname dependency, pages reached by
 * client-side navigation (About, service pages) would keep their
 * .sr blocks at opacity:0 forever — the page looks blank and the
 * nav button looks dead.
 */
export function RevealWatcher() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".sr:not(.in)"));
    if (els.length === 0) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

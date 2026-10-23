// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICES, WA_BASE } from "@/lib/data";
// import { Icon } from "./icons";

// /**
//  * Hash links ("/#services" etc.): when already on the home page,
//  * smooth-scroll to the section ourselves instead of relying on the
//  * router's default hash handling; from other pages the Link
//  * navigates home and HashScroll (on the home page) lands the section.
//  */
// export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
//   if (!href.startsWith("/#")) return;
//   if (window.location.pathname !== "/") return;
//   const el = document.querySelector(href.slice(1));
//   if (!el) return;
//   e.preventDefault();
//   el.scrollIntoView({ behavior: "smooth", block: "start" });
//   window.history.pushState(null, "", href);
// }

// export function Logo({ light = false }: { light?: boolean }) {
//   return (
//     <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Prime Build home">
//       <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
//         <path d="M6 26 L24 8 L42 26 V42 a2 2 0 0 1 -2 2 H8 a2 2 0 0 1 -2 -2 Z" fill="#0E7A78" />
//         <path d="M17 42 V30 a7 6 0 0 1 14 0 V42" fill="#F6F4EC" />
//         <path d="M13 21 l7 -6 M35 21 l-6 -5" stroke="#F6F4EC" strokeWidth="3" strokeLinecap="round" />
//         <circle cx="24" cy="19" r="2.6" fill="#F6F4EC" />
//       </svg>
//       <span className="leading-none">
//         <span className={`block font-display text-xl tracking-wide ${light ? "text-white" : "text-[#14201d]"}`}>
//           PRIME BUILD
//         </span>
//         <span className={`block text-[10px] font-bold tracking-[.22em] ${light ? "text-white/70" : "text-[#0E7A78]"}`}>
//           SMART HOME SOLUTIONS
//         </span>
//       </span>
//     </Link>
//   );
// }

// const LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/#services" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const on = () => setScrolled(window.scrollY > 24);
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
//     window.addEventListener("keydown", esc);
//     return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
//   }, [ open ]);
//   return (
//     <>
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
//           scrolled ? "bg-white/85 shadow-[0_8px_30px_rgba(11,59,54,.12)] backdrop-blur-xl" : "bg-white/55 backdrop-blur-md"
//         }`}
//       >
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
//           <Logo />
//           <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
//             {LINKS.map((l) => (
//               <Link
//                 key={l.label}
//                 href={l.href}
//                 onClick={(e) => scrollToHash(e, l.href)}
//                 className="group relative text-sm font-bold tracking-wide text-[#14201d]"
//               >
//                 {l.label}
//                 <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 rounded bg-[#0E7A78] transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//           </nav>
//           <div className="flex items-center gap-2.5">
//             <a href={PHONE_TEL} className="hidden items-center gap-2 rounded-full border-2 border-[#0E7A78]/25 bg-white/70 px-4 py-2 text-sm font-extrabold text-[#0B3B36] lg:flex">
//               <Icon name="phone" size={15} /> {PHONE_DISPLAY}
//             </a>
//             <a href={PHONE_TEL} className="hidden rounded-full bg-[#0E7A78] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#0B3B36] md:block">
//               Call
//             </a>
//             <button
//               onClick={() => setOpen(!open)}
//               aria-label={open ? "Close menu" : "Open menu"}
//               aria-expanded={open}
//               className="grid h-11 w-11 place-items-center rounded-xl bg-[#0B3B36] shadow-lg transition md:hidden"
//             >
//               <span className="relative block h-3.5 w-5">
//                 <span className={`absolute left-0 top-0 h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "top-[6px] rotate-45 !bg-[#7be0c3]" : ""}`} />
//                 <span className={`absolute left-0 top-[6px] h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
//                 <span className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "bottom-[5px] -rotate-45 !bg-[#7be0c3]" : ""}`} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* mobile glass half-screen menu */}
//       <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
//         <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-[#0B3B36]/45 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
//         <aside
//           className={`absolute right-0 top-0 flex h-full w-[62%] max-w-[300px] flex-col border-l border-white/50 bg-white/60 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="flex items-center justify-between p-5">
//             <Logo />
//             <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-[#0E7A78] text-xl font-bold text-white">×</button>
//           </div>
//           <nav className="flex flex-col gap-1 px-5 pt-2" aria-label="Mobile">
//             {LINKS.map((l, i) => (
//               <Link
//                 key={l.label}
//                 href={l.href}
//                 onClick={(e) => { scrollToHash(e, l.href); setOpen(false); }}
//                 style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
//                 className={`rounded-2xl px-4 py-3.5 font-display text-2xl tracking-wide text-[#0B3B36] transition-all duration-500 hover:bg-white/70 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </nav>
//           <div className="mt-auto space-y-2.5 p-5">
//             <a href={PHONE_TEL} className="flex items-center justify-center gap-2 rounded-full bg-[#0E7A78] py-3 text-center font-extrabold text-white"><Icon name="phone" size={16} /> Call Now</a>
//             <a href={WA_BASE} target="_blank" rel="noreferrer" className="block rounded-full bg-[#25D366] py-3 text-center font-extrabold text-white">WhatsApp</a>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// export function Footer() {
//   return (
//     <footer className="bg-[#0B3B36] text-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <Logo light />
//           <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
//             Professional home construction and improvement services in Rawalpindi &amp; Islamabad — building trust since 2018.
//           </p>
//         </div>
//         <nav aria-label="Quick links">
//           <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">QUICK LINKS</h3>
//           <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/85">
//             <li><Link className="hover:text-white" href="/">Home</Link></li>
//             <li><Link className="hover:text-white" href="/about">About</Link></li>
//             <li><Link className="hover:text-white" href="/#services" onClick={(e) => scrollToHash(e, "/#services")}>Services</Link></li>
//             <li><Link className="hover:text-white" href="/#why" onClick={(e) => scrollToHash(e, "/#why")}>Why Choose Us</Link></li>
//             <li><Link className="hover:text-white" href="/#faq" onClick={(e) => scrollToHash(e, "/#faq")}>FAQ</Link></li>
//           </ul>
//         </nav>
//         <nav aria-label="Our services">
//           <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">OUR SERVICES</h3>
//           <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/85">
//             {SERVICES.map((s) => (
//               <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.name}</Link></li>
//             ))}
//           </ul>
//         </nav>
//         <div>
//           <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">CONTACT</h3>
//           <ul className="mt-4 space-y-3 text-sm font-semibold text-white/85">
//             <li className="flex gap-2.5"><span className="mt-0.5 text-[#7be0c3]"><Icon name="phone" size={15} /></span><span><a href={PHONE_TEL} className="hover:text-white">Call {PHONE_DISPLAY}</a><br /><span className="text-white/60">Available 8 AM – 7 PM</span></span></li>
//             <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="message" size={15} /></span><a href={WA_BASE} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp {PHONE_DISPLAY}</a></li>
//             <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="mail" size={15} /></span><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
//             <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="pin" size={15} /></span>Rawalpindi &amp; Islamabad</li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-white/15 py-5 text-center text-xs font-semibold text-white/60">
//         © 2026 Prime Build – Smart Home Solutions. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export function WhatsAppFloat({ service }: { service?: string }) {
//   const href = service
//     ? `https://wa.me/923195707402?text=${encodeURIComponent(`Hello Prime Build! I want a few details. I want your solution for our home. I want these services. Service: ${service}`)}`
//     : WA_BASE;
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,.45)] transition hover:scale-105"
//     >
//       <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
//         <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.7 29l7.3-1.5a11.9 11.9 0 0 0 4 0.6c6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.1 1.5-.6.1-1.2.2-4-.8-3.4-1.4-5.6-4.9-5.8-5.1-.1-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.4.7-.4.9-.4h.7c.2 0 .5-.1.8.6l1 2.3c.1.2.1.4 0 .6l-.5.7-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.2.8-.1l2.2 1c.3.2.5.3.6.5 0 .1 0 .7-.2 1.2z" />
//       </svg>
//     </a>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICES, WA_BASE } from "@/lib/data";
import { Icon } from "./icons";

/**
 * Hash links ("/#services" etc.): when already on the home page,
 * smooth-scroll to the section ourselves instead of relying on the
 * router's default hash handling; from other pages the Link
 * navigates home and HashScroll (on the home page) lands the section.
 */
export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("/#")) return;
  if (window.location.pathname !== "/") return;
  const el = document.querySelector(href.slice(1));
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Prime Build home">
      <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M6 26 L24 8 L42 26 V42 a2 2 0 0 1 -2 2 H8 a2 2 0 0 1 -2 -2 Z" fill="#0E7A78" />
        <path d="M17 42 V30 a7 6 0 0 1 14 0 V42" fill="#F6F4EC" />
        <path d="M13 21 l7 -6 M35 21 l-6 -5" stroke="#F6F4EC" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="19" r="2.6" fill="#F6F4EC" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-xl tracking-wide ${light ? "text-white" : "text-[#14201d]"}`}>
          PRIME BUILD
        </span>
        <span className={`block text-[10px] font-bold tracking-[.22em] ${light ? "text-white/70" : "text-[#0E7A78]"}`}>
          SMART HOME SOLUTIONS
        </span>
      </span>
    </Link>
  );
}

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [ open ]);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 shadow-[0_8px_30px_rgba(11,59,54,.12)] backdrop-blur-xl" : "bg-white/55 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={(e) => scrollToHash(e, l.href)}
                className="group relative text-sm font-bold tracking-wide text-[#14201d]"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 rounded bg-[#0E7A78] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <a href={PHONE_TEL} className="hidden items-center gap-2 rounded-full border-2 border-[#0E7A78]/25 bg-white/70 px-4 py-2 text-sm font-extrabold text-[#0B3B36] lg:flex">
              <Icon name="phone" size={15} /> {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="hidden rounded-full bg-[#0E7A78] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#0B3B36] md:block">
              Call
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-xl bg-[#0B3B36] shadow-lg transition md:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className={`absolute left-0 top-0 h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "top-[6px] rotate-45 !bg-[#7be0c3]" : ""}`} />
                <span className={`absolute left-0 top-[6px] h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2.5px] w-full rounded bg-white transition-all duration-300 ${open ? "bottom-[5px] -rotate-45 !bg-[#7be0c3]" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile glass half-screen menu */}
      <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-[#0B3B36]/45 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[62%] max-w-[300px] flex-col border-l border-white/50 bg-white/60 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5 pb-2">
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0E7A78] text-xl font-bold text-white">×</button>
            </div>
            <div className="mt-2 -mb-2 w-max origin-left scale-[.8]">
              <Logo />
            </div>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-2" aria-label="Mobile">
            {LINKS.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={(e) => { scrollToHash(e, l.href); setOpen(false); }}
                style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                className={`rounded-2xl px-4 py-3.5 font-display text-2xl tracking-wide text-[#0B3B36] transition-all duration-500 hover:bg-white/70 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-2.5 p-5">
            <a href={PHONE_TEL} className="flex items-center justify-center gap-2 rounded-full bg-[#0E7A78] py-3 text-center font-extrabold text-white"><Icon name="phone" size={16} /> Call Now</a>
            <a href={WA_BASE} target="_blank" rel="noreferrer" className="block rounded-full bg-[#25D366] py-3 text-center font-extrabold text-white">WhatsApp</a>
          </div>
        </aside>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B3B36] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Professional home construction and improvement services in Rawalpindi &amp; Islamabad — building trust since 2018.
          </p>
        </div>
        <nav aria-label="Quick links">
          <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/85">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/about">About</Link></li>
            <li><Link className="hover:text-white" href="/#services" onClick={(e) => scrollToHash(e, "/#services")}>Services</Link></li>
            <li><Link className="hover:text-white" href="/#why" onClick={(e) => scrollToHash(e, "/#why")}>Why Choose Us</Link></li>
            <li><Link className="hover:text-white" href="/#faq" onClick={(e) => scrollToHash(e, "/#faq")}>FAQ</Link></li>
          </ul>
        </nav>
        <nav aria-label="Our services">
          <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">OUR SERVICES</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/85">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-display text-lg tracking-wide text-[#7be0c3]">CONTACT</h3>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-white/85">
            <li className="flex gap-2.5"><span className="mt-0.5 text-[#7be0c3]"><Icon name="phone" size={15} /></span><span><a href={PHONE_TEL} className="hover:text-white">Call {PHONE_DISPLAY}</a><br /><span className="text-white/60">Available 8 AM – 7 PM</span></span></li>
            <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="message" size={15} /></span><a href={WA_BASE} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp {PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="mail" size={15} /></span><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></li>
            <li className="flex items-center gap-2.5"><span className="text-[#7be0c3]"><Icon name="pin" size={15} /></span>Rawalpindi &amp; Islamabad</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs font-semibold text-white/60">
        © 2026 Prime Build – Smart Home Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat({ service }: { service?: string }) {
  const href = service
    ? `https://wa.me/923195707402?text=${encodeURIComponent(`Hello Prime Build! I want a few details. I want your solution for our home. I want these services. Service: ${service}`)}`
    : WA_BASE;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,.45)] transition hover:scale-105"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.7 29l7.3-1.5a11.9 11.9 0 0 0 4 0.6c6.6 0 12-5.3 12-11.9S22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.1 1.5-.6.1-1.2.2-4-.8-3.4-1.4-5.6-4.9-5.8-5.1-.1-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.4.7-.4.9-.4h.7c.2 0 .5-.1.8.6l1 2.3c.1.2.1.4 0 .6l-.5.7-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.2.8-.1l2.2 1c.3.2.5.3.6.5 0 .1 0 .7-.2 1.2z" />
      </svg>
    </a>
  );
}

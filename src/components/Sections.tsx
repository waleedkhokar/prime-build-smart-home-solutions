// // "use client";
// // import Link from "next/link";
// // import { useEffect, useRef, useState } from "react";
// // import { EMAIL, FAQS, PHONE_DISPLAY, PHONE_TEL, REVIEWS, SERVICES, WA_BASE, WHY_CARDS } from "@/lib/data";
// // import { Man } from "./Man";
// // import { Icon, StarIcon, Tick } from "./icons";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // /* ---------------- SERVICES ---------------- */
// // export function Services() {
// //   const [open, setOpen] = useState<string | null>(null);
// //   return (
// //     <section id="services" aria-label="Our services" className="scroll-mt-24 bg-[#F6F4EC]">
// //       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
// //         <div className="sr">
// //           <h2 className="font-display text-5xl text-[#14201d] sm:text-6xl">Our <span className="text-[#0E7A78]">Services</span></h2>
// //           <p className="mt-3 max-w-2xl text-base font-semibold text-[#14201d]/60">Nine services, one verified team — serving homes in Rawalpindi &amp; Islamabad since 2018. Tap More Detail on any card, or open the full service page.</p>
// //         </div>
// //         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //           {SERVICES.map((s) => {
// //             const isOpen = open === s.slug;
// //             return (
// //               <article key={s.slug} className="sr flex flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-[0_14px_36px_rgba(11,59,54,.10)]">
// //                 <div className="relative h-44 overflow-hidden">
// //                   {/* eslint-disable-next-line @next/next/no-img-element */}
// //                   <img src={s.img} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
// //                   <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#0E7A78] text-white shadow-lg"><Icon name={s.icon} size={22} /></span>
// //                 </div>
// //                 <div className="flex flex-1 flex-col p-5">
// //                   <h3 className="font-display text-2xl tracking-wide text-[#0B3B36]">{s.name.toUpperCase()}</h3>
// //                   <p className="mt-1.5 text-sm font-semibold text-[#14201d]/65">{s.short}</p>
// //                   <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
// //                     <div className="overflow-hidden">
// //                       <ul className="space-y-2 border-t border-dashed border-[#0E7A78]/30 pt-4">
// //                         {s.features.map((f) => (
// //                           <li key={f} className="flex items-center gap-2 text-sm font-bold text-[#14201d]/80">
// //                             <Tick size={20} />{f}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                       <p className="mt-3 text-sm font-semibold leading-relaxed text-[#14201d]/60">{s.extra}</p>
// //                     </div>
// //                   </div>
// //                   <div className="mt-auto flex items-center gap-2.5 pt-5">
// //                     <button
// //                       onClick={() => setOpen(isOpen ? null : s.slug)}
// //                       aria-expanded={isOpen}
// //                       className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl font-bold transition-all duration-300 ${isOpen ? "rotate-45 bg-[#0B3B36] text-white" : "bg-[#BFE3DD]/70 text-[#0B3B36]"}`}
// //                       aria-label={isOpen ? `Close ${s.name} detail` : `More detail about ${s.name}`}
// //                     >
// //                       {isOpen ? "×" : "+"}
// //                     </button>
// //                     <span className="text-xs font-extrabold uppercase tracking-wider text-[#14201d]/50">{isOpen ? "Close" : "More Detail"}</span>
// //                     <Link href={`/services/${s.slug}`} className="ml-auto rounded-full bg-[#0E7A78] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#0B3B36]">
// //                       Read More
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </article>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- WHY CHOOSE ---------------- */
// // export function WhyChoose() {
// //   const [page, setPage] = useState(0);
// //   const [perView, setPerView] = useState(3);
// //   const manRef = useRef<HTMLDivElement>(null);
// //   useEffect(() => {
// //     const upd = () => setPerView(window.innerWidth < 640 ? 1 : 3);
// //     upd(); window.addEventListener("resize", upd);
// //     return () => window.removeEventListener("resize", upd);
// //   }, []);
// //   const pages = Math.ceil(WHY_CARDS.length / perView);
// //   const cur = Math.min(page, pages - 1);
// //   return (
// //     <section id="why" aria-label="Why choose Prime Build" className="relative scroll-mt-24 overflow-hidden bg-white">
// //       <div className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-display text-[22vw] leading-none text-[#0E7A78]/[.06]">WHY US</div>
// //       <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:pb-24">
// //         <div className="flex items-end gap-4 sm:gap-8">
// //           <div
// //             ref={manRef}
// //             className="sr hidden w-[104px] shrink-0 sm:block"
// //             onMouseMove={(e) => {
// //               const r = e.currentTarget.getBoundingClientRect();
// //               const dx = (e.clientX - r.left) / r.width - 0.5;
// //               e.currentTarget.style.transform = `rotate(${dx * 7}deg)`;
// //             }}
// //             onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
// //             style={{ transition: "transform .4s ease" }}
// //           >
// //             <div className="sway"><Man className="w-full" /></div>
// //           </div>
// //           <div className="sr">
// //             <h2 className="font-display text-[13vw] leading-[1.02] text-[#14201d] sm:text-7xl">
// //               Why Choose <span className="inline-block -rotate-1 bg-[#0E7A78] px-3 text-white">PRIME BUILD?</span>
// //             </h2>
// //             <p className="mt-4 max-w-xl text-base font-semibold text-[#14201d]/65">We deliver excellence through our commitment to quality and customer satisfaction</p>
// //             <div className="mt-4 inline-flex -rotate-2 items-center gap-2 rounded-full bg-[#BFE3DD] px-4 py-1.5 text-sm font-extrabold text-[#0B3B36] shadow">
// //               Quality ✦ Trust →
// //             </div>
// //             <span className="ml-2 align-middle text-[10px] font-extrabold tracking-[.2em] text-[#14201d]/40">PRIME BUILD</span>
// //           </div>
// //         </div>

// //         <div className="sr mt-10 overflow-hidden">
// //           <div className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" style={{ transform: `translateX(-${cur * 100}%)` }}>
// //             {Array.from({ length: pages }).map((_, pi) => (
// //               <div key={pi} className={`grid shrink-0 gap-5 ${perView === 1 ? "w-full grid-cols-1" : "w-full sm:grid-cols-3"}`}>
// //                 {WHY_CARDS.slice(pi * perView, pi * perView + perView).map((c) => (
// //                   <article key={c.t} className="overflow-hidden rounded-[1.3rem] border border-[#0E7A78]/15 bg-white shadow-[0_14px_34px_rgba(11,59,54,.09)]">
// //                     {/* eslint-disable-next-line @next/next/no-img-element */}
// //                     <img src={c.img} alt="" className="h-[150px] w-full object-cover" loading="lazy" />
// //                     <div className="p-5">
// //                       <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#E7F2EF] text-[#0E7A78]"><Icon name={c.icon} size={20} /></span>
// //                       <h3 className="font-display text-xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
// //                       <p className="mt-1 text-sm font-semibold text-[#14201d]/60">{c.d}</p>
// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="mt-7 flex items-center justify-center gap-3">
// //           <button onClick={() => setPage(Math.max(0, cur - 1))} disabled={cur === 0} aria-label="Previous cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevL" size={20} /></button>
// //           <span className="text-sm font-extrabold text-[#14201d]/50">{cur + 1} / {pages}</span>
// //           <button onClick={() => setPage(Math.min(pages - 1, cur + 1))} disabled={cur === pages - 1} aria-label="Next cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevR" size={20} /></button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- CONTACT ROW — official brand logos (inline SVG) ---------------- */
// // /** Classic filled telephone handset (Material "call" glyph), in our brand green. */
// // function CallLogo({ size = 25 }: { size?: number }) {
// //   return (
// //     <svg width={size} height={size} viewBox="0 0 24 24" fill="#0E7A78" aria-hidden="true">
// //       <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
// //     </svg>
// //   );
// // }

// // /** The authentic WhatsApp brand glyph (phone handset inside a speech bubble), official green. */
// // function WhatsAppLogo({ size = 26 }: { size?: number }) {
// //   return (
// //     <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
// //       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
// //     </svg>
// //   );
// // }

// // /** The official Gmail "M" mark in its four brand colours. */
// // function GmailLogo({ size = 25 }: { size?: number }) {
// //   return (
// //     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
// //       <path d="M3.7 5.2v13.6" stroke="#4285F4" strokeWidth={3.1} />
// //       <path d="M20.3 5.2v13.6" stroke="#34A853" strokeWidth={3.1} />
// //       <path d="M3.7 5.4 12 12.6" stroke="#EA4335" strokeWidth={3.1} strokeLinecap="round" />
// //       <path d="M20.3 5.4 12 12.6" stroke="#FBBC04" strokeWidth={3.1} strokeLinecap="round" />
// //     </svg>
// //   );
// // }

// // /* ---------------- CONTACT ROW ---------------- */
// // export function ContactRow() {
// //   const cards = [
// //     { icon: "phone", t: "Call Us", d: PHONE_DISPLAY, href: PHONE_TEL, label: "Call now" },
// //     { icon: "message", t: "WhatsApp", d: "Chat with us — we respond quickly", href: WA_BASE, label: "Open chat" },
// //     { icon: "mail", t: "Email Us", d: EMAIL, href: `mailto:${EMAIL}`, label: "Write email" },
// //   ];
// //   return (
// //     <section aria-label="Contact Prime Build" className="bg-[#F6F4EC]">
// //       <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3">
// //         {cards.map((c) => (
// //           <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sr group rounded-[1.3rem] bg-white p-6 shadow-[0_14px_34px_rgba(11,59,54,.09)] transition hover:-translate-y-1">
// //             <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#BFE3DD]/70 text-[#0E7A78]">{c.icon === "phone" ? <CallLogo /> : c.icon === "message" ? <WhatsAppLogo /> : <GmailLogo />}</span>
// //             <h3 className="mt-4 font-display text-2xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
// //             <p className="mt-1 break-words text-sm font-semibold text-[#14201d]/60">{c.d}</p>
// //             <span className="mt-3 inline-block text-sm font-extrabold text-[#0E7A78] group-hover:underline">{c.label} →</span>
// //           </a>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- REVIEWS ---------------- */
// // const TONES = ["bg-[#fdf6e9]", "bg-[#eef6f1]", "bg-[#f3efe6]", "bg-[#e9f3f1]", "bg-[#faf3e3]", "bg-[#eef1ee]"];
// // export function Reviews() {
// //   return (
// //     <section aria-label="Client reviews" className="overflow-hidden bg-white">
// //       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
// //         <div className="sr relative text-center">
// //           <h2 className="font-display text-[13.5vw] leading-[.95] text-[#14201d] sm:text-8xl">WHAT CLIENTS SAY</h2>
// //           <span className="absolute left-1/2 top-1/2 -translate-x-[130%] -translate-y-[190%] -rotate-6 rounded bg-[#0E7A78] px-3 py-1 text-[11px] font-extrabold tracking-widest text-white shadow sm:text-xs">
// //             RAWALPINDI · ISLAMABAD
// //           </span>
// //         </div>
// //         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //           {REVIEWS.map((r, i) => (
// //             <article
// //               key={r.name}
// //               className={`sr floaty rounded-[1.3rem] p-6 shadow-[0_18px_40px_rgba(11,59,54,.12)] ${TONES[i % TONES.length]}`}
// //               style={{ ["--rot" as string]: `${i % 2 ? 1.4 : -1.4}deg`, transform: `rotate(${i % 2 ? 1.4 : -1.4}deg)`, animationDelay: `${i * 0.5}s` }}
// //             >
// //               <div className="flex gap-1 text-[#0E7A78]" role="img" aria-label="5 star rating">
// //                 {[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} />)}
// //               </div>
// //               <p className="mt-3 font-semibold leading-relaxed text-[#14201d]/80">“{r.text}”</p>
// //               <div className="mt-5 flex items-center gap-3">
// //                 <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B3B36] font-display text-base text-white">{r.name.split(" ").map((w) => w[0]).join("")}</span>
// //                 <span>
// //                   <span className="block font-display tracking-wide text-[#0B3B36]">{r.name.toUpperCase()}</span>
// //                   <span className="block text-xs font-bold text-[#14201d]/55">{r.meta}</span>
// //                 </span>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- FAQ ---------------- */
// // export function Faq() {
// //   const [open, setOpen] = useState(0);
// //   return (
// //     <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24 bg-white">
// //       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-24">
// //         <div className="sr">
// //           <span className="inline-block -rotate-6 rounded bg-[#BFE3DD] px-3.5 py-1.5 font-display text-lg tracking-wide text-[#0B3B36] shadow">FAQ</span>
// //           <h2 className="mt-5 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">GOOD QUESTIONS.<br />SIMPLE ANSWERS.</h2>
// //           <a href={WA_BASE} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full border-2 border-[#14201d] px-6 py-3 font-extrabold text-[#14201d] transition hover:bg-[#14201d] hover:text-white">
// //             — ASK ON WHATSAPP →
// //           </a>
// //         </div>
// //         <div className="sr space-y-3.5">
// //           {FAQS.map((f, i) => {
// //             const isOpen = open === i;
// //             return (
// //               <div key={f.q} className="overflow-hidden rounded-[1.8rem] bg-[#0B3B36] text-white shadow-lg">
// //                 <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left">
// //                   <span className="py-1 font-bold sm:text-lg">{f.q}</span>
// //                   <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
// //                 </button>
// //                 <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
// //                   <div className="overflow-hidden">
// //                     <p className="px-6 pb-5 text-sm font-semibold leading-relaxed text-white/80">{f.a}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- TEXT STORY — 3D cylinder scroll (Codrops-style) ----------------
// //    Few big black lines on white, wrapped on a 3D cylinder; GSAP ScrollTrigger
// //    scrub rotates the cylinder as you scroll, then the final line lands big.
// //    No-JS / reduced-motion: everything stays a clean static stacked list. */
// // const STORY_LINES = [
// //   "YOUR HOME,",
// //   "KITCHEN SETUP",
// //   "WASHROOM FITTING",
// //   "PAINT & POLISH",
// //   "PLUMBING",
// //   "ELECTRICAL",
// //   "DONE BY PROFESSIONALS",
// //   "WORK GUARANTEED",
// //   "LATEST TOOLS & TECHNOLOGY",
// // ];
// // const STORY_STEP = 24; // degrees between neighbouring lines on the cylinder

// // export function TextStory() {
// //   const root = useRef<HTMLElement>(null);
// //   useEffect(() => {
// //     const el = root.current;
// //     if (!el) return;
// //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // keep the static list
// //     gsap.registerPlugin(ScrollTrigger);
// //     const q = gsap.utils.selector(el);
// //     const ctx = gsap.context(() => {
// //       el.classList.add("ts-live");
// //       const radius = Math.min(380, Math.max(200, window.innerWidth * 0.55));
// //       const spin = { angle: 0 };
// //       const apply = () => {
// //         q(".ts-line").forEach((line, i) => {
// //           const node = line as HTMLElement;
// //           const rel = spin.angle - i * STORY_STEP; // degrees from the centre line
// //           const fade = Math.max(0, Math.cos((rel * Math.PI) / 180));
// //           node.style.transform = `translate(-50%,-50%) rotateX(${rel}deg) translateZ(${radius}px)`;
// //           node.style.opacity = String(Math.pow(fade, 1.5));
// //           node.style.visibility = fade <= 0.02 ? "hidden" : "visible";
// //         });
// //       };
// //       apply();
// //       const tl = gsap.timeline({
// //         scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
// //       });
// //       // roll the cylinder until the last line has passed the centre
// //       tl.to(spin, { angle: STORY_STEP * (STORY_LINES.length - 1), ease: "none", duration: 8, onUpdate: apply }, 0);
// //       // cylinder rolls away, the final line lands big and holds
// //       tl.to(q(".ts-cylinder"), { opacity: 0, ease: "power1.out", duration: 0.7 }, 8.1);
// //       tl.fromTo(q(".ts-final"), { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, ease: "power2.out", duration: 1.4 }, 8.6);
// //       tl.to({}, { duration: 1 }); // hold
// //     }, el);
// //     const onLoad = () => ScrollTrigger.refresh();
// //     window.addEventListener("load", onLoad);
// //     return () => {
// //       window.removeEventListener("load", onLoad);
// //       ctx.revert();
// //     };
// //   }, []);
// //   return (
// //     <section ref={root} aria-label="Prime Build work story" className="ts-root relative bg-white" style={{ height: "320vh" }}>
// //       <style>{`
// //         .ts-cylinder{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.4vh;width:100%}
// //         .ts-live .ts-sticky{perspective:1500px}
// //         @media (max-width:640px){ .ts-live .ts-sticky{perspective:900px} }
// //         .ts-live .ts-cylinder{position:absolute;inset:0;display:block;transform-style:preserve-3d}
// //         .ts-live .ts-line{position:absolute;left:50%;top:50%;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;will-change:transform,opacity}
// //         .ts-live .ts-final{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;opacity:0}
// //         @media (prefers-reduced-motion: reduce){
// //           .ts-root{height:auto !important}
// //           .ts-root .ts-sticky{position:static;height:auto;padding:4.5rem 1rem}
// //         }
// //       `}</style>
// //       <div className="ts-sticky sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
// //         <div className="ts-cylinder">
// //           {STORY_LINES.map((l) => (
// //             <div key={l} className="ts-line text-center font-display leading-none text-[#14201d]" style={{ fontSize: "clamp(1.35rem,5.6vw,4.2rem)", whiteSpace: "nowrap" }}>{l}</div>
// //           ))}
// //         </div>
// //         <div className="ts-final px-4 text-center font-display leading-[.95] text-[#14201d]" style={{ fontSize: "clamp(1.9rem,8.2vw,5.8rem)" }}>YOUR WORK, DONE PERFECT.</div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ---------------- MOVING BAND ---------------- */
// // export function MovingBand() {
// //   const line = "READY TO BUILD? LET'S TALK. ";
// //   return (
// //     <>
// //     <section aria-label="Ready to build" className="relative overflow-hidden bg-[#F6F4EC] py-12">
// //       <div className="pointer-events-none select-none whitespace-nowrap font-display leading-none">
// //         <div className="marquee-l flex text-[13vw] text-[#14201d] sm:text-[7.5rem]">
// //           <span className="pr-6">{line.repeat(3)}</span><span className="pr-6">{line.repeat(3)}</span>
// //         </div>
// //         <div className="marquee-r flex text-[13vw] sm:text-[7.5rem]">
// //           <span className="text-outline pr-6">{line.repeat(3)}</span><span className="text-outline pr-6">{line.repeat(3)}</span>
// //         </div>
// //       </div>
// //       <div className="relative mx-auto mt-2 flex max-w-7xl items-end justify-end gap-3 px-4 sm:px-6">
// //         <a href={PHONE_TEL} className="mb-6 rounded-full bg-[#0B3B36] px-7 py-3.5 font-display text-lg tracking-wide text-white shadow-xl transition hover:bg-[#0E7A78]">
// //           CALL NOW →
// //         </a>
// //         <div className="w-[86px] shrink-0 sm:w-[110px]"><Man className="w-full" /></div>
// //       </div>
// //     </section>
// //     <TextStory />
// //     </>
// //   );
// // }
// "use client";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { EMAIL, FAQS, PHONE_DISPLAY, PHONE_TEL, REVIEWS, SERVICES, WA_BASE, WHY_CARDS } from "@/lib/data";
// import { Man } from "./Man";
// import { Icon, StarIcon, Tick } from "./icons";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// /* ---------------- SERVICES ---------------- */
// export function Services() {
//   const [open, setOpen] = useState<string | null>(null);
//   return (
//     <section id="services" aria-label="Our services" className="scroll-mt-24 bg-[#F6F4EC]">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
//         <div className="sr">
//           <h2 className="font-display text-5xl text-[#14201d] sm:text-6xl">Our <span className="text-[#0E7A78]">Services</span></h2>
//           <p className="mt-3 max-w-2xl text-base font-semibold text-[#14201d]/60">Nine services, one verified team — serving homes in Rawalpindi &amp; Islamabad since 2018. Tap More Detail on any card, or open the full service page.</p>
//         </div>
//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map((s) => {
//             const isOpen = open === s.slug;
//             return (
//               <article key={s.slug} className="sr flex flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-[0_14px_36px_rgba(11,59,54,.10)]">
//                 <div className="relative h-44 overflow-hidden">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img src={s.img} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
//                   <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#0E7A78] text-white shadow-lg"><Icon name={s.icon} size={22} /></span>
//                 </div>
//                 <div className="flex flex-1 flex-col p-5">
//                   <h3 className="font-display text-2xl tracking-wide text-[#0B3B36]">{s.name.toUpperCase()}</h3>
//                   <p className="mt-1.5 text-sm font-semibold text-[#14201d]/65">{s.short}</p>
//                   <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
//                     <div className="overflow-hidden">
//                       <ul className="space-y-2 border-t border-dashed border-[#0E7A78]/30 pt-4">
//                         {s.features.map((f) => (
//                           <li key={f} className="flex items-center gap-2 text-sm font-bold text-[#14201d]/80">
//                             <Tick size={20} />{f}
//                           </li>
//                         ))}
//                       </ul>
//                       <p className="mt-3 text-sm font-semibold leading-relaxed text-[#14201d]/60">{s.extra}</p>
//                     </div>
//                   </div>
//                   <div className="mt-auto flex items-center gap-2.5 pt-5">
//                     <button
//                       onClick={() => setOpen(isOpen ? null : s.slug)}
//                       aria-expanded={isOpen}
//                       className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl font-bold transition-all duration-300 ${isOpen ? "rotate-45 bg-[#0B3B36] text-white" : "bg-[#BFE3DD]/70 text-[#0B3B36]"}`}
//                       aria-label={isOpen ? `Close ${s.name} detail` : `More detail about ${s.name}`}
//                     >
//                       {isOpen ? "×" : "+"}
//                     </button>
//                     <span className="text-xs font-extrabold uppercase tracking-wider text-[#14201d]/50">{isOpen ? "Close" : "More Detail"}</span>
//                     <Link href={`/services/${s.slug}`} className="ml-auto rounded-full bg-[#0E7A78] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#0B3B36]">
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- WHY CHOOSE ---------------- */
// export function WhyChoose() {
//   const [page, setPage] = useState(0);
//   const [perView, setPerView] = useState(3);
//   const manRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const upd = () => setPerView(window.innerWidth < 640 ? 1 : 3);
//     upd(); window.addEventListener("resize", upd);
//     return () => window.removeEventListener("resize", upd);
//   }, []);
//   const pages = Math.ceil(WHY_CARDS.length / perView);
//   const cur = Math.min(page, pages - 1);
//   return (
//     <section id="why" aria-label="Why choose Prime Build" className="relative scroll-mt-24 overflow-hidden bg-white">
//       <div className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-display text-[22vw] leading-none text-[#0E7A78]/[.06]">WHY US</div>
//       <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:pb-24">
//         <div className="flex items-end gap-4 sm:gap-8">
//           <div
//             ref={manRef}
//             className="sr hidden w-[104px] shrink-0 sm:block"
//             onMouseMove={(e) => {
//               const r = e.currentTarget.getBoundingClientRect();
//               const dx = (e.clientX - r.left) / r.width - 0.5;
//               e.currentTarget.style.transform = `rotate(${dx * 7}deg)`;
//             }}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
//             style={{ transition: "transform .4s ease" }}
//           >
//             <div className="sway"><Man className="w-full" /></div>
//           </div>
//           <div className="sr">
//             <h2 className="font-display text-[13vw] leading-[1.02] text-[#14201d] sm:text-7xl">
//               Why Choose <span className="inline-block -rotate-1 bg-[#0E7A78] px-3 text-white">PRIME BUILD?</span>
//             </h2>
//             <p className="mt-4 max-w-xl text-base font-semibold text-[#14201d]/65">We deliver excellence through our commitment to quality and customer satisfaction</p>
//             <div className="mt-4 inline-flex -rotate-2 items-center gap-2 rounded-full bg-[#BFE3DD] px-4 py-1.5 text-sm font-extrabold text-[#0B3B36] shadow">
//               Quality ✦ Trust →
//             </div>
//             <span className="ml-2 align-middle text-[10px] font-extrabold tracking-[.2em] text-[#14201d]/40">PRIME BUILD</span>
//           </div>
//         </div>

//         <div className="sr mt-10 overflow-hidden">
//           <div className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" style={{ transform: `translateX(-${cur * 100}%)` }}>
//             {Array.from({ length: pages }).map((_, pi) => (
//               <div key={pi} className={`grid shrink-0 gap-5 ${perView === 1 ? "w-full grid-cols-1" : "w-full sm:grid-cols-3"}`}>
//                 {WHY_CARDS.slice(pi * perView, pi * perView + perView).map((c) => (
//                   <article key={c.t} className="overflow-hidden rounded-[1.3rem] border border-[#0E7A78]/15 bg-white shadow-[0_14px_34px_rgba(11,59,54,.09)]">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img src={c.img} alt="" className="h-[150px] w-full object-cover" loading="lazy" />
//                     <div className="p-5">
//                       <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#E7F2EF] text-[#0E7A78]"><Icon name={c.icon} size={20} /></span>
//                       <h3 className="font-display text-xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
//                       <p className="mt-1 text-sm font-semibold text-[#14201d]/60">{c.d}</p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-7 flex items-center justify-center gap-3">
//           <button onClick={() => setPage(Math.max(0, cur - 1))} disabled={cur === 0} aria-label="Previous cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevL" size={20} /></button>
//           <span className="text-sm font-extrabold text-[#14201d]/50">{cur + 1} / {pages}</span>
//           <button onClick={() => setPage(Math.min(pages - 1, cur + 1))} disabled={cur === pages - 1} aria-label="Next cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevR" size={20} /></button>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- CONTACT ROW — official brand logos (inline SVG) ---------------- */
// /** Classic filled telephone handset (Material "call" glyph), in our brand green. */
// function CallLogo({ size = 25 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="#0E7A78" aria-hidden="true">
//       <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//     </svg>
//   );
// }

// /** The authentic WhatsApp brand glyph (phone handset inside a speech bubble), official green. */
// function WhatsAppLogo({ size = 26 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
//     </svg>
//   );
// }

// /** The official Gmail "M" mark in its four brand colours. */
// function GmailLogo({ size = 25 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path d="M3.7 5.2v13.6" stroke="#4285F4" strokeWidth={3.1} />
//       <path d="M20.3 5.2v13.6" stroke="#34A853" strokeWidth={3.1} />
//       <path d="M3.7 5.4 12 12.6" stroke="#EA4335" strokeWidth={3.1} strokeLinecap="round" />
//       <path d="M20.3 5.4 12 12.6" stroke="#FBBC04" strokeWidth={3.1} strokeLinecap="round" />
//     </svg>
//   );
// }

// /* ---------------- CONTACT ROW ---------------- */
// export function ContactRow() {
//   const cards = [
//     { icon: "phone", t: "Call Us", d: PHONE_DISPLAY, href: PHONE_TEL, label: "Call now" },
//     { icon: "message", t: "WhatsApp", d: "Chat with us — we respond quickly", href: WA_BASE, label: "Open chat" },
//     { icon: "mail", t: "Email Us", d: EMAIL, href: `mailto:${EMAIL}`, label: "Write email" },
//   ];
//   return (
//     <section aria-label="Contact Prime Build" className="bg-[#F6F4EC]">
//       <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3">
//         {cards.map((c) => (
//           <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sr group rounded-[1.3rem] bg-white p-6 shadow-[0_14px_34px_rgba(11,59,54,.09)] transition hover:-translate-y-1">
//             <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#BFE3DD]/70 text-[#0E7A78]">{c.icon === "phone" ? <CallLogo /> : c.icon === "message" ? <WhatsAppLogo /> : <GmailLogo />}</span>
//             <h3 className="mt-4 font-display text-2xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
//             <p className="mt-1 break-words text-sm font-semibold text-[#14201d]/60">{c.d}</p>
//             <span className="mt-3 inline-block text-sm font-extrabold text-[#0E7A78] group-hover:underline">{c.label} →</span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- REVIEWS ---------------- */
// const TONES = ["bg-[#fdf6e9]", "bg-[#eef6f1]", "bg-[#f3efe6]", "bg-[#e9f3f1]", "bg-[#faf3e3]", "bg-[#eef1ee]"];
// export function Reviews() {
//   return (
//     <section aria-label="Client reviews" className="overflow-hidden bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
//         <div className="sr relative text-center">
//           <h2 className="font-display text-[13.5vw] leading-[.95] text-[#14201d] sm:text-8xl">WHAT CLIENTS SAY</h2>
//           <span className="absolute left-1/2 top-1/2 -translate-x-[85%] -translate-y-[190%] -rotate-6 rounded bg-[#0E7A78] px-3 py-1 text-[11px] font-extrabold tracking-widest text-white shadow sm:-translate-x-[130%] sm:text-xs">
//             RAWALPINDI · ISLAMABAD
//           </span>
//         </div>
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {REVIEWS.map((r, i) => (
//             <article
//               key={r.name}
//               className={`sr floaty rounded-[1.3rem] p-6 shadow-[0_18px_40px_rgba(11,59,54,.12)] ${TONES[i % TONES.length]}`}
//               style={{ ["--rot" as string]: `${i % 2 ? 1.4 : -1.4}deg`, transform: `rotate(${i % 2 ? 1.4 : -1.4}deg)`, animationDelay: `${i * 0.5}s` }}
//             >
//               <div className="flex gap-1 text-[#0E7A78]" role="img" aria-label="5 star rating">
//                 {[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} />)}
//               </div>
//               <p className="mt-3 font-semibold leading-relaxed text-[#14201d]/80">“{r.text}”</p>
//               <div className="mt-5 flex items-center gap-3">
//                 <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B3B36] font-display text-base text-white">{r.name.split(" ").map((w) => w[0]).join("")}</span>
//                 <span>
//                   <span className="block font-display tracking-wide text-[#0B3B36]">{r.name.toUpperCase()}</span>
//                   <span className="block text-xs font-bold text-[#14201d]/55">{r.meta}</span>
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- FAQ ---------------- */
// export function Faq() {
//   const [open, setOpen] = useState(0);
//   return (
//     <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24 bg-white">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-24">
//         <div className="sr">
//           <span className="inline-block -rotate-6 rounded bg-[#BFE3DD] px-3.5 py-1.5 font-display text-lg tracking-wide text-[#0B3B36] shadow">FAQ</span>
//           <h2 className="mt-5 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">GOOD QUESTIONS.<br />SIMPLE ANSWERS.</h2>
//           <a href={WA_BASE} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full border-2 border-[#14201d] px-6 py-3 font-extrabold text-[#14201d] transition hover:bg-[#14201d] hover:text-white">
//             — ASK ON WHATSAPP →
//           </a>
//         </div>
//         <div className="sr space-y-3.5">
//           {FAQS.map((f, i) => {
//             const isOpen = open === i;
//             return (
//               <div key={f.q} className="overflow-hidden rounded-[1.8rem] bg-[#0B3B36] text-white shadow-lg">
//                 <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left">
//                   <span className="py-1 font-bold sm:text-lg">{f.q}</span>
//                   <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
//                 </button>
//                 <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
//                   <div className="overflow-hidden">
//                     <p className="px-6 pb-5 text-sm font-semibold leading-relaxed text-white/80">{f.a}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- TEXT STORY — 3D cylinder scroll (Codrops-style) ----------------
//    Few big black lines on white, wrapped on a 3D cylinder; GSAP ScrollTrigger
//    scrub rotates the cylinder as you scroll, then the final line lands big.
//    No-JS / reduced-motion: everything stays a clean static stacked list. */
// const STORY_LINES = [
//   "YOUR HOME,",
//   "KITCHEN SETUP",
//   "WASHROOM FITTING",
//   "PAINT & POLISH",
//   "PLUMBING",
//   "ELECTRICAL",
//   "DONE BY PROFESSIONALS",
//   "WORK GUARANTEED",
//   "LATEST TOOLS & TECHNOLOGY",
// ];
// const STORY_STEP = 24; // degrees between neighbouring lines on the cylinder

// export function TextStory() {
//   const root = useRef<HTMLElement>(null);
//   useEffect(() => {
//     const el = root.current;
//     if (!el) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // keep the static list
//     gsap.registerPlugin(ScrollTrigger);
//     const q = gsap.utils.selector(el);
//     const ctx = gsap.context(() => {
//       el.classList.add("ts-live");
//       const radius = Math.min(380, Math.max(200, window.innerWidth * 0.55));
//       const spin = { angle: 0 };
//       const apply = () => {
//         q(".ts-line").forEach((line, i) => {
//           const node = line as HTMLElement;
//           const rel = spin.angle - i * STORY_STEP; // degrees from the centre line
//           const fade = Math.max(0, Math.cos((rel * Math.PI) / 180));
//           node.style.transform = `translate(-50%,-50%) rotateX(${rel}deg) translateZ(${radius}px)`;
//           node.style.opacity = String(Math.pow(fade, 1.5));
//           node.style.visibility = fade <= 0.02 ? "hidden" : "visible";
//         });
//       };
//       apply();
//       const tl = gsap.timeline({
//         scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
//       });
//       // roll the cylinder until the last line has passed the centre
//       tl.to(spin, { angle: STORY_STEP * (STORY_LINES.length - 1), ease: "none", duration: 8, onUpdate: apply }, 0);
//       // cylinder rolls away, the final line lands big and holds
//       tl.to(q(".ts-cylinder"), { opacity: 0, ease: "power1.out", duration: 0.7 }, 8.1);
//       tl.fromTo(q(".ts-final"), { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, ease: "power2.out", duration: 1.4 }, 8.6);
//       tl.to({}, { duration: 1 }); // hold
//     }, el);
//     // ScrollTrigger measures the section's start/end once, when this effect
//     // runs. On tall phone pages the layout above can still shift after that
//     // (fonts, media, viewport units settling), leaving stale measurements —
//     // the cylinder then never finishes its roll. Re-measure on load, on
//     // webfont swap, and once the page height has stopped changing.
//     let dead = false;
//     const onLoad = () => ScrollTrigger.refresh();
//     if (document.readyState === "complete") onLoad();
//     else window.addEventListener("load", onLoad);
//     if (document.fonts?.ready) document.fonts.ready.then(() => { if (!dead) ScrollTrigger.refresh(); });
//     let lastH = -1, stable = 0, tries = 0;
//     const iv = window.setInterval(() => {
//       if (dead) return;
//       const h = document.documentElement.scrollHeight;
//       if (h === lastH) stable += 1; else { stable = 0; lastH = h; }
//       tries += 1;
//       if (stable >= 4 || tries >= 40) { window.clearInterval(iv); ScrollTrigger.refresh(); }
//     }, 300);
//     return () => {
//       dead = true;
//       window.clearInterval(iv);
//       window.removeEventListener("load", onLoad);
//       ctx.revert();
//     };
//   }, []);
//   return (
//     <section ref={root} aria-label="Prime Build work story" className="ts-root relative bg-white" style={{ height: "320vh" }}>
//       <style>{`
//         .ts-cylinder{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.4vh;width:100%}
//         .ts-live .ts-sticky{perspective:1500px}
//         @media (max-width:640px){ .ts-live .ts-sticky{perspective:900px} }
//         .ts-live .ts-cylinder{position:absolute;inset:0;display:block;transform-style:preserve-3d}
//         .ts-live .ts-line{position:absolute;left:50%;top:50%;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;will-change:transform,opacity}
//         .ts-live .ts-final{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;opacity:0}
//         @media (prefers-reduced-motion: reduce){
//           .ts-root{height:auto !important}
//           .ts-root .ts-sticky{position:static;height:auto;padding:4.5rem 1rem}
//         }
//       `}</style>
//       <div className="ts-sticky sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
//         <div className="ts-cylinder">
//           {STORY_LINES.map((l) => (
//             <div key={l} className="ts-line text-center font-display leading-none text-[#14201d]" style={{ fontSize: "clamp(1.35rem,5.6vw,4.2rem)", whiteSpace: "nowrap" }}>{l}</div>
//           ))}
//         </div>
//         <div className="ts-final px-4 text-center font-display leading-[.95] text-[#14201d]" style={{ fontSize: "clamp(1.9rem,8.2vw,5.8rem)" }}>YOUR WORK, DONE PERFECT.</div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- MOVING BAND ---------------- */
// export function MovingBand() {
//   const line = "READY TO BUILD? LET'S TALK. ";
//   return (
//     <>
//     <section aria-label="Ready to build" className="relative overflow-hidden bg-[#F6F4EC] py-12">
//       <div className="pointer-events-none select-none whitespace-nowrap font-display leading-none">
//         <div className="marquee-l flex text-[13vw] text-[#14201d] sm:text-[7.5rem]">
//           <span className="pr-6">{line.repeat(3)}</span><span className="pr-6">{line.repeat(3)}</span>
//         </div>
//         <div className="marquee-r flex text-[13vw] sm:text-[7.5rem]">
//           <span className="text-outline pr-6">{line.repeat(3)}</span><span className="text-outline pr-6">{line.repeat(3)}</span>
//         </div>
//       </div>
//       <div className="relative mx-auto mt-2 flex max-w-7xl items-end justify-end gap-3 px-4 sm:px-6">
//         <a href={PHONE_TEL} className="mb-6 rounded-full bg-[#0B3B36] px-7 py-3.5 font-display text-lg tracking-wide text-white shadow-xl transition hover:bg-[#0E7A78]">
//           CALL NOW →
//         </a>
//         <div className="w-[86px] shrink-0 sm:w-[110px]"><Man className="w-full" /></div>
//       </div>
//     </section>
//     <TextStory />
//     </>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EMAIL, FAQS, PHONE_DISPLAY, PHONE_TEL, REVIEWS, SERVICES, WA_BASE, WHY_CARDS } from "@/lib/data";
import { Man } from "./Man";
import { Icon, StarIcon, Tick } from "./icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ---------------- SERVICES ---------------- */
export function Services() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="services" aria-label="Our services" className="scroll-mt-24 bg-[#F6F4EC]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="sr">
          <h2 className="font-display text-5xl text-[#14201d] sm:text-6xl">Our <span className="text-[#0E7A78]">Services</span></h2>
          <p className="mt-3 max-w-2xl text-base font-semibold text-[#14201d]/60">Nine services, one verified team — serving homes in Rawalpindi &amp; Islamabad since 2018. Tap More Detail on any card, or open the full service page.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const isOpen = open === s.slug;
            return (
              <article key={s.slug} className="sr flex flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-[0_14px_36px_rgba(11,59,54,.10)]">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#0E7A78] text-white shadow-lg"><Icon name={s.icon} size={22} /></span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl tracking-wide text-[#0B3B36]">{s.name.toUpperCase()}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-[#14201d]/65">{s.short}</p>
                  <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-2 border-t border-dashed border-[#0E7A78]/30 pt-4">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm font-bold text-[#14201d]/80">
                            <Tick size={20} />{f}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-[#14201d]/60">{s.extra}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center gap-2.5 pt-5">
                    <button
                      onClick={() => setOpen(isOpen ? null : s.slug)}
                      aria-expanded={isOpen}
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl font-bold transition-all duration-300 ${isOpen ? "rotate-45 bg-[#0B3B36] text-white" : "bg-[#BFE3DD]/70 text-[#0B3B36]"}`}
                      aria-label={isOpen ? `Close ${s.name} detail` : `More detail about ${s.name}`}
                    >
                      {isOpen ? "×" : "+"}
                    </button>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#14201d]/50">{isOpen ? "Close" : "More Detail"}</span>
                    <Link href={`/services/${s.slug}`} className="ml-auto rounded-full bg-[#0E7A78] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#0B3B36]">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
export function WhyChoose() {
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const manRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const upd = () => setPerView(window.innerWidth < 640 ? 1 : 3);
    upd(); window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);
  const pages = Math.ceil(WHY_CARDS.length / perView);
  const cur = Math.min(page, pages - 1);
  return (
    <section id="why" aria-label="Why choose Prime Build" className="relative scroll-mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-display text-[22vw] leading-none text-[#0E7A78]/[.06]">WHY US</div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:pb-24">
        <div className="flex items-end gap-4 sm:gap-8">
          <div
            ref={manRef}
            className="sr hidden w-[104px] shrink-0 sm:block"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const dx = (e.clientX - r.left) / r.width - 0.5;
              e.currentTarget.style.transform = `rotate(${dx * 7}deg)`;
            }}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            style={{ transition: "transform .4s ease" }}
          >
            <div className="sway"><Man className="w-full" /></div>
          </div>
          <div className="sr">
            <h2 className="font-display text-[13vw] leading-[1.02] text-[#14201d] sm:text-7xl">
              Why Choose <span className="inline-block -rotate-1 bg-[#0E7A78] px-3 text-white">PRIME BUILD?</span>
            </h2>
            <p className="mt-4 max-w-xl text-base font-semibold text-[#14201d]/65">We deliver excellence through our commitment to quality and customer satisfaction</p>
            <div className="mt-4 inline-flex -rotate-2 items-center gap-2 rounded-full bg-[#BFE3DD] px-4 py-1.5 text-sm font-extrabold text-[#0B3B36] shadow">
              Quality ✦ Trust →
            </div>
            <span className="ml-2 align-middle text-[10px] font-extrabold tracking-[.2em] text-[#14201d]/40">PRIME BUILD</span>
          </div>
        </div>

        <div className="sr mt-10 overflow-hidden">
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" style={{ transform: `translateX(-${cur * 100}%)` }}>
            {Array.from({ length: pages }).map((_, pi) => (
              <div key={pi} className={`grid shrink-0 gap-5 ${perView === 1 ? "w-full grid-cols-1" : "w-full sm:grid-cols-3"}`}>
                {WHY_CARDS.slice(pi * perView, pi * perView + perView).map((c) => (
                  <article key={c.t} className="overflow-hidden rounded-[1.3rem] border border-[#0E7A78]/15 bg-white shadow-[0_14px_34px_rgba(11,59,54,.09)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt="" className="h-[150px] w-full object-cover" loading="lazy" />
                    <div className="p-5">
                      <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#E7F2EF] text-[#0E7A78]"><Icon name={c.icon} size={20} /></span>
                      <h3 className="font-display text-xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
                      <p className="mt-1 text-sm font-semibold text-[#14201d]/60">{c.d}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3">
          <button onClick={() => setPage(Math.max(0, cur - 1))} disabled={cur === 0} aria-label="Previous cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevL" size={20} /></button>
          <span className="text-sm font-extrabold text-[#14201d]/50">{cur + 1} / {pages}</span>
          <button onClick={() => setPage(Math.min(pages - 1, cur + 1))} disabled={cur === pages - 1} aria-label="Next cards" className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#0E7A78]/30 font-bold text-[#0B3B36] transition enabled:hover:bg-[#0E7A78] enabled:hover:text-white disabled:opacity-30"><Icon name="chevR" size={20} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ROW — official brand logos (inline SVG) ---------------- */
/** Classic filled telephone handset (Material "call" glyph), in our brand green. */
function CallLogo({ size = 25 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0E7A78" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

/** The authentic WhatsApp brand glyph (phone handset inside a speech bubble), official green. */
function WhatsAppLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** The official Gmail "M" mark in its four brand colours. */
function GmailLogo({ size = 25 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.7 5.2v13.6" stroke="#4285F4" strokeWidth={3.1} />
      <path d="M20.3 5.2v13.6" stroke="#34A853" strokeWidth={3.1} />
      <path d="M3.7 5.4 12 12.6" stroke="#EA4335" strokeWidth={3.1} strokeLinecap="round" />
      <path d="M20.3 5.4 12 12.6" stroke="#FBBC04" strokeWidth={3.1} strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- CONTACT ROW ---------------- */
export function ContactRow() {
  const cards = [
    { icon: "phone", t: "Call Us", d: PHONE_DISPLAY, href: PHONE_TEL, label: "Call now" },
    { icon: "message", t: "WhatsApp", d: "Chat with us — we respond quickly", href: WA_BASE, label: "Open chat" },
    { icon: "mail", t: "Email Us", d: EMAIL, href: `mailto:${EMAIL}`, label: "Write email" },
  ];
  return (
    <section aria-label="Contact Prime Build" className="bg-[#F6F4EC]">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3">
        {cards.map((c) => (
          <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="sr group rounded-[1.3rem] bg-white p-6 shadow-[0_14px_34px_rgba(11,59,54,.09)] transition hover:-translate-y-1">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#BFE3DD]/70 text-[#0E7A78]">{c.icon === "phone" ? <CallLogo /> : c.icon === "message" ? <WhatsAppLogo /> : <GmailLogo />}</span>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-[#0B3B36]">{c.t.toUpperCase()}</h3>
            <p className="mt-1 break-words text-sm font-semibold text-[#14201d]/60">{c.d}</p>
            <span className="mt-3 inline-block text-sm font-extrabold text-[#0E7A78] group-hover:underline">{c.label} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
const TONES = ["bg-[#fdf6e9]", "bg-[#eef6f1]", "bg-[#f3efe6]", "bg-[#e9f3f1]", "bg-[#faf3e3]", "bg-[#eef1ee]"];
export function Reviews() {
  return (
    <section aria-label="Client reviews" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="sr relative text-center">
          <h2 className="font-display text-[13.5vw] leading-[.95] text-[#14201d] sm:text-8xl">WHAT CLIENTS SAY</h2>
          <span className="absolute left-1/2 top-1/2 -translate-x-[85%] -translate-y-[190%] -rotate-6 rounded bg-[#0E7A78] px-3 py-1 text-[11px] font-extrabold tracking-widest text-white shadow sm:-translate-x-[130%] sm:text-xs">
            RAWALPINDI · ISLAMABAD
          </span>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`sr floaty rounded-[1.3rem] p-6 shadow-[0_18px_40px_rgba(11,59,54,.12)] ${TONES[i % TONES.length]}`}
              style={{ ["--rot" as string]: `${i % 2 ? 1.4 : -1.4}deg`, transform: `rotate(${i % 2 ? 1.4 : -1.4}deg)`, animationDelay: `${i * 0.5}s` }}
            >
              <div className="flex gap-1 text-[#0E7A78]" role="img" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} />)}
              </div>
              <p className="mt-3 font-semibold leading-relaxed text-[#14201d]/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B3B36] font-display text-base text-white">{r.name.split(" ").map((w) => w[0]).join("")}</span>
                <span>
                  <span className="block font-display tracking-wide text-[#0B3B36]">{r.name.toUpperCase()}</span>
                  <span className="block text-xs font-bold text-[#14201d]/55">{r.meta}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-24">
        <div className="sr">
          <span className="inline-block -rotate-6 rounded bg-[#BFE3DD] px-3.5 py-1.5 font-display text-lg tracking-wide text-[#0B3B36] shadow">FAQ</span>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">GOOD QUESTIONS.<br />SIMPLE ANSWERS.</h2>
          <a href={WA_BASE} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full border-2 border-[#14201d] px-6 py-3 font-extrabold text-[#14201d] transition hover:bg-[#14201d] hover:text-white">
            — ASK ON WHATSAPP →
          </a>
        </div>
        <div className="sr space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-[1.8rem] bg-[#0B3B36] text-white shadow-lg">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left">
                  <span className="py-1 font-bold sm:text-lg">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm font-semibold leading-relaxed text-white/80">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEXT STORY — 3D cylinder scroll (Codrops-style) ----------------
   Few big black lines on white, wrapped on a 3D cylinder; GSAP ScrollTrigger
   scrub rotates the cylinder as you scroll, then the final line lands big.
   The roll always runs (owner's order: same animation on phone as PC).
   No-JS: everything stays a clean static stacked list. */
const STORY_LINES = [
  "YOUR HOME,",
  "KITCHEN SETUP",
  "WASHROOM FITTING",
  "PAINT & POLISH",
  "PLUMBING",
  "ELECTRICAL",
  "DONE BY PROFESSIONALS",
  "WORK GUARANTEED",
  "LATEST TOOLS & TECHNOLOGY",
];
const STORY_STEP = 24; // degrees between neighbouring lines on the cylinder

export function TextStory() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const ctx = gsap.context(() => {
      el.classList.add("ts-live");
      const radius = Math.min(380, Math.max(200, window.innerWidth * 0.55));
      const spin = { angle: 0 };
      const apply = () => {
        q(".ts-line").forEach((line, i) => {
          const node = line as HTMLElement;
          const rel = spin.angle - i * STORY_STEP; // degrees from the centre line
          const fade = Math.max(0, Math.cos((rel * Math.PI) / 180));
          node.style.transform = `translate(-50%,-50%) rotateX(${rel}deg) translateZ(${radius}px)`;
          node.style.opacity = String(Math.pow(fade, 1.5));
          node.style.visibility = fade <= 0.02 ? "hidden" : "visible";
        });
      };
      apply();
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      // roll the cylinder until the last line has passed the centre
      tl.to(spin, { angle: STORY_STEP * (STORY_LINES.length - 1), ease: "none", duration: 8, onUpdate: apply }, 0);
      // cylinder rolls away, the final line lands big and holds
      tl.to(q(".ts-cylinder"), { opacity: 0, ease: "power1.out", duration: 0.7 }, 8.1);
      tl.fromTo(q(".ts-final"), { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, ease: "power2.out", duration: 1.4 }, 8.6);
      tl.to({}, { duration: 1 }); // hold
    }, el);
    // ScrollTrigger measures the section's start/end once, when this effect
    // runs. On tall phone pages the layout above can still shift after that
    // (fonts, media, viewport units settling), leaving stale measurements —
    // the cylinder then never finishes its roll. Re-measure on load, on
    // webfont swap, and once the page height has stopped changing.
    let dead = false;
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    if (document.fonts?.ready) document.fonts.ready.then(() => { if (!dead) ScrollTrigger.refresh(); });
    let lastH = -1, stable = 0, tries = 0;
    const iv = window.setInterval(() => {
      if (dead) return;
      const h = document.documentElement.scrollHeight;
      if (h === lastH) stable += 1; else { stable = 0; lastH = h; }
      tries += 1;
      if (stable >= 4 || tries >= 40) { window.clearInterval(iv); ScrollTrigger.refresh(); }
    }, 300);
    return () => {
      dead = true;
      window.clearInterval(iv);
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);
  return (
    <section ref={root} aria-label="Prime Build work story" className="ts-root relative bg-white" style={{ height: "240vh" }}>
      <style>{`
        .ts-cylinder{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.4vh;width:100%}
        .ts-live .ts-sticky{perspective:1500px}
        @media (max-width:640px){ .ts-live .ts-sticky{perspective:900px} }
        .ts-live .ts-cylinder{position:absolute;inset:0;display:block;transform-style:preserve-3d}
        .ts-live .ts-line{position:absolute;left:50%;top:50%;width:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;will-change:transform,opacity}
        .ts-live .ts-final{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100%;opacity:0}
        /* phone-only fit: final line + band lines must fit inside a 390px viewport.
           .ts-final has an inline font-size, so the override needs !important;
           the band sizes are Tailwind utilities (layered), so this unlayered
           rule wins below the sm breakpoint. Desktop sizes untouched. */
        @media (max-width:639px){
          .ts-final{font-size:clamp(1.5rem,7.2vw,2.1rem) !important}
          .marquee-l,.marquee-r{font-size:6.5vw}
        }
      `}</style>
      <div className="ts-sticky sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
        <div className="ts-cylinder">
          {STORY_LINES.map((l) => (
            <div key={l} className="ts-line text-center font-display leading-none text-[#14201d]" style={{ fontSize: "clamp(1.35rem,5.6vw,4.2rem)", whiteSpace: "nowrap" }}>{l}</div>
          ))}
        </div>
        <div className="ts-final px-4 text-center font-display leading-[.95] text-[#14201d]" style={{ fontSize: "clamp(1.9rem,8.2vw,5.8rem)" }}>YOUR WORK, DONE PERFECT.</div>
      </div>
    </section>
  );
}

/* ---------------- MOVING BAND ---------------- */
export function MovingBand() {
  const line = "READY TO BUILD? LET'S TALK. ";
  return (
    <>
    <section aria-label="Ready to build" className="relative overflow-hidden bg-[#F6F4EC] py-12">
      <div className="pointer-events-none select-none whitespace-nowrap font-display leading-none">
        <div className="marquee-l flex text-[13vw] text-[#14201d] sm:text-[7.5rem]">
          <span className="pr-6">{line.repeat(3)}</span><span className="pr-6">{line.repeat(3)}</span>
        </div>
        <div className="marquee-r flex text-[13vw] sm:text-[7.5rem]">
          <span className="text-outline pr-6">{line.repeat(3)}</span><span className="text-outline pr-6">{line.repeat(3)}</span>
        </div>
      </div>
      <div className="relative mx-auto mt-2 flex max-w-7xl items-end justify-end gap-3 px-4 sm:px-6">
        <a href={PHONE_TEL} className="mb-6 rounded-full bg-[#0B3B36] px-7 py-3.5 font-display text-lg tracking-wide text-white shadow-xl transition hover:bg-[#0E7A78]">
          CALL NOW →
        </a>
        <div className="w-[86px] shrink-0 sm:w-[110px]"><Man className="w-full" /></div>
      </div>
    </section>
    <TextStory />
    </>
  );
}

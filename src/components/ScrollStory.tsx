
// // // "use client";
// // // import { useEffect, useRef } from "react";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import { STATS, VALUES } from "@/lib/data";
// // // import { Man } from "./Man";
// // // import { Icon, Tick } from "./icons";

// // // const MISSION = [
// // //   "Deliver exceptional craftsmanship",
// // //   "Ensure customer safety and trust",
// // //   "Provide transparent and fair pricing",
// // //   "Build long-term relationships",
// // // ];
// // // const VISION = [
// // //   "Expand service coverage area",
// // //   "Introduce smart home solutions",
// // //   "Build lasting customer relationships",
// // //   "Set industry quality standards",
// // // ];

// // // function Check({ children }: { children: React.ReactNode }) {
// // //   return (
// // //     <li className="flex items-start gap-2.5 text-left text-sm font-semibold sm:text-base">
// // //       <span className="mt-0.5"><Tick size={20} /></span>
// // //       {children}
// // //     </li>
// // //   );
// // // }

// // // export default function ScrollStory({ idPrefix }: { idPrefix: string }) {
// // //   const root = useRef<HTMLElement>(null);
// // //   const waveRef = useRef(false);

// // //   useEffect(() => {
// // //     const el = root.current;
// // //     if (!el) return;
// // //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// // //       el.classList.add("story-static");
// // //       return;
// // //     }
// // //     gsap.registerPlugin(ScrollTrigger);
// // //     el.classList.add("story-live");
// // //     const q = gsap.utils.selector(el);
// // //     const ctx = gsap.context(() => {
// // //       const tl = gsap.timeline({
// // //         scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 1 },
// // //       });
// // //       // giant background word slides sideways the whole way
// // //       tl.fromTo(q(".story-word"), { xPercent: 4 }, { xPercent: -38, ease: "none", duration: 10 }, 0);
// // //       // man walks across the whole stage
// // //       tl.fromTo(q(".walker"), { left: "2%" }, { left: "86%", ease: "none", duration: 10 }, 0);
// // //       // scenes: pop in, hold, out (last stays)
// // //       const scenes = q(".scene");
// // //       scenes.forEach((s, i) => {
// // //         const at = i * 1.62;
// // //         tl.fromTo(s, { opacity: 0, y: 46, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }, at);
// // //         if (i < scenes.length - 1) tl.to(s, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, at + 1.25);
// // //         // stagger children of stats / checklists
// // //         const kids = s.querySelectorAll(".pop");
// // //         if (kids.length) tl.fromTo(kids, { opacity: 0, y: 24, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.09, ease: "back.out(2)" }, at + 0.25);
// // //         // scene 6 (core values): richer entrance — cards spring in one by one and
// // //         // settle into their CSS tilts (tilt lives on the .value-wrap parent),
// // //         // then the number tags / floating tags / heading sticker pop in after.
// // //         if (s.classList.contains("scene-values")) {
// // //           const cards = s.querySelectorAll(".value-pop");
// // //           tl.fromTo(cards,
// // //             { opacity: 0, y: 38, scale: 0.88, rotation: (i: number) => (i % 2 ? 3.5 : -3.5) },
// // //             { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.42, stagger: 0.12, ease: "back.out(1.8)" }, at + 0.3);
// // //           const extras = s.querySelectorAll(".value-tag, .value-extra");
// // //           tl.fromTo(extras,
// // //             { opacity: 0, scale: 0, y: -10 },
// // //             { opacity: 1, scale: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "back.out(3)" }, at + 1.08);
// // //         }
// // //       });
// // //       ScrollTrigger.create({
// // //         trigger: el, start: "top top", end: "bottom bottom",
// // //         onUpdate: (self) => {
// // //           const w = self.progress > 0.965;
// // //           if (w !== waveRef.current) {
// // //             waveRef.current = w;
// // //             el.querySelector(".walker")?.classList.toggle("is-wave", w);
// // //           }
// // //         },
// // //       });
// // //     }, el);
// // //     return () => { ctx.revert(); el.classList.remove("story-live"); };
// // //   }, []);

// // //   return (
// // //     <section ref={root} aria-label="About Prime Build story" className="story relative bg-white" style={{ height: "640vh" }}>
// // //       <style>{`
// // //         .story-static{height:auto !important}
// // //         .story-static .story-stage{position:static;height:auto;overflow:visible}
// // //         .story-static .scene{position:static !important;opacity:1 !important;transform:none !important;margin:0 auto;padding:2.2rem 1rem}
// // //         .story-static .walker,.story-static .story-word{display:none}
// // //         .story .walker.is-wave .arm-b{animation:storyWave 1s ease-in-out infinite alternate;transform-origin:84px 60px}
// // //         @keyframes storyWave{from{transform:rotate(112deg)}to{transform:rotate(146deg)}}
// // //         .story .value-wrap{transition:transform .35s ease}
// // //         .story .value-wrap.tilt-a{transform:rotate(-1.2deg)}
// // //         .story .value-wrap.tilt-b{transform:rotate(1.2deg)}
// // //         @media (hover:hover){.story .value-wrap:hover{transform:rotate(0deg)}}
// // //         .story .value-pop{transition:box-shadow .35s ease}
// // //         .story .value-wrap:hover .value-pop{box-shadow:0 24px 44px rgba(11,59,54,.14)}
// // //       `}</style>
// // //       <div className="story-stage sticky top-0 flex h-screen items-center justify-center overflow-hidden">
// // //         <div className="story-word pointer-events-none absolute left-0 top-[16%] whitespace-nowrap font-display text-[24vw] leading-none text-[#0E7A78]/[.07] select-none">
// // //           PRIME BUILD
// // //         </div>

// // //         {/* scene 1: tag */}
// // //         <div className="scene absolute inset-x-4 top-[24%] flex justify-center">
// // //           <span className="-rotate-2 rounded-lg bg-[#0E7A78] px-5 py-2.5 font-display text-xl tracking-wide text-white shadow-xl sm:text-3xl">
// // //             ABOUT PRIME BUILD.
// // //           </span>
// // //         </div>

// // //         {/* scene 2: building trust */}
// // //         <div className="scene absolute inset-x-4 top-[30%] mx-auto max-w-3xl text-center">
// // //           <h3 className="font-display text-5xl leading-[1.02] text-[#14201d] sm:text-7xl">
// // //             BUILDING TRUST
// // //             <span className="mt-2 inline-block -rotate-1 bg-[#0E7A78] px-4 text-white">EXCELLENCE.</span>
// // //           </h3>
// // //           <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#14201d]/70 sm:text-lg">
// // //             Your trusted partner for professional home construction and improvement services in Rawalpindi &amp; Islamabad since 2018.
// // //           </p>
// // //           <div className="mt-5 flex flex-wrap justify-center gap-2">
// // //             {["Since 2018", "250+ Projects", "2-Year Warranty"].map((p) => (
// // //               <span key={p} className="pop rounded-full border-2 border-[#0E7A78]/30 bg-[#BFE3DD]/50 px-4 py-1.5 text-sm font-extrabold text-[#0B3B36]">{p}</span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* scene 3: stats */}
// // //         <div className="scene absolute inset-x-4 top-[26%] mx-auto max-w-4xl text-center">
// // //           <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-5">
// // //             {STATS.map((s) => (
// // //               <div key={s.l} className="pop">
// // //                 <div className="font-display text-5xl text-[#0E7A78] sm:text-6xl">{s.n}</div>
// // //                 <div className="mt-1 text-xs font-extrabold uppercase tracking-widest text-[#14201d]/60">{s.l}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <p className="pop mt-6 text-sm font-bold text-[#14201d]/60">Serving Rawalpindi &amp; Islamabad with professional home services</p>
// // //         </div>

// // //         {/* scene 4: mission */}
// // //         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
// // //           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">MISSION</span></h3>
// // //           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
// // //             To provide reliable, high-quality home construction and improvement services that enhance living spaces while ensuring complete customer satisfaction and safety.
// // //           </p>
// // //           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
// // //             {MISSION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
// // //           </ul>
// // //         </div>

// // //         {/* scene 5: vision */}
// // //         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
// // //           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">VISION</span></h3>
// // //           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
// // //             To become the most trusted and preferred home services provider in Rawalpindi &amp; Islamabad, known for quality, reliability, and customer-centric approach.
// // //           </p>
// // //           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
// // //             {VISION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
// // //           </ul>
// // //         </div>

// // //         {/* scene 6: core values — sxlvx-style sticker cards (tilt on the wrap,
// // //             GSAP springs the inner card in, number/floating tags pop in after) */}
// // //         <div className="scene scene-values absolute inset-x-4 top-[10%] mx-auto max-w-5xl text-center md:top-[14%] lg:top-[16%]">
// // //           {/* floating asterisk decoration */}
// // //           <span className="value-extra pointer-events-none absolute -top-2 left-0 hidden text-[#0E7A78]/50 min-[560px]:block sm:left-[3%]" aria-hidden="true">
// // //             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="rotate-12">
// // //               <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
// // //             </svg>
// // //           </span>
// // //           {/* floating tag, top right of the heading */}
// // //           <span className="value-extra pointer-events-none absolute -top-1 right-0 hidden min-[560px]:block sm:right-[3%]" aria-hidden="true">
// // //             <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-white shadow-lg">SINCE 2018 →</span>
// // //           </span>
// // //           <h3 className="font-display text-[1.7rem] text-[#14201d] min-[480px]:text-4xl sm:text-5xl">
// // //             OUR CORE{" "}
// // //             <span className="relative inline-block text-[#0E7A78]">
// // //               VALUES
// // //               <span className="value-extra pointer-events-none absolute -top-5 right-0" aria-hidden="true">
// // //                 <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.14em] text-white shadow-md">OUR PROMISE</span>
// // //               </span>
// // //             </span>
// // //           </h3>
// // //           <p className="mt-3 text-sm font-bold text-[#14201d]/60">The principles that guide our work and define our company culture</p>
// // //           <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
// // //             {VALUES.map((v, i) => (
// // //               <div key={v.t} className={`value-wrap relative h-full ${i % 3 === 1 ? "tilt-b" : "tilt-a"}`}>
// // //                 <span className="value-tag pointer-events-none absolute -top-3 left-5 z-20" aria-hidden="true">
// // //                   <span className="block -rotate-[4deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[11px] font-extrabold tracking-[0.14em] text-white shadow-md">
// // //                     {String(i + 1).padStart(2, "0")}
// // //                   </span>
// // //                 </span>
// // //                 <div className="value-pop flex h-full items-start gap-4 rounded-[22px] border border-[#0E7A78]/15 bg-white p-4 text-left shadow-[0_16px_34px_rgba(11,59,54,.10)] sm:block sm:p-[26px]">
// // //                   <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#E7F2EF] text-[#0E7A78] sm:mb-4 sm:h-14 sm:w-14 sm:rounded-[18px]"><Icon name={v.icon} size={26} /></span>
// // //                   <div>
// // //                     <div className="font-display text-[1.25rem] uppercase leading-tight tracking-wide text-[#14201d] sm:text-[1.45rem]">{v.t}</div>
// // //                     <div className="mt-1 text-[13px] leading-relaxed text-[#14201d]/65 sm:mt-1.5 sm:text-[0.95rem]">{v.d}</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           {/* floating tag, bottom left of the grid */}
// // //           <span className="value-extra pointer-events-none absolute -bottom-8 left-2 sm:left-[3%]" aria-hidden="true">
// // //             <span className="block rotate-[4deg] rounded-full bg-[#DFF0EC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#0B3B36] shadow-md">PRIME BUILD ✦</span>
// // //           </span>
// // //         </div>

// // //         {/* walking man */}
// // //         <div className="walker pointer-events-none absolute bottom-[6%] left-[2%] w-[74px] sm:w-[92px]" aria-hidden="true">
// // //           <div className="walker-inner">
// // //             <Man walking className="w-full drop-shadow-[0_10px_10px_rgba(11,59,54,.25)]" />
// // //           </div>
// // //         </div>
// // //         <span className="sr-only">{idPrefix} story</span>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // "use client";
// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { STATS, VALUES } from "@/lib/data";
// // import { Man } from "./Man";
// // import { Icon, Tick } from "./icons";

// // const MISSION = [
// //   "Deliver exceptional craftsmanship",
// //   "Ensure customer safety and trust",
// //   "Provide transparent and fair pricing",
// //   "Build long-term relationships",
// // ];
// // const VISION = [
// //   "Expand service coverage area",
// //   "Introduce smart home solutions",
// //   "Build lasting customer relationships",
// //   "Set industry quality standards",
// // ];

// // function Check({ children }: { children: React.ReactNode }) {
// //   return (
// //     <li className="flex items-start gap-2.5 text-left text-sm font-semibold sm:text-base">
// //       <span className="mt-0.5"><Tick size={20} /></span>
// //       {children}
// //     </li>
// //   );
// // }

// // export default function ScrollStory({ idPrefix }: { idPrefix: string }) {
// //   const root = useRef<HTMLElement>(null);
// //   const waveRef = useRef(false);

// //   useEffect(() => {
// //     const el = root.current;
// //     if (!el) return;
// //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //       el.classList.add("story-static");
// //       return;
// //     }
// //     gsap.registerPlugin(ScrollTrigger);
// //     el.classList.add("story-live");
// //     const q = gsap.utils.selector(el);
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({
// //         scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 1 },
// //       });
// //       // giant background word slides sideways the whole way
// //       tl.fromTo(q(".story-word"), { xPercent: 4 }, { xPercent: -38, ease: "none", duration: 10 }, 0);
// //       // man walks across the whole stage
// //       tl.fromTo(q(".walker"), { left: "2%" }, { left: "86%", ease: "none", duration: 10 }, 0);
// //       // scenes: pop in, hold, out (last stays)
// //       const scenes = q(".scene");
// //       scenes.forEach((s, i) => {
// //         const at = i * 1.62;
// //         tl.fromTo(s, { opacity: 0, y: 46, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }, at);
// //         if (i < scenes.length - 1) tl.to(s, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, at + 1.25);
// //         // stagger children of stats / checklists
// //         const kids = s.querySelectorAll(".pop");
// //         if (kids.length) tl.fromTo(kids, { opacity: 0, y: 24, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.09, ease: "back.out(2)" }, at + 0.25);
// //         // scene 6 (core values): richer entrance — cards spring in one by one and
// //         // settle into their CSS tilts (tilt lives on the .value-wrap parent),
// //         // then the number tags / floating tags / heading sticker pop in after.
// //         if (s.classList.contains("scene-values")) {
// //           const cards = s.querySelectorAll(".value-pop");
// //           tl.fromTo(cards,
// //             { opacity: 0, y: 38, scale: 0.88, rotation: (i: number) => (i % 2 ? 3.5 : -3.5) },
// //             { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.42, stagger: 0.12, ease: "back.out(1.8)" }, at + 0.3);
// //           const extras = s.querySelectorAll(".value-tag, .value-extra");
// //           tl.fromTo(extras,
// //             { opacity: 0, scale: 0, y: -10 },
// //             { opacity: 1, scale: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "back.out(3)" }, at + 1.08);
// //         }
// //       });
// //       ScrollTrigger.create({
// //         trigger: el, start: "top top", end: "bottom bottom",
// //         onUpdate: (self) => {
// //           const w = self.progress > 0.965;
// //           if (w !== waveRef.current) {
// //             waveRef.current = w;
// //             el.querySelector(".walker")?.classList.toggle("is-wave", w);
// //           }
// //         },
// //       });
// //     }, el);
// //     return () => { ctx.revert(); el.classList.remove("story-live"); };
// //   }, []);

// //   return (
// //     <section ref={root} aria-label="About Prime Build story" className="story relative bg-white" style={{ height: "640vh" }}>
// //       <style>{`
// //         .story-static{height:auto !important}
// //         .story-static .story-stage{position:static;height:auto;overflow:visible}
// //         .story-static .scene{position:static !important;opacity:1 !important;transform:none !important;margin:0 auto;padding:2.2rem 1rem}
// //         .story-static .walker,.story-static .story-word{display:none}
// //         .story .walker.is-wave .arm-b{animation:storyWave 1s ease-in-out infinite alternate;transform-origin:84px 60px}
// //         @keyframes storyWave{from{transform:rotate(112deg)}to{transform:rotate(146deg)}}
// //         .story .value-wrap{transition:transform .35s ease}
// //         .story .value-wrap.tilt-a{transform:rotate(-1.2deg)}
// //         .story .value-wrap.tilt-b{transform:rotate(1.2deg)}
// //         @media (hover:hover){.story .value-wrap:hover{transform:rotate(0deg)}}
// //         .story .value-pop{transition:box-shadow .35s ease}
// //         .story .value-wrap:hover .value-pop{box-shadow:0 24px 44px rgba(11,59,54,.14)}
// //       `}</style>
// //       <div className="story-stage sticky top-0 flex h-screen items-center justify-center overflow-hidden">
// //         <div className="story-word pointer-events-none absolute left-0 top-[16%] whitespace-nowrap font-display text-[24vw] leading-none text-[#0E7A78]/[.07] select-none">
// //           PRIME BUILD
// //         </div>

// //         {/* scene 1: tag */}
// //         <div className="scene absolute inset-x-4 top-[24%] flex justify-center">
// //           <span className="-rotate-2 rounded-lg bg-[#0E7A78] px-5 py-2.5 font-display text-xl tracking-wide text-white shadow-xl sm:text-3xl">
// //             ABOUT PRIME BUILD.
// //           </span>
// //         </div>

// //         {/* scene 2: building trust */}
// //         <div className="scene absolute inset-x-4 top-[30%] mx-auto max-w-3xl text-center">
// //           <h3 className="font-display text-5xl leading-[1.02] text-[#14201d] sm:text-7xl">
// //             BUILDING TRUST
// //             <span className="mt-2 inline-block -rotate-1 bg-[#0E7A78] px-4 text-white">EXCELLENCE.</span>
// //           </h3>
// //           <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#14201d]/70 sm:text-lg">
// //             Your trusted partner for professional home construction and improvement services in Rawalpindi &amp; Islamabad since 2018.
// //           </p>
// //           <div className="mt-5 flex flex-wrap justify-center gap-2">
// //             {["Since 2018", "250+ Projects", "2-Year Warranty"].map((p) => (
// //               <span key={p} className="pop rounded-full border-2 border-[#0E7A78]/30 bg-[#BFE3DD]/50 px-4 py-1.5 text-sm font-extrabold text-[#0B3B36]">{p}</span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* scene 3: stats */}
// //         <div className="scene absolute inset-x-4 top-[26%] mx-auto max-w-4xl text-center">
// //           <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-5">
// //             {STATS.map((s) => (
// //               <div key={s.l} className="pop">
// //                 <div className="font-display text-5xl text-[#0E7A78] sm:text-6xl">{s.n}</div>
// //                 <div className="mt-1 text-xs font-extrabold uppercase tracking-widest text-[#14201d]/60">{s.l}</div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="pop mt-6 text-sm font-bold text-[#14201d]/60">Serving Rawalpindi &amp; Islamabad with professional home services</p>
// //         </div>

// //         {/* scene 4: mission */}
// //         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
// //           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">MISSION</span></h3>
// //           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
// //             To provide reliable, high-quality home construction and improvement services that enhance living spaces while ensuring complete customer satisfaction and safety.
// //           </p>
// //           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
// //             {MISSION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
// //           </ul>
// //         </div>

// //         {/* scene 5: vision */}
// //         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
// //           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">VISION</span></h3>
// //           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
// //             To become the most trusted and preferred home services provider in Rawalpindi &amp; Islamabad, known for quality, reliability, and customer-centric approach.
// //           </p>
// //           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
// //             {VISION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
// //           </ul>
// //         </div>

// //         {/* scene 6: core values — sxlvx-style sticker cards (tilt on the wrap,
// //             GSAP springs the inner card in, number/floating tags pop in after) */}
// //         <div className="scene scene-values absolute inset-x-4 top-[10%] mx-auto max-w-5xl text-center md:top-[14%] lg:top-[16%]">
// //           {/* floating asterisk decoration */}
// //           <span className="value-extra pointer-events-none absolute -top-2 left-0 hidden text-[#0E7A78]/50 min-[560px]:block sm:left-[3%]" aria-hidden="true">
// //             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="rotate-12">
// //               <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
// //             </svg>
// //           </span>
// //           {/* floating tag, top right of the heading */}
// //           <span className="value-extra pointer-events-none absolute -top-1 right-0 hidden min-[560px]:block sm:right-[3%]" aria-hidden="true">
// //             <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-white shadow-lg">SINCE 2018 →</span>
// //           </span>
// //           <h3 className="font-display text-[1.7rem] text-[#14201d] min-[480px]:text-4xl sm:text-5xl">
// //             OUR CORE{" "}
// //             <span className="relative inline-block text-[#0E7A78]">
// //               VALUES
// //               <span className="value-extra pointer-events-none absolute -top-5 right-0" aria-hidden="true">
// //                 <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.14em] text-white shadow-md">OUR PROMISE</span>
// //               </span>
// //             </span>
// //           </h3>
// //           <p className="mt-3 text-sm font-bold text-[#14201d]/60">The principles that guide our work and define our company culture</p>
// //           <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
// //             {VALUES.map((v, i) => (
// //               <div key={v.t} className={`value-wrap relative h-full ${i % 3 === 1 ? "tilt-b" : "tilt-a"}`}>
// //                 <span className="value-tag pointer-events-none absolute -top-3 left-5 z-20" aria-hidden="true">
// //                   <span className="block -rotate-[4deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[11px] font-extrabold tracking-[0.14em] text-white shadow-md">
// //                     {String(i + 1).padStart(2, "0")}
// //                   </span>
// //                 </span>
// //                 <div className="value-pop flex h-full items-start gap-4 rounded-[22px] border border-[#0E7A78]/15 bg-white p-3 text-left shadow-[0_16px_34px_rgba(11,59,54,.10)] sm:block sm:p-[26px]">
// //                   <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#E7F2EF] text-[#0E7A78] sm:mb-4 sm:h-14 sm:w-14 sm:rounded-[18px]"><Icon name={v.icon} size={26} /></span>
// //                   <div>
// //                     <div className="font-display text-[1.15rem] uppercase leading-tight tracking-wide text-[#14201d] sm:text-[1.45rem]">{v.t}</div>
// //                     <div className="mt-1 text-xs leading-relaxed text-[#14201d]/65 sm:mt-1.5 sm:text-[0.95rem]">{v.d}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           {/* floating tag, bottom left of the grid */}
// //           <span className="value-extra pointer-events-none absolute -bottom-8 left-2 sm:left-[3%]" aria-hidden="true">
// //             <span className="block rotate-[4deg] rounded-full bg-[#DFF0EC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#0B3B36] shadow-md">PRIME BUILD ✦</span>
// //           </span>
// //         </div>

// //         {/* walking man */}
// //         <div className="walker pointer-events-none absolute bottom-[6%] left-[2%] w-[13vw] sm:w-[92px]" aria-hidden="true">
// //           <div className="walker-inner">
// //             <Man walking className="w-full drop-shadow-[0_10px_10px_rgba(11,59,54,.25)]" />
// //           </div>
// //         </div>
// //         <span className="sr-only">{idPrefix} story</span>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { STATS, VALUES } from "@/lib/data";
// import { Man } from "./Man";
// import { Icon, Tick } from "./icons";

// const MISSION = [
//   "Deliver exceptional craftsmanship",
//   "Ensure customer safety and trust",
//   "Provide transparent and fair pricing",
//   "Build long-term relationships",
// ];
// const VISION = [
//   "Expand service coverage area",
//   "Introduce smart home solutions",
//   "Build lasting customer relationships",
//   "Set industry quality standards",
// ];

// function Check({ children }: { children: React.ReactNode }) {
//   return (
//     <li className="flex items-start gap-2.5 text-left text-sm font-semibold sm:text-base">
//       <span className="mt-0.5"><Tick size={20} /></span>
//       {children}
//     </li>
//   );
// }

// export default function ScrollStory({ idPrefix }: { idPrefix: string }) {
//   const root = useRef<HTMLElement>(null);
//   const waveRef = useRef(false);

//   useEffect(() => {
//     const el = root.current;
//     if (!el) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       el.classList.add("story-static");
//       return;
//     }
//     gsap.registerPlugin(ScrollTrigger);
//     el.classList.add("story-live");
//     const q = gsap.utils.selector(el);
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 1 },
//       });
//       // giant background word slides sideways the whole way
//       tl.fromTo(q(".story-word"), { xPercent: 4 }, { xPercent: -38, ease: "none", duration: 10 }, 0);
//       // man walks across the whole stage
//       tl.fromTo(q(".walker"), { left: "2%" }, { left: "86%", ease: "none", duration: 10 }, 0);
//       // scenes: pop in, hold, out (last stays)
//       const scenes = q(".scene");
//       scenes.forEach((s, i) => {
//         const at = i * 1.62;
//         tl.fromTo(s, { opacity: 0, y: 46, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }, at);
//         if (i < scenes.length - 1) tl.to(s, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, at + 1.25);
//         // stagger children of stats / checklists
//         const kids = s.querySelectorAll(".pop");
//         if (kids.length) tl.fromTo(kids, { opacity: 0, y: 24, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.09, ease: "back.out(2)" }, at + 0.25);
//         // scene 6 (core values): richer entrance — cards spring in one by one and
//         // settle into their CSS tilts (tilt lives on the .value-wrap parent),
//         // then the number tags / floating tags / heading sticker pop in after.
//         if (s.classList.contains("scene-values")) {
//           const cards = s.querySelectorAll(".value-pop");
//           tl.fromTo(cards,
//             { opacity: 0, y: 38, scale: 0.88, rotation: (i: number) => (i % 2 ? 3.5 : -3.5) },
//             { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.42, stagger: 0.12, ease: "back.out(1.8)" }, at + 0.3);
//           const extras = s.querySelectorAll(".value-tag, .value-extra");
//           tl.fromTo(extras,
//             { opacity: 0, scale: 0, y: -10 },
//             { opacity: 1, scale: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "back.out(3)" }, at + 1.08);
//         }
//       });
//       ScrollTrigger.create({
//         trigger: el, start: "top top", end: "bottom bottom",
//         onUpdate: (self) => {
//           const w = self.progress > 0.965;
//           if (w !== waveRef.current) {
//             waveRef.current = w;
//             el.querySelector(".walker")?.classList.toggle("is-wave", w);
//           }
//         },
//       });
//     }, el);
//     return () => { ctx.revert(); el.classList.remove("story-live"); };
//   }, []);

//   return (
//     <section ref={root} aria-label="About Prime Build story" className="story relative bg-white" style={{ height: "640vh" }}>
//       <style>{`
//         .story-static{height:auto !important}
//         .story-static .story-stage{position:static;height:auto;overflow:visible;flex-direction:column;align-items:stretch}
//         .story-static .scene{position:static !important;opacity:1 !important;transform:none !important;margin:0 auto;padding:2.2rem 1rem;width:100%;max-width:100%;box-sizing:border-box}
//         .story-static .walker,.story-static .story-word{display:none}
//         .story .walker.is-wave .arm-b{animation:storyWave 1s ease-in-out infinite alternate;transform-origin:84px 60px}
//         @keyframes storyWave{from{transform:rotate(112deg)}to{transform:rotate(146deg)}}
//         .story .value-wrap{transition:transform .35s ease}
//         .story .value-wrap.tilt-a{transform:rotate(-1.2deg)}
//         .story .value-wrap.tilt-b{transform:rotate(1.2deg)}
//         @media (hover:hover){.story .value-wrap:hover{transform:rotate(0deg)}}
//         .story .value-pop{transition:box-shadow .35s ease}
//         .story .value-wrap:hover .value-pop{box-shadow:0 24px 44px rgba(11,59,54,.14)}
//       `}</style>
//       <div className="story-stage sticky top-0 flex h-screen items-center justify-center overflow-hidden">
//         <div className="story-word pointer-events-none absolute left-0 top-[16%] whitespace-nowrap font-display text-[24vw] leading-none text-[#0E7A78]/[.07] select-none">
//           PRIME BUILD
//         </div>

//         {/* scene 1: tag */}
//         <div className="scene absolute inset-x-4 top-[24%] flex justify-center">
//           <span className="-rotate-2 rounded-lg bg-[#0E7A78] px-5 py-2.5 font-display text-xl tracking-wide text-white shadow-xl sm:text-3xl">
//             ABOUT PRIME BUILD.
//           </span>
//         </div>

//         {/* scene 2: building trust */}
//         <div className="scene absolute inset-x-4 top-[30%] mx-auto max-w-3xl text-center">
//           <h3 className="font-display text-5xl leading-[1.02] text-[#14201d] sm:text-7xl">
//             BUILDING TRUST
//             <span className="mt-2 inline-block -rotate-1 bg-[#0E7A78] px-4 text-white">EXCELLENCE.</span>
//           </h3>
//           <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#14201d]/70 sm:text-lg">
//             Your trusted partner for professional home construction and improvement services in Rawalpindi &amp; Islamabad since 2018.
//           </p>
//           <div className="mt-5 flex flex-wrap justify-center gap-2">
//             {["Since 2018", "250+ Projects", "2-Year Warranty"].map((p) => (
//               <span key={p} className="pop rounded-full border-2 border-[#0E7A78]/30 bg-[#BFE3DD]/50 px-4 py-1.5 text-sm font-extrabold text-[#0B3B36]">{p}</span>
//             ))}
//           </div>
//         </div>

//         {/* scene 3: stats */}
//         <div className="scene absolute inset-x-4 top-[26%] mx-auto max-w-4xl text-center">
//           <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-5">
//             {STATS.map((s) => (
//               <div key={s.l} className="pop">
//                 <div className="font-display text-5xl text-[#0E7A78] sm:text-6xl">{s.n}</div>
//                 <div className="mt-1 text-xs font-extrabold uppercase tracking-widest text-[#14201d]/60">{s.l}</div>
//               </div>
//             ))}
//           </div>
//           <p className="pop mt-6 text-sm font-bold text-[#14201d]/60">Serving Rawalpindi &amp; Islamabad with professional home services</p>
//         </div>

//         {/* scene 4: mission */}
//         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
//           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">MISSION</span></h3>
//           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
//             To provide reliable, high-quality home construction and improvement services that enhance living spaces while ensuring complete customer satisfaction and safety.
//           </p>
//           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
//             {MISSION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
//           </ul>
//         </div>

//         {/* scene 5: vision */}
//         <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
//           <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">VISION</span></h3>
//           <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
//             To become the most trusted and preferred home services provider in Rawalpindi &amp; Islamabad, known for quality, reliability, and customer-centric approach.
//           </p>
//           <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
//             {VISION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
//           </ul>
//         </div>

//         {/* scene 6: core values — sxlvx-style sticker cards (tilt on the wrap,
//             GSAP springs the inner card in, number/floating tags pop in after) */}
//         <div className="scene scene-values absolute inset-x-4 top-[10%] mx-auto max-w-5xl text-center md:top-[14%] lg:top-[16%]">
//           {/* floating asterisk decoration */}
//           <span className="value-extra pointer-events-none absolute -top-2 left-0 hidden text-[#0E7A78]/50 min-[560px]:block sm:left-[3%]" aria-hidden="true">
//             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="rotate-12">
//               <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
//             </svg>
//           </span>
//           {/* floating tag, top right of the heading */}
//           <span className="value-extra pointer-events-none absolute -top-1 right-0 hidden min-[560px]:block sm:right-[3%]" aria-hidden="true">
//             <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-white shadow-lg">SINCE 2018 →</span>
//           </span>
//           <h3 className="font-display text-[1.7rem] text-[#14201d] min-[480px]:text-4xl sm:text-5xl">
//             OUR CORE{" "}
//             <span className="relative inline-block text-[#0E7A78]">
//               VALUES
//               <span className="value-extra pointer-events-none absolute -top-5 right-0" aria-hidden="true">
//                 <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.14em] text-white shadow-md">OUR PROMISE</span>
//               </span>
//             </span>
//           </h3>
//           <p className="mt-3 text-sm font-bold text-[#14201d]/60">The principles that guide our work and define our company culture</p>
//           <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//             {VALUES.map((v, i) => (
//               <div key={v.t} className={`value-wrap relative h-full ${i % 3 === 1 ? "tilt-b" : "tilt-a"}`}>
//                 <span className="value-tag pointer-events-none absolute -top-3 left-5 z-20" aria-hidden="true">
//                   <span className="block -rotate-[4deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[11px] font-extrabold tracking-[0.14em] text-white shadow-md">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                 </span>
//                 <div className="value-pop flex h-full items-start gap-4 rounded-[22px] border border-[#0E7A78]/15 bg-white p-3 text-left shadow-[0_16px_34px_rgba(11,59,54,.10)] sm:block sm:p-[26px]">
//                   <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#E7F2EF] text-[#0E7A78] sm:mb-4 sm:h-14 sm:w-14 sm:rounded-[18px]"><Icon name={v.icon} size={26} /></span>
//                   <div>
//                     <div className="font-display text-[1.15rem] uppercase leading-tight tracking-wide text-[#14201d] sm:text-[1.45rem]">{v.t}</div>
//                     <div className="mt-1 text-xs leading-relaxed text-[#14201d]/65 sm:mt-1.5 sm:text-[0.95rem]">{v.d}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* floating tag, bottom left of the grid */}
//           <span className="value-extra pointer-events-none absolute -bottom-8 left-2 sm:left-[3%]" aria-hidden="true">
//             <span className="block rotate-[4deg] rounded-full bg-[#DFF0EC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#0B3B36] shadow-md">PRIME BUILD ✦</span>
//           </span>
//         </div>

//         {/* walking man */}
//         <div className="walker pointer-events-none absolute bottom-[6%] left-[2%] w-[13vw] sm:w-[92px]" aria-hidden="true">
//           <div className="walker-inner">
//             <Man walking className="w-full drop-shadow-[0_10px_10px_rgba(11,59,54,.25)]" />
//           </div>
//         </div>
//         <span className="sr-only">{idPrefix} story</span>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS, VALUES } from "@/lib/data";
import { Man } from "./Man";
import { Icon, Tick } from "./icons";

const MISSION = [
  "Deliver exceptional craftsmanship",
  "Ensure customer safety and trust",
  "Provide transparent and fair pricing",
  "Build long-term relationships",
];
const VISION = [
  "Expand service coverage area",
  "Introduce smart home solutions",
  "Build lasting customer relationships",
  "Set industry quality standards",
];

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-left text-sm font-semibold sm:text-base">
      <span className="mt-0.5"><Tick size={20} /></span>
      {children}
    </li>
  );
}

export default function ScrollStory({ idPrefix }: { idPrefix: string }) {
  const root = useRef<HTMLElement>(null);
  const waveRef = useRef(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    // Owner's explicit order: the story animation always plays, even when the
    // phone reports prefers-reduced-motion (Remove Animations ON). No static
    // branch — the GSAP timeline below always builds.
    gsap.registerPlugin(ScrollTrigger);
    el.classList.add("story-live");
    const q = gsap.utils.selector(el);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 1 },
      });
      // giant background word slides sideways the whole way
      tl.fromTo(q(".story-word"), { xPercent: 4 }, { xPercent: -38, ease: "none", duration: 10 }, 0);
      // man walks across the whole stage
      tl.fromTo(q(".walker"), { left: "2%" }, { left: "86%", ease: "none", duration: 10 }, 0);
      // scenes: pop in, hold, out (last stays)
      const scenes = q(".scene");
      scenes.forEach((s, i) => {
        const at = i * 1.62;
        tl.fromTo(s, { opacity: 0, y: 46, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }, at);
        if (i < scenes.length - 1) tl.to(s, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }, at + 1.25);
        // stagger children of stats / checklists
        const kids = s.querySelectorAll(".pop");
        if (kids.length) tl.fromTo(kids, { opacity: 0, y: 24, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.09, ease: "back.out(2)" }, at + 0.25);
        // scene 6 (core values): richer entrance — cards spring in one by one and
        // settle into their CSS tilts (tilt lives on the .value-wrap parent),
        // then the number tags / floating tags / heading sticker pop in after.
        if (s.classList.contains("scene-values")) {
          const cards = s.querySelectorAll(".value-pop");
          tl.fromTo(cards,
            { opacity: 0, y: 38, scale: 0.88, rotation: (i: number) => (i % 2 ? 3.5 : -3.5) },
            { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.42, stagger: 0.12, ease: "back.out(1.8)" }, at + 0.3);
          const extras = s.querySelectorAll(".value-tag, .value-extra");
          tl.fromTo(extras,
            { opacity: 0, scale: 0, y: -10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "back.out(3)" }, at + 1.08);
        }
      });
      ScrollTrigger.create({
        trigger: el, start: "top top", end: "bottom bottom",
        onUpdate: (self) => {
          const w = self.progress > 0.965;
          if (w !== waveRef.current) {
            waveRef.current = w;
            el.querySelector(".walker")?.classList.toggle("is-wave", w);
          }
        },
      });
    }, el);
    return () => { ctx.revert(); el.classList.remove("story-live"); };
  }, []);

  return (
    <section ref={root} aria-label="About Prime Build story" className="story relative bg-white" style={{ height: "640vh" }}>
      <style>{`
        .story-static{height:auto !important}
        .story-static .story-stage{position:static;height:auto;overflow:visible;flex-direction:column;align-items:stretch}
        .story-static .scene{position:static !important;opacity:1 !important;transform:none !important;margin:0 auto;padding:2.2rem 1rem;width:100%;max-width:100%;box-sizing:border-box}
        .story-static .walker,.story-static .story-word{display:none}
        .story .walker.is-wave .arm-b{animation:storyWave 1s ease-in-out infinite alternate;transform-origin:84px 60px}
        @keyframes storyWave{from{transform:rotate(112deg)}to{transform:rotate(146deg)}}
        .story .value-wrap{transition:transform .35s ease}
        .story .value-wrap.tilt-a{transform:rotate(-1.2deg)}
        .story .value-wrap.tilt-b{transform:rotate(1.2deg)}
        @media (hover:hover){.story .value-wrap:hover{transform:rotate(0deg)}}
        .story .value-pop{transition:box-shadow .35s ease}
        .story .value-wrap:hover .value-pop{box-shadow:0 24px 44px rgba(11,59,54,.14)}
      `}</style>
      <div className="story-stage sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="story-word pointer-events-none absolute left-0 top-[16%] whitespace-nowrap font-display text-[24vw] leading-none text-[#0E7A78]/[.07] select-none">
          PRIME BUILD
        </div>

        {/* scene 1: tag */}
        <div className="scene absolute inset-x-4 top-[24%] flex justify-center">
          <span className="-rotate-2 rounded-lg bg-[#0E7A78] px-5 py-2.5 font-display text-xl tracking-wide text-white shadow-xl sm:text-3xl">
            ABOUT PRIME BUILD.
          </span>
        </div>

        {/* scene 2: building trust */}
        <div className="scene absolute inset-x-4 top-[30%] mx-auto max-w-3xl text-center">
          <h3 className="font-display text-5xl leading-[1.02] text-[#14201d] sm:text-7xl">
            BUILDING TRUST
            <span className="mt-2 inline-block -rotate-1 bg-[#0E7A78] px-4 text-white">EXCELLENCE.</span>
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#14201d]/70 sm:text-lg">
            Your trusted partner for professional home construction and improvement services in Rawalpindi &amp; Islamabad since 2018.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["Since 2018", "250+ Projects", "2-Year Warranty"].map((p) => (
              <span key={p} className="pop rounded-full border-2 border-[#0E7A78]/30 bg-[#BFE3DD]/50 px-4 py-1.5 text-sm font-extrabold text-[#0B3B36]">{p}</span>
            ))}
          </div>
        </div>

        {/* scene 3: stats */}
        <div className="scene absolute inset-x-4 top-[26%] mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-5">
            {STATS.map((s) => (
              <div key={s.l} className="pop">
                <div className="font-display text-5xl text-[#0E7A78] sm:text-6xl">{s.n}</div>
                <div className="mt-1 text-xs font-extrabold uppercase tracking-widest text-[#14201d]/60">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="pop mt-6 text-sm font-bold text-[#14201d]/60">Serving Rawalpindi &amp; Islamabad with professional home services</p>
        </div>

        {/* scene 4: mission */}
        <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
          <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">MISSION</span></h3>
          <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
            To provide reliable, high-quality home construction and improvement services that enhance living spaces while ensuring complete customer satisfaction and safety.
          </p>
          <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
            {MISSION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
          </ul>
        </div>

        {/* scene 5: vision */}
        <div className="scene absolute inset-x-4 top-[24%] mx-auto max-w-2xl text-center">
          <h3 className="font-display text-4xl text-[#14201d] sm:text-5xl">OUR <span className="text-[#0E7A78]">VISION</span></h3>
          <p className="mt-4 font-semibold leading-relaxed text-[#14201d]/70">
            To become the most trusted and preferred home services provider in Rawalpindi &amp; Islamabad, known for quality, reliability, and customer-centric approach.
          </p>
          <ul className="mx-auto mt-6 grid max-w-lg gap-3 text-left sm:grid-cols-2">
            {VISION.map((m) => <span key={m} className="pop block"><Check>{m}</Check></span>)}
          </ul>
        </div>

        {/* scene 6: core values — sxlvx-style sticker cards (tilt on the wrap,
            GSAP springs the inner card in, number/floating tags pop in after) */}
        <div className="scene scene-values absolute inset-x-4 top-[10%] mx-auto max-w-5xl text-center md:top-[14%] lg:top-[16%]">
          {/* floating asterisk decoration */}
          <span className="value-extra pointer-events-none absolute -top-2 left-0 hidden text-[#0E7A78]/50 min-[560px]:block sm:left-[3%]" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="rotate-12">
              <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
            </svg>
          </span>
          {/* floating tag, top right of the heading */}
          <span className="value-extra pointer-events-none absolute -top-1 right-0 hidden min-[560px]:block sm:right-[3%]" aria-hidden="true">
            <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-white shadow-lg">SINCE 2018 →</span>
          </span>
          <h3 className="font-display text-[1.7rem] text-[#14201d] min-[480px]:text-4xl sm:text-5xl">
            OUR CORE{" "}
            <span className="relative inline-block text-[#0E7A78]">
              VALUES
              <span className="value-extra pointer-events-none absolute -top-5 right-0" aria-hidden="true">
                <span className="block -rotate-[5deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.14em] text-white shadow-md">OUR PROMISE</span>
              </span>
            </span>
          </h3>
          <p className="mt-3 text-sm font-bold text-[#14201d]/60">The principles that guide our work and define our company culture</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.t} className={`value-wrap relative h-full ${i % 3 === 1 ? "tilt-b" : "tilt-a"}`}>
                <span className="value-tag pointer-events-none absolute -top-3 left-5 z-20" aria-hidden="true">
                  <span className="block -rotate-[4deg] rounded-full bg-[#0E7A78] px-2.5 py-[3px] text-[11px] font-extrabold tracking-[0.14em] text-white shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <div className="value-pop flex h-full items-start gap-4 rounded-[22px] border border-[#0E7A78]/15 bg-white p-3 text-left shadow-[0_16px_34px_rgba(11,59,54,.10)] sm:block sm:p-[26px]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-[#E7F2EF] text-[#0E7A78] sm:mb-4 sm:h-14 sm:w-14 sm:rounded-[18px]"><Icon name={v.icon} size={26} /></span>
                  <div>
                    <div className="font-display text-[1.15rem] uppercase leading-tight tracking-wide text-[#14201d] sm:text-[1.45rem]">{v.t}</div>
                    <div className="mt-1 text-xs leading-relaxed text-[#14201d]/65 sm:mt-1.5 sm:text-[0.95rem]">{v.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* floating tag, bottom left of the grid */}
          <span className="value-extra pointer-events-none absolute -bottom-8 left-2 sm:left-[3%]" aria-hidden="true">
            <span className="block rotate-[4deg] rounded-full bg-[#DFF0EC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#0B3B36] shadow-md">PRIME BUILD ✦</span>
          </span>
        </div>

        {/* walking man */}
        <div className="walker pointer-events-none absolute bottom-[6%] left-[2%] w-[13vw] sm:w-[92px]" aria-hidden="true">
          <div className="walker-inner">
            <Man walking className="w-full drop-shadow-[0_10px_10px_rgba(11,59,54,.25)]" />
          </div>
        </div>
        <span className="sr-only">{idPrefix} story</span>
      </div>
    </section>
  );
}

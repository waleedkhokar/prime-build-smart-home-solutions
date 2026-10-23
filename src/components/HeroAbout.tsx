"use client";
import { useEffect, useRef } from "react";
import { PHONE_TEL, WA_BASE } from "@/lib/data";
import { Icon } from "./icons";

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = wrap.current, p = panel.current, im = img.current;
        if (!w || !p || !im) return;
        const total = window.innerHeight * 1.15;
        const prog = Math.min(1, Math.max(0, window.scrollY / total));
        const inset = 14 * (1 - prog);
        const radius = 24 * (1 - prog);
        p.style.clipPath = `inset(${inset}px ${inset}px ${inset}px ${inset}px round ${radius}px)`;
        im.style.transform = `scale(${1 + 0.08 * prog}) translateY(${prog * 14}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={wrap} className="relative">
      <div className="sticky top-0 h-[100svh]">
        <div ref={panel} className="absolute inset-0 overflow-hidden bg-[#0B3B36]" style={{ clipPath: "inset(14px 14px 14px 14px round 24px)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={img} src="/projects/washroom.jpg" alt="Finished washroom by Prime Build" className="h-full w-full object-cover object-[38%_50%] will-change-transform lg:object-[50%_34%]" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 62% 46% at 50% 52%, rgba(6,30,27,.52), rgba(6,30,27,0) 70%)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-display leading-[.95] text-white" style={{ fontSize: "clamp(3.4rem, 13.5vw, 11.5rem)", textShadow: "0 6px 34px rgba(0,0,0,.35)" }}>
              <span className="reveal-mask"><span>PRIME</span></span>
              <span className="reveal-mask"><span style={{ animationDelay: ".18s" }}>BUILD</span></span>
            </h1>
            <p className="reveal-mask mt-4 max-w-xl text-base font-bold text-white sm:text-xl">
              <span style={{ animationDelay: ".4s" }}>We Build, Fix &amp; Improve Homes You Can Trust</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[16vh]" aria-hidden="true" />
    </div>
  );
}

// VIDEO FILE NAME — if the real file name on your PC is different, change only this line
const PHONE_VIDEO = "/projects/modern.mp4";


const PHONE_VIDEO_SPEED = 1.1;

export function AboutBlock() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let raf = 0;
    let last = 0;
    let pos = 0; // our own video time in seconds
    // stop the browser from playing it at normal speed; we move time ourselves
    const stopNative = () => v.pause();
    v.addEventListener("play", stopNative);
    v.pause();
    const tick = (now: number) => {
      if (last && v.readyState >= 2 && v.duration) {
        const dt = (now - last) / 1000;
        pos += dt * PHONE_VIDEO_SPEED;
        if (pos >= v.duration) pos = 0; // loop
        if (!v.seeking) v.currentTime = pos;
      }
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); v.removeEventListener("play", stopNative); };
  }, []);

  return (
    <section aria-label="About Prime Build" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="sr order-2 flex justify-center lg:order-1">
          <div className="relative w-[250px] rounded-[2.4rem] border-[6px] border-[#17181c] bg-black shadow-[0_30px_60px_rgba(11,59,54,.28)] sm:w-[280px]">
            <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#17181c]" />
            <div className="relative aspect-[9/18.6] overflow-hidden rounded-[2rem]">
              <video
                ref={videoRef}
                src={PHONE_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/projects/Kitchen.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent pb-3 pt-10 text-center font-display text-sm tracking-[.2em] text-white">
                PRIME BUILD
              </div>
            </div>
          </div>
        </div>
        <div className="sr order-1 lg:order-2">
          <span className="inline-block rounded-full bg-[#BFE3DD]/60 px-4 py-1.5 text-xs font-extrabold tracking-[.22em] text-[#0B3B36]">
            ABOUT PRIME BUILD
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">
            Building <span className="text-[#0E7A78]">Trust</span><br />Through <span className="text-[#0E7A78]">Excellence</span>
          </h2>
          <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-[#14201d]/75 sm:text-lg">
            Your trusted partner for professional home construction and improvement services in <strong>Rawalpindi &amp; Islamabad</strong> since <strong>2018</strong>.
          </p>
          <p className="mt-3 max-w-xl text-base font-semibold leading-relaxed text-[#14201d]/75">
            From a single room fix to a full home renovation, our professional team plans and completes every job with care — quality materials, fair prices and work finished on time.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-[#0E7A78] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:bg-[#0B3B36]">
              Contact Us <Icon name="phone" size={16} />
            </a>
            <a href={WA_BASE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-7 py-3.5 font-extrabold text-[#128C4B] transition hover:bg-[#25D366]/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useEffect, useRef } from "react";
// import { PHONE_TEL, WA_BASE } from "@/lib/data";
// import { Icon } from "./icons";

// export function Hero() {
//   const wrap = useRef<HTMLDivElement>(null);
//   const panel = useRef<HTMLDivElement>(null);
//   const img = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     let raf = 0;
//     const onScroll = () => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(() => {
//         const w = wrap.current, p = panel.current, im = img.current;
//         if (!w || !p || !im) return;
//         const total = window.innerHeight * 1.15;
//         const prog = Math.min(1, Math.max(0, window.scrollY / total));
//         const inset = 14 * (1 - prog);
//         const radius = 24 * (1 - prog);
//         p.style.clipPath = `inset(${inset}px ${inset}px ${inset}px ${inset}px round ${radius}px)`;
//         im.style.transform = `scale(${1 + 0.08 * prog}) translateY(${prog * 14}px)`;
//       });
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
//   }, []);

//   return (
//     <div ref={wrap} className="relative">
//       <div className="sticky top-0 h-[100svh]">
//         <div ref={panel} className="absolute inset-0 overflow-hidden bg-[#0B3B36]" style={{ clipPath: "inset(14px 14px 14px 14px round 24px)" }}>
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img ref={img} src="/projects/Kitchen.jpg" alt="Finished kitchen by Prime Build" className="h-full w-full object-cover will-change-transform" />
//           <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 62% 46% at 50% 52%, rgba(6,30,27,.52), rgba(6,30,27,0) 70%)" }} />
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
//             <h1 className="font-display leading-[.95] text-white" style={{ fontSize: "clamp(3.4rem, 13.5vw, 11.5rem)", textShadow: "0 6px 34px rgba(0,0,0,.35)" }}>
//               <span className="reveal-mask"><span>PRIME</span></span>
//               <span className="reveal-mask"><span style={{ animationDelay: ".18s" }}>BUILD</span></span>
//             </h1>
//             <p className="reveal-mask mt-4 max-w-xl text-base font-bold text-white sm:text-xl">
//               <span style={{ animationDelay: ".4s" }}>We Build, Fix &amp; Improve Homes You Can Trust</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="h-[16vh]" aria-hidden="true" />
//     </div>
//   );
// }

// // VIDEO FILE NAME — if the real file name on your PC is different, change only this line
// const PHONE_VIDEO = "/projects/modern.mp4";


// const PHONE_VIDEO_SPEED = 1;

// export function AboutBlock() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     let raf = 0;
//     let last = 0;
//     let pos = 0; // our own video time in seconds

//     // stop the browser from playing it at normal speed; we move time ourselves
//     const stopNative = () => v.pause();
//     v.addEventListener("play", stopNative);
//     v.pause();

//     const tick = (now: number) => {
//       if (last && v.readyState >= 2 && v.duration) {
//         const dt = (now - last) / 1000;
//         pos += dt * PHONE_VIDEO_SPEED;
//         if (pos >= v.duration) pos = 0; // loop
//         if (!v.seeking) v.currentTime = pos;
//       }
//       last = now;
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);

//     return () => {
//       cancelAnimationFrame(raf);
//       v.removeEventListener("play", stopNative);
//     };
//   }, []);

//   return (
//     // ... your return() stays exactly the same
//     <section aria-label="About Prime Build" className="bg-white">
//       <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
//         <div className="sr order-2 flex justify-center lg:order-1">
//           <div className="relative w-[250px] rounded-[2.4rem] border-[6px] border-[#17181c] bg-black shadow-[0_30px_60px_rgba(11,59,54,.28)] sm:w-[280px]">
//             <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#17181c]" />
//             <div className="relative aspect-[9/18.6] overflow-hidden rounded-[2rem]">
//               <video
//                 ref={videoRef}
//                 src={PHONE_VIDEO}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//                 poster="/projects/Kitchen.jpg"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent pb-3 pt-10 text-center font-display text-sm tracking-[.2em] text-white">
//                 PRIME BUILD
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="sr order-1 lg:order-2">
//           <span className="inline-block rounded-full bg-[#BFE3DD]/60 px-4 py-1.5 text-xs font-extrabold tracking-[.22em] text-[#0B3B36]">
//             ABOUT PRIME BUILD
//           </span>
//           <h2 className="mt-4 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">
//             Building <span className="text-[#0E7A78]">Trust</span><br />Through <span className="text-[#0E7A78]">Excellence</span>
//           </h2>
//           <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-[#14201d]/75 sm:text-lg">
//             Your trusted partner for professional home construction and improvement services in <strong>Rawalpindi &amp; Islamabad</strong> since <strong>2018</strong>.
//           </p>
//           <p className="mt-3 max-w-xl text-base font-semibold leading-relaxed text-[#14201d]/75">
//             From a single room fix to a full home renovation, our professional team plans and completes every job with care — quality materials, fair prices and work finished on time.
//           </p>
//           <div className="mt-7 flex flex-wrap gap-3">
//             <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-[#0E7A78] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:bg-[#0B3B36]">
//               Contact Us <Icon name="phone" size={16} />
//             </a>
//             <a href={WA_BASE} target="_blank" rel="noreferrer" className="rounded-full border-2 border-[#25D366] px-7 py-3.5 font-extrabold text-[#128C4B] transition hover:bg-[#25D366]/10">
//               WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

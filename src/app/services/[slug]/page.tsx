import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE_TEL, SERVICES, waForService } from "@/lib/data";
import Gallery from "@/components/Gallery";
import { WhatsAppFloat } from "@/components/Chrome";
import { Icon, Tick } from "@/components/icons";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return { title: s ? `${s.name} | Prime Build` : "Service | Prime Build" };
}

const DESCRIBE: Record<string, string> = {
  "plumbing-services": "From a leaking tap to a complete new pipeline, our plumbers handle every water and drainage job in your home. We install and repair pipes, fix leaks properly the first time, fit bathroom accessories and install water tanks — clean work, tested before we leave.",
  "electrical-services": "Our electricians keep your home safe and powered. We do complete wiring and rewiring, install switches, sockets and lights, and set up circuit breakers and distribution boards to proper safety standards — neat finishing, no loose ends.",
  "tiles-marble-work": "Our tile and marble experts give your floors and walls a perfect finish. We install floor tiles and marble, tile kitchens and bathrooms, and repair or replace damaged tiles — every piece level, aligned and polished.",
  "kitchen-setup": "We turn an empty room into a working kitchen. Our team sets up modular kitchens, installs cabinets, fits countertops and supports appliance installation — measured carefully so everything fits and works together.",
  "washroom-fitting": "We build and renovate washrooms that look and feel like a hotel. Sanitary fittings, showers, vanities and cabinets are installed sealed and leak-free, or we renovate your complete washroom from floor to finish.",
  "carpentry-work": "Our carpenters build woodwork that fits your home perfectly. Wardrobes, cabinets, doors and windows are measured to the millimetre, and we also repair furniture and make custom pieces to your design.",
  "paint-polish": "Our painters give your home a fresh, clean look. We paint interiors and exteriors, polish furniture and apply texture and fancy finishes — smooth coats, clean lines and no mess left behind.",
  "interior-work": "Our interior team creates beautiful modern spaces. False ceilings, TV walls and panels, complete room renovations and decorative finishing — designed around your taste and finished with care.",
  "custom-solutions": "Have something different in mind? Tell us your idea and we will build it. Smart home setups, mixed repair jobs and custom requests of every kind — one team for your whole home.",
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <div className="bg-white pt-[72px]">
      <WhatsAppFloat service={s.name} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 py-5 text-sm font-bold text-[#14201d]/55">
          <Link href="/" className="hover:text-[#0E7A78]">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-[#0E7A78]">Services</Link>
          <span>/</span>
          <span className="text-[#0B3B36]">{s.name}</span>
        </nav>

        <div className="grid gap-10 pb-16 lg:grid-cols-2">
          <Gallery photos={s.gallery} name={s.name} />
          <div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0E7A78] text-white shadow-lg"><Icon name={s.icon} size={28} /></span>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-[#14201d] sm:text-6xl">{s.name.toUpperCase()}</h1>
            <p className="mt-3 text-lg font-bold text-[#0E7A78]">{s.short}</p>
            <h2 className="mt-7 font-display text-2xl tracking-wide text-[#0B3B36]">WHAT WE DO</h2>
            <p className="mt-2 font-semibold leading-relaxed text-[#14201d]/70">{DESCRIBE[s.slug]}</p>
            <ul className="mt-6 space-y-2.5">
              {[...s.features, "2-year warranty", "Transparent quote — no hidden costs"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 font-bold text-[#14201d]/85">
                  <Tick size={20} />{f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waForService(s.name)} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:brightness-105">
                WhatsApp Us
              </a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full bg-[#0E7A78] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:bg-[#0B3B36]">
                Call Now <Icon name="phone" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0E7A78]/15 py-12">
          <h2 className="font-display text-3xl text-[#14201d]">OTHER <span className="text-[#0E7A78]">SERVICES</span></h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group overflow-hidden rounded-[1.2rem] bg-[#F6F4EC] shadow-sm transition hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.img} alt="" className="h-32 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#E7F2EF] text-[#0E7A78]"><Icon name={o.icon} size={18} /></span>
                  <h3 className="mt-1 font-display text-xl tracking-wide text-[#0B3B36]">{o.name.toUpperCase()}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#14201d]/60">{o.short}</p>
                  <span className="mt-2.5 inline-block text-sm font-extrabold text-[#0E7A78] group-hover:underline">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

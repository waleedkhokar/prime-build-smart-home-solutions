export const PHONE_DISPLAY = "+92 319 5707402";
export const PHONE_TEL = "tel:+923195707402";
export const EMAIL = "qasimiqbal333444@gmail.com";

export const WA_BASE =
  "https://wa.me/923195707402?text=Hello%20Prime%20Build!%20I%20want%20a%20few%20details.%20I%20want%20your%20solution%20for%20our%20home.%20I%20want%20these%20services.";
export const waForService = (name: string) =>
  `${WA_BASE}%20Service%3A%20${encodeURIComponent(name)}`;

export interface Service {
  slug: string;
  name: string;
  short: string;
  img: string;
  icon: string;
  features: string[];
  extra: string;
  gallery: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "plumbing-services", name: "Plumbing Services", icon: "droplets",
    short: "Complete plumbing solutions for homes and offices",
    img: "/projects/washroom1.jpg",
    features: ["Pipe Installation & Repair", "Leak Detection & Fixing", "Bathroom Fittings", "Water Tank Installation"],
    extra: "From a small leak to a full bathroom pipeline — clean fitting, tested properly, with our 2-year warranty.",
    gallery: ["/projects/washroom1.jpg", "/projects/washroom.jpg", "/projects/Kitchen.jpg"],
  },
  {
    slug: "electrical-services", name: "Electrical Services", icon: "zap",
    short: "Safe and reliable electrical work for your home",
    img: "/projects/tv.jpg",
    features: ["Wiring & Rewiring", "Switch & Socket Installation", "Lighting Installation", "Circuit Breaker & DB Work"],
    extra: "Every wire is fitted safely and tested load by load — neat finishing with our 2-year warranty.",
    gallery: ["/projects/tv.jpg", "/projects/lauch.jpg", "/projects/lanch.jpg"],
  },
  {
    slug: "tiles-marble-work", name: "Tiles & Marble Work", icon: "grid",
    short: "Expert tiles and marble installation services",
    img: "/projects/tile1.jpg",
    features: ["Floor Tiles Installation", "Marble Flooring", "Kitchen & Bathroom Tiles", "Tile Repair & Replacement"],
    extra: "Level, aligned and polished to a clean finish — every tile set straight, with our 2-year warranty.",
    gallery: ["/projects/tile1.jpg", "/projects/tile.jpg", "/projects/washroom.jpg"],
  },
  {
    slug: "kitchen-setup", name: "Kitchen Setup", icon: "utensils",
    short: "Complete kitchen installation and setup services",
    img: "/projects/Kitchen.jpg",
    features: ["Modular Kitchen Setup", "Cabinet Installation", "Countertop Fitting", "Appliance Installation Support"],
    extra: "From empty room to a working kitchen — cabinets, counter and fittings done by one team, with our 2-year warranty.",
    gallery: ["/projects/Kitchen.jpg", "/projects/tile1.jpg", "/projects/cuboard1.jpg"],
  },
  {
    slug: "washroom-fitting", name: "Washroom Fitting", icon: "bath",
    short: "Modern washroom fitting and renovation services",
    img: "/projects/washroom.jpg",
    features: ["Sanitary Fittings", "Shower Installation", "Vanity & Cabinets", "Complete Washroom Renovation"],
    extra: "A washroom that looks like a hotel — sealed, leak-free and finished clean, with our 2-year warranty.",
    gallery: ["/projects/washroom.jpg", "/projects/washroom1.jpg", "/projects/tile.jpg"],
  },
  {
    slug: "carpentry-work", name: "Carpentry Work", icon: "hammer",
    short: "Quality carpentry and woodwork for your home",
    img: "/projects/cuboard1.jpg",
    features: ["Wardrobes & Cabinets", "Doors & Windows", "Furniture Repair", "Custom Woodwork"],
    extra: "Measured to the millimetre and polished by hand — woodwork that fits perfectly, with our 2-year warranty.",
    gallery: ["/projects/cuboard1.jpg", "/projects/cuboard.jpg", "/projects/lauch.jpg"],
  },
  {
    slug: "paint-polish", name: "Paint & Polish", icon: "paintbrush",
    short: "Professional painting and polishing services",
    img: "/projects/lanch.jpg",
    features: ["Interior Painting", "Exterior Painting", "Furniture Polish", "Texture & Fancy Paint"],
    extra: "Smooth coats, clean lines and no mess left behind — a fresh look for every room, with our 2-year warranty.",
    gallery: ["/projects/lanch.jpg", "/projects/lauch.jpg", "/projects/Kitchen.jpg"],
  },
  {
    slug: "interior-work", name: "Interior Work", icon: "sofa",
    short: "Beautiful interior solutions for modern homes",
    img: "/projects/lauch.jpg",
    features: ["False Ceiling", "TV Wall & Panels", "Room Renovation", "Decorative Finishing"],
    extra: "Modern designs finished with care — ceilings, panels and complete rooms, with our 2-year warranty.",
    gallery: ["/projects/lauch.jpg", "/projects/lanch.jpg", "/projects/tv.jpg"],
  },
  {
    slug: "custom-solutions", name: "Custom Solutions", icon: "settings",
    short: "Tell us your idea — we build it for your home",
    img: "/projects/cuboard.jpg",
    features: ["Smart Home Setup", "Custom Requests", "Mixed Repair Jobs", "Free Advice on WhatsApp"],
    extra: "If it is in your home, we can build, fix or improve it — just tell us your idea on WhatsApp.",
    gallery: ["/projects/cuboard.jpg", "/projects/cuboard1.jpg", "/projects/Kitchen.jpg"],
  },
];

export const WHY_CARDS = [
  { t: "Skilled Team", d: "Certified professionals with 5+ years experience", img: "/projects/lauch.jpg", icon: "users" },
  { t: "On-Time Delivery", d: "90% projects completed before deadline", img: "/projects/tv.jpg", icon: "clock" },
  { t: "Quality Work", d: "Premium materials with 2-year warranty", img: "/projects/tile1.jpg", icon: "award" },
  { t: "Fair Pricing", d: "Transparent quotes with no hidden costs", img: "/projects/cuboard1.jpg", icon: "wallet" },
  { t: "Local Experts", d: "Serving Rawalpindi & Islamabad since 2018", img: "/projects/washroom.jpg", icon: "pin" },
  { t: "Trust & Safety", d: "Verified workers and secure service", img: "/projects/Kitchen.jpg", icon: "shield" },
  { t: "24/7 Support", d: "We are here whenever you need us", img: "/projects/tile.jpg", icon: "headset" },
  { t: "250+ Projects Done", d: "Homes built, fixed and improved across two cities", img: "/projects/washroom1.jpg", icon: "clipboard" },
  { t: "98% Happy Clients", d: "Families who trust our work", img: "/projects/lanch.jpg", icon: "heart" },
  { t: "All Services, One Team", d: "Plumbing to interior work — 9 services, one call", img: "/projects/cuboard.jpg", icon: "grid" },
  { t: "Quick Response", d: "Call or WhatsApp — we respond quickly", img: "/projects/tv.jpg", icon: "zap" },
  { t: "Smart Home Solutions", d: "Modern upgrades for your home", img: "/projects/Kitchen.jpg", icon: "smart" },
];

export const REVIEWS = [
  { name: "Ahmed Raza", meta: "Kitchen Renovation, Islamabad", text: "They made our kitchen brand new in just a few days. Clean work, fair price, and the team finished on time." },
  { name: "Fatima Khan", meta: "Bathroom Remodel, Rawalpindi", text: "Our bathroom looks like a hotel now. The workers were polite and careful with everything in our home." },
  { name: "Bilal Hussain", meta: "Electrical Work, Islamabad", text: "Full home wiring done safely and neatly. No hidden charges — the first quote was the final price." },
  { name: "Ayesha Malik", meta: "Interior & Paint, Rawalpindi", text: "The paint and interior work changed our home completely. Very professional team, start to finish." },
  { name: "Usman Tariq", meta: "Marble Flooring, Islamabad", text: "Marble flooring is perfect, not one tile out of place. I recommend Prime Build to everyone." },
  { name: "Hassan Ali", meta: "Wardrobe & Carpentry, Rawalpindi", text: "Our wardrobes fit perfectly and the finishing is top quality. Great people to work with." },
];

export const FAQS = [
  { q: "Which areas do you serve?", a: "We serve Rawalpindi & Islamabad. Every service on this page is available in both cities." },
  { q: "How do I book a service?", a: "Just call or WhatsApp us on +92 319 5707402. Tell us your work, and we will plan the visit and the job with you." },
  { q: "Do you give a price before starting?", a: "Yes. You get a clear, transparent quote first — fair pricing with no hidden costs, and the quote is the price you pay." },
  { q: "Is your work guaranteed?", a: "Yes. Our work comes with a 2-year warranty, using premium materials and a skilled team." },
  { q: "How long will my work take?", a: "It depends on the size of the job — but 90% of our projects are completed before the deadline." },
  { q: "Can one team do all the work?", a: "Yes. One team does all 9 services — plumbing, electrical, kitchen, tiles, paint, interior and more — so everything fits together." },
];

export const STATS = [
  { n: "5+", l: "Years of Excellence" },
  { n: "250+", l: "Projects" },
  { n: "98%", l: "Satisfaction" },
  { n: "50+", l: "Experts" },
  { n: "24/7", l: "Support" },
];

export const VALUES = [
  { t: "Integrity", d: "Honest and transparent in all dealings", icon: "shield" },
  { t: "Quality", d: "Never compromise on workmanship", icon: "award" },
  { t: "Teamwork", d: "Collaborative approach to excellence", icon: "users" },
  { t: "Punctuality", d: "Respect for clients time", icon: "clock" },
  { t: "Care", d: "Treat every home as our own", icon: "heart" },
  { t: "Excellence", d: "Strive for perfection in every project", icon: "star" },
];

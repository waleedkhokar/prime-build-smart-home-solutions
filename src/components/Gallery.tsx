"use client";
import { useState } from "react";

export default function Gallery({ photos, name }: { photos: string[]; name: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_rgba(11,59,54,.18)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos[active]} alt={name} className="aspect-[16/10] w-full object-cover" />
      </div>
      <div className="mt-3.5 grid grid-cols-3 gap-3.5">
        {photos.map((p, i) => (
          <button
            key={p + i}
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1} of ${name}`}
            className={`overflow-hidden rounded-xl transition ${i === active ? "ring-4 ring-[#0E7A78]" : "opacity-80 hover:opacity-100"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p} alt="" className="aspect-[16/10] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import Reveal from "./Reveal";
import { photos, img } from "../data";

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#2a0e4a] via-[#3b1260] to-[#1a0b2e] px-5 py-20">
      <Reveal>
        <h2 className="font-display shimmer-text mb-12 text-center text-4xl sm:text-5xl">
          Moments of you
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {photos.map((p, i) => (
          <Reveal key={p.file} delay={i % 2 ? 150 : 0}>
            <button
              onClick={() => setOpen(p)}
              className={`group relative block w-full overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl transition-transform duration-500 active:scale-95 md:hover:scale-[1.03] ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <img
                src={img(p.file)}
                alt={p.caption}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-left">
                <p className="font-display text-xl italic text-white">
                  {p.caption}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="animate-pop fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
        >
          <img
            src={img(open.file)}
            alt={open.caption}
            className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl"
          />
          <p className="font-display mt-4 text-xl italic text-white">
            {open.caption}
          </p>
          <p className="mt-2 text-sm text-white/50">tap to close</p>
        </div>
      )}
    </section>
  );
}

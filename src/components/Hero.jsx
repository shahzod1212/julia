import { NAME, TAGLINE, img } from "../data";

export default function Hero() {
  return (
    <section className="bg-animated relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="animate-pop relative h-56 w-56 sm:h-72 sm:w-72">
        <div className="ring-spin absolute -inset-2" />
        <img
          src={img("juliaFace.jpg")}
          alt={NAME}
          className="relative h-full w-full rounded-full border-4 border-white/90 object-cover shadow-2xl"
        />
      </div>

      <h1
        className="font-display shimmer-text animate-fade-up mt-10 text-6xl sm:text-8xl"
        style={{ animationDelay: ".5s" }}
      >
        {NAME}
      </h1>
      <p
        className="animate-fade-up mt-4 max-w-md text-lg font-light text-white/90"
        style={{ animationDelay: ".9s" }}
      >
        {TAGLINE}
      </p>

      <div className="animate-float absolute bottom-8 text-3xl text-white/80">
        ↓
      </div>
    </section>
  );
}

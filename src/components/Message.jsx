import Reveal from "./Reveal";
import { messages, NAME } from "../data";

export default function Message() {
  return (
    <section className="bg-animated flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
      <Reveal>
        <div className="animate-beat mb-8 text-6xl">💖</div>
      </Reveal>
      {messages.map((m, i) => (
        <Reveal key={i} delay={i * 250}>
          <p className="font-display mb-6 max-w-md text-2xl italic leading-relaxed text-white drop-shadow sm:text-3xl">
            {m}
          </p>
        </Reveal>
      ))}
      <Reveal delay={900}>
        <p className="mt-6 text-lg font-light text-white/90">— for {NAME}</p>
      </Reveal>
    </section>
  );
}

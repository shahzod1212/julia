import { useState } from "react";
import { NAME } from "../data";

export default function Intro({ onOpen }) {
  const [leaving, setLeaving] = useState(false);

  const open = () => {
    setLeaving(true);
    setTimeout(onOpen, 700);
  };

  return (
    <div
      className={`bg-animated fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
        leaving ? "scale-125 opacity-0" : "opacity-100"
      }`}
    >
      <p className="animate-fade-up mb-6 text-xs uppercase tracking-[0.4em] text-white/80">
        A little surprise for
      </p>
      <h1 className="font-display flex text-7xl text-white drop-shadow-lg">
        {NAME.split("").map((c, i) => (
          <span
            key={i}
            className="animate-pop inline-block"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            {c}
          </span>
        ))}
      </h1>
      <button
        onClick={open}
        className="animate-fade-up animate-beat mt-14 rounded-full bg-white/90 px-8 py-4 text-lg font-medium text-pink-600 shadow-2xl active:scale-95"
        style={{ animationDelay: "1.6s" }}
      >
        Tap to open 💖
      </button>
    </div>
  );
}

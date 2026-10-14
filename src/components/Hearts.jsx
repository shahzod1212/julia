import { useMemo } from "react";

const EMOJI = ["💖", "💗", "💕", "✨", "🌸", "💫"];

export default function Hearts() {
  const items = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        e: EMOJI[i % EMOJI.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        dur: 9 + Math.random() * 10,
        delay: Math.random() * 12,
      })),
    [],
  );

  return (
    <>
      {items.map((h) => (
        <span
          key={h.id}
          className="heart-rise"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.e}
        </span>
      ))}
    </>
  );
}

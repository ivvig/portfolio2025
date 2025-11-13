import React, { useEffect, useRef, useState } from "react";

/*
  StackCarousel component
  - props:
    - items: [{ src, caption, alt }]
    - interval: ms between slides (default 4000)
  - uses CSS classes defined in src/index.css (stack-layer, stack-active, stack-nonactive, stack-back/mid/top, stack-caption, carousel-wrapper)
*/
export default function StackCarousel({ items = [], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const start = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!pausedRef.current) setIndex((i) => (i + 1) % items.length);
      }, interval);
    };
    start();
    return () => clearInterval(timerRef.current);
  }, [items.length, interval]);

  if (!items || items.length === 0) {
    return (
      <div className="w-full h-[260px] md:h-[420px] bg-gray-200 rounded-2xl" />
    );
  }

  const prev = (index - 1 + items.length) % items.length;
  const next = (index + 1) % items.length;

  // layers: back, mid, top - CSS classes control z-index
  const layers = [
    { id: prev, rotate: -8, x: -28, y: 18, scale: 0.94, cls: "stack-back" },
    { id: next, rotate: 8, x: 28, y: 18, scale: 0.96, cls: "stack-mid" },
    { id: index, rotate: 0, x: 0, y: 0, scale: 1, cls: "stack-top" },
  ];

  return (
    <div
      className="relative w-full h-[260px] md:h-[420px] carousel-wrapper"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {layers.map((layer, pos) => {
        const item = items[layer.id];
        const isActive = layer.id === index;
        const transform = `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotate}deg) scale(${layer.scale})`;
        return (
          <div
            key={`${layer.id}-${pos}`}
            className={`absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden transition-all duration-700 ease-out stack-layer ${isActive ? "stack-active" : "stack-nonactive"} ${layer.cls}`}
            style={{ transform, pointerEvents: "none" }}
            aria-hidden={!isActive}
          >
            <img
              src={item.src}
              alt={item.alt || item.caption || "carousel image"}
              className="w-full h-full object-cover block"
              draggable="false"
              onError={(e) => {
                // keep a neutral background if image fails
                console.error("Failed to load image:", item.src);
                e.currentTarget.style.opacity = "0";
                e.currentTarget.parentElement.style.background = "#f8fafc";
              }}
            />

            {isActive && item.caption && (
              <div className="stack-caption absolute left-0 bottom-0 w-full text-white text-base md:text-lg">
                {item.caption}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
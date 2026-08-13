"use client";

import { motion } from "framer-motion";

const items = [
  "Дзержинский",
  "Центральный",
  "Промышленный",
  "Ленинский",
  "Салмышская",
  "Терешковой",
  "Гагарина",
  "Брестская",
];

export function DistrictMarquee() {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-ink/8 bg-white py-4">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="font-display text-sm font-medium tracking-[0.08em] text-ink/45"
          >
            {label}
            <span className="ml-10 text-signal">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

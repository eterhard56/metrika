"use client";

import { motion } from "framer-motion";
import { agency } from "@/data/agency";

const points = [
  {
    n: "01",
    title: "Считаем выгоду в метрах",
    text: "Сравниваем цену за м², состояние дома и ликвидность района — без воды и «красивых» обещаний.",
  },
  {
    n: "02",
    title: "Ипотека и сложные сделки",
    text: "Одобрение, межрегиональные покупки, альтернативы и страхование — ведём до регистрации.",
  },
  {
    n: "03",
    title: "Живая витрина",
    text: "Топ на сайте + полная лента на Avito и ответы в VK. Один телефон — весь маршрут сделки.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-hero-wash opacity-80" />
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
            Подход
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Не витрина ради витрины — навигация по рынку Оренбурга
          </h2>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-3 gap-4 border-y border-white/15 py-6 text-sm">
          <div>
            <div className="font-display text-3xl font-medium md:text-4xl">
              {agency.stats.rating}.0
            </div>
            <div className="mt-1 text-white/50">рейтинг</div>
          </div>
          <div>
            <div className="font-display text-3xl font-medium md:text-4xl">
              {agency.stats.dealsYear}
            </div>
            <div className="mt-1 text-white/50">сделки / год</div>
          </div>
          <div>
            <div className="font-display text-3xl font-medium md:text-4xl">
              {agency.stats.activeOffers}
            </div>
            <div className="mt-1 text-white/50">лотов сейчас</div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="border-t border-white/15 pt-6"
            >
              <div className="font-display text-sm text-signal">{item.n}</div>
              <h3 className="mt-4 font-display text-2xl font-medium leading-snug">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

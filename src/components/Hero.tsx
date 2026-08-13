"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { agency } from "@/data/agency";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80"
          alt="Интерьер современной квартиры"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-grid-fade bg-grid" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 max-w-xl text-sm uppercase tracking-[0.28em] text-white/55 md:text-[13px]"
        >
          Агентство недвижимости · {agency.city}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.4rem,14vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.04em]"
        >
          МЕТРИКА
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-lg text-lg text-white/75 md:text-xl"
        >
          {agency.tagline} Подбираем квартиры так, будто считаем каждый квадрат
          лично.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#catalog"
            className="rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            Смотреть квартиры
          </a>
          <a
            href={agency.links.avito}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Живая лента на Avito
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="pointer-events-none absolute right-[-6%] top-[18%] hidden rotate-90 font-display text-[11vw] font-semibold tracking-[-0.06em] text-white/[0.06] xl:block"
      >
        m²
      </motion.div>
    </section>
  );
}

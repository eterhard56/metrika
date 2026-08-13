"use client";

import { motion } from "framer-motion";
import { agency } from "@/data/agency";

export function Contacts() {
  return (
    <section id="contacts" className="bg-mist py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signal">
            Контакты
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Приезжайте или напишите — подберём маршрут к сделке
          </h2>
          <p className="mt-4 max-w-xl text-ink/65">{agency.description}</p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone">
                Офис
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">
                {agency.address.primary}
              </p>
              <p className="text-ink/60">
                {agency.address.district}, {agency.city}, {agency.address.postal}
              </p>
              <p className="mt-1 text-sm text-ink/50">
                Доп. адрес: {agency.address.secondary}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone">
                Часы
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">{agency.hours}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {agency.phones.map((phone) => (
                <a
                  key={phone.e164}
                  href={`tel:+${phone.e164}`}
                  className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-fog transition hover:bg-moss"
                >
                  {phone.display}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                ["Avito", agency.links.avito],
                ["VK", agency.links.vk],
                ["2ГИС", agency.links.gis],
                ["Домклик", agency.links.domclick],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-lift md:p-10"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/30 blur-3xl" />
          <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-moss/50 blur-3xl" />

          <p className="relative text-xs uppercase tracking-[0.22em] text-white/50">
            Команда
          </p>
          <ul className="relative mt-6 space-y-4">
            {agency.team.map((person) => (
              <li
                key={person.name}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
              >
                <span className="font-display text-xl font-medium">
                  {person.name}
                </span>
                <span className="text-sm text-white/50">{person.role}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${agency.phones[1].e164}`}
            target="_blank"
            rel="noreferrer"
            className="relative mt-10 inline-flex w-full items-center justify-center rounded-full bg-signal py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            Написать в WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

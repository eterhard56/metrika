"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  formatPriceShort,
  roomsLabel,
  type Listing,
} from "@/data/listings";

type Props = {
  listing: Listing;
  index: number;
};

export function ApartmentCard({ listing, index }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.24) }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-lift ring-1 ring-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 85vw, 360px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {listing.featured && (
            <span className="rounded-full bg-signal px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Топ
            </span>
          )}
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
            {listing.type === "newbuild" ? "Новостройка" : "Вторичка"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <p className="font-display text-2xl font-semibold text-white md:text-[1.7rem]">
            {formatPriceShort(listing.price)}
          </p>
          <p className="text-xs text-white/80">
            {new Intl.NumberFormat("ru-RU").format(listing.pricePerMeter)} ₽/м²
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">
            {listing.district} · {listing.address}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium leading-tight text-ink md:text-[1.35rem]">
            {listing.title}
          </h3>
          <p className="mt-2 text-sm text-ink/65">{listing.highlight}</p>
        </div>

        <dl className="grid grid-cols-4 gap-2 border-y border-ink/8 py-3 text-center text-sm">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">
              Комн.
            </dt>
            <dd className="mt-1 font-semibold">{roomsLabel(listing.rooms)}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">
              Площадь
            </dt>
            <dd className="mt-1 font-semibold">{listing.area} м²</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">
              Этаж
            </dt>
            <dd className="mt-1 font-semibold">
              {listing.floor}/{listing.floors}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-stone">
              Отделка
            </dt>
            <dd className="mt-1 truncate font-semibold capitalize">
              {listing.finish}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2">
          {listing.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={listing.avitoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-fog transition hover:bg-moss"
        >
          Открыть на Avito
        </a>
      </div>
    </motion.article>
  );
}

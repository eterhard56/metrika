"use client";

import {
  useDeferredValue,
  useMemo,
  useRef,
  useState,
  useEffect,
  useEffectEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ApartmentCard } from "@/components/ApartmentCard";
import { agency } from "@/data/agency";
import {
  listings as allListings,
  sortListings,
  type SortKey,
} from "@/data/listings";

const sorts: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Топ офферы" },
  { key: "price-asc", label: "Цена ↑" },
  { key: "price-desc", label: "Цена ↓" },
  { key: "area-desc", label: "Площадь" },
  { key: "ppm-asc", label: "₽ / м²" },
  { key: "rooms-desc", label: "Комнаты" },
];

const roomFilters = [
  { value: "all", label: "Все" },
  { value: "0", label: "Студии" },
  { value: "1", label: "1-к" },
  { value: "2", label: "2-к" },
  { value: "3", label: "3-к+" },
] as const;

export function Catalog() {
  const [sort, setSort] = useState<SortKey>("featured");
  const [rooms, setRooms] = useState<(typeof roomFilters)[number]["value"]>(
    "all",
  );
  const [mode, setMode] = useState<"film" | "grid">("film");
  const deferredSort = useDeferredValue(sort);
  const deferredRooms = useDeferredValue(rooms);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const base = allListings.filter((item) => {
      if (deferredRooms === "all") return true;
      if (deferredRooms === "3") return item.rooms >= 3;
      return item.rooms === Number(deferredRooms);
    });
    return sortListings(base, deferredSort);
  }, [deferredRooms, deferredSort]);

  const onModeChange = useEffectEvent((next: "film" | "grid") => {
    setMode(next);
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => onModeChange(mq.matches ? "film" : "grid");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 420), behavior: "smooth" });
  };

  return (
    <section id="catalog" className="relative bg-fog py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signal">
              Каталог
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Полистайте квадратные метры
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink/65 md:text-lg">
              Топовые лоты Метрики в Оренбурге — с ценами, районом и сортировкой.
              Полная актуальная лента всегда на Avito агентства.
            </p>
          </div>

          <a
            href={agency.links.avito}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
          >
            Все объявления на Avito →
          </a>
        </div>

        <div className="mt-10 sticky top-[4.5rem] z-30 -mx-5 border-y border-ink/8 bg-fog/95 px-5 py-4 backdrop-blur md:mx-0 md:rounded-2xl md:border md:px-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Сортировка">
              {sorts.map((item) => {
                const active = sort === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSort(item.key)}
                    className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-ink text-fog"
                        : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex gap-1 rounded-full bg-white p-1 ring-1 ring-ink/10">
                {roomFilters.map((item) => {
                  const active = rooms === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setRooms(item.value)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        active ? "bg-moss text-white" : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="hidden gap-1 rounded-full bg-white p-1 ring-1 ring-ink/10 lg:flex">
                {(
                  [
                    ["film", "Лента"],
                    ["grid", "Сетка"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setMode(value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      mode === value
                        ? "bg-signal text-white"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-ink/55">
          <p>
            Найдено:{" "}
            <span className="font-semibold text-ink">{filtered.length}</span>
          </p>
          {mode === "film" && (
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                aria-label="Назад"
                onClick={() => scrollBy(-1)}
                className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-ink/10 transition hover:bg-mist"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Вперёд"
                onClick={() => scrollBy(1)}
                className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-ink/10 transition hover:bg-mist"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="popLayout">
          {mode === "film" ? (
            <motion.div
              key="film"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={trackRef}
              className="film-track hide-scrollbar flex gap-5 overflow-x-auto px-5 pb-4 md:px-8"
            >
              {filtered.map((listing, index) => (
                <div
                  key={listing.id}
                  className="film-slide w-[min(86vw,360px)] shrink-0"
                >
                  <ApartmentCard listing={listing} index={index} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8"
            >
              {filtered.map((listing, index) => (
                <ApartmentCard
                  key={listing.id}
                  listing={listing}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

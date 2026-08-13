import { agency } from "@/data/agency";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-fog py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">
            МЕТРИКА
          </p>
          <p className="mt-2 max-w-md text-sm text-ink/55">{agency.legal}</p>
        </div>
        <p className="text-sm text-ink/45">
          © {new Date().getFullYear()} {agency.fullName}. Оренбург.
        </p>
      </div>
    </footer>
  );
}

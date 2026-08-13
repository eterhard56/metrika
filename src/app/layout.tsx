import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Метрика Недвижимость — квартиры в Оренбурге",
  description:
    "Агентство недвижимости Метрика в Оренбурге: подбор квартир, ипотека, сопровождение сделок. Офис на Терешковой 140/1.",
  metadataBase: new URL("https://metrika-orenburg.vercel.app"),
  openGraph: {
    title: "Метрика Недвижимость",
    description: "Точные метры. Честные сделки. Оренбург.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C1210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

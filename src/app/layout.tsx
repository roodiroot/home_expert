import type { Metadata } from "next";
import { beautifulFont } from "./font";

import { Suspense } from "react";
import { Metrika } from "@/components/metrika";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://home-expert.su"),
  title: {
    template: "%s | ДомЭксперт.",
    default: "ДомЭксперт - шумоизоляция и звукоизоляция любых помещений.",
  },
  description:
    "Быстрый подбор, монтаж за 1 день, проверенные материалы. Бесплатный замер и расчет.",
  openGraph: {
    title: "Готовые решения шумоизоляции в Москве — Эффективно и Под Ключ",
    description:
      "Предлагаем готовые решения для шумоизоляции квартир, домов и коммерческих помещений в Москве.",
    url: "https://home-expert.su",
    siteName: "Шумоизоляция в Москве",
    images: [
      {
        url: "/image/openGraph/noise.jpg", // Replace with your actual image URL
        width: 825,
        height: 440,
        alt: "Шумоизоляция",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={beautifulFont.className}>
        {children}
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { beautifulFont } from "./font";

import "./globals.css";
import { Suspense } from "react";
import { Metrika } from "@/components/metrika";

export const metadata: Metadata = {
  metadataBase: new URL("https://home-expert.su"),
  title: {
    template: "%s | ДомЭксперт - ремонт квартир в Москве",
    default: "ДомЭксперт - отделка квартир в Москве и Московской области",
  },
  description:
    "Современный ремонт квартир с гарантией 5 лет. Ремонт домов под ключ в Москве и Московской области. Лучшие специалисты по ремонту квартир",
  icons: "../asstets/img/logo_196.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={beautifulFont.className}>
        {children}
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}

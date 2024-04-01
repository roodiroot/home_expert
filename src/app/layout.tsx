import type { Metadata } from "next";
import { beautifulFont } from "./font";

import { Suspense } from "react";
import { Metrika } from "@/components/metrika";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://home-expert.su"),
  title: {
    template: "%s | ДомЭксперт - строительство и ремонт.",
    default: "ДомЭксперт - загородное строительство и ремонт помещений.",
  },
  description:
    "Современный ремонт и строительство домов. Строительство под ключ. Лучшие специалисты по ремонту квартир",
  icons: "/logo_196.png",
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

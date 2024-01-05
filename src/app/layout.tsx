import type { Metadata } from "next";
import { beautifulFont } from "./font";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matryoshka-studio.ru"),
  title: {
    template: "%s | Отделка квартир в Москве и Московской области",
    default: "Отделка квартир в Москве и Московской области", // a default is required when creating a template
  },
  description:
    "Современный ремонт квартир с гарантией 5 лет | Ремонт домов под ключ в Москве и Московской области | Разработка дизайн проекта бесплатно | Лучшие специалисты по ремонту квартир",
  icons: "../asstets/img/logo_196.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={beautifulFont.className}>{children}</body>
    </html>
  );
}

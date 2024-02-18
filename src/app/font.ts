import localFont from "next/font/local";
import { Cormorant_SC } from "next/font/google";

export const beautifulFont = localFont({
  src: [
    {
      path: "../assets/fonts/CeraPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/CeraPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/CeraPro-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/CeraPro-Black.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const cormorant = Cormorant_SC({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
});

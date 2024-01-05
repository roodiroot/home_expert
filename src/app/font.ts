import localFont from "next/font/local";

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

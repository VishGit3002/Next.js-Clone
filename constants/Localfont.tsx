import localFont from "next/font/local";

export const Nextjs = localFont({
  src: [
    {
      path: "../public/fonts/caa3a2e1cccd8315.p.853070df.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});
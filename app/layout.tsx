import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/ui/Navbar";
import localFont from "next/font/local";

const Nextjs = localFont({
  src: [
    {
      path: "../public/fonts/caa3a2e1cccd8315.p.853070df.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Nextjs.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

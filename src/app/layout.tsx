import type { Metadata } from "next";
// import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Providers from "./providers";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Philemon Forson",
  description: "Software Developer And Data Engineer",
};


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
bg-[rgba(var(--color-background))] text-[rgb(var(--color-foreground))] `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

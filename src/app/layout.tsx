import type { Metadata } from "next";
// import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Providers from "./providers";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "Philemon Forson - Software Developer & Data Engineer",
  description:
    "Portfolio of Philemon Forson, a passionate Software Developer and Data Engineer specializing in building scalable applications, data-driven solutions, and machine learning applications.",
  keywords: [
    "Software Developer",
    "Data Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Philemon Forson" }],
  creator: "Philemon Forson",
  openGraph: {
    title: "Philemon Forson - Software Developer & Data Engineer",
    description:
      "Portfolio showcasing software development and data engineering projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philemon Forson - Software Developer & Data Engineer",
    description:
      "Portfolio showcasing software development and data engineering projects",
  },
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
        <ScrollToTop />
      </body>
    </html>
  );
}

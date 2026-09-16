import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import localFont from "next/font/local";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: profile.seoTitle,
    template: `%s — ${profile.name}`,
  },
  description: profile.seoDescription,
  keywords: [
    "AI/ML Engineer",
    "Data Scientist",
    "Software Engineer",
    "Data Engineer",
    "Computer Vision",
    "Machine Learning",
    "Generative AI",
    "Python",
    "Philemon Forson",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "The University of Texas at Dallas",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Ghana",
    },
  ],
  sameAs: [profile.githubUrl, profile.linkedinUrl],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}

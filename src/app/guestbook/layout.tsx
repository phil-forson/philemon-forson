import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Leave a note for Philemon Forson, AI/ML Engineer and Data Scientist.",
};

export default function GuestbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

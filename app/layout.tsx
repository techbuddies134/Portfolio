import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mubarak & Umaish - Web Developers",
  description: "Portfolio of Mubarak Saqib and Umaish Mughal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
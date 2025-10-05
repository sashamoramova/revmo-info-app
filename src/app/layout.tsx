import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Revmo.info",
  description: "Портал для людей с ревматическими заболеваниями",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={lato.variable}>{children}</body>
    </html>
  );
}

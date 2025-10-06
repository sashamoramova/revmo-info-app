import "./globals.css";
import type { Metadata } from "next";


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
      <body>{children}</body>
    </html>
  );
}

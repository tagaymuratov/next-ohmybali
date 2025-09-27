import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Left from "@/components/Left";
import Right from "@/components/Right";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "ohmybali",
  description: "ПРИНИМАЮЩАЯ СТОРОНА И ВДОХНОВЛЯЮЩИЕ ПУТЕШЕСТВИЯ НА БАЛИ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${lora.variable} antialiased`}>
        <Header />
        <Left />
        <Right />
        {children}
      </body>
    </html>
  );
}

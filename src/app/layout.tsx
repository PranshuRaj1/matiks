import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-semi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matiks - Mental Math Duels & Puzzle Battles | Train Your Brain",
  description: "The math rush",
  icons: {
    icon: "/main.ico",
    shortcut: "/main.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head />
      <body className="antialiased">
        {/* ← Move NavBar INSIDE <body> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}

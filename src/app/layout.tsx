import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import 'katex/dist/katex.min.css';

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

export const metadata: Metadata = {
  title: "Pinan Blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Serif+TC:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider >
        <Header />
        {children}
        <Footer id="contact"></Footer>
        </MantineProvider>
      </body>
    </html>
  );
}

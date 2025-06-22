import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Jafet Montilla - Desarrollador de Software";
const description = "Portafolio de Jafet Montilla, desarrollador de software especializado en React, Node.js y soluciones end-to-end. Descubre mis proyectos y experiencia.";
const url = "https://jafetjmontilla.dev"; // Cambia esta URL por la tuya cuando la tengas

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: "Portafolio de Jafet Montilla",
    images: [
      {
        url: `https://i.ibb.co/4wd4s4Mh/dev.png`,
        width: 800,
        height: 800,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`https://i.ibb.co/4wd4s4Mh/dev.png`],
  },
  icons: {
    icon: '/dev.png',
  },
  other: {
    'og:logo': 'https://i.ibb.co/4wd4s4Mh/dev.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

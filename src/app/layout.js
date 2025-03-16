import { Geist, Geist_Mono } from "next/font/google";
import { Comic_Neue } from 'next/font/google';
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-comic-neue',
})

export const metadata = {
  title: "Meron Belachew",
  description: "Personal portfolio website",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comicNeue.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-dark-green">
        <BackgroundCanvas />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
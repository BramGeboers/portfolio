import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google'
import localfont from "next/font/local"
import SmoothScrolling from "@/components/Smoothscrolling";

import "./globals.css";

const mori = localfont({
  src: [
    {
      path: "../public/fonts/PPMori-SemiBold.otf",
      weight: "600"
    },
    {
      path: "../public/fonts/PPMori-Regular.otf",
      weight: "400"
    },
    {
      path: "../public/fonts/PPMori-Extralight.otf",
      weight: "300"
    },
  ],
  variable: "--font-mori"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bram Geboers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mori.variable} font-mori cursor-none text-white`}>
      <body className={poppins.className}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>

  );
}
import type { Metadata } from "next";
import { Archivo_Black} from "next/font/google";

import "./globals.css";

const archivo_black = Archivo_Black({
  weight: '400',
  subsets: ['latin'],

})


export const metadata: Metadata = {
  title: "Meenu's Portfolio",
  description: "3d Base Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={archivo_black.className} 
      >
        {children}
      </body>
    </html>
  );
}

import { Archivo_Black } from "next/font/google";

import "./globals.css";
// import ThemeProvider from "./components/theme-provider";
import Particles from "./components/Particles";

import { ThemeProvider } from "next-themes";

const archivo_black = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={archivo_black.className}>
        <ThemeProvider
          attribute="class"
          // enableSystem={false}
          defaultTheme="system"
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

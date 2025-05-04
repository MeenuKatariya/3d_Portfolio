"use client"; // ←<- this makes the file a client component

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * A simple wrapper around next-themes’ ThemeProvider.
 * Because next-themes uses localStorage and window.matchMedia,
 * it must live in a client component.
 */
export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

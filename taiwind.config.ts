/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/**
 * Tailwind CSS Configuration
 *
 * This file defines the design system tokens, purge paths, dark mode strategy,
 * and plugins for extending Tailwind’s functionality.
 */
export default {
  // Enable class-based dark mode (add `class="dark"` to root element to toggle)
  darkMode: ["class"],

  // Paths to all template files in your project
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // No prefix on generated utility classes
  prefix: "",

  theme: {
    // Configure the `.container` utility
    container: {
      center: true, // Always center container
      padding: "2rem", // Horizontal padding on container
      screens: {
        "2xl": "1400px", // Max-width for 2XL breakpoint
      },
    },

    // Extend the default theme
    extend: {
      // Map semantic names to CSS variables for dynamic theming
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: "var(--brand)",

        // Primary brand color and its foreground
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary brand color
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Destructive (error) color
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Muted (disabled/less prominent) color
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Accent (highlight) color
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Popover background color
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Card background color
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // Use a single CSS variable to control all border radii
      borderRadius: {
        lg: "var(--radius)", // Large radius
        md: "calc(var(--radius) - 2px)", // Medium radius
        sm: "calc(var(--radius) - 4px)", // Small radius
      },

      // Custom keyframes for accordions
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      // Named animations using the above keyframes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up   0.2s ease-out",
      },
    },
  },

  // Third-party and custom plugins
  plugins: [
    require("tailwindcss-animate"), // Pre-built animation utilities
    addVariablesForColors, // Custom plugin to export colors as CSS vars
  ],
};

/**
 * Custom Tailwind plugin: adds every theme color as a CSS variable in :root.
 *
 * @param {object} api
 * @param {function} api.addBase  - injects base (global) CSS rules
 * @param {function} api.theme    - reads the resolved Tailwind theme
 */
function addVariablesForColors({ addBase, theme }: any) {
  // 1. Read the nested theme.colors, then flatten to { "gray-100": "#f3f4f6", … }
  let allColors = flattenColorPalette(theme("colors"));

  // 2. Convert each entry [key, value] → ["--key", value]
  //    so CSS var names match Tailwind keys (e.g. --gray-100)
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // 3. Inject a :root rule containing all CSS variables
  addBase({
    ":root": newVars,
  });
}

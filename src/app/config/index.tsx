// src/config/navbar.config.ts
import React from "react";

export interface NavbarItem {
  /** Unique identifier (used as React key) */
  id: string;
  /** URL or route path */
  link: string;
  /** Text label shown in the navbar */
  title: string;
  /** Inline SVG, color set via `currentColor` or `fill`/`stroke` */
  icon: React.ReactNode;
}

/** Helper to pick black or white */
const getColor = (theme: "light" | "dark") =>
  theme === "light" ? "#000000" : "#FFFFFF";

/**
 * Call this with your current theme ("light" or "dark")
 * to get a fully-typed navbar array with inline SVGs.
 */
export const NavbarConfig = (theme: "light" | "dark"): NavbarItem[] => [
  {
    id: "about",
    link: "#about",
    title: "About",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-8 0 512 512"
        width={24}
        height={24}
        fill={getColor(theme)}
      >
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z" />
      </svg>
    ),
  },
  {
    id: "skill",
    link: "/skill",
    title: "Skill",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke={getColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    id: "project",
    link: "/project",
    title: "Project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke={getColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.75L7.5 4.5h9l4.5 5.25v9.75a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5V9.75z" />
      </svg>
    ),
  },
  {
    id: "blog",
    link: "/blog",
    title: "Blog",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke={getColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12c0 4.97-4.03 9-9 9a9 9 0 01-4.36-1.14L2 21l1.12-5.64A8.969 8.969 0 013 12a9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "contact",
    link: "/contact",
    title: "Contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke={getColor(theme)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8l7.2 4.8a2 2 0 002.4 0L20 8" />
        <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
      </svg>
    ),
  },
];

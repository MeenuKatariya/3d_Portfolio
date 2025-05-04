// Navbar.tsx
import React from "react";
import { NavbarConfig, type NavbarItem } from "../../config/index";
import "./style.css";

export function Navbar({ theme }: { theme: "light" | "dark" }) {
  const items: NavbarItem[] = NavbarConfig(theme);

  return (
    <nav className="flex gap-3">
      {items.map(({ id, link, title, icon }) => (
        <a key={id} href={link} className={`nav-link ${theme}`}>
          <div className="tooltip-wrapper">
            {icon}
            <span className="tooltip-text">{title}</span>
          </div>
        </a>
      ))}
    </nav>
  );
}

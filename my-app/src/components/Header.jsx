import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      {title && <h1 className="header-title">{title}</h1>}
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
    </header>
  );
}

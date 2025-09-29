import React from "react";

export default function Image({ src, alt, caption }) {
  return (
    <figure className="hero">
      <img src={src} alt={alt || ""} />
      {caption && <figcaption className="muted">{caption}</figcaption>}
    </figure>
  );
}

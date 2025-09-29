import React from "react";

export default function GoodsCard({ title, price, img, href }) {
  return (
    <a className="goods-card" href={href} target="_blank" rel="noreferrer">
      <div className="goods-title">{title}</div>
      <div className="goods-thumb">
        <img src={img} alt={title} />
      </div>
      <div className="goods-price">{price}</div>
    </a>
  );
}

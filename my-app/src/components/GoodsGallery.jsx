import React from "react";
import GoodsCard from "./GoodsCard";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

const GOODS = [
  {
    id: 1,
    title: "Apple Watch SE (3rd gen)",
    price: "$249",
    href: "https://www.apple.com/apple-watch-se/",
    img: img1,
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch5",
    price: "$279.99",
    href: "https://www.lifewire.com/samsung-galaxy-watch-5-5215429",
    img: img2,
  },
  {
    id: 3,
    title: "Garmin Venu 3",
    price: "$449.99",
    href: "https://www.garmin.com/en-US/c/wearables-smartwatches/",
    img: img3,
  },
  {
    id: 4,
    title: "Better Mi Watch",
    price: "$199",
    href: "https://web.gdcpokhari.com/?c91f944=22_18006497_2_57",
    img: img4,
  },
  {
    id: 5,
    title: "Ifanze Watch",
    price: "$149",
    href: "https://ph.garmin.com/products/intosports/?cat=running",
    img: img5,
  },
  {
    id: 6,
    title: "Xiaomi Watch 2",
    price: "£129.99",
    href: "https://www.notebookcheck.com/Xiaomi-Watch-2-und-Watch-2-Pro-erhalten-ueberraschendes-Update-auf-Wear-OS-4.893004.0.html",
    img: img6,
  },
];

export default function GoodsGallery() {
  return (
    <div className="goods-grid">
      {GOODS.map((g) => (
        <GoodsCard key={g.id} {...g} />
      ))}
    </div>
  );
}

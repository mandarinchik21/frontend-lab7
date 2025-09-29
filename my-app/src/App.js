import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";

export default function App() {
  return (
    <div className="app">
      <Header
        title="Створення та робота з компонентами. Робота з props"
        subtitle="Лабораторна робота 7"
      />

      <div className="wrap">
        <Content
          fio="Ткачук Маргарита Сергіївна"
          born="21.06.2006, м. Київ"
          education={[
            "Школа-гімназія «Академія»",
            "НТУУ «КПІ імені Ігоря Сікорського»",
            "IT Step Academy",
          ]}
          hobbies={[
            "UX/UI дизайн",
            "Танці",
            "Читання",
            "Прогулянки та подорожі",
            "Фотографія та скетчинг",
          ]}
          books={[
            "«Емоційний інтелект» — Деніел Ґоулман",
            "«Lean UX» — Джефф Ґотгелф, Джош Сайден",
            "«Не змушуйте мене думати!» — Стів Круг",
          ]}
          cityTitle="Барселона"
          cityNote="Важко виділити місто, яке мені найбільше запам'яталося, але Барселона точно входить у список. Пам’ятаю вулички і те, як папуги вільно літають у місті."
          linkHref="https://www.barcelona.cat/en/"
          linkText="barcelona.cat"
        />

        <Image
          src="https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=1200&q=80&auto=format&fit=crop"
          alt="Барселона"
          caption="Барселона — місто з яскравою архітектурою та атмосферою"
        />
      </div>

      <h2 className="section-title">Галерея товарів</h2>
      <GoodsGallery />
    </div>
  );
}

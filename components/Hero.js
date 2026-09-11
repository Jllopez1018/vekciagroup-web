"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroSlides from "../data/heroSlides";

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay" />

              <div className="hero-content">
                <span className="hero-kicker">
                  VEKCIA
                </span>

                <h2 className="hero-title">
                  {slide.title}
                </h2>

                <p className="hero-subtitle">
                  {slide.subtitle}
                </p>

 <a
  href="#servicios"
  className="
    inline-flex
    items-center
    gap-3
    px-6
    py-3
    mt-5
    rounded-lg
    bg-[var(--vekcia-green)]
    text-white
    font-semibold
    hover:brightness-95
    transition-all
    duration-300
  "
>
  Conocer más

  <span className="text-lg leading-none transition-transform duration-300">
    →
  </span>
</a>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
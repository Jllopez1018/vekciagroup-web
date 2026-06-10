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

              <div className="hero-content-card">
                <span
                  className="
                  inline-block
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--vekcia-bg)]
                "
                >
                  VEKCIA GROUP
                </span>

                <h2
                  className="
                    text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                    leading-[1]
                    text-[#081221]
                    mb-8
                  "
                >
                  {slide.title}
                </h2>

                <p>{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}
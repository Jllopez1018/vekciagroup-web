"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroSlides from "../data/heroSlides";
const slides = heroSlides.filter(slide => slide.active);
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
        
        {slides.map((slide, index) => (
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

                  <a
                  href="#servicios"
                  className="
                    inline-flex
                    items-center
                    px-6
                    py-3
                    mt-5
                    rounded-full
                    bg-slate-900
                    text-white
                    font-semibold
                    hover:bg-slate-800
                    transition
                  "
                >
                  Conocer más

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
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
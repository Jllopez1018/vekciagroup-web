"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";

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

              {/* Overlay */}
              <div className="hero-overlay" />

              {/* Contenido */}
              <div className="hero-content-wrapper">

                <div className="hero-content-card">

                  <span className="hero-brand">
                    VEKCIA
                  </span>

                  <h1>
                    {slide.title}
                  </h1>

                  <div className="hero-line" />

                  <p>
                    {slide.subtitle}
                  </p>

                  <div className="hero-actions">

                    <a
                      href="#servicios"
                      className="hero-button"
                    >
                      Conocer nuestras soluciones
                      <span>→</span>
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}
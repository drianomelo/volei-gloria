"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Importe o plugin
import Image from "next/image";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const slides = [
    { src: "/images/carrossel-1.avif", alt: "Destaque do Time 1" },
    { src: "/images/carrossel-2.avif", alt: "Destaque do Time 2" },
  ];

  return (
    <section className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1400}
                height={600}
                priority={index === 0}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

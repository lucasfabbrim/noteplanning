"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./images-carousel.css";

import Photo1 from "@/assets/note-private.png";
import Photo2 from "@/assets/note-private.png";
import Photo3 from "@/assets/note-private.png";
import Photo4 from "@/assets/note-private.png";

const images = [Photo4, Photo1, Photo3, Photo2];

export default function Carousel() {
  return (
    <div className="max-w-lg mx-auto bg-black">
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div className="w-full h-[300px] flex items-center justify-center">
              <div className="relative w-full h-full max-h-[250px]">
                <Image
                  src={image}
                  alt={`Post image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-[15px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

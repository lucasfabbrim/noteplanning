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
    <div className="max-w-sm  mx-auto bg-black">
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="swiper "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="pb-6">
            <div className="w-full h-[300px] relative ">
              <Image
                src={image}
                alt={`Post image ${index + 1}`}
                fill
                className="object-cover rounded-[10px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

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
    <div className="max-w-xs lg:max-w-sm xl:max-w-md mx-auto bg-black">
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
          <SwiperSlide key={index}>
            <div className="aspect-[5/5] relative w-full -mb-8">
              <Image
                src={image}
                alt={`Post image ${index + 1}`}
                width={500}
                height={500}
                className="object-cover rounded-[8px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

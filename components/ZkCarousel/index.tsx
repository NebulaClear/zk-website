// components/ZkCarousel/index.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { AutoplayOptions } from "swiper/types";
// import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
// import type { CarouselProps } from "@/types"
export type PlaceholderValue = "blur" | "empty" | `data:image/${string}`;
interface ICarousel {
  images: [];
  autoplay?: {
    delay: number;
  };
  showPagination?: boolean;
  slidesPerView?: number;
}
const ZkCarousel = ({ images, autoplay = { delay: 3000 } }: ICarousel) => {
  const autoplayConfig: AutoplayOptions =
    typeof autoplay === "boolean"
      ? { delay: 3000, disableOnInteraction: false }
      : autoplay;
  console.log(autoplayConfig);
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      pagination={{
        clickable: true,
        dynamicMainBullets: 2,
        dynamicBullets: true,
      }}
      loop={images.length > 1}
      onInit={(swiper) => swiper.update()} // 初始化后更新布局
      speed={800}
      grabCursor
      // onSlideChange={(swiper) => console.log("当前索引:", swiper.realIndex)}
      className="w-full"
    >
      {images.map(
        (
          {
            src,
            title,
            info,
            button_l,
            button_r,
          }: // alt,
          {
            src: string;
            alt: string;
            title?: string;
            info?: string;
            button_l?: string;
            button_r?: string;
          },
          index: number
        ) => (
          <SwiperSlide key={src + index} className="w-full">
            <div
              className="relative h-700 w-full"
              style={{
                backgroundImage: `url('${src}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute w-full inset-0 bg-gradient-to-r from-white via-white/20 to-transparent">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                      {title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      {info}
                    </p>
                    <div className="flex space-x-4">
                      {button_l&&<button className="!rounded-button bg-[#87CEEB] text-white px-8 py-3 text-lg hover:bg-opacity-90">
                        {button_l}
                      </button>}
                      {button_r&&<button className="!rounded-button border-2 border-[#87CEEB] bg-gray-50 text-[#87CEEB] px-8 py-3 text-lg hover:bg-[#87CEEB] hover:text-white">
                        {button_r}
                      </button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default ZkCarousel;

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
      ? { delay: 3000, disableOnInteraction: false, }
      : autoplay;
  console.log(autoplayConfig);
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // 关键参数：用户操作后继续自动播放[5,9](@ref)
        pauseOnMouseEnter: true,
      }}
      navigation
      pagination={{ clickable: true, dynamicMainBullets:2, dynamicBullets: true}}
      loop={images.length > 1}
      onInit={(swiper) => swiper.update()} // 初始化后更新布局
      // onImagesReady={(swiper) => swiper.update()} // 图片加载后更新
      speed={800}
      grabCursor // 启用拖拽手势[4](@ref)
      // touch={{
      //   touchRatio: 0.6,  // 拖拽灵敏度
      //   touchAngle: 30    // 有效触发角度
      // }}
      onSlideChange={(swiper) => console.log("当前索引:", swiper.realIndex)}
      className="w-full"
    >
      {images.map(
        (
          {
            src,
          }: // alt,
          // placeholder,
          { src: string; alt: string; placeholder: PlaceholderValue },
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
              <div className="absolute w-full inset-0 bg-gradient-to-r from-white via-white/90 to-transparent">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                      零中介费留学申请平台
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      全额奖学金留学，学费半工半读，名校直通车
                    </p>
                    <div className="flex space-x-4">
                      <button className="!rounded-button bg-[#87CEEB] text-white px-8 py-3 text-lg hover:bg-opacity-90">
                        开始申请
                      </button>
                      <button className="!rounded-button border-2 border-[#87CEEB] text-[#87CEEB] px-8 py-3 text-lg hover:bg-[#87CEEB] hover:text-white">
                        了解更多
                      </button>
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

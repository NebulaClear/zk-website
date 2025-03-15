"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FullScreenJukuPage() {
  const EduContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement>>([]);

  // 使用 useGSAP 替代 useEffect 管理动画生命周期
  useGSAP(() => {
    // 视差背景系统（作用域限定在 containerRef）
    gsap.utils.toArray(".parallax-layer").forEach((layer: any, i) => {
      gsap.to(layer, {
        yPercent: i * (window.innerHeight < 700 ? -10 : -15),
        ease: "none",
        scrollTrigger: {
          trigger: EduContainerRef.current,
          start: "top top",
          end: "+=500%",
          scrub: true
        }
      });
    });

    // 标题入场动画（带作用域自动清理）
    gsap.from(titleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // 卡片入场动画（自动收集动画实例）
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? 60 : -60,
        opacity: 0,
        rotate: index % 2 === 0 ? 5 : -5,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }, { scope: EduContainerRef }); // 关键：限定动画作用域

  return (
    <div ref={EduContainerRef} className="min-h-full relative overflow-hidden">
      {/* 全屏背景层 */}
      <div className="parallax-layer absolute inset-0 bg-gradient-to-br from-primary to-second">
        <div className="absolute inset-0 opacity-20">
          <div className="flex gap-8 animate-scroll-horizontal"></div>
        </div>
      </div>

      {/* 主内容层 */}
      <div className="parallax-layer relative min-h-[100dvh] flex items-center justify-center p-4 md:p-8">
        {/* 增加宽度限制确保三列布局 */}
        <div className="w-full max-w-7xl mx-auto px-4"> {/* 调整容器宽度 */}
          {/* 动态标题 */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center md:mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mt-10">
              早稻田精英私塾
            </span>
            <span className="block md:inline-block md:ml-6 text-2xl md:text-4xl text-gray-200 mt-4 md:mt-0">
              日本升学直通车
            </span>
          </h1>

          {/* 优化卡片容器布局 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {[
              {
                title: "EJU考试专项辅导",
                icon: "📚",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "校内考试重点突破",
                icon: "🎯",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "SGU英语项目培训",
                icon: "🌐",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="service-card cursor-pointer group relative p-6 md:p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl md:text-6xl mb-6 transition-transform group-hover:rotate-[20deg]">
                    {service.icon}
                  </span>
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${service.color} mb-6 rounded-full`}
                  />
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
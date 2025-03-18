// src/components/ServiceAdvantages.tsx
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件（只需一次）
gsap.registerPlugin(ScrollTrigger, useGSAP);

const advantages = [
  {
    icon: "fas fa-user-tie",
    title: "专业导师团队",
    description:
      "由哈佛、牛津等名校毕业的资深顾问组成，平均拥有8年以上留学咨询经验",
  },
  {
    icon: "fas fa-chart-line",
    title: "个性化规划方案",
    description: "结合学生个人情况，制定专属规划方案，确保申请策略精准有效",
  },
  {
    icon: "fas fa-shield-alt",
    title: "成功率保障",
    description: "近三年服务学生TOP30名校录取率达87%，为你的留学梦想保驾护航",
  },
];

export default function ServiceAdvantages() {
  const PpContainerRef = useRef<HTMLDivElement>(null);
  const PpCardRefs = useRef<HTMLDivElement[]>([]);

  // 使用useGSAP优化动画管理[3,6](@ref)
  useGSAP(
    () => {
      // 优化后的卡片动画（横向滑入）
      PpCardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -30 : 30, // 交替方向入场
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10%", // 更早触发
            end: "top center",
            toggleActions: "play none none reverse",
            markers: false, // 调试时可开启
          },
        });
      });

      // 优化容器动画（移除视差改为淡入）
      gsap.from(PpContainerRef.current, {
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: PpContainerRef.current,
          start: "top bottom",
          end: "top 30%",
          scrub: 1,
        },
      });
    },
    {
      scope: PpContainerRef,
      dependencies: [PpCardRefs],
    }
  );

  return (
    <section
      ref={PpContainerRef}
      className="py-16 bg-gray-50 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 md:mb-16">
          我们的核心优势
        </h2>

        {/* 网格布局适配移动端[2](@ref) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  PpCardRefs.current[index] = el;
                }
              }}
              className="bg-white p-6 rounded-xl shadow-lg transition-all 
                hover:shadow-xl will-change-transform"
            >
              {/* 图标容器添加微交互动画 */}
              <div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6
                transition-transform hover:scale-105"
              >
                <i className={`${advantage.icon} text-primary text-2xl`} />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

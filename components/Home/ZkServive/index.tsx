"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from 'next/link'

// 服务项类型定义
interface ServiceItem {
  title: string;
  description: string;
  route?:string;
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const services: ServiceItem[] = [
    {
      title: "选校规划",
      description: "基于学生个人情况，为其量身定制最优选校方案",
      route:'/planning'
    },
    {
      title: "签证办理",
      description: "一站式签证服务，确保顺利获得学生签证",
      route:'/visa'
    },
    {
      title: "日本留学课程",
      description: "日语+EJU日本留学考试+雅思",
      route:'/course'
    },
    {
      title: "语言培训",
      description: "日语+英语",
    },
    {
      title: "面试辅导",
      description: "模拟面试训练，提升面试成功率",
    },
    {
      title: "海外生活指导",
      description: "全方位生活指导，助你适应海外生活",
    },
  ];

  // 初始化插件
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

  // 动画配置
  useGSAP(
    () => {
      // 滚动触发入场动画
      gsap.utils.toArray<HTMLElement>(".service-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // 当元素顶部进入视口80%位置时触发
            end: "bottom 50%", // 当元素底部到达视口50%时结束
            toggleActions: "play none none reverse", // 滚动进/出时的行为
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1, // 每个元素递增延迟
          ease: "power3.out",
        });
      });

      // 悬停动画
      gsap.utils.toArray<HTMLElement>(".service-item").forEach((item) => {
        const hoverAnim = gsap.to(item, {
          x: 15,
          scale: 1.03,
          duration: 0.3,
          paused: true,
          ease: "back.out(1.7)",
        });

        item.addEventListener("mouseenter", () => hoverAnim.play());
        item.addEventListener("mouseleave", () => hoverAnim.reverse());
      });
    },
    { scope: containerRef }
  );
  // 动画配置
  useGSAP(
    () => {
      console.log(gsap.utils.toArray<HTMLElement>(".our-service"));
    },
    { scope: titleRef }
  );

  return (
    <section className="py-20 px-4 bg-white" id="services-section">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="our-service text-3xl font-bold text-center mb-16 text-gray-800"
        >
          我们的服务
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={"/service"+service.route}
              scroll={true}
              className="service-item cursor-pointer group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary/50 hover:border-primary"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

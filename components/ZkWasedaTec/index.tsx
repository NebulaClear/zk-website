// src/app/page.tsx
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger);

export default function ZkWaseda() {
  const leftRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // 左侧图片动画
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // 标题动画
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 0.5
      }
    });

    // 列表项动画
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none none",
          markers: false // 调试时可设为true
        },
        delay: index * 0.1
      });
    });

    // 容器整体动画
    gsap.from(containerRef.current, {
      autoAlpha: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    "与北京大学双学位项目合作",
    "历史馆特别研究计划",
    "机器人技术创新实验室"
  ];

  return (
    <div ref={containerRef} className="min-h-fit bg-blue-100 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* 左侧图片区域 */}
          <div ref={leftRef} className="w-full md:w-1/2 relative">
            <div className="aspect-video bg-blue-100 rounded-2xl overflow-hidden">
              <Image
                src="/image/keyan2.jpg"
                alt="实验室场景"
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="w-full md:w-1/2">
            <h2 
              ref={titleRef}
              className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"
            >
              早稻田联合科研计划
            </h2>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      itemsRef.current[index] = el;
                    }
                  }}
                  className="flex items-center p-6 bg-second rounded-xl hover:bg-second/60 transition-colors cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{project}</h3>
                  </div>
                  <svg
                    className="w-6 h-6 text-white ml-4"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
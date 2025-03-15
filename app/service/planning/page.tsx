// app/planning/page.tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 注册插件
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PlanningPage() {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 使用GSAP上下文管理动画
  useGSAP(() => {
    gsap.set(".animate-item", { 
      autoAlpha: 0, // 同时设置opacity:0和visibility:hidden
      y: 80 
    });
    // 导航栏滚动动画
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current?.classList.add('bg-white', 'shadow-md');
      } else {
        navRef.current?.classList.remove('bg-white', 'shadow-md');
      }
    };
    window.addEventListener('scroll', handleScroll);

 // 创建主时间轴动画
 const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animate-container",
    start: "top 90%",
    toggleActions: "play none none reverse",
    onEnter: () => {
      // 滚动到触发点时强制显示容器
      gsap.set(".animate-container", { autoAlpha: 1 });
    }
  }
});

      // 卡片序列动画
  tl.to(".animate-item", {
    autoAlpha: 1,
    y: 0,
    duration: 1.2,
    stagger: { 
      each: 0.3,
      from: "start" 
    },
    ease: "power3.out",
    immediateRender: false // 禁止初始渲染
  });

    // 视差滚动效果
    gsap.utils.toArray<HTMLElement>('.parallax').forEach(element => {
      gsap.to(element, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          scrub: 1
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.refresh();
    };
  }, {
    dependencies: [pathname],
    scope: containerRef
  });


  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* 页眉 */}
      <header className="pt-32 pb-20 bg-[url('/planning-bg.jpg')] bg-cover relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-item">
            专业选校规划
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-item">
            申请经验丰富，为您匹配最佳院校方案
          </p>
        </div>
      </header>

      {/* 核心优势 */}
      <section className="py-20 animate-container">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🎯",
                title: "精准匹配",
                desc: "专业留学顾问1v1咨询",
              },
              {
                icon: "📊",
                title: "经验丰富",
                desc: "专业选校",
              },
              {
                icon: "💼",
                title: "成功保障",
                desc: "90%+学员进入目标院校范围",
              },
            ].map((item, i) => (
              <div key={i} className="animate-item">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 规划流程 */}
      <section className="py-20 bg-white animate-container">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-item">
            五步实现完美选校
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2"></div>
            {[
              "背景评估与定位",
              "目标国家/专业分析",
              "智能院校匹配",
              "梯度方案制定",
              "动态优化调整",
            ].map((text, i) => (
              <div
                key={i}
                className={`md:w-1/2 ${
                  i % 2 ? "md:ml-auto" : ""
                } mb-12 animate-item`}
              >
                <div className="bg-white p-8 border rounded-xl relative md:max-w-[480px]">
                  <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{text}</h3>
                  <p className="text-gray-600">详细描述...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 院校数据库 */}
      <section className="py-20 bg-gray-50 animate-container">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-item">
            日本院校覆盖
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2000+", label: "合作院校" },
              { num: "150+", label: "国家地区" },
              { num: "500+", label: "专业领域" },
              { num: "95%", label: "录取成功率" },
            ].map((item, i) => (
              <div key={i} className="animate-item">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.num}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 咨询入口 */}
      <section
        id="consult"
        className="py-20 bg-blue-600 text-white animate-container"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-item">
            开启您的名校之旅
          </h2>
          <p className="text-xl mb-8 animate-item">立即获取专属选校方案</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors animate-item"
          >
            免费咨询
          </Link>
        </div>
      </section>
    </div>
  );
}

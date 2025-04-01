'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const router = useRouter()
  useGSAP(() => {
    // 主内容动画优化
    gsap.from(".hero-content", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power4.out",
      immediateRender: false, // 禁止初始渲染
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });

    // 按钮动画优化
    gsap.from(".cta-button", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".hero-content",
        start: "top 80%",
      }
    });

    // 文字动画优化
    gsap.utils.toArray(".text-reveal").forEach((line: any) => {
      gsap.from(line, {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
        }
      });
    });
  });

  return (
    <section className="hero-section min-h-[400px] md:min-h-[450px] flex items-center bg-blue-600">
      <div className="container mx-auto px-4">
        {/* 移除初始opacity-0，改由GSAP控制 */}
        <div className="hero-content text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-reveal">
            开启您的留学之旅
          </h1>
          
          <p className="text-sm md:text-base text-white/90 mb-6 leading-normal mx-auto max-w-[500px] text-reveal">
            我们提供专业的留学规划咨询服务，帮助您选择最适合的课程和学习计划。
          </p>

          {/* 移除初始opacity-0 */}
          <button 
            className="cta-button bg-white text-black px-6 py-2.5 rounded-full 
              hover:bg-gray-100 font-medium shadow-md
              text-xs md:text-sm inline-block"
              onClick={()=>router.push('/contact')}
          >
            预约免费咨询
          </button>
        </div>
      </div>
    </section>
  );
}
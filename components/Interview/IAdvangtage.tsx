// components/ServiceAdvantages.tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAdvantages() {
  useGSAP(() => {
    gsap.utils.toArray('.service-card').forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.1
      });
    });
  });

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-24">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">
          我们的服务优势
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* 专业导师团队 */}
          <ServiceCard
            title="专业导师团队"
            description={[
              "由海外名校毕业的资深面试官组成",
              "深入了解各校录取标准和面试要求"
            ]}
            icon="✦"
          />

          {/* 个性化辅导方案 */}
          <ServiceCard
            title="个性化辅导方案"
            description={[
              "根据学生背景和目标院校定制专属计划",
              "针对性提升面试表现"
            ]}
            icon="✎"
          />

          {/* 真实案例模拟 */}
          <ServiceCard
            title="真实案例模拟"
            description={[
              "提供真实面试环境模拟",
              "助你提前适应面试压力"
            ]}
            icon="🔄"
          />

          {/* 全程跟踪服务 */}
          <ServiceCard
            title="全程跟踪服务"
            description={[
              "专业导师全程跟进",
              "及时调整辅导方案，确保最佳学习效果"
            ]}
            icon="📈"
          />
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, description, icon }: any) => (
  <div className="service-card group flex flex-col md:flex-row items-start p-4 md:p-6 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600 text-xl md:text-2xl mb-4 md:mb-0 md:mr-4">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <ul className="space-y-2">
        {description.map((desc: string, index: number) => (
          <li key={index} className="text-sm md:text-base text-gray-600 leading-relaxed">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
// components/TrainingContent.tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrainingContent() {
  useGSAP(() => {
    gsap.utils.toArray('[data-animate]').forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });
  });

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          辅导内容详情
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* 面试技巧指导 */}
          <div data-animate className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                <span className="text-blue-600 text-xl">✦</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                面试技巧指导
              </h3>
            </div>
            <ul className="space-y-4 pl-4">
              {[
                "掌握面试礼仪和着装要求",
                "学习有效的自我介绍技巧",
                "提升回答问题的逻辑性",
                "培养积极的肢体语言"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-600 md:text-lg"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 英语口语训练 */}
          <div data-animate className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                <span className="text-green-600 text-xl">🎤</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                英语口语训练
              </h3>
            </div>
            <div className="space-y-6">
              {[
                ["专业发音纠正", "green"],
                ["口语流畅度提升", "green"],
                ["学术词汇积累", "green"],
                ["即兴表达能力训练", "green"],
                // ["Prate Preparation", "purple"],
                // ["New Edge Siab", "purple"]
              ].map(([title, color], index) => (
                <div key={index} className="pl-4">
                  <h4 className={`text-sm font-medium mb-2 text-${color}-600`}>
                    {title}
                  </h4>
                  <div className={`h-1 bg-${color}-100 rounded-full mb-3`}></div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {index % 2 === 0 
                      ? "通过情景模拟训练提升实际应用能力"
                      : "专项突破式训练强化核心技能"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
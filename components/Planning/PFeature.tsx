// src/components/EvaluationSystem.tsx
"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EvaluationSystem() {
  const PfContainerRef = useRef<HTMLDivElement>(null);
  const PfChartRef = useRef<HTMLDivElement>(null);
  const PfStatsRef = useRef<HTMLDivElement>(null);

  
  useGSAP(
    () => {
      // 修复动画初始化问题
      gsap.set(PfChartRef.current, { 
        opacity: 1, // 强制初始化可见
        x: 0 
      });

      // 优化后的图表入场动画
      gsap.from(PfChartRef.current, {
        x: "-=50", // 相对移动取代绝对值
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: PfChartRef.current,
          start: "top 80%",  // 更早触发
          end: "top 30%",
          toggleActions: "play none none reverse", // 添加反向控制
        }
      });

      // 数据面板动画增加边界保护
      if (PfStatsRef.current) {
        gsap.from(PfStatsRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: PfStatsRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        });
      }
    },
    { scope: PfContainerRef }
  );

  return (
    <section className="bg-blue-50 py-12 md:py-16">
      <div
        ref={PfContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          选校规划特色
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* 左侧图表区域 */}
          <div
            ref={PfChartRef}
            className="w-full md:w-1/2 min-h-[300px] md:min-h-0 aspect-video bg-white rounded-xl shadow-lg p-4 overflow-hidden bg-cover bg-center"
            style={{backgroundImage: "url('/image/planning.jpg')"}}
          >
            
          </div>

          {/* 右侧数据面板 */}
          <div ref={PfStatsRef} className="w-full md:w-1/2 space-y-6">
            {/* 核心功能列表 */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  专业匹配分析
                </h3>
                <p className="text-blue-600 text-sm leading-relaxed">
                  基于学生兴趣、能力和职业发展规划，结合就业市场趋势，推荐最适合的专业方向。
                </p>
              </div>

              {[
                { icon: "fas fa-sync", text: "个性化职业规划指导" },
                { icon: "fas fa-project-diagram", text: "专业发展前景分析" },
                { icon: "fas fa-chart-line", text: "课程体系详细解读" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-4 h-4 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i className={`${item.icon} text-blue-600 text-sm`} />
                  </div>
                  <span className="text-blue-900 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

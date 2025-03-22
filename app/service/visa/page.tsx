'use client';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// GSAP 插件注册
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function VisaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<HTMLDivElement[]>([]);

  // 动画初始化
  useGSAP(() => {
    // 全局默认配置
    gsap.defaults({
      ease: "power3.out",
      duration: 1.2
    });

    // 视差背景动画
    gsap.to(parallaxRefs.current, {
      yPercent: 30,
      scrollTrigger: {
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });

    // 元素入场动画
    gsap.utils.toArray(".animate-element").forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // 服务卡片序列动画
    const serviceCards = gsap.utils.toArray(".service-card");
    serviceCards.forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          delay: i * 0.15
        }
      );
    });

    // 流程步骤时间轴动画
    const processTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".process-container",
        start: "top center",
        end: "bottom center",
        scrub: 0.8
      }
    });

    gsap.utils.toArray(".process-step").forEach((step: any, i) => {
      processTimeline.fromTo(step,
        { x: i%2 ? -60 : 60, opacity: 0 },
        { x: 0, opacity: 1 },
        i * 0.2
      );
    });

  }, { scope: containerRef });

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50" 
      ref={containerRef}
    >
      {/* 视差背景层 */}
      <div className="fixed inset-0 overflow-hidden">
        {[0, 1].map((i) => (
          <div 
            key={i}
            ref={el => { if (el) parallaxRefs.current.push(el); }}
            className={`parallax-bg absolute ${
              i === 0 ? 
                'w-[800px] h-[800px] -top-96 -left-96 bg-purple-100/30' : 
                'w-[600px] h-[600px] -bottom-64 -right-64 bg-indigo-100/40'
            } rounded-full blur-[100px]`}
          />
        ))}
      </div>

      {/* 页首区块 */}
      <section className="scroll-section pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="animate-element text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                日本签证解决方案
              </span>
            </h1>
            <p className="animate-element text-xl md:text-2xl text-purple-700/90 mb-8">
              专业团队，助您快速获取留学签证
            </p>
            <div className="animate-element gradient-block">
              <div className="inline-grid gap-4 md:grid-cols-3 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                {[
                  {label: '平均出签时间', value: '5-7工作日'},
                  {label: '服务国家', value: '50+'},
                  {label: '成功率', value: '99.2%'},
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="service-card p-4 border border-purple-100 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-purple-600">{item.value}</div>
                    <div className="text-sm text-purple-700/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 核心服务 */}
      <section className="scroll-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 animate-block">
              三重保障服务体系
            </h2>
            <p className="text-purple-700/90 animate-block">专业团队全程护航，确保每个环节精准高效</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: '🛡️', title: '材料保险', desc: '专业预审+三方复核机制'},
              {icon: '🚀', title: '极速通道', desc: '使馆关系+加急处理权限'},
              {icon: '💎', title: 'VIP服务', desc: '专属顾问+全流程透明'},
            ].map((item, i) => (
              <div key={i} className="animate-block">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-3">{item.title}</h3>
                  <p className="text-purple-700/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 流程展示区块 */}
      <section className="process-container scroll-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="animate-element text-3xl md:text-4xl font-bold text-center text-purple-900 mb-16">
              标准化办理流程
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-100 to-indigo-100 -translate-x-1/2"></div>
              {[
                {title: '需求诊断', desc: '签证类型确认'},
                {title: '方案制定', desc: '时间规划+材料清单'},
                {title: '材料制备', desc: '模板提供+专业翻译'},
                {title: '使馆对接', desc: '进度实时跟踪'},
                {title: '签证交付', desc: '后续支持服务'},
              ].map((step, i) => (
                <div 
                  key={i}
                  className={`process-step flex ${
                    i%2 ? 'md:flex-row-reverse' : ''
                  } items-center mb-16 animate-element`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm">
                      <div className="text-purple-600 text-lg font-semibold mb-2">Step {i+1}</div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-2">{step.title}</h3>
                      <p className="text-purple-700/80">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 咨询区块 */}
      <section className="cta-section scroll-section py-20 bg-purple-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="animate-element text-3xl md:text-4xl font-bold text-white mb-6">
              立即获取您的签证方案
            </h2>
            <Link 
              href="/contact" 
              className="cta-button animate-element inline-block bg-white text-purple-900 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all font-bold text-lg shadow-lg"
            >
              📩 获取定制方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
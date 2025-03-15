'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function VisaPage() {
  const VisaContainerRef = useRef<HTMLDivElement>(null);

  // 使用GSAP上下文管理动画[1,5](@ref)
  useGSAP(() => {
    // 初始化隐藏所有动画元素 
    gsap.set('.animate-block', {
      autoAlpha: 0, // 同时设置opacity:0和visibility:hidden
      y: 80
    });

    // 创建主时间轴动画
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-trigger",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        onEnter: () => {
          // 滚动到触发点时强制显示容器
          gsap.set(".section-trigger", { autoAlpha: 1 });
        }
      }
    });

    // 卡片序列动画[2,6](@ref)
    tl.to(".animate-block", {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: {
        each: 0.3,
        from: "start",
        grid: "auto"
      },
      ease: "power3.out",
      immediateRender: false
    });

    // 复杂元素的独立动画[3](@ref)
    gsap.utils.toArray<HTMLElement>('.gradient-block').forEach((block, i) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        width: 0,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: i * 0.2
      });
    });

  }, { scope: VisaContainerRef });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50" ref={VisaContainerRef}>
      {/* 几何背景装饰 */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-purple-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-indigo-100/40 rounded-full blur-[80px]"></div>
      </div>
      {/* 页眉 */}
      <header className="pt-32 pb-24 relative overflow-hidden section-trigger">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6 animate-block">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                日本签证解决方案
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-700/90 mb-8 animate-block">
              专业团队，助您快速获取留学签证
            </p>
            <div className="animate-block">
              <div className="inline-grid gap-4 md:grid-cols-3 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                {[
                  {label: '平均出签时间', value: '5-7工作日'},
                  {label: '服务国家', value: '50+'},
                  {label: '成功率', value: '99.2%'},
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-purple-100 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">{item.value}</div>
                    <div className="text-sm text-purple-700/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 核心服务 */}
      <section className="py-20 section-trigger">
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

      {/* 流程展示 */}
      <section className="py-20 bg-white section-trigger">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-16 animate-block">
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
                  className={`flex ${i%2 ? 'md:flex-row-reverse' : ''} items-center mb-16 animate-block`}
                >
                  <div className="md:w-1/2 p-6">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm">
                      <div className="text-purple-600 text-lg font-semibold mb-2">Step {i+1}</div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-2">{step.title}</h3>
                      <p className="text-purple-700/80">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2">
                    <div className={`h-48 bg-gradient-to-${i%2 ? 'l' : 'r'} from-purple-100/50 to-transparent`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 材料清单 */}
      <section className="py-20 section-trigger">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 md:p-12 animate-block">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">基础材料清单</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {icon: '📖', title: '身份证明', items: ['护照原件', '身份证复印件', '户口本']},
                {icon: '📸', title: '照片要求', items: ['白底彩色近照', '尺寸3.5x4.5cm', '电子版+纸质版']},
                {icon: '💼', title: '经济证明', items: ['存款证明', '银行流水', '资助声明']},
                {icon: '📑', title: '附加文件', items: ['行程计划表', '录取通知书', '保险证明']},
              ].map((group, i) => (
                <div key={i} className="border border-purple-50 rounded-xl p-6">
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center text-purple-700/90">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 咨询入口 */}
      <section id="consult" className="py-20 bg-purple-900 section-trigger">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-block">
              立即获取您的签证方案
            </h2>
            <p className="text-purple-200 mb-8 text-lg animate-block">专业顾问将在24小时内联系您</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-xl 
              hover:bg-purple-50 transition-all font-bold text-lg shadow-lg animate-block"
            >
              📩 获取定制方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
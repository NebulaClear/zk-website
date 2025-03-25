'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ResearchStats = () => {
  const showContainerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    // 卡片入场动画增强
    gsap.from(".stat-card", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: {
        each: 0.15,
        from: "center"
      },
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: showContainerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    // 悬停动画
    gsap.utils.toArray(".stat-card").forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)"
        })
      })
    })
  }, { scope: showContainerRef })

  const stats = [
    { value: "180+", label: "在研项目", icon: "🧪" },
    { value: "2000+", label: "发表论文", icon: "📚" },
    { value: "50+", label: "国际合作伙伴", icon: "🌍" },
    { value: "300+", label: "研究生人数", icon: "🎓" }
  ]

  return (
    <div ref={showContainerRef} className="bg-gradient-to-b from-blue-50/30 to-white py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 标题增强 */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            研究成果展示
          </span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"/>
        </h2>

        {/* 统计卡片容器 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-50/80 hover:border-blue-100"
            >
              {/* 装饰性元素 */}
              <div className="absolute top-4 right-4 opacity-10 text-7xl">
                {stat.icon}
              </div>
              
              {/* 内容区域 */}
              <div className="relative z-10">
                {/* 数字展示 */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                
                {/* 描述信息 */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {stat.label}
                  </h3>
                  <div className="flex justify-center">
                    <div className="w-8 h-1 bg-blue-600 rounded-full opacity-80 group-hover:w-12 transition-all duration-300"/>
                  </div>
                </div>
              </div>

              {/* 悬浮特效 */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-100/50 transition-all duration-500"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchStats
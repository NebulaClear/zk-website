// src/components/CTASection.tsx
'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function CTASection() {
  const PfooterContainerRef = useRef<HTMLDivElement>(null)
  const PfooterHeadingRef = useRef<HTMLHeadingElement>(null)
  const PfooterTextRef = useRef<HTMLParagraphElement>(null)
  const PfooterButtonRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    // 文字渐显动画
    gsap.from([PfooterHeadingRef.current, PfooterTextRef.current], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: PfooterContainerRef.current,
        start: "top 80%"
      }
    })

    // 按钮弹性入场
    gsap.from(PfooterButtonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: PfooterButtonRef.current,
        start: "top 90%"
      }
    })
  }, { scope: PfooterContainerRef })

  return (
    <section className="bg-[#2563EB] py-16 md:py-24">
      <div ref={PfooterContainerRef} className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* 主标题 */}
          <h2 
            ref={PfooterHeadingRef}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            开启你的留学规划之旅
          </h2>
          
          {/* 副标题 */}
          <p 
            ref={PfooterTextRef}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            专业顾问团队，为你提供一对一咨询服务
          </p>

          {/* 行动按钮 */}
          <button
            ref={PfooterButtonRef}
            className="bg-white text-[#2563EB] px-8 py-4 rounded-lg text-lg 
                     font-bold shadow-lg hover:bg-white/70 hover:shadow-xl transition-all
                     min-w-[240px] md:min-w-[280px]"
          >
            预约免费咨询
          </button>

          {/* 咨询热线 */}
          <div className="mt-12">
            <p className="text-white/90 text-lg md:text-xl">
              咨询热线：<span className="font-mono">400-888-9999</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
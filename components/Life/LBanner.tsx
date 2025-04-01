// src/components/LBSection.tsx
'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function LBanner() {
  const LBSectionRef = useRef<HTMLDivElement>(null)
  const LBHeadingRef = useRef<HTMLHeadingElement>(null)
  const LBtextRef = useRef<HTMLParagraphElement>(null)
  const LBbuttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([LBHeadingRef.current, LBtextRef.current, LBbuttonRef.current], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: LBSectionRef.current,
          start: "top center"
        }
      })

      gsap.to(LBSectionRef.current, {
        backgroundPositionY: "-20%",
        scrollTrigger: {
          scrub: 1
        }
      })
    }, LBSectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={LBSectionRef}
      className="relative max-h-fit pt-24 bg-cover bg-center"
      style={{backgroundImage:`url('/image/life/LBanner.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center py-24">
        <div className="w-full md:w-1/2">
          <h1 
            ref={LBHeadingRef}
            className="text-4xl md:text-5xl font-bold text-BLACK mb-6 leading-tight"
          >
            专业的留学面试辅导服务
          </h1>
          <p 
            ref={LBtextRef}
            className="text-lg md:text-xl text-black/90 mb-8"
          >
           我们提供一对一专业辅导，帮助你突破语言障碍，建立自信
            <br className="hidden md:block" />
            成功通过海外名校面试。95% 的学员成功获得理想院校 Offer。
          </p>
          <button
            ref={LBbuttonRef}
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={()=>router.push('/contact')}
          >
            预约免费咨询
          </button>
        </div>
      </div>
    </section>
  )
}
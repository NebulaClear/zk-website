// src/components/HeroSection.tsx
'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const HeroSectionRef = useRef<HTMLDivElement>(null)
  const HeroHeadingRef = useRef<HTMLHeadingElement>(null)
  const HerotextRef = useRef<HTMLParagraphElement>(null)
  const HerobuttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([HeroHeadingRef.current, HerotextRef.current, HerobuttonRef.current], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: HeroSectionRef.current,
          start: "top center"
        }
      })

      gsap.to(HeroSectionRef.current, {
        backgroundPositionY: "-20%",
        scrollTrigger: {
          scrub: 1
        }
      })
    }, HeroSectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={HeroSectionRef}
      className="relative max-h-fit pt-24 bg-cover bg-center"
      style={{backgroundImage:`url('/image/chooseSchool1.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center py-24">
        <div className="w-full md:w-1/2">
          <h1 
            ref={HeroHeadingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            专业选校规划<br />
            为你的留学梦保驾护航
          </h1>
          <p 
            ref={HerotextRef}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            基于15年留学咨询经验，智能数据分析
            <br className="hidden md:block" />
            量身定制最优选校方案
          </p>
          <button
            ref={HerobuttonRef}
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={()=>router.push('/contact')}
          >
            免费咨询规划方案
          </button>
        </div>
      </div>
    </section>
  )
}
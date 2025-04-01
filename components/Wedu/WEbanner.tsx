// src/components/IBSection.tsx
'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function IBanner() {
  const IBSectionRef = useRef<HTMLDivElement>(null)
  const IBHeadingRef = useRef<HTMLHeadingElement>(null)
  const IBtextRef = useRef<HTMLParagraphElement>(null)
  const IBbuttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([IBHeadingRef.current, IBtextRef.current, IBbuttonRef.current], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: IBSectionRef.current,
          start: "top center"
        }
      })

      gsap.to(IBSectionRef.current, {
        backgroundPositionY: "-20%",
        scrollTrigger: {
          scrub: 1
        }
      })
    }, IBSectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={IBSectionRef}
      className="relative max-h-fit pt-24 bg-cover bg-center"
      style={{backgroundImage:`url('/image/wasda/5.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-white/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center py-24">
        <div className="w-full md:w-1/2">
          <h1 
            ref={IBHeadingRef}
            className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
          >
            早稻田大学私塾课程
          </h1>
          <p 
            ref={IBtextRef}
            className="text-lg md:text-xl text-black/90 mb-8"
          >
           专业的留学规划，一流的师资团队，
            <br className="hidden md:block" />
            定制化的课程体系，助你圆梦早稻田大学
          </p>
          <button
            ref={IBbuttonRef}
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
// src/components/IBSection.tsx
'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { url } from 'inspector'

gsap.registerPlugin(ScrollTrigger)

export default function LSBanner() {
  const LSBRef = useRef<HTMLDivElement>(null)
  const LSBHeadingRef = useRef<HTMLHeadingElement>(null)
  const LSBtextRef = useRef<HTMLParagraphElement>(null)
  const LSBbuttonRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([LSBHeadingRef.current, LSBtextRef.current, LSBbuttonRef.current], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: LSBRef.current,
          start: "top center"
        }
      })

      gsap.to(LSBRef.current, {
        backgroundPositionY: "-20%",
        scrollTrigger: {
          scrub: 1
        }
      })
    }, LSBRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={LSBRef}
      className="relative max-h-fit pt-24 bg-cover bg-center"
      style={{backgroundImage:`url('/image/list/service-banner.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-white/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center py-24">
        <div className="w-full md:w-1/2">
          <h1 
            ref={LSBHeadingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            专业的日本留学服务
          </h1>
          <p 
            ref={LSBtextRef}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
           我们提供全方位的日本留学解决方案，从选校规划到海外生活，助您圆梦日本名校。专业顾问团队，一对一定制服务，让您的留学之路更加顺畅。
          </p>
        </div>
      </div>
    </section>
  )
}
// src/components/IBSection.tsx
'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { url } from 'inspector'

gsap.registerPlugin(ScrollTrigger)

export default function UBanner({uid}:{uid:string | number}) {
  const IBSectionRef = useRef<HTMLDivElement>(null)
  const IBHeadingRef = useRef<HTMLHeadingElement>(null)
  const IBtextRef = useRef<HTMLParagraphElement>(null)
  const IBbuttonRef = useRef<HTMLButtonElement>(null)

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
      style={{backgroundImage:`url('/image/universities/${uid}.jpg')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-white/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center py-24">
        <div className="w-full md:w-1/2">
          <h1 
            ref={IBHeadingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            早稻田大学
          </h1>
          <p 
            ref={IBtextRef}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
           Waseda University
          </p>
          <button
            ref={IBbuttonRef}
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
          >
            免费咨询
          </button>
        </div>
      </div>
    </section>
  )
}
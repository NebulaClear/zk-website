'use client'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function CourseSection() {
  useGSAP(() => {
    gsap.fromTo(".content-animate",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    
    gsap.fromTo(".image-animate",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "expo.out", delay: 0.2 }
    )

    gsap.fromTo(".button-animate",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.5 }
    )
  })

  return (
    <section className="min-h-screen md:h-[600px] bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        {/* 文字内容区域 */}
        <div className="content-animate md:w-1/2 mb-12 md:mb-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            专业日本留学课程体系
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-12">
            全方位打造您的日本留学之路，从语言到考试，为您的留学梦想保驾护航
          </p>
          <button className="button-animate bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            了解详细课程
          </button>
        </div>

        {/* 图片区域 */}
        <div className="image-animate md:w-1/2 relative h-64 md:h-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-transparent w-1/2" />
          <Image
            src="/image/schools/jdu.jpg" // 替换为实际图片路径
            alt="Japanese School Building"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-lg shadow-xl"
            priority
          />
          
          {/* 樱花装饰效果 */}
          <div className="absolute top-0 left-0 w-24 h-24 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" className="text-pink-200">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
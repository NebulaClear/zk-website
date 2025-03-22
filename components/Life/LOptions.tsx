'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function LifeGuide() {
  useGSAP(() => {
    // 卡片入场动画
    gsap.utils.toArray('.guide-card').forEach((card: any, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // 标题文字动画
    gsap.fromTo('.section-title', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.life-guide-section',
          start: 'top 80%'
        }
      }
    )
  })

  return (
    <section className="life-guide-section bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          核心生活指南
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* 住宿指南 */}
          <div className="guide-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="icon-container bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">住宿指南</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              详细介绍校内宿舍、校外公寓等住宿选择，帮助您找到最适合的居住环境
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              了解更多
              <span className="ml-2 text-xl">→</span>
            </a>
          </div>

          {/* 交通出行 */}
          <div className="guide-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="icon-container bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚗</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">交通出行</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              公共交通、自行车共享、网约车等多种出行方式的使用攻略
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              了解更多
              <span className="ml-2 text-xl">→</span>
            </a>
          </div>

          {/* 饮食文化 */}
          <div className="guide-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="icon-container bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🍜</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">饮食文化</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              校园餐厅、周边美食、超市购物及烹饪技巧分享
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              了解更多
              <span className="ml-2 text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
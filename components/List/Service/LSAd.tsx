// components/Advantages.tsx
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Advantages() {
  const advantages = [
    {
      icon: '',
      title: "专业顾问团队",
      desc: "经验丰富的留学顾问，均有海外留学背景"
    },
    {
      icon: '',
      title: "高录取率",
      desc: "90%以上的录取成功率，助您圆梦名校"
    },
    {
      icon: '',
      title: "一对一服务",
      desc: "专属顾问全程跟进，随时解答疑问"
    },
    {
      icon: '',
      title: "安全保障",
      desc: "规范的服务流程，保障您的权益"
    }
  ]

  useGSAP(() => {
    gsap.from(".advantage-item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".advantages-section",
        start: "top 70%"
      }
    })
  })

  return (
    <section className="advantages-section bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的服务优势</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            十年留学服务经验，专业顾问团队一对一指导，确保您的留学申请万无一失
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="advantage-item group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
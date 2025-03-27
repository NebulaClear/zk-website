'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AdvantagesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const advantages = [
    {
      icon: '',
      title: "专业师资团队",
      desc: "拥有丰富的日本留学考试辅导经验，多数老师毕业于日本知名院校",
      features: [
        "平均教龄5年以上",
        "定期教学研讨会",
        "国际教学资格认证"
      ]
    },
    {
      icon: '',
      title: "定制化课程",
      desc: "根据学生个人情况量身定制学习计划，确保学习效果最大化",
      features: [
        "入学水平测试评估",
        "个性化课表制定",
        "动态调整学习方案"
      ]
    },
    {
      icon: '',
      title: "模拟考试体系",
      desc: "定期组织模拟考试，帮助学生熟悉考试流程和题型",
      features: [
        "全真模拟考试环境",
        "历年真题题库",
        "实时成绩追踪"
      ]
    },
    {
      icon: '',
      title: "留学申请指导",
      desc: "提供全程留学申请服务，包括材料准备、面试辅导等",
      features: [
        "院校专业匹配分析",
        "文书润色服务",
        "签证办理指导"
      ]
    }
  ]

  useGSAP(() => {
    gsap.from(".advantage-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "play none none none"
      }
    })

    gsap.from(".feature-item", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".advantage-card",
        start: "top 80%"
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          私塾优势
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="advantage-card bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {/* <item.icon className="w-8 h-8 text-blue-600" /> */}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                  
                  <div className="space-y-3">
                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="feature-item flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvantagesSection
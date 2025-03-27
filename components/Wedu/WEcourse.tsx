'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CoreCourses = () => {
  const WEcontainerRef = useRef<HTMLDivElement>(null)

  const courses = [
    {
      title: "EJU备考课程",
      tags: ["CCSC模拟", "ECT.CHINA"],
      desc: "针对性强化训练，覆盖日本留学考试（EJU）全部科目，包括日语、理科（物理、化学、生物）、文科综合等",
      features: ["考试技巧", "真题解析", "模拟训练", "科目专攻"],
      icon: "📘"
    },
    {
      title: "雅思考试培训",
      tags: ["FDG23:/7/2K"],
      desc: "专业雅思培训课程，全面提升听说读写四项能力，助你达到早稻田大学要求的雅思分数",
      features: ["口语训练", "写作指导", "听力提升", "阅读策略"],
      icon: "🎓"
    },
    {
      title: "日语能力提升",
      tags: ["CM", "DTGMS丛书"],
      desc: "从零基础到N1水平的完整课程体系，帮助学生掌握扎实的日语交际能力",
      features: ["语法强化", "会话练习", "应用实践", "JLPT专攻"],
      icon: "🗾"
    }
  ]

  useGSAP(() => {
    // 修复动画初始化问题
    gsap.set(".course-card", { opacity: 1 }) // 强制显示卡片
    
    const cards = gsap.utils.toArray(".course-card")
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    })

    // 图标动画保持原有逻辑
    gsap.from(".course-icon", {
      scale: 0,
      duration: 0.6,
      ease: "back.out(2)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: WEcontainerRef.current,
        start: "top 80%"
      }
    })
  }, { scope: WEcontainerRef })

  return (
    <div ref={WEcontainerRef} className="bg-white py-12 md:py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        核心课程体系
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {courses.map((course, index) => (
          <div 
            key={index}
            className="course-card opacity-0 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-6 md:p-8 border border-gray-100"
          >
            {/* 图标容器 */}
            <div className="mb-6 flex items-center justify-between">
              <div className="course-icon w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                {course.icon}
              </div>
              <div className="flex space-x-2">
                {course.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {course.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {course.desc}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {course.features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center px-4 py-2 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"/>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoreCourses
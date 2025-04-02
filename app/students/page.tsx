'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function StarStudents() {
  const studentContainerRef = useRef<HTMLDivElement>(null)
  const studentCardsRef = useRef<HTMLElement[]>([])
  const students =[
    {
      name:'周同学',
      school:'早稻田大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student1.png'
    },
    {
      name:'周同学',
      school:'东京大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student2.png'
    },
    {
      name:'周同学',
      school:'京都大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student3.png'
    },
    {
      name:'周同学',
      school:'东京大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student4.png'
    },
    {
      name:'周同学',
      school:'早稻田大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student5.png'
    },
    {
      name:'周同学',
      school:'早稻田大学',
      eju:'720',
      n1:'170',
      des:'通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...',
      image:'/image/students/student6.png'
    },
  ]
  return (
    <section 
      ref={studentContainerRef}
      className="min-h-[100dvh] w-full bg-gradient-to-br from-gray-900 to-blue-900 py-20 px-4 md:px-8"
    >
      {/* 标题模块 */}
      <h2 className="section-title text-center mb-16">
        <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          优秀毕业学员
        </span>
        <p className="mt-4 text-gray-300 text-lg md:text-xl">他们从这里走向世界名校</p>
      </h2>

      {/* 学员卡片网格 */}
      <div className="student-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {students.map((_, i) => (
          <article
            key={i}
            ref={(el: HTMLDivElement | null) => {
                if (el) {
                    studentCardsRef.current[i] = el;
                }
              }}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:bg-white/20"
          >
            {/* 头像区块 */}
            <div className="relative h-48 overflow-hidden rounded-xl">
              <img
                src={_.image}
                alt="学员"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 right-2 px-3 py-1 bg-blue-500/80 text-sm rounded-full text-white">
                {_.school}
              </span>
            </div>

            {/* 学员信息 */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-white">{_.name}</h3>
              <div className="flex gap-2 mt-2">
                <span className="text-blue-300">EJU：{_.eju}</span>
                <span className="text-emerald-300">N1：{_.n1}</span>
              </div>
              <p className="mt-4 text-gray-300 line-clamp-3">通过系统化的课程学习和针对性训练，成功获得东京大学工学系offer...</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
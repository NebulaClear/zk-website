// src/components/ProcessFlow.tsx
'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const steps = [
  {
    icon: 'fas fa-clipboard-list',
    title: '学生情况评估',
    description: '全面评估学术背景、语言成绩、科研经历'
  },
  {
    icon: 'fas fa-university',
    title: '目标院校筛选',
    description: '基于大数据分析，匹配最适合的院校选择'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: '专业方向规划',
    description: '结合职业发展规划，选择最优专业方向'
  },
  {
    icon: 'fas fa-tasks',
    title: '申请策略制定',
    description: '制定详细的申请时间表和材料准备计划'
  }
]

export default function ProcessFlow() {
  const PpContainerRef = useRef<HTMLDivElement>(null)
  const PpCardRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.from(PpCardRefs.current, {
      opacity: 0,
      y: 50, // 仅保留 y 轴位移动画
      duration: 0.6, // 缩短动画时长
      stagger: {
        each: 0.1, // 减少阶梯延迟
        from: "start" // 从第一个元素开始触发
      },
      ease: "power1.out", // 使用更轻量的缓动函数
      scrollTrigger: {
        trigger: PpContainerRef.current,
        start: "top bottom", // 提前触发动画
        end: "center center",
        toggleActions: "play none none none",
        invalidateOnRefresh: true
      }
    })
  }, { scope: PpContainerRef })

  return (
    <section className="py-16 bg-white md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={PpContainerRef}>
        <h2 className="text-3xl font-bold text-center mb-12 md:mb-16">
          专业选校规划流程
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={(el) => {
                if (el) {
                  PpCardRefs.current[index] = el
                }
              }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all will-change-transform"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${step.icon} text-primary text-3xl`} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
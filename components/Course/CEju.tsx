'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EJUPage() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
    
        // 卡片动画配置
        gsap.utils.toArray('.card-container').forEach((card: any, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 50,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100", // 当卡片顶部进入视口底部100px时触发
                end: "top center",         // 当卡片顶部到达视口中部时结束
                toggleActions: "play none none reverse", // 滚动回退时反向播放
                markers: false             // 调试时可设为true显示触发点
              },
              delay: index * 0.1          // 交错延迟效果
            }
          )
        })
    
        // 主标题动画
        gsap.fromTo('.main-title',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.main-title',
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      })

  return (
    <main className="min-h-fit bg-blue-50 p-6 max-w-6xl mx-auto">
      {/* 主标题 */}
      <h1 className="text-2xl font-bold text-blue-900 mb-8">EJU 考试备考指导</h1>

      {/* 卡片容器 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 考试科目卡片 */}
        <div className="card-container bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-blue-900 mb-4 border-b-2 border-blue-100 pb-3">考试科目介绍</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">日语科目</h3>
              <p className="text-blue-600 text-sm leading-6">听力理解、读解、记述表现</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">理科</h3>
              <p className="text-blue-600 text-sm leading-6">物理、化学、生物（选考）</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">综合科目</h3>
              <p className="text-blue-600 text-sm leading-6">地理、历史、政经、数学</p>
            </div>
          </div>
        </div>

        {/* 备考重点卡片 */}
        <div className="card-container bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-blue-900 mb-4 border-b-2 border-blue-100 pb-3">备考重点</h2>
          <div className="space-y-4">
            <p className="text-blue-800 pl-3 border-l-4 border-blue-200">科目知识系统梳理</p>
            <p className="text-blue-800 pl-3 border-l-4 border-blue-200">考试技巧专项训练</p>
            <p className="text-blue-800 pl-3 border-l-4 border-blue-200">真题解析与模拟训练</p>
            <p className="text-blue-800 pl-3 border-l-4 border-blue-200">答题时间把控训练</p>
          </div>
        </div>

        {/* 考试时间卡片 */}
        <div className="card-container bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-blue-900 mb-4 border-b-2 border-blue-100 pb-3">考试时间安排</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center pb-2 border-b border-blue-50">
              <span className="text-blue-800 font-medium">第一次考试</span>
              <span className="text-blue-600 text-sm">6月第二个星期日</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-blue-50">
              <span className="text-blue-800 font-medium">第二次考试</span>
              <span className="text-blue-600 text-sm">11月第二个星期日</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-800 font-medium">成绩公布</span>
              <span className="text-blue-600 text-sm">考试后约3周</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const InfoCard = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const cardData = [
    { label: '办学性质', value: '私立研究型大学' },
    { label: '创校时间', value: '1882年' },
    { label: '所在地', value: '关东 , 东京' },
    { label: '邮政编码', value: '169-8050' },
    { 
      label: '官方网站', 
      value: 'www.harvard.edu',
      link: 'http://www.waseda.jp/top/index-j.html',
      icon: ''
    },
    { 
      label: '联系电话',
      value: '+81 3-3203-4141',
      link: 'tel:+16174951000',
      icon: ''
    }
  ]

  useGSAP(() => {
    gsap.from(".info-row", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-8 sm:p-6 mt-10">
      {/* 卡片容器 */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* 标题部分 */}
        <div className="px-4 sm:px-6 py-4 ">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">基本信息</h2>
        </div>

        {/* 内容区域 */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {cardData.map((item, index) => (
              <div 
                key={index}
                className="info-row flex flex-col sm:flex-row items-start justify-between"
              >
                {/* 左侧标签 */}
                <dt className="text-sm sm:text-base font-medium text-gray-700/80 w-full sm:w-1/3 mb-1 sm:mb-0">
                  {item.label}
                </dt>
                
                {/* 右侧内容 */}
                <dd className="text-sm sm:text-base text-gray-900 w-full sm:w-2/3">
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center hover:text-blue-700 transition-colors"
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      <span>{item.value}</span>
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
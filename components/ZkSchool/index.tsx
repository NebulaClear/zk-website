
'use client'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

// ...类型定义和学校数据保持不变...
type School = {
    id: number
    name: string
    country: string
    ranking: string
    image: string
  }
  
  const schools: School[] = [
    {
      id: 1,
      name: '哈佛大学',
      country: '美国',
      ranking: 'QS#1',
      image: '/image/hafo.jpg'
    },
    {
      id: 2,
      name: '牛津大学',
      country: '英国',
      ranking: 'QS#2',
      image: '/image/niujin.jpg'
    },
    {
      id: 3,
      name: '多伦多大学',
      country: '加拿大',
      ranking: 'QS#25',
      image: '/image/duolun.jpg'
    }
  ]
  
  const countries = ['全部', '美国', '英国','加拿大']
export default function SchoolListing() {
  const [selectedCountry, setSelectedCountry] = useState('全部')
  const containerRef = useRef<HTMLDivElement>(null)
  const filteredSchools = schools.filter(school => 
    selectedCountry === '全部' || school.country === selectedCountry
  )
  // 注册插件
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
  }, [])

  useGSAP(() => {
    // 初始化选项卡动画
    gsap.from('.country-tab', {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    })

    // 初始化卡片动画
    gsap.utils.toArray<HTMLElement>(".school-card").forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: containerRef })

  // 优化后的过滤处理
  const handleFilter = async (country: string) => {
    // 步骤1：强制布局同步保证动画连贯性
    document.body.classList.add('animate-in-progress')
  
    const currentCards = gsap.utils.toArray<HTMLElement>('.school-card')
    
    // 步骤2：优化退出动画参数
    await gsap.to(currentCards, {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.35,
      ease: 'power2.in',
      immediateRender: false // 防止初始状态冲突
    })
    
    // 步骤3：批量更新避免中间状态
    requestAnimationFrame(() => {
      setSelectedCountry(country)
    })
    
    // 步骤4：等待两帧确保DOM更新完成
    await new Promise(resolve => requestAnimationFrame(resolve))
    await new Promise(resolve => requestAnimationFrame(resolve))
    
    // 步骤5：执行入场动画前准备
    const newCards = gsap.utils.toArray<HTMLElement>('.school-card')
    gsap.set(newCards, { opacity: 0, y: 30 }) // 强制初始状态
    
    // 步骤6：使用交叉淡入动画
    gsap.fromTo(newCards, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: true, // 防止动画叠加
        onStart: () => {
          ScrollTrigger.refresh()
          document.body.classList.remove('animate-in-progress')
        }
      }
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12" ref={containerRef}>
      {/* 国家选项卡 */}
      <div className="flex flex-wrap gap-4 mb-12 px-4">
        {countries.map(country => (
          <button
            key={country}
            onClick={() => handleFilter(country)}
            className={`country-tab px-6 py-3 rounded-full transition-colors duration-300 text-sm md:text-base ${
              selectedCountry === country 
                ? 'bg-primary text-white shadow-lg hover:bg-primary/90'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* 学校列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredSchools.map(school => (
          <div 
            key={school.id} 
            className="school-card group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                src={school.image}
                alt={school.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{school.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">{school.country}</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {school.ranking}
                </span>
              </div>
              <button className="w-full py-2 px-4 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 rounded-md transition-colors">
                了解详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
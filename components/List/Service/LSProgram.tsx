// components/Services.tsx
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

const services = [
  {
    image: "bg-[url('/image/list/service1.jpg')]", // 选校规划图片
    title: "选校规划",
    desc: "基于学生个人情况，为其量身定制最优选校方案",
    router:"/service/planning"
  },
  {
    image: "bg-[url('/image/list/service2.jpg')]", // 签证办理图片
    title: "签证办理",
    desc: "一站式签证服务，确保顺利获得学生签证",
    router:"/service/visa"
  },
  {
    image: "bg-[url('/image/list/service3.jpg')]", // 日本留学课程图片
    title: "日本留学课程",
    desc: "日语+EJU日本留学考试+雅思",
    router:"/service/course"
  },
  {
    image: "bg-[url('/image/list/service4.jpg')]",
    title: "语言培训",
    desc: "日语+英语",
    router:"/service/course"
  },
  {
    image: "bg-[url('/image/list/service5.jpg')]",
    title: "面试辅导",
    desc: "模拟面试训练，提升面试成功率",
    router:"/service/interview"
  },
  {
    image: "bg-[url('/image/list/service6.jpg')]",
    title: "海外生活指导",
    desc: "全方位生活指导，助你适应海外生活",
    router:"/service/life"
  },
//   {
//     image: "bg-[url('/services/family.jpg')]",
//     title: "家长支持",
//     desc: "定期进度汇报、家长专属沟通渠道等家庭支持服务"
//   }
]

export default function Services() {
  useGSAP(() => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 85%"
      }
    })

    gsap.from(".service-image", {
      scale: 0.95,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    })
  })

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-900 mb-4">我们的服务项目</h2>
          <p className="text-lg text-sky-600 max-w-2xl mx-auto">
            为您提供从留学规划到海外生活的一站式服务，专业团队全程护航，确保您的留学之路顺利无忧
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* 图片区域 */}
              <div className={`service-image ${service.image} h-48 bg-cover bg-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-sky-600/20 transition-all duration-300 hover:opacity-0" />
              </div>
              
              {/* 文字区域 */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-sky-900">{service.title}</h3>
                <p className="text-sky-600 leading-relaxed min-h-10">{service.desc}</p>
                <Link href={service.router}>
                <button className="text-sky-600 hover:text-white font-medium px-6 py-2 rounded-full 
                  hover:bg-sky-600 transition-colors duration-300 border-2 border-sky-600">
                  了解更多
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
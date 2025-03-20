'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JapaneseCourseDetails = () => {
  // 课程等级数据
  const levels = [
    {
      title: "N1高级班",
      classInfo: "6-12人小班授课",
      description: "掌握高级日语，能够理解各类话题的日语表达，达到接近母语者水平",
      features: ["高级语法解析", "商务日语应用", "文化深度解读"]
    },
    {
      title: "N2中高级班",
      classInfo: "日常交流强化训练",
      description: "能够理解和使用较为复杂的日语，具备在日常生活中自如交流的能力",
      features: ["场景对话模拟", "新闻听力训练", "中高级语法"]
    },
    {
      title: "N3中级班",
      classInfo: "系统化基础构建",
      description: "掌握中等难度的日语，能够理解日常生活中的大部分日语表达",
      features: ["基础语法强化", "实用会话训练", "短文阅读理解"]
    }
  ];

  // 课程特色数据
  const features = [
    {
      title: "小班教学",
      description: "6-12人小班授课，确保每位学员得到充分的关注与指导",
      icon: "👨🏫"
    },
    {
      title: "资深教师",
      description: "由具有丰富教学经验的日籍教师和中国教师共同授课",
      icon: "🎓"
    },
    {
      title: "个性化辅导",
      description: "定期进行学习评估，为每位学员制定个性化的学习计划",
      icon: "📝"
    }
  ];

  // GSAP动画配置
  useGSAP(() => {
    gsap.utils.toArray('.course-section').forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => animateSection(section)
      });
    });

    function animateSection(section: HTMLElement) {
      gsap.from(section.querySelectorAll('.animate-item'), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 课程等级区块 */}
      <section className="course-section mb-20">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 border-l-4 border-blue-500 pl-4 animate-item">
          JLPT 等级课程设置
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow animate-item"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                  N{index+1}
                </div>
                <h3 className="text-xl font-bold ml-4">{level.title}</h3>
              </div>
              <p className="text-blue-500 text-sm mb-2">{level.classInfo}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{level.description}</p>
              <ul className="space-y-2">
                {level.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 课程特色区块 */}
      <section className="course-section">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 border-l-4 border-blue-500 pl-4 animate-item">
          课程特色
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-item"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JapaneseCourseDetails;
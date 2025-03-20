'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CourseSection = () => {
  const courses = [
    {
      title: '日语课程',
      icon: '日本語',
      desc: '从零基础到高级日语，针对性强化训练，确保快速掌握日',
      features: [
        'JLPT N5-N1分级教学',
        '原版教材+在线资源',
        '日籍教师授课',
        '语听说读写能力'
      ],
      bg: 'bg-blue-50'
    },
    {
      title: 'EJU日本留学考试',
      icon: 'EJU',
      desc: '系统化备考策略，针对性强化训练，确保考试高分通过',
      features: [
        '理科综合辅导',
        '综合科目强化',
        '考试技巧指导',
        '日语科目专项训练'
      ],
      bg: 'bg-blue-50'
    },
    {
      title: '雅思课程',
      icon: 'IELTS',
      desc: '全面提升英语能力，助力获得理想雅思成绩',
      features: [
        '听说读写全面培训',
        '模拟考试训练',
        '考试技巧指导',
        '原版教材+在线资源'
      ],
      bg: 'bg-blue-50'
    }
  ];

  useGSAP(() => {
    gsap.from('.course-card', {
      scrollTrigger: {
        trigger: '.course-section',
        start: 'top center'
      },
      immediateRender: false, // 添加此配置
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.course-icon', {
      scrollTrigger: {
        trigger: '.course-card',
        start: 'top center'
      },
      rotation: -90,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6
    });
  });

  return (
    <section className="course-section py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        三大核心课程模块
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div 
            key={index}
            className={`course-card ${course.bg} rounded-2xl p-6 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl`}
          >
            <div className="course-icon absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center  font-bold text-blue-600 shadow-sm">
              {course.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-4">{course.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{course.desc}</p>
            
            <ul className="space-y-3">
              {course.features.map((feature, i) => (
                <li 
                  key={i}
                  className="flex items-center text-gray-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
// components/CourseSystem.tsx
'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CourseSystem() {
  useGSAP(() => {
    gsap.utils.toArray('.course-section').forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
        雅思课程体系
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* 四项技能培训 */}
        <div className="course-section p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">四项技能培训</h3>
          <div className="grid grid-cols-2 gap-4">
            {['听力', '口语', '阅读', '写作'].map((skill) => (
              <div 
                key={skill}
                className="p-4 bg-blue-50 rounded-lg flex items-center"
              >
                <span className="text-blue-600 mr-2">✦</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* 课程特色 */}
        <div className="course-section p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">课程特色</h3>
          <div className="space-y-4">
            <FeatureItem 
              title="专业师资"
              content="雅思考官授课，深入了解考试评分标准"
              color="purple"
            />
            <FeatureItem
              title="原版教材"
              content="剑桥雅思真题解析，配套练习资料"
              color="purple"
            />
          </div>
        </div>

        {/* 听力训练 */}
        <TrainingSection
          title="听力训练"
          items={[
            '各类场景听力理解',
            '答题技巧指导',
            '真题模拟训练'
          ]}
          color="blue"
        />

        {/* 口语训练 */}
        <TrainingSection
          title="口语训练"
          items={[
            '话题讨论练习',
            '发音纠正指导',
            '考官模拟面试'
          ]}
          color="green"
        />
      </div>
    </section>
  );
}

const FeatureItem = ({ title, content, color }: any) => (
  <div className={`p-4 bg-${color}-50 rounded-lg border-l-4 border-${color}-500`}>
    <h4 className={`font-semibold text-${color}-700 mb-2`}>{title}</h4>
    <p className="text-gray-600">{content}</p>
  </div>
);

const TrainingSection = ({ title, items, color }: any) => (
  <div className={`course-section p-6 bg-white rounded-xl shadow-lg border-t-4 border-${color}-500`}>
    <h3 className="text-2xl font-semibold mb-4 text-${color}-700">{title}</h3>
    <ul className="space-y-3">
      {items.map((item: string, index: number) => (
        <li 
          key={index}
          className="flex items-center text-gray-700"
        >
          <span className={`w-2 h-2 bg-${color}-500 rounded-full mr-3`}></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
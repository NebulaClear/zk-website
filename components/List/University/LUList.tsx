// components/UniversityCards.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const universities = [
  {
    chName: "东京大学",
    enName: "The University of Tokyo",
    logo: "/image/logo.png",
    worldRank: 23,
    japanRank: 1,
    description:
      "日本最顶尖的综合性研究型大学，成立于1877年，以培养社会精英和学术研究为主要目标，在科学研究、人文社科等领域都有极高的学术声誉。",
    schools: ["工学", "理学", "法学", "医学"],
  },
  {
    chName: "京都大学",
    enName: "Kyoto University",
    logo: "/image/logo.png",
    worldRank: 36,
    japanRank: 2,
    description:
      "培养了众多诺贝尔奖获得者，在基础研究和应用学科领域都有杰出成就，以自由学术风气著称。",
    schools: ["理学", "工学", "生命科学", "药学"],
  },
  {
    chName: "大阪大学",
    enName: "Osaka University",
    logo: "/image/logo.png",
    worldRank: 52,
    japanRank: 3,
    description:
      "关西地区最具影响力的综合性大学，在医学、生命科学和工程技术领域享有盛誉，注重产学研结合。",
    schools: ["医学", "工学", "生物技术", "信息科学"],
  },
  {
    chName: "东北大学",
    enName: "Tohoku University",
    logo: "/image/logo.png",
    worldRank: 82,
    japanRank: 4,
    description:
      "日本首个接收女性学生的大学，在材料科学、物理学和工程技术领域拥有顶尖研究实力。",
    schools: ["材料学", "物理", "化学", "环境科学"],
  },
];

export default function UniversityCards() {
  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: {
        each: 0.15,
        from: "center",
      },
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",
      },
    });
  });

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="card relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 pt-10 pl-6 pr-6 pb-6"
            >
              <div className="flex pb-10">
                {/* 校徽logo */}
                <div className="w-20 h-20 mr-10">
                  <img
                    src={uni.logo}
                    alt={uni.chName}
                    className="w-full h-full object-contain rounded-lg border-2 border-gray-200 p-1" // 增加内边距
                  />
                </div>

                {/* 标题区块 */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {uni.chName}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{uni.enName}</p>
                </div>
              </div>
              {/* 排名信息 */}
              <div className="flex gap-3 mb-6">
                <div className="bg-blue-100 px-3 py-1 rounded-md text-sm text-white font-medium">
                  世界排名：#{uni.worldRank}
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700 font-medium">
                  日本排名：#{uni.japanRank}
                </div>
              </div>

              {/* 学校描述 */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-10">
                {uni.description}
              </p>

              {/* 学院标签 */}
              <div className="flex flex-wrap gap-2 mb-8 m-h-10">
                {uni.schools.map((school, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                  >
                    {school}
                  </span>
                ))}
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-4">
                <button
                  className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors text-sm bg-primary hover:bg-primary/80`}
                >
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

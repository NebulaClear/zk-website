"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ResearchProjects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 严格按图片文字配置数据
  const tabs = [
    { id: 0, title: "理工科研项目", type: "sc" },
    { id: 1, title: "人文社科项目", type: "nf" },
    { id: 2, title: "医疗生命科学", type: "ml" },
    { id: 3, title: "国际合作项目", type: "ic" },
  ];

  const projects = [
    {
      tab: 0,
      title: "智能机器人与自动化系统研究",
      fields: ["人工智能驱动的机器人系统", "工业自动化", "人机交互"],
      director: "铃木直子教授",
      department: "工学院机械工程系",
      period: "2-3年",
      type: "sc",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(26, 119, 232, 0.7)",
    },
    {
      tab: 0,
      title: "新型纳米材料开发与应用",
      fields: ["纳米材料合成", "能源存储", "环境治理"],
      director: "山由健一教授",
      department: "理工学院材料科学系",
      period: "3年以上",
      type: "sc",
      bgImage: "/image/wasda/2.jpg",
      overlay: "rgba(15, 87, 176, 0.75)",
    },
    {
      tab: 1,
      title: "日本近代文学研究",
      fields: ["明治文学", "大正文学", "战后文学研究"],
      director: "村上和子 教授",
      department: "文学院日本文学系",
      period: "2-3年",
      type: "nf",
      bgImage: "/image/wasda/3.jpg",
      overlay: "rgba(178, 34, 34, 0.6)",
    },
    {
      tab: 1,
      title: "现代社会学研究",
      fields: ["社会变迁", "城市化研究", "家庭社会学"],
      director: "高橋 美咲 教授",
      department: "社会科学院社会学系",
      period: "3年以上",
      type: "nf",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(178, 34, 34, 0.7)",
    },
    {
      tab: 2,
      title: "再生医学研究",
      fields: ["干细胞治疗", "组织工程", "器官再生"],
      director: "山本 信二 教授",
      department: "医学院再生医学研究所",
      period: "2-3年",
      type: "ml",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(255, 127, 80, 0.6)",
    },
    {
      tab: 2,
      title: "神经科学前沿研究",
      fields: ["脑科学", "神经退行性疾病", "认知功能"],
      director: "佐藤 直人 教授",
      department: "医学院神经科学研究中心",
      period: "3年以上",
      type: "ml",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(255, 127, 80, 0.7)",
    },
    {
      tab: 3,
      title: "中日联合创新研究计划",
      fields: ["清华大学", "北京大学", "上海交通大学"],
      director: "高桥 幸雄 教授",
      department: "国际合作创新研究院",
      period: "2-3年",
      type: "ml",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(128, 128, 0, 0.75)",
    },
    {
      tab: 3,
      title: "日美 AI 联合研究项目",
      fields: ["麻省理工学院", "斯坦福大学"],
      director: "铃木 一郎 教授",
      department: "人工智能研究中心",
      period: "3年以上",
      type: "ml",
      bgImage: "/image/wasda/1.jpg",
      overlay: "rgba(128, 128, 0, 0.75)",
    },
  ];

  useGSAP(() => {
    // 卡片入场动画增强（网页3动画实践）
    gsap.from(".project-card", {
      opacity: 0,
      y: 30,
      rotationX: -5,
      scale: 0.95,
      duration: 0.8,
      stagger: {
        each: 0.15,
        from: "center"
      },
      ease: "power4.out"
    });
  
    // 按钮悬停动画（箭头动态效果）
    gsap.utils.toArray(".learn-more").forEach((btn: any) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn.querySelector("svg"), {
          x: 8,
          duration: 0.3,
          ease: "back.out(2)"
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn.querySelector("svg"), {
          x: 0,
          duration: 0.2
        });
      });
    });
  
    // 卡片悬停交互（网页3动画应用）
    gsap.utils.toArray(".project-card").forEach((card: any) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out"
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3
        });
      });
    });
  }, { scope: containerRef, dependencies: [activeTab] });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 py-6">
      <div className="border-b border-gray-200 mb-8 overflow-x-auto">
        <div className="flex min-w-[600px]">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className="relative flex-1"
              style={{ width: `${100 / tabs.length}%` }}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-4 py-3 text-[15px] font-medium
                  ${
                    activeTab === tab.id
                      ? "text-black bg-[#FEF2F2]"
                      : "text-gray-600 hover:text-gray-800"
                  }
                  tracking-tight transition-colors`}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {projects
          .filter((p) => p.tab === activeTab)
          .map((project, index) => (
            <div
              key={index}
              className="project-card relative h-[500px] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            >
              {/* 背景图片层 */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="object-cover min-w-full"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  style={{ backgroundColor: project.overlay }}
                />
              </div>

              {/* 内容层 */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>

                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-2">所属机构</p>
                  <p className="text-white font-medium">{project.department}</p>
                </div>

                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-2">研究方向</p>
                  <div className="flex flex-wrap gap-2">
                    {project.fields.map((field, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-white/80 text-sm mb-2">项目负责人</p>
                  <p className="text-white font-medium">{project.director}</p>
                </div>

                {/* <button className="learn-more flex items-center gap-2 bg-white text-[#1a73e8] px-6 py-3 rounded-full w-fit hover:bg-opacity-90 transition-all">
                  <span className="font-medium">了解更多</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResearchProjects;

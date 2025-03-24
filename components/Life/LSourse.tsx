"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ZkIcon from "@/components/ZkComponents/ZkIcon";

export default function Resources() {
  const SContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // 卡片入场动画
      gsap.fromTo(
        ".resource-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      // 按钮悬停动画
      document.querySelectorAll(".action-btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn.querySelector(".arrow"), {
            x: 3,
            duration: 0.2,
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn.querySelector(".arrow"), {
            x: 0,
            duration: 0.2,
          });
        });
      });
    },
    { scope: SContainer }
  );

  const resources = [
    {
      title: "常见问题",
      desc: "解答留学生活中的各类疑问",
      action: "查看详情",
      iconColor: "bg-blue-600",
      icon:'zicon-changjianwenti'
    },
    {
      title: "生活手册",
      desc: "下载完整版留学生活指南",
      action: "立即下载",
      iconColor: "bg-blue-500",
      icon:'zicon-notebook'
    },
    {
      title: "在线咨询",
      desc: "专业顾问为您解答疑惑",
      action: "开始咨询",
      iconColor: "bg-blue-400",
      icon:'zicon-celve-zhongduancelve'
    },
    {
      title: "社区交流",
      desc: "加入留学生交流社区",
      action: "加入我们",
      iconColor: "bg-blue-300",
      icon:'zicon-weixin',
    },
  ];

  return (
    <div ref={SContainer} className="max-w-6xl mx-auto pb-8">
      <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        实用资源
      </h2>
      <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
        {resources.map((item, index) => (
          <div
            key={index}
            className="resource-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`${item.iconColor} w-12 h-12 rounded-lg mb-4 flex items-center justify-center`}>
              <ZkIcon type="zdticon" className={`${item.icon} text-white text-2xl `} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
            <button className="action-btn flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              {/* <span className="font-medium">{item.action}</span> */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

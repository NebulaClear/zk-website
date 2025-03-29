"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const InfoCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cardData = [
    { label: "办学性质", value: "私立研究型大学" },
    { label: "创校时间", value: "1636年" },
    { label: "所在地", value: "美国马萨诸塞州剑桥市" },
    { label: "邮政编码", value: "MA 02138" },
    {
      label: "官方网站",
      value: "www.harvard.edu",
      link: "https://www.harvard.edu",
      icon: "",
    },
    {
      label: "联系电话",
      value: "+1 (617) 495-1000",
      link: "tel:+16174951000",
      icon: "",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".info-row", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-8 sm:p-6">
      {/* 卡片容器 */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* 标题部分 */}
        <div className="px-4 sm:px-6 py-4 ">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            地理位置
          </h2>
        </div>

        {/* 内容区域 */}
        <div className="p-4 sm:p-6">
          <div className="rounded-xl overflow-hidden">
            <img src="/image/universities/map.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

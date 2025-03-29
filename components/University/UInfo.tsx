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
            学校简介
          </h2>
        </div>

        {/* 内容区域 */}
        <div className="p-4 sm:p-6">
          早稻田大学 （日文：早稲田大学， 平假名：わせだだいがく，英文：WasedaUniversity），简称早大，是本部设在日本东京都新宿区的私立大学。与庆应大学并称“日本私立双雄”。其前身是1882年大隈重信设立的东京专门学校。1901年改称早稻田大学，当时同时设置了专科部和大学部。1949年的学制改革，该校随之成为新制大学。2004年新设国际教养院。
          该校创始人大隈重信以“学问的独立”、“知识的实际应用”以及“造就模范国民”为办校方针，主张自由探讨学术，提倡独创的钻研精神，培养具有实际应用知识并在国际事务中具有广泛活动能力的人才。
          大隈重信办学的终极目标是“世界的道路通向早稻田”，早稻田大学最早吸收欧美学术文化，向亚洲各国开放门户，吸收各国留学生在日本众大学中始终走在前列。
          尊重传统、激发自豪感，早稻田大学灵活先进的思路孕育出引领日本教育界的教育方法和精神，培养了许多活跃在世界舞台的人才，包括前任日本首相野田佳彦在内，有7位日本首相是早稻田大学的毕业生。除了政界之外，早稻田大学毕业生在财界、商界、文艺界也人才辈出。
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

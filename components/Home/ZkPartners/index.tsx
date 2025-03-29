// components/PartnerUniversities.tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function PartnerUniversities({}) {
  const schools = [
    {
      uid: 1,
      name: " 早稻田大学 (Waseda University)",
      location: "关东，东京",
      description:
        "简称早大，是本部设在日本东京都新宿区的私立大学。与庆应大学并称“日本私立双雄”。其前身是1882年大隈重信设立的东京专门学校。",
      logo: "/image/schools/waseda.jpg",
      qs: "181",
    },
    {
      uid: 2,
      name: "东京大学 (The University of Tokyo)",
      location: "关东 , 东京",
      description:
        "东京大学是日本的最高学术殿堂，毕业生中包括很多在政治经济商业学术界具有举足轻重地位的人物，其中包括8位诺贝尔奖获得者和16位首相。",
      logo: "/image/schools/tku.jpg",
      qs: "32",
    },
    {
      uid: 3,
      name: "京都大学 (Kyoto University)",
      location: "近畿 , 京都",
      description:
        "京都大学与东京大学虽为日本东西两方齐名的国立大学，但它们的传统与办学目标迥然不同。东京大学以培养治国人才为主；京都大学则以培养科学家见长。",
      logo: "/image/schools/jdu.jpg",
      qs: "50",
    },
    {
      uid: 4,
      name: "大阪大学 (Osaka University)",
      location: "近畿 , 大阪",
      description:
        "G是一所位于日本大阪府的国立研究型综合大学，日本七大旧制帝国大学之一，直属文部省领导，日本国内大学综合排名第三，世界排名前五十。",
      logo: "/image/schools/osu.jpg",
      qs: "86",
    },
    {
      uid: 5,
      name: " 早稻田大学 (Waseda University)",
      location: "关东，东京",
      description:
        "简称早大，是本部设在日本东京都新宿区的私立大学。与庆应大学并称“日本私立双雄”。其前身是1882年大隈重信设立的东京专门学校。",
      logo: "/image/schools/waseda.jpg",
      qs: "181",
    },
    {
      uid: 6,
      name: "东京大学 (The University of Tokyo)",
      location: "关东 , 东京",
      description:
        "东京大学是日本的最高学术殿堂，毕业生中包括很多在政治经济商业学术界具有举足轻重地位的人物，其中包括8位诺贝尔奖获得者和16位首相。",
      logo: "/image/schools/tku.jpg",
      qs: "32",
    },
    {
      uid: 7,
      name: "京都大学 (Kyoto University)",
      location: "近畿 , 京都",
      description:
        "京都大学与东京大学虽为日本东西两方齐名的国立大学，但它们的传统与办学目标迥然不同。东京大学以培养治国人才为主；京都大学则以培养科学家见长。",
      logo: "/image/schools/jdu.jpg",
      qs: "50",
    },
    {
      uid: 8,
      name: "大阪大学 (Osaka University)",
      location: "近畿 , 大阪",
      description:
        "G是一所位于日本大阪府的国立研究型综合大学，日本七大旧制帝国大学之一，直属文部省领导，日本国内大学综合排名第三，世界排名前五十。",
      logo: "/image/schools/osu.jpg",
      qs: "86",
    },
  ];
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".university-card");

      // 卡片动画改用批量注册
      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // 调整为更晚触发[1](@ref)
            toggleActions: "play none none reverse",
            //   markers: process.env.NODE_ENV === "development" // 开发环境显示标记
          },
        });
      });

      // 标题动画添加防抖
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".partner-section",
          start: "top 85%",
          end: "+=200",
          scrub: 0.5, // 增加滚动跟随[5](@ref)
        },
      });
      titleTl.from(".section-title", { opacity: 0, y: 50, duration: 1 });

      // 窗口尺寸变化监听
      window.addEventListener("resize", () => {
        ScrollTrigger.refresh(true); // 强制刷新[4](@ref)
      });
    },
    { dependencies: [schools] }
  );

  return (
    <section className="partner-section min-h-fit bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-4 md:px-8">
      {/* 标题模块 */}
      <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">
        合作院校
        <span className="block mt-2 text-blue-600 text-lg font-normal">
          与日本顶尖学府建立战略合作
        </span>
      </h2>
      {/* 移动端轮播模块 */}

      <div className="lg:px-4 xl:px-16" data-scroll data-scroll-speed="1">
        {/* 调整内边距 */}
        <Swiper
          touchStartPreventDefault={false}
          simulateTouch={true}
          allowTouchMove={true}
          preventInteractionOnTransition={true}
          slidesPerView={"auto"}
          centeredSlides={false} // 关闭居中模式
          spaceBetween={40} // 增大间距
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="!pb-12 cursor-grab select-none"
          onAfterInit={(swiper) => {
            setTimeout(() => {
              swiper.update(); // 更新Swiper内部尺寸计算[2](@ref)
              ScrollTrigger.refresh(true); // 强制重新计算滚动触发器[4](@ref)
            }, 300);
          }}
        >
          {schools.map((school) => (
            <SwiperSlide
              key={school.uid}
              className="!w-[280px] sm:!w-[320px] lg:!w-[360px]" // 固定卡片宽度
            >
              <UniversityCard {...school} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const UniversityCard = ({
  logo,
  name,
  location,
  description,
  qs,
  uid
}: {
  logo: string;
  name: string;
  location: string;
  description: string;
  qs: string;
  uid: number;
}) => (
  <div className="university-card flex flex-col min-w-[280px]">
    {" "}
    {/* 新增外层高度控制 */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex-1 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        {/* 固定图片容器尺寸 */}
        <div className="w-20 h-20 flex-shrink-0 bg-white p-2 rounded-lg border">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        {/* 文本内容区域 */}
        <div className="flex-1 min-w-0">
          {" "}
          {/* 新增最小宽度限制 */}
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <p className="text-sm text-blue-600 mt-1">{location}</p>
          <div className="text-white bg-primary/80 max-w-fit p-1 text-sm rounded-xl">
            QS排名：{qs}
          </div>
        </div>
      </div>
      {/* 固定描述区域高度 */}
      <div className="flex-1 mb-4 min-h-[80px]">
        <p className="text-gray-600 leading-relaxed line-clamp-4 text-sm">
          {description}
        </p>
      </div>
      {/* 底部按钮统一对齐 */}
      <Link href={`/university/info/${uid}`} className="mt-auto">
        <button className="w-full bg-blue-100 border-2 border-blue-100 hover:bg-white hover:text-primary hover:border-primary hover:border-2 text-white py-2 rounded-lg transition-colors">
          查看详情 →
        </button>
      </Link>
    </div>
  </div>
);

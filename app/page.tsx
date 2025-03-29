import Image from "next/image";

import ZkCarousel from "@/components/Home/ZkCarousel";
import ZkServive from "@/components/Home/ZkServive";
import ZkWasedaTec from "@/components/Home/ZkWasedaTec";
import ZkWasedaEdu from "@/components/Home/ZkWasedaEdu";
import ZkPartners from "@/components/Home/ZkPartners";
import ZkStudnets from "@/components/Home/ZkStudnets";
import ZkContact from "@/components/Home/ZkContact";

export default function Home() {
  interface ICImage {
    src: string;
    alt: string;
    title: string;
    info: string;
    button_l?: string;
    button_r?: string;
  }
 
  const images: ICImage[] = [
    {
      src: "/image/swipe/swipe1.jpg",
      alt: "零成本留学日本，开启你的国际视野！",
      title: "零成本留学日本，开启你的国际视野",
      info: "免费留学计划，助你走进日本顶尖学府，拥抱全球机遇！",
      button_l: "开始申请",
      button_r: "了解更多",
    },
    {
      src: "/image/swipe/swipe2.png",
      alt: "专业团队，精准规划，留学之路更轻松！",
      title: "专业团队，精准规划，留学之路更轻松！",
      info: "深耕留学培训多年，成功帮助数千学子圆梦海外！",
    },
    {
      src: "/image/swipe/swiper3.png",
      alt: "精准规划，成就留学梦想！",
      title: "专业的留学规划指导",
      info: "专业团队量身定制留学方案，助你轻松踏入理想学府！",
    },
    {
      src: "/image/swipe/swipe4.png",
      alt: "早稻田大学：传承百年，创新未来！",
      title: "日本早稻田大学",
      info: "百年名校，孕育全球领袖，成就你的非凡人生！",
    },
  ];
  return (
    <>
      <div>
        
        <main className="w-full">
          {/* 轮播图 */}
          <ZkCarousel images={images} />
          {/* 我们的服务 */}
          <ZkServive />
          <ZkWasedaEdu />
          <ZkWasedaTec />
          <ZkPartners />
          <ZkStudnets />
          <ZkContact />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

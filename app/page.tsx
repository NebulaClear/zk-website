import Image from "next/image";
import ZkCarousel from "@/components/ZkCarousel";
import ZkServive from "@/components/ZkServive";
import ZkWasedaTec from "@/components/ZkWasedaTec";
import ZkWasedaEdu from "@/components/ZkWasedaEdu";
import ZkPartners from "@/components/ZkPartners";
import ZkStudnets from "@/components/ZkStudnets";
import ZkContact from "@/components/ZkContact";
// import ZkSchool from "@/components/ZkSchool"
export default function Home() {
  interface ICImage {
    src: string;
    alt: string;
    title: string;
    info: string;
    button_l?: string;
    button_r?: string;
  }
  const navList = [
    {
      name: "首页",
      pageName: "",
      id: "nav-1",
    },
    {
      name: "合作院校",
      pageName: "",
      id: "nav-2",
    },
    {
      name: "服务项目",
      pageName: "",
      id: "nav-3",
    },
    {
      name: "毕业学员",
      pageName: "",
      id: "nav-4",
    },
    {
      name: "联系我们",
      pageName: "",
      id: "nav-5",
    },
  ];
  const images: ICImage[] = [
    {
      src: "/image/swipe/swipe1.jpg",
      alt: "零中介费留学申请平台",
      title: "零中介费留学申请平台",
      info: "AI智能选校 · 透明化服务 · 材料模板库 · 签证攻略包",
      button_l: "开始申请",
      button_r: "了解更多",
    },
    {
      src: "/image/swipe/swipe2.jpg",
      alt: "开启你的留学梦想之旅",
      title: "开启你的留学梦想之旅",
      info: "37年留学培训经验，专业咨询服务，助你圆梦世界名校",
    },
    {
      src: "/image/swipe/swipe3.jpg",
      alt: "专业的留学规划指导",
      title: "专业的留学规划指导",
      info: "一对一定制化服务，为你量身打造留学方案",
    },
    {
      src: "/image/swipe/swipe4.png",
      alt: "日本早稻田大学",
      title: "日本早稻田大学",
      info: "科研、私塾",
    },
  ];
  return (
    <>
      <div>
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 pt-2 pb-2">
          <div className="flex items-center justify-between px-4 md:px-40">
            {/* Logo 部分 */}
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden w-10 h-10 md:w-12 md:h-12 cursor-auto">
                <Image
                  src="/image/logo.png"
                  alt="早稻田留学"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p className="pl-3 md:pl-5 text-xl md:text-2xl font-bold text-primary cursor-default">
                早稻田留学教育
              </p>
            </div>

            {/* 移动端导航控制 */}
            <div className="relative">
              {/* Checkbox */}
              <input
                type="checkbox"
                id="menu-toggle"
                className="sr-only peer"
              />

              {/* 汉堡菜单按钮 */}
              <label
                htmlFor="menu-toggle"
                className="md:hidden p-2 cursor-pointer hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>

              {/* 桌面导航 */}
              <ul className="hidden md:flex space-x-4 lg:space-x-6">
                {navList.map((li) => (
                  <li
                    key={li.id}
                    className="hover:text-primary cursor-pointer transition-colors duration-200 text-sm lg:text-base"
                  >
                    {li.name}
                  </li>
                ))}
              </ul>

              {/* 移动端下拉菜单 */}
              <div
                className="fixed top-20 left-0 w-full bg-white shadow-lg z-50 
                           transform transition-all duration-300 ease-out 
                           opacity-0 -translate-y-5
                           peer-checked:opacity-100 peer-checked:translate-y-0
                           invisible peer-checked:visible"
              >
                <ul className="py-4">
                  {navList.map((li, index) => (
                    <li
                      key={li.id}
                      className="px-6 py-3 hover:bg-gray-100 text-center
                      transition-all duration-500 ease-out -translate-y-2
                      "
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        willChange: "transform, opacity", // 硬件加速优化
                      }}
                    >
                      {li.name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 遮罩层 */}
              <label
                htmlFor="menu-toggle"
                className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm
                            transition-opacity duration-300 ease-in-out
                            opacity-0 invisible
                            peer-checked:opacity-100 peer-checked:visible"
              />
            </div>
          </div>
        </nav>
        <main className="w-full">
          {/* 轮播图 */}
          <ZkCarousel images={images} />
          {/* 我们的服务 */}
          <ZkServive />
          {/* <h2 className="our-service text-3xl font-bold text-center mb-5 text-gray-800">合作院校</h2>
          <ZkSchool /> */}
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

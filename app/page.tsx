import Image from "next/image";
import ZkCarousel from "@/components/ZkCarousel";
import ZkServive from "@/components/ZkServive";
import ZkWasedaTec from "@/components/ZkWasedaTec";
import ZkWasedaEdu from "@/components/ZkWasedaEdu";
import ZkPartners from "@/components/ZkPartners";
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
        </main>
        <footer></footer>
      </div>
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}

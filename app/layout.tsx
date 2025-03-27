import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "早稻田留学教育",
  description: "Education",
};
const navList = [
  {
    name: "首页",
    pageName: "",
    id: "nav-1",
    router:'/'
  },
  {
    name: "合作院校",
    pageName: "",
    id: "nav-2",
    router:'/'
  },
  {
    name: "服务项目",
    pageName: "",
    id: "nav-3",
    router:'/'
  },
  {
    name: "毕业学员",
    pageName: "",
    id: "nav-4",
    router:'/'
  },
  {
    name: "联系我们",
    pageName: "",
    id: "nav-5",
    router:'/contact'
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 pt-2 pb-2">
          <div className="flex items-center justify-between px-4 md:px-40">
            {/* Logo 部分 */}
            <Link href="/" className="flex items-center cursor-pointer">
              <div className="rounded-full overflow-hidden w-10 h-10 md:w-12 md:h-12 cursor-pointer">
                <img
                  src="/image/logo.png"
                  alt="早稻田留学"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="pl-3 md:pl-5 text-xl md:text-2xl font-bold text-primary cursor-pointer">
                早稻田留学教育
              </p>
            </Link>

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
              <ul className="hidden md:flex space-x-4 lg:space-x-6 items-center">
                {navList.map((li) => (
                  <Link
                    href={li.router}
                    key={li.id}
                    className={
                      li.id === "nav-5"
                        ? "inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 hover:text-primary transition-colors animate-item"
                        : `hover:text-primary bg-text cursor-pointer transition-colors duration-200 text-sm lg:text-base`
                    }
                  >
                    {li.name}
                  </Link>
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

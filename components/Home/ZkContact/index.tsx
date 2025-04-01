"use client";
import { useRef } from "react";
import { gsap, random } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { createClient } from "@vercel/kv";
import { KvPOST } from "@/api/kv";
import ZkIcon from "@/components/ZkComponents/ZkIcon";
import Link from "next/link";

export default function ContactSection() {
  const contactContainerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const post = async () => {
    const name: string = "jimmy1";
    KvPOST({
      key: "jimmy12",
      value: {
        name: "21",
        qa: "asda1232sda",
      },
    });
  };
  useGSAP(
    () => {
      // 表单元素动画（网页4互动元素）
      gsap.from(".form-element", {
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: contactContainerRef }
  );

  return (
    <section
      ref={contactContainerRef}
      className="min-h-fit w-full bg-gradient-to-br from-blue-900 to-cyan-800 px-4 py-20 md:px-8"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-12">
        {/* 左侧联系信息（网页5联系方式） */}
        <div className="w-full md:w-1/2 space-y-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            开启您的留学之旅
            {/* <span className="block mt-2 text-2xl md:text-3xl text-blue-200">
              全球30+分支机构为您服务
            </span> */}
          </h2>

          {/* 联系方式列表（网页3联系方式） */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 hover:scale-[1.02] transition-transform">
              <PhoneIcon className="w-8 h-8 text-cyan-300" />
              <div>
                <p className="text-lg font-semibold">咨询热线</p>
                <a
                  href="tel:0120-123-456"
                  className="text-xl md:text-2xl hover:text-cyan-200"
                >
                  13352290151（赵老师）
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:scale-[1.02] transition-transform">
              <EmailIcon className="w-8 h-8 text-cyan-300" />
              <div>
                <p className="text-lg font-semibold">电子邮箱</p>
                <a
                  href="mailto:contact@edu.com"
                  className="text-xl md:text-2xl hover:text-cyan-200"
                >
                  zklx@edu.com
                </a>
              </div>
            </div>

            {/* 社交媒体（网页2多语言支持） */}
            <div className="flex gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="w-12 h-12 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <ZkIcon type="zdticon" className="zicon-weibo text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* 联系按钮区块（整合网页4互动元素动画） */}
          <div
            ref={formRef}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]"
          >
            <h3 className="form-element text-2xl text-white font-bold text-center">
              立即获取专属留学方案
            </h3>

            {/* 主要联系按钮（网页5 CTA设计） */}
            <Link href={"/contact"} className="form-element relative overflow-hidden group w-full max-w-xs py-5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl text-white font-semibold text-lg">
              <button
                className="form-element relative overflow-hidden group w-full  bg-gradient-to-r text-white font-semibold text-lg"
                onClick={() => {
                  // 这里可以添加点击事件处理（网页2交互逻辑）
                  post();
                }}
              >
                立即咨询
              </button>
            </Link>
            {/* 次要联系方式（网页3联系信息） */}
            <div className="form-element flex gap-4 mt-4">
              <a
                href="tel:13352290151"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-cyan-300" />
                <span className="text-white">电话咨询</span>
              </a>
              <a
                href="mailto:zklx@edu.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <EmailIcon className="w-5 h-5 text-cyan-300" />
                <span className="text-white">校长微信</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SVG图标组件
const PhoneIcon = ({ ...props }) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = ({ ...props }) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// 社交媒体配置
const socialLinks = [
  {
    name: "WeChat",
    url: "#",
    icon: ({ ...props }) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        {/* 微信SVG路径 */}
      </svg>
    ),
  },
  {
    name: "Weibo",
    url: "#",
    icon: ({ ...props }) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        {/* 微博SVG路径 */}
      </svg>
    ),
  },
];

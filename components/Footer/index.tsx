'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZkIcon from "@/components/ZkComponents/ZkIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // useGSAP(() => {
  //   gsap.from(".footer-section", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".footer-section",
  //       start: "top bottom-=150", // 更保守的触发位置
  //       end: "bottom center",
  //       toggleActions: "play none none none", // 确保只播放一次[5](@ref)
  //       invalidateOnRefresh: true // 路由变化时自动刷新[3](@ref)
  //     }
  //   });
  // }, []);

  return (
    <footer className="bg-gray-900 text-gray-50 px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 mb-8">
          {/* 联系我们 */}
          <div className="footer-section min-w-[50%] md:min-w-0 md:flex-1">
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li>13352290151</li>
              <li>info@example.com</li>
              <li>大连市企业配套中心1号楼</li>
            </ul>
          </div>

          {/* 课程体系 */}
          <div className="footer-section min-w-[50%] md:min-w-0 md:flex-1">
            <h3 className="text-lg font-semibold mb-4">课程体系</h3>
            <ul className="space-y-2">
              <li>日语课程</li>
              <li>留学申请指导</li>
              <li>早稻田大学专栏</li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div className="footer-section min-w-[50%] md:min-w-0 md:flex-1">
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>合作院校</li>
              <li>服务项目</li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div className="footer-section min-w-[50%] md:min-w-0 md:flex-1">
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {/* 这里放置社交媒体图标 */}
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"><ZkIcon type="zdticon" className="zicon-weibo" /></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"><ZkIcon type="zdticon" className="zicon-bilibili1" /></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"><ZkIcon type="zdticon" className="zicon-douyinzhanghao" /></div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center md:text-left">
          <p className="text-sm text-gray-400">
            ©2024 日本留学课程体系.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
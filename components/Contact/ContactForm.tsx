// app/components/ContactForm.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  // GSAP 动画
  useGSAP(
    () => {
      gsap.from(".form-item", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: formRef }
  );

  // 提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      captcha: formData.get("captcha"),
    };
    console.log("Form Data:", data);
    // 这里可以添加API调用
  };

  return (
    <div className="overflow-hidden max-h-fit  bg-white rounded-xl shadow-2xl hover:shadow-xl ">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm "
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">联系我们</h2>
        <p className="text-gray-600 mb-8">
          请填写以下信息，我们的留学顾问将尽快与您联系
        </p>

        <div className="form-item mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500 font-bold">*</span> 姓名 
          </label>
          <input
            type="text"
            name="name"
            placeholder="请输入您的真实姓名"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="form-item mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500 font-bold">*</span> 手机号码
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="请输入您的手机号码"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            pattern="[0-9]{11}"
            required
          />
        </div>

        <div className="form-item mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500 font-bold">*</span> 验证码
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="请输入验证码"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mt-7">
              <img
                src="/captcha-placeholder.png"
                alt="验证码"
                className="h-12 w-32 border rounded-md bg-gray-100"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="form-item w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          提交信息
        </button>

        <p className="form-item mt-4 text-sm text-gray-500 text-center">
          提交即表示您同意我们的
          <a href="/privacy" className="text-blue-600 hover:underline ml-1">
            隐私政策
          </a>
        </p>
      </form>
    </div>
  );
}

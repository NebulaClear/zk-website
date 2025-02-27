// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";

// 使用 Comic Sans MS 和站酷快乐体
const App: React.FC = () => {
  const [gpa, setGpa] = useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("美国");
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          text: "2025年留学费用对比",
          textStyle: {
            color: "#333",
            fontSize: 16,
            fontWeight: "normal",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["学费", "生活费"],
        },
        xAxis: {
          type: "category",
          data: ["美国", "英国", "澳大利亚", "加拿大", "新西兰"],
        },
        yAxis: {
          type: "value",
          name: "费用 (万元/年)",
        },
        series: [
          {
            name: "学费",
            type: "bar",
            data: [35, 30, 25, 28, 22],
            itemStyle: {
              color: "#87CEEB",
            },
          },
          {
            name: "生活费",
            type: "bar",
            data: [15, 18, 12, 14, 10],
            itemStyle: {
              color: "#FFA500",
            },
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  const handleSubmit = () => {
    if (!name || !phone || !selectedCountry) {
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const universities = [
    {
      name: "加州大学伯克利分校",
      tuition: "52000",
      requirement: "TOEFL: 90 / IELTS: 7.0",
      deadline: "2025-12-15",
      image:
        "https://public.readdy.ai/ai/img_res/d5ac8869b6df89375583f7184a91d286.jpg",
    },
    {
      name: "墨尔本大学",
      tuition: "48000",
      requirement: "TOEFL: 85 / IELTS: 6.5",
      deadline: "2025-11-30",
      image:
        "https://public.readdy.ai/ai/img_res/c4fd8f4ab56c9e899c91e2bd313e74f6.jpg",
    },
    {
      name: "帝国理工学院",
      tuition: "55000",
      requirement: "TOEFL: 92 / IELTS: 7.0",
      deadline: "2025-10-15",
      image:
        "https://public.readdy.ai/ai/img_res/aec1450d062cfc86b6d89c5edbf74298.jpg",
    },
  ];

  const comments = [
    {
      name: "张雨晨",
      school: "哥伦比亚大学",
      content: "零中介费真的太划算了！直接省下10万+",
    },
    {
      name: "李思远",
      school: "伦敦政经学院",
      content: "平台提供的材料模板特别实用",
    },
    {
      name: "王梓萱",
      school: "多伦多大学",
      content: "AI选校准确度很高，推荐的都是适合我的学校",
    },
    {
      name: "陈昊然",
      school: "悉尼大学",
      content: "签证材料一次性通过，平台的攻略太给力了",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-globe-americas text-[#87CEEB] text-3xl"></i>
            <span className="text-2xl font-bold text-[#87CEEB]">
              留学直通车
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#87CEEB]">
              首页
            </a>
            <a href="#" className="text-gray-600 hover:text-[#87CEEB]">
              合作院校
            </a>
            <a href="#" className="text-gray-600 hover:text-[#87CEEB]">
              服务项目
            </a>
            <a href="#" className="text-gray-600 hover:text-[#87CEEB]">
              成功案例
            </a>
            <button className="!rounded-button bg-[#FFA500] text-white px-6 py-2 hover:bg-opacity-90">
              咨询顾问
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://public.readdy.ai/ai/img_res/faffbece9ea4a2fbb99293dc90cb37eb.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  零中介费留学申请平台
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  AI智能选校 · 透明化服务 · 材料模板库 · 签证攻略包
                </p>
                <div className="flex space-x-4">
                  <button className="!rounded-button bg-[#87CEEB] text-white px-8 py-3 text-lg hover:bg-opacity-90">
                    开始申请
                  </button>
                  <button className="!rounded-button border-2 border-[#87CEEB] text-[#87CEEB] px-8 py-3 text-lg hover:bg-[#87CEEB] hover:text-white">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI选校计算器 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI 智能选校计算器
          </h2>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">输入你的 GPA</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-[#87CEEB]"
                  placeholder="例如: 3.5"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                />
                <button
                  className="!rounded-button bg-[#FFA500] text-white px-6 py-2 rounded-r-lg hover:bg-opacity-90"
                  onClick={() => setGpa("3.8")}
                >
                  一键计算
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 合作院校 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">优质合作院校</h2>
          <div className="grid grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{uni.name}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">学费：{uni.tuition} USD/年</p>
                    <p className="text-gray-600">语言要求：{uni.requirement}</p>
                    <p className="text-gray-600">申请截止：{uni.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 费用对比图表 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">留学费用对比</h2>
          <div ref={chartRef} className="w-full h-[400px]"></div>
        </div>
      </div>

      {/* 学员评价 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">学员评价</h2>
          <div className="grid grid-cols-4 gap-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#87CEEB] flex items-center justify-center text-white">
                    {comment.name.slice(0, 1)}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold">{comment.name}</p>
                    <p className="text-sm text-gray-500">{comment.school}</p>
                  </div>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 咨询表单 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">预约咨询</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#87CEEB]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">手机号码</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#87CEEB]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">意向国家</label>
                <div className="grid grid-cols-4 gap-2">
                  {["美国", "英国", "澳大利亚", "加拿大"].map((country) => (
                    <button
                      key={country}
                      className={`!rounded-button py-2 px-4 text-sm ${
                        selectedCountry === country
                          ? "bg-[#87CEEB] text-white"
                          : "border border-gray-300 text-gray-600 hover:border-[#87CEEB]"
                      }`}
                      onClick={() => setSelectedCountry(country)}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="!rounded-button w-full bg-[#FFA500] text-white py-3 hover:bg-opacity-90"
                onClick={handleSubmit}
              >
                提交咨询
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 侧边栏 */}
      <div className="fixed right-6 bottom-24 z-50 space-y-4">
        <div
          className="relative bg-white rounded-lg shadow-lg p-4 cursor-pointer"
          onMouseEnter={() => setShowQRCode(true)}
          onMouseLeave={() => setShowQRCode(false)}
        >
          <i className="fas fa-qrcode text-[#87CEEB] text-2xl"></i>
          {showQRCode && (
            <div className="absolute right-full mr-4 bottom-0 bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://public.readdy.ai/ai/img_res/51e00be17f7726637c4df8c8e3733a0c.jpg"
                alt="QR Code"
                className="w-32 h-32"
              />
              <p className="text-center mt-2 text-sm">扫码进500人留学群</p>
            </div>
          )}
        </div>
        <div
          className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
          onClick={() => setShowChat(true)}
        >
          <i className="fas fa-comments text-[#87CEEB] text-2xl"></i>
        </div>
      </div>

      {/* 成功提示 */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          提交成功！我们会尽快与您联系
        </div>
      )}

      {/* 聊天窗口 */}
      {showChat && (
        <div className="fixed bottom-24 right-24 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold">在线咨询</h3>
            <button onClick={() => setShowChat(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="h-80 p-4 overflow-y-auto">
            <div className="mb-4">
              <p className="bg-gray-100 rounded-lg p-3 inline-block">
                您好！请问有什么可以帮助您的吗？
              </p>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#87CEEB]"
              placeholder="输入消息..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

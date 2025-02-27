import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#87CEEB",
        button:"#FFA500",
        'blue': {
          600: '#2563eb', // 品牌主色
          100: '#dbeafe'  // 按钮底色
        },
        'yellow': {
          100: '#fef9c3'  // 排名标签色
        }
      },
      boxShadow: {
        'card': '0 8px 30px -15px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
export default {
  plugins: [forms], // 确保包含此插件
  variants: {
    extend: {
      display: ["peer-checked"], // 允许 peer-checked 控制显示
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#f3f4f6',
        'gray-700': '#4b5563',
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#8E1728",
        text:"",
        button:"#333333",
        second:"#222222",
        'blue': {
          600: '#8E1728', // 品牌主色
          100: '#333333'  // 按钮底色
        },
        'yellow': {
          100: '#fef9c3'  // 排名标签色
        }
      },
      boxShadow: {
        'card': '0 8px 30px -15px rgba(0,0,0,0.1)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 12px rgba(26, 119, 232, 0.3)',
        'table': '0 4px 12px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'card-enter': 'cardEnter 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' }
        },
        cardEnter: {
          '0%': { opacity: "0", transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: "1", transform: 'translateY(0) scale(1)' }
        }
      }
    },
  },
} satisfies Config;

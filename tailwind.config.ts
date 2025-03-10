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
        'card': '0 8px 30px -15px rgba(0,0,0,0.1)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' }
        }
      }
    },
  },
} satisfies Config;

// eslint.config.mjs
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // ========== 基础配置 ==========
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.config.*" // 忽略配置文件
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        JSX: "readonly"
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd()
      }
    }
  },

  // ========== 插件规则集 ==========
  // Next.js 官方规则
  {
    plugins: {
      "@next/next": eslintPluginNext
    },
    rules: {
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-before-interactive-script-outside-document": "error",
      "@next/next/no-duplicate-head": "error",
      "@next/next/no-sync-scripts": "error"
    }
  },

  // TypeScript 规则
  ...tseslint.configs.recommended,

  // React 规则
  eslintPluginReact.configs.recommended,
  {
    plugins: { "react-hooks": eslintPluginReactHooks },
    rules: {
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "off", // Next.js 不需要手动引入 React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },

  // ========== 自定义规则 ==========
  {
    rules: {
      // TypeScript
      "@typescript-eslint/no-explicit-any": "off", // 允许 any
      "@typescript-eslint/no-unused-vars": "warn",
      
      // 代码质量
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      
      // Next.js 优化
      "jsx-a11y/anchor-is-valid": "off" // 与 Next.js Link 组件兼容
    }
  },

  // ========== Prettier 兼容 ==========
  eslintConfigPrettier
];
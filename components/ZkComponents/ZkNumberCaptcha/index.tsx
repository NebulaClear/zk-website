'use client'
// components/Captcha.tsx
import { useRef, useEffect, useState } from 'react';

const ZkNumberCaptcha = ({ onCaptchaChange }: { onCaptchaChange: (code: string) => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaCode, setCaptchaCode] = useState('');

  // 生成随机数字（4位）
  const generateCode = () => {
    const nums = '0123456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += nums[Math.floor(Math.random() * 10)];
    }
    setCaptchaCode(code);
    onCaptchaChange(code);
    return code;
  };

  // 绘制验证码图形
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const code = generateCode();

    // 绘制背景色（浅色渐变）
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f7fdfb');
    gradient.addColorStop(1, '#c2e8f7');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制验证码文字（扭曲效果）
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    for (let i = 0; i < code.length; i++) {
      ctx.setTransform(
        1, 
        Math.random() * 0.3 - 0.15, 
        Math.random() * 0.3 - 0.15, 
        1, 
        i * 30 + 10, 
        30
      );
      ctx.fillText(code[i], 0, 0);
    }

    // 添加干扰线
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(0,0,0,${Math.random() * 0.3})`;
      ctx.stroke();
    }
  };

  useEffect(() => {
    drawCaptcha();
  }, []);

  return (
    <div className="flex items-center gap-2">
      <canvas
        ref={canvasRef}
        width="140"
        height="40"
        onClick={drawCaptcha} // 点击刷新
        className="cursor-pointer border border-gray-200"
      />
    </div>
  );
};
export default ZkNumberCaptcha;
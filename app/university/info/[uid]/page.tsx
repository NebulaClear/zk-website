// src/app/page.tsx
import UFooter from "@/components/University/UFooter";
import UBanner from "@/components/University/UBanner";
import UStandard from "@/components/University/UStandard";
import UInfo from "@/components/University/UInfo";
import ULocation from "@/components/University/ULocation";
import fs from 'fs/promises';
import path from 'path';

interface PageProps {
  params: Promise<{  
    uid: string;
  }>;
}

// SSG 数据预加载
export async function getStaticProps() {
  const jsonPath = path.join(process.cwd(), 'data', 'config.json');
  const rawData = await fs.readFile(jsonPath, 'utf-8');
  const staticData = JSON.parse(rawData);

  return {
    props: {
      staticData,
      timestamp: new Date().toISOString() // 构建时间标记
    },
    revalidate: 3600 // 启用 ISR 每小时增量更新[6,8](@ref)
  };
}
export default async function UniInfo({params}: PageProps) {
  const { uid } = await params;
  console.log(process.cwd());
  
  return (
    <main className="relative">
      <UBanner uid={uid} />
      <UStandard />
      <UInfo />
      <ULocation />
      <UFooter />
    </main>
  );
}

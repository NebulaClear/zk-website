// src/app/page.tsx
import UFooter from "@/components/University/UFooter";
import UBanner from "@/components/University/UBanner";
import UStandard from "@/components/University/UStandard";
import UInfo from "@/components/University/UInfo";
import ULocation from "@/components/University/ULocation";
import { promises as fs } from 'fs';
import path from 'path';

interface PageProps {
  params: Promise<{  
    uid: string;
  }>;
}

// SSG 数据预加载
// export async function generateStaticParams() {
//   const jsonPath = path.join(process.cwd(), 'data', 'config.json');
//   const rawData = await fs.readFile(jsonPath, 'utf-8');
//   const config = JSON.parse(rawData);

//   // 根据 config 生成所有可能的 uid 路径
//   return config.universities.map((uni: any) => ({
//     uid: uni.id,
//   }));
// }
// // 数据预加载（替代 getStaticProps）
// async function getUniversityData(uid: string) {
//   const jsonPath = path.join(process.cwd(), 'data', 'config.json');
//   const rawData = await fs.readFile(jsonPath, 'utf-8');
//   const config = JSON.parse(rawData);
  
//   return config.universities.find((uni: any) => uni.id === uid);
// }
export default async function UniInfo({params}: PageProps) {
  // const data = await getUniversityData(params.uid);
  const uid=1;
  
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

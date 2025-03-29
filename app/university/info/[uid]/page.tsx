// src/app/page.tsx
import UFooter from "@/components/University/UFooter";
import UBanner from "@/components/University/UBanner";
import UStandard from "@/components/University/UStandard";
import UInfo from "@/components/University/UInfo";
import ULocation from "@/components/University/ULocation";

interface PageProps {
  params: Promise<{  
    uid: string;
  }>;
}

export default async function UniInfo({params}: PageProps) {
  const { uid } = await params;
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

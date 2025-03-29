// src/app/page.tsx
import UFooter from '@/components/University/UFooter'
import UBanner from '@/components/University/UBanner'
import UStandard from '@/components/University/UStandard'
import UInfo from '@/components/University/UInfo'
import ULocation from '@/components/University/ULocation'


export default function UniInfo({ params }: { params: { uid: string | number } }) {
  const {uid}=params;
  return (
    <main className="relative">
      <UBanner uid={uid}  />
      <UStandard />
      <UInfo />
      <ULocation />
      <UFooter />
    </main>
  )
}
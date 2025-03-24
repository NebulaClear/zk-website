// src/app/page.tsx
import LBanner from '@/components/Life/LBanner'
import LOptions from '@/components/Life/LOptions'
import LSourse from '@/components/Life/LSourse'


export default function Home() {
  return (
    <main className="relative">
      <LBanner />
      <LOptions />
      <LSourse />
    </main>
  )
}
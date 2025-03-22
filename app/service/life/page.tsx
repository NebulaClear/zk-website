// src/app/page.tsx
import LBanner from '@/components/Life/LBanner'
import LOptions from '@/components/Life/LOptions'


export default function Home() {
  return (
    <main className="relative">
      <LBanner />
      <LOptions />
    </main>
  )
}
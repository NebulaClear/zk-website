// src/app/page.tsx
import LSBanner from '@/components/List/Service/LSBanner'
import LSProgram from '@/components/List/Service/LSProgram'
import LSAd from '@/components/List/Service/LSAd'

export default function Home() {
  return (
    <main className="relative">
      <LSBanner />
      <LSProgram />
      <LSAd />
    </main>
  )
}
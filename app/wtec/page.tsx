// src/app/page.tsx
import Wbanner from '@/components/Wtec/Wbanner/index'
import WtecCard from '@/components/Wtec/WtecCard/index'

export default function Home() {
  return (
    <main className="relative">
      <Wbanner />
      <WtecCard />
    </main>
  )
}
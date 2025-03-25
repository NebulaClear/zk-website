// src/app/page.tsx
import Wbanner from '@/components/Wtec/Wbanner/index'
import WtecCard from '@/components/Wtec/WtecCard/index'
import Wshow from '@/components/Wtec/Wshow/index'
import Wfooter from '@/components/Wtec/Wfooter/index'

export default function Home() {
  return (
    <main className="relative">
      <Wbanner />
      <WtecCard />
      <Wshow />
      <Wfooter />
    </main>
  )
}
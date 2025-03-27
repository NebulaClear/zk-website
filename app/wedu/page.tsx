// src/app/page.tsx
import WEbanner from '@/components/Wedu/WEbanner'
import WEcourse from '@/components/Wedu/WEcourse'
import WEad from '@/components/Wedu/WEad'
import WEinfo from '@/components/Wedu/WEinfo'
import WEfooter from '@/components/Wedu/WEfooter'

export default function Home() {
  return (
    <main className="relative">
      <WEbanner />
      <WEcourse />
      <WEad />
      <WEinfo />
      <WEfooter />
    </main>
  )
}
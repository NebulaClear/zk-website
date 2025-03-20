// src/app/page.tsx
import CBanner from '@/components/Course/CBanner'
import CCore from '@/components/Course/CCore'
import CJapan from '@/components/Course/CJapan'
import CEju from '@/components/Course/CEju'
import CIelts from '@/components/Course/CIelts'
import CFooter from '@/components/Course/CFooter'

export default function Home() {
  return (
    <main className="relative">
      <CBanner />
      <CCore />
      <CJapan />
      <CEju />
      <CIelts />
      <CFooter />
    </main>
  )
}
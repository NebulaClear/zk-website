// src/app/page.tsx
import LUBanner from '@/components/List/University/LUBanner'
import LUList from '@/components/List/University/LUList'


export default function Home() {
  return (
    <main className="relative">
      <LUBanner />
      <LUList />
    </main>
  )
}
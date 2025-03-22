// src/app/page.tsx
import IBanner from '@/components/Interview/IBanner'
import IAdvangtage from '@/components/Interview/IAdvangtage'
import IDetails from '@/components/Interview/IDetails'
import IFooter from '@/components/Interview/IFooter'


export default function Home() {
  return (
    <main className="relative">
      <IBanner />
      <IAdvangtage />
      <IDetails />
      <IFooter />
    </main>
  )
}
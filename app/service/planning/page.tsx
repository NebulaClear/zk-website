// src/app/page.tsx
import PHeroSection from '@/components/Planning/PHeroSection'
import PService from '@/components/Planning/PService'
import PProcess from '@/components/Planning/PProcess'
import PFeature from '@/components/Planning/PFeature'
import PFooter from '@/components/Planning/PFooter'

export default function Home() {
  return (
    <main className="relative">
      <PHeroSection />
      <PService />
      <PProcess />
      <PFeature />
      <PFooter />
    </main>
  )
}
// app/school-plan/page.tsx
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ChevronDownIcon, BookOpenIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ZkService() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-white">
      
    </div>
  );
}
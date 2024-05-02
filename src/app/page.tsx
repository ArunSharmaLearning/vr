'use client'
import dynamic from 'next/dynamic';
import Image from "next/image";

const Starter = dynamic(() => import('@/components/Starter'), {
  ssr:false
})


export default function Home() {
  return (
    <main>
      <Starter />
    </main>
  );
}

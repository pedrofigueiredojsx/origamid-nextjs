'use client'
import dynamic from 'next/dynamic'

const Width = dynamic(() => import('@/components/width'), { ssr: false })

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  )
}

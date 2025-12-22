import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Script
        id="script-teste"
        strategy="beforeInteractive"
        src="http://localhost:3005/scripts/idade-legal.min.js"
      />
    </main>
  )
}

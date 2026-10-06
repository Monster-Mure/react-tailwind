
import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Card from './components/Card'
import coffeeImage from './assets/our-coffees.webp'
import coffeeBeans from './assets/coffeebeans.webp'
import { Button } from './components/ui/button'
function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10">
        <section id="home" className="scroll-mt-6">
          <Header title="Coffee of the day" />
        </section>
        <section
          id="coffee"
          aria-label="Coffee selection"
          className="flex w-full scroll-mt-6 flex-wrap justify-center gap-6"
        >
          <Card
            image={coffeeImage}
            title="House Espresso"
            description="Rich chocolate, caramel, and a smooth finish."
          />
          <Card
            image={coffeeBeans}
            title="House Blend"
            description="A balanced blend with notes of nuts well roasted."
          />
        </section>
        <section className="scroll-mt-6">
          <Button variant="outline" size="lg">Order Now</Button>
        </section>
      </main>
    </div>
  )
}

export default App

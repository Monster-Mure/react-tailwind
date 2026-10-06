
import './App.css'
import Card from './components/Card'
import coffeeImage from './assets/our-coffees.webp'
import coffeeBeans from './assets/coffeebeans.webp'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-amber-50 px-4 py-10">
      <h1 className="text-2xl font-semibold text-stone-900">Coffee of the day</h1>
      <div className="flex w-full flex-wrap justify-center gap-6">
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
      </div>
    </main>
  )
}

export default App

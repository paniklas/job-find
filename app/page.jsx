import Hero from "@/components/home/Hero"
import Categories from '@/components/home/Categories'
import HowWorks from "@/components/home/HowWorks"
import Pricing from "@/components/home/Pricing"

export default function Home() {

  return (
    <section className="flex flex-col justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-gradient-x w-full items-center">
      
      {/* Main */}
      <div className="flex-1">
        
        {/* Hero */}
        <Hero />

        {/* Categories */}
        <Categories />

        {/* How It Works */}
        <HowWorks />

        {/* Pricing */}
        <Pricing />
      
      </div>
    
    </section>
  )
}

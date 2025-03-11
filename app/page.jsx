import Hero from "@/components/home/Hero"
import Categories from '@/components/home/Categories'
import HowWorks from "@/components/home/HowWorks"
import Pricing from "@/components/home/Pricing";
import { getCategories } from "@/utils/getData";
import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Home() {

  const { categories } = await getCategories();

  // console.log("auth," , await auth())
  // console.log("currentUser," , currentUser)

  // console.log("currentUser," , await currentUser())

  const { userId } = await auth()
  console.log('userId', userId)
  
  const user = await currentUser()
  console.log('user', user)


  return (
    <section className="flex flex-col justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 animate-gradient-x w-full items-center">
      
      {/* Main */}
      <div className="flex-1">
        {/* <h1 className="text-2xl text-red-500">{JSON.stringify(categories, null, 2)}</h1> */}
        {/* Hero */}
        <Hero />

        {/* Categories */}
        <Categories categories={categories} />

        {/* How It Works */}
        <HowWorks />

        {/* Pricing */}
        <Pricing />
      
      </div>
    
    </section>
  )
}

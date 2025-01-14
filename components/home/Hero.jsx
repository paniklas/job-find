"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {

  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Your Dream Job Today
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover thousands of job opportunities with the best companies. Your next career move is just a click away.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-2">
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={query}
              // onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for jobs..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
            <div className="flex flex-wrap justify-center gap-2">
              {['Remote', 'Full-time', 'Entry-level'].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  // onClick={() => setSearchQuery(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            {/* {recentSearches.length > 0 && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recent searches: {recentSearches.join(', ')}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

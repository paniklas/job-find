"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Search, Briefcase, MapPin } from "lucide-react"
import { useRouter } from 'next/navigation'


const jobTitles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX Designer",
  "Marketing Manager",
]

const locations = [
  "New York, NY",
  "San Francisco, CA",
  "London, UK",
  "Berlin, Germany",
  "Tokyo, Japan",
]

export const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    description: 'We are looking for a skilled Frontend Developer to join our team...'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    description: 'Seeking an experienced Backend Engineer to build scalable server-side applications...'
  },
  {
    id: '3',
    title: 'UX Designer',
    description: 'Join our design team to create intuitive and engaging user experiences...'
  },
  {
    id: '4',
    title: 'Data Scientist',
    description: 'We need a Data Scientist to analyze complex datasets and derive insights...'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    description: 'Looking for a DevOps Engineer to streamline our development and deployment processes...'
  }
];


const Hero = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState([])
  const router = useRouter()

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   if (searchQuery.trim()) {
  //     setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)])
  //     router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  //   }
  // }

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
            {/* <form onSubmit={handleSearch} className="flex flex-col space-y-2"> */}
            <form className="flex flex-col space-y-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Input
                    className="flex-1"
                    placeholder="Search jobs or locations..."
                    name="query"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search jobs or locations..." />
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Job Titles">
                      {/* {jobTitles.map((title) => (
                        <CommandItem key={title} onSelect={() => setSearchQuery(title)}>
                          <Briefcase className="mr-2 h-4 w-4" />
                          {title}
                        </CommandItem>
                      ))} */}
                    </CommandGroup>
                    <CommandGroup heading="Locations">
                      {/* {locations.map((location) => (
                        <CommandItem key={location} onSelect={() => setSearchQuery(location)}>
                          <MapPin className="mr-2 h-4 w-4" />
                          {location}
                        </CommandItem>
                      ))} */}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <Input type="submit" value="Find Jobs" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer" />
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

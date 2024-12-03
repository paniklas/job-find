import React from 'react'

const HowWorks = () => {
    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Create Profile", description: "Sign up and create your professional profile" },
                { title: "Explore Jobs", description: "Browse through thousands of curated job listings" },
                { title: "Apply with Ease", description: "Submit applications with just a few clicks" },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}

export default HowWorks

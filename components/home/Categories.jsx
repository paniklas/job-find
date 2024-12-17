import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { categories } from "@/data/sampledata"
import Link from "next/link";


const Categories = () => {

    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Popular Job Categories</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            className="cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="text-2xl mr-2">{category.icon}</span>
                                        <span className="text-2xl">{category.name}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Explore jobs in {category.name}</p>
                                        <Link href={`/category/jobs/job/${category.slug}`}>
                                            <Button className="mt-4" variant="outline">
                                                View Jobs
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories

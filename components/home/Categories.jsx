import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


const Categories = () => {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Popular Job Categories</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Technology", icon: "💻" },
                        { title: "Healthcare", icon: "🏥" },
                        { title: "Finance", icon: "💰" },
                        { title: "Education", icon: "🎓" },
                        { title: "Marketing", icon: "📊" },
                        { title: "Design", icon: "🎨" },
                    ].map((category, index) => (
                        <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <span className="text-2xl mr-2">{category.icon}</span>
                                        {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Explore jobs in {category.title}</p>
                                    <Button className="mt-4" variant="outline">
                                        View Jobs
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories

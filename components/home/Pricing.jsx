import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const Pricing = () => {
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Basic", price: "$0", features: ["5 job applications/month", "Basic profile", "Email support"] },
                { title: "Pro", price: "$19", features: ["Unlimited applications", "Featured profile", "Priority support"] },
                { title: "Enterprise", price: "Custom", features: ["Custom solutions", "Dedicated account manager", "API access"] },
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? "border-blue-500" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <p className="text-2xl font-bold">{plan.price}</p>
                    {index === 1 && <p className="text-sm text-blue-500">Most Popular</p>}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-4 w-full">Choose Plan</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    )
}

export default Pricing

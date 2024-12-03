import { Button } from "@/components/ui/button";

const CTA = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Your Job Search?</h2>
                <p className="mt-4 text-xl">Join thousands of job seekers who have found their dream careers with JobFinder.</p>
                <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-gray-100">
                Sign Up Now
                </Button>
            </div>
        </section>
    )
}

export default CTA

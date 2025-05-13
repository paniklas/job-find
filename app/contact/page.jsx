import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";

export default function Contact() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Get in Touch
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Have questions or need assistance? Our team is here to help you find your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Contact Us
                  </Button>
                  <Button size="lg" variant="outline">
                    View Job Listings
                  </Button>
                </div>
              </div>
              <Image
                src="/disk.jpg"
                width={650}
                height={550}
                alt="Contact Us"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <ContactForm />
      </div>
    </div>
  )
}

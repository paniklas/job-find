import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2023 JobFinder. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer

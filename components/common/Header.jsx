import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";


const Header = async () => {

  const menuLinks = [
    { id:"1", name: 'Features', href: '/#features' },
    { id:"2", name: 'How It Works', href: '/#how-it-works' },
    { id: "3", name: 'Pricing', href: '/#pricing' },
    { id: "4", name: 'Contact', href: '/contact' }
  ]

    const user = await currentUser();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold">JobFinder</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            {menuLinks.map((link) => (
              <Link
                key={link.id}
                className="text-sm font-medium hover:underline underline-offset-4"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            {user && (
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/dashboard/admin"
              >
                Dashboard
              </Link>
            )}
            
          </nav>
            <div className="ml-4">
              {user ? (
                <UserButton />
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button
                      variant="outline"
                    >
                      Sign in
                    </Button>
                  </Link>

                  <Link href="/sign-up">
                    <Button className="ml-2">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
        </div>
      </header>
    )
}

export default Header

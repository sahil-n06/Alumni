import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between py-4">
        <Link href="/" className="w-36">
          <Image 
            src="/path/to/logo.png" width={128} height={38} // Ensure the src is correctly set
            alt="logo" 
          />
        </Link>

        <SignedIn>
          <nav className="hidden md:flex w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header

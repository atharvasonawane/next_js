
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navigation = () => {
    const pathname = usePathname();
    return ( 
        <nav>
            <Link href='/' className={ pathname === '/' ? "text-white-500 mr-4" : "text-blue-500 mr-4"}>Home</Link>
            <Link href='/about' className={pathname === '/about' ? "text-white-500 mr-4" : "text-blue-500 mr-4"}>About</Link>
            <Link href='/products/1' className={ pathname.startsWith("/products/1") ? "text-white-500 mr-4" : "text-blue-500 mr-4"}>Products</Link>
            <SignedOut>
                <SignInButton mode="modal"></SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>
        </nav>
     );
}
 
export default Navigation;
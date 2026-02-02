import Link from "next/link"
import NavLink from "@/app/components/NavLink"
import Image from "next/image"
import PFLogoIcon from "../../../public/printforge-logo-icon.svg"
import PFLogo from "../../../public/printforgelogo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
            <div className="relative flex">
              {/* Desktop logo */}
              <Image
                src={PFLogo.src}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
                width={120}
                height={120}
              />
              {/* Mobile logo */}
              <Image
                src={PFLogoIcon.src}
                alt="PrintForge Logo icon"
                className="w-[40px] h-auto block md:hidden"
                width={48}
                height={48}
              />
            </div>
            </Link>
            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer">
                <NavLink href="/3d-models">3D Models</NavLink>
              </li>
              <li className="text-sm uppercase cursor-pointer">
                <NavLink href="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </header>
  )
}
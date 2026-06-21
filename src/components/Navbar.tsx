import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Orbitech Logo"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="font-bold text-xl text-blue-700">
              Orbitech
            </h1>

            <p className="text-xs text-gray-500">
              Security Company Ltd
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/cac-registration">CAC</Link>
          <Link href="/tax-services">Tax</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/security-services">Security</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
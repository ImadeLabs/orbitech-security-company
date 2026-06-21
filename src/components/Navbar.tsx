"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Orbitech Logo"
              width={45}
              height={45}
              className="w-auto h-auto"
              priority
            />

            <div>
              <h1 className="text-2xl font-bold text-blue-700">
                Orbitech
              </h1>

              <p className="text-xs text-gray-500">
                Security Company Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link
              href="/cac-registration"
              className="hover:text-blue-600"
            >
              CAC
            </Link>

            <Link
              href="/tax-services"
              className="hover:text-blue-600"
            >
              Tax
            </Link>

            <Link
              href="/technology"
              className="hover:text-blue-600"
            >
              Technology
            </Link>

            <Link
              href="/security-services"
              className="hover:text-blue-600"
            >
              Security
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-4xl text-slate-800"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 border-b"
            >
              Home
            </Link>

            <Link
              href="/cac-registration"
              onClick={() => setOpen(false)}
              className="py-3 border-b"
            >
              CAC Registration
            </Link>

            <Link
              href="/tax-services"
              onClick={() => setOpen(false)}
              className="py-3 border-b"
            >
              Tax Services
            </Link>

            <Link
              href="/technology"
              onClick={() => setOpen(false)}
              className="py-3 border-b"
            >
              Technology
            </Link>

            <Link
              href="/security-services"
              onClick={() => setOpen(false)}
              className="py-3 border-b"
            >
              Security Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}
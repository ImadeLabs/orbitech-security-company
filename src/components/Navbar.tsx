"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Orbitech"
            width={45}
            height={45}
            className="h-auto w-auto"
          />

          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Orbitech
            </h1>

            <p className="text-xs text-gray-500">
              Security Company Ltd
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/cac-registration">CAC</Link>
          <Link href="/tax-services">Tax</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/security-services">Security</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/cac-registration" onClick={() => setOpen(false)}>
              CAC Registration
            </Link>

            <Link href="/tax-services" onClick={() => setOpen(false)}>
              Tax Services
            </Link>

            <Link href="/technology" onClick={() => setOpen(false)}>
              Technology
            </Link>

            <Link href="/security-services" onClick={() => setOpen(false)}>
              Security
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
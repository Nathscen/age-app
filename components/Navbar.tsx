'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const menu = [
  { name: 'Dashboard', href: '/' },
  { name: 'Barang', href: '/barang' },
  { name: 'Produksi', href: '/produksi' },
  { name: 'Ayam', href: '/ayam' },
  { name: 'Jadwal', href: '/jadwal' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-black">AGE App</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1 rounded ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 border-b ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

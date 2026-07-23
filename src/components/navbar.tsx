'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 10));
  }

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${scrolled ? 'h-14' : 'h-16'} transition-all duration-300`}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-gray-900">
              Focus<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Labs</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3.5 py-2 text-sm font-semibold text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
                Products <ChevronRight className="h-3.5 w-3.5 rotate-90" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-2xl p-2 shadow-2xl shadow-gray-900/10">
                  {products.map((p) => (
                    <Link key={p.slug} href={`/products/${p.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                      <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}>{p.name.charAt(0)}</div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 truncate text-[13px]">{p.name}</div>
                        <div className="text-xs text-gray-400 truncate">{p.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/products/focuslinks" className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md shadow-blue-200 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Get Started
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-700">Home</Link>
            <div className="pt-2 pb-1 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Products</div>
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-all">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}>{p.name.charAt(0)}</div>
                {p.name}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link href="/products/focuslinks" onClick={() => setOpen(false)} className="block text-center px-5 py-3 text-sm font-bold bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { products } from '@/lib/products';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 transition-transform group-hover:scale-110">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Focus<span className="text-emerald-400">Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Products
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-2 shadow-2xl">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <div
                        className={`h-8 w-8 rounded-md bg-gradient-to-br ${p.gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                      >
                        {p.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium truncate">{p.name}</div>
                        <div className="text-xs text-neutral-500 truncate">{p.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/products/focuslinks"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Products
            </div>
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/5"
              >
                <div
                  className={`h-6 w-6 rounded bg-gradient-to-br ${p.gradient} flex items-center justify-center text-[10px] font-bold text-white shrink-0`}
                >
                  {p.name.charAt(0)}
                </div>
                {p.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/products/focuslinks"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2.5 text-sm font-medium bg-emerald-500 text-black rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

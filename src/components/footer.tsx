'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Mail } from 'lucide-react';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Focus<span className="text-emerald-400">Labs</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              Building the future of optometry — one tool at a time. Free,
              open, and built for the global eye care community.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/focusIinks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-4">Products</h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-300 mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} FocusLabs. All rights reserved. Built for the optometry community.
          </p>
          <p className="text-xs text-neutral-600">
            Made with purpose by <span className="text-emerald-500">focusIinks</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-gray-900">Focus<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Labs</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Building the future of optometry — one tool at a time. Free, open, and built for the global eye care community.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all">
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="group text-sm text-gray-500 font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                    {p.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Blog', 'Community', 'Changelog'].map((item) => (
                <li key={item}><a href="#" className="group text-sm text-gray-500 font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-1">{item}<ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" /></a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}><a href="#" className="group text-sm text-gray-500 font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-1">{item}<ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" /></a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} FocusLabs. All rights reserved.</p>
          <p className="text-sm text-gray-400">Made with purpose by <span className="font-semibold text-blue-600">focusIinks</span></p>
        </div>
      </div>
    </footer>
  );
}

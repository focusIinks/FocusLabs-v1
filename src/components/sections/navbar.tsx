'use client';

import { useState } from 'react';
import { FlaskConical, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Journey', href: '#journey' },
  { label: 'Products', href: '#products' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#donate' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white"
      style={{ borderBottom: '2.5px solid var(--brutal-black)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <FlaskConical
            className="h-7 w-7"
            style={{ color: 'var(--brutal-orange)' }}
            strokeWidth={2.5}
          />
          <span className="text-xl font-extrabold tracking-tight">
            <span style={{ color: 'var(--brutal-black)' }}>Focus</span>
            <span style={{ color: 'var(--brutal-orange)' }}> Labs</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-bold transition-colors duration-150"
              style={{ color: 'var(--brutal-black)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brutal-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#products"
            className="brutal-btn brutal-btn-primary text-sm"
          >
            Explore FocusLinks
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5"
          style={{ color: 'var(--brutal-black)' }}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <div
        className="overflow-hidden transition-all duration-300 md:hidden"
        style={{
          maxHeight: mobileOpen ? '420px' : '0px',
          borderBottom: mobileOpen ? '2.5px solid var(--brutal-black)' : 'none',
        }}
      >
        <div className="flex flex-col gap-1 bg-white px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold transition-colors duration-150"
              style={{ color: 'var(--brutal-black)' }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brutal-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            className="brutal-btn brutal-btn-primary mt-2 text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Explore FocusLinks
          </a>
        </div>
      </div>
    </nav>
  );
}

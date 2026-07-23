'use client';

import { FlaskConical, Linkedin, Instagram } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Support', href: '#donate' },
];

export function Footer() {
  return (
    <footer
      className="mt-auto w-full bg-white"
      style={{ borderTop: '2.5px solid var(--brutal-black)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Left — Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2 no-underline">
              <FlaskConical
                className="h-6 w-6"
                style={{ color: 'var(--brutal-orange)' }}
                strokeWidth={2.5}
              />
              <span className="text-lg font-extrabold tracking-tight">
                <span style={{ color: 'var(--brutal-black)' }}>Focus</span>
                <span style={{ color: 'var(--brutal-orange)' }}> Labs</span>
              </span>
            </a>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--brutal-black)' }}
            >
              Building the ecosystem where optometry thrives.
            </p>
          </div>

          {/* Center — Quick links */}
          <div className="flex flex-col gap-3">
            <h4
              className="text-sm font-extrabold uppercase tracking-wide"
              style={{ color: 'var(--brutal-black)' }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold no-underline transition-all duration-150 hover:underline"
                    style={{ color: 'var(--brutal-black)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Social + credit */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-extrabold uppercase tracking-wide"
              style={{ color: 'var(--brutal-black)' }}
            >
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/focusprojects/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card-sm flex h-10 w-10 items-center justify-center no-underline"
                style={{ color: 'var(--brutal-black)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/focus_.in"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card-sm flex h-10 w-10 items-center justify-center no-underline"
                style={{ color: 'var(--brutal-black)' }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--brutal-black)' }}
            >
              Made with ❤️ by students, for students
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="brutal-divider-dashed mb-4" />
        <p
          className="text-center text-xs font-bold"
          style={{ color: 'var(--brutal-black)' }}
        >
          © 2025 Focus Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

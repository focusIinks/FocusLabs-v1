'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-up, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ borderBottom: '3px solid var(--brutal-black)' }}
    >
      {/* Background decorative shapes - sticker-like blobs */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-[0.07]"
        style={{ background: 'var(--brutal-yellow)' }}
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full opacity-[0.07]"
        style={{ background: 'var(--brutal-orange)' }}
      />
      <div
        className="pointer-events-none absolute right-1/3 top-10 h-40 w-40 rounded-full opacity-[0.07]"
        style={{ background: 'var(--brutal-teal)' }}
      />
      <div
        className="pointer-events-none absolute left-1/4 bottom-20 h-24 w-24 rounded-full opacity-[0.05]"
        style={{ background: 'var(--brutal-purple)' }}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* ── Left: Text Content ── */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Announcement Badge */}
            <div className="reveal-up mb-6">
              <span
                className="brutal-badge brutal-badge-green inline-flex items-center gap-1.5"
                style={{ fontSize: '0.75rem' }}
              >
                🔥 Rebranded &amp; Reborn — Mar 2025
              </span>
            </div>

            {/* Headline */}
            <h1
              className="reveal-up mb-4 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ color: 'var(--brutal-black)' }}
            >
              Building the Future of{' '}
              <span className="brutal-underline">Optometry</span>
            </h1>

            {/* Subheadline */}
            <p
              className="reveal-up mb-3 text-xl font-bold sm:text-2xl"
              style={{ color: 'var(--brutal-orange)' }}
            >
              Focus Labs — Where Innovation Meets Vision Care
            </p>

            {/* Description */}
            <p
              className="reveal-up mb-8 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: '#555555' }}
            >
              From AI-powered tools to a unified platform for optometry students
              and professionals. Focus Labs builds the ecosystem, FocusLinks
              connects the community.
            </p>

            {/* CTA Buttons */}
            <div className="reveal-up flex w-full flex-col gap-4 sm:flex-row sm:w-auto">
              <a
                href="#products"
                className="brutal-btn brutal-btn-primary w-full text-base sm:w-auto"
              >
                Explore FocusLinks
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#story"
                className="brutal-btn brutal-btn-outline w-full text-base sm:w-auto"
              >
                <BookOpen className="h-4 w-4" />
                Our Story
              </a>
            </div>
          </div>

          {/* ── Right: Sticker Illustration Composition ── */}
          <div className="relative flex flex-1 items-center justify-center lg:justify-end min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
            {/* Main optometrist sticker — large, center */}
            <div className="reveal-scale sticker-float relative z-10">
              <div
                className="brutal-card p-3 sm:p-4"
                style={{ background: 'var(--brutal-yellow)' }}
              >
                <Image
                  src="/stickers/optometrist-sticker.png"
                  alt="Cute cartoon optometrist sticker — the people we build for"
                  width={220}
                  height={220}
                  className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 object-contain"
                  priority
                />
              </div>
            </div>

            {/* Phoenix sticker — top-left accent, tilted */}
            <div className="sticker-float-alt absolute -left-4 top-0 z-20 sm:left-0 lg:-left-8 lg:top-0">
              <div
                className="brutal-card-sm p-2 sm:p-2.5"
                style={{ background: 'var(--brutal-purple)' }}
              >
                <Image
                  src="/stickers/phoenix-sticker.png"
                  alt="Cute cartoon phoenix sticker — rebranded and reborn"
                  width={80}
                  height={80}
                  className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
                />
              </div>
            </div>

            {/* Lab sticker — bottom-right accent */}
            <div className="sticker-float absolute -bottom-2 -right-2 z-20 sm:bottom-2 sm:right-0 lg:-right-6 lg:bottom-4">
              <div
                className="brutal-card-sm p-2 sm:p-2.5"
                style={{ background: 'var(--brutal-teal)' }}
              >
                <Image
                  src="/stickers/lab-sticker.png"
                  alt="Cute cartoon lab sticker — innovation at the core"
                  width={80}
                  height={80}
                  className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
                />
              </div>
            </div>

            {/* Eyechart sticker — top-right small accent */}
            <div className="sticker-wiggle absolute right-0 top-2 z-20 sm:right-4 lg:right-0 lg:top-6">
              <div
                className="brutal-card-sm p-1.5 sm:p-2"
                style={{ background: 'var(--brutal-orange)' }}
              >
                <Image
                  src="/stickers/eyechart-sticker.png"
                  alt="Cute cartoon eye chart sticker — vision clarity"
                  width={56}
                  height={56}
                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-contain"
                />
              </div>
            </div>

            {/* Links sticker — bottom-left small accent */}
            <div className="sticker-float-alt absolute -left-2 bottom-4 z-20 sm:left-2 lg:-left-4 lg:bottom-12">
              <div
                className="brutal-card-sm p-1.5 sm:p-2"
                style={{ background: 'var(--brutal-green)' }}
              >
                <Image
                  src="/stickers/links-sticker.png"
                  alt="Cute cartoon links sticker — connected community"
                  width={56}
                  height={56}
                  className="h-12 w-12 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-contain"
                />
              </div>
            </div>

            {/* Decorative dots — scattered around */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-3 w-3 rounded-full z-0" style={{ background: 'var(--brutal-yellow)', opacity: 0.5 }} />
            <div className="pointer-events-none absolute right-8 bottom-8 h-2 w-2 rounded-full z-0" style={{ background: 'var(--brutal-teal)', opacity: 0.5 }} />
            <div className="pointer-events-none absolute left-4 top-1/2 h-2.5 w-2.5 rounded-full z-0" style={{ background: 'var(--brutal-purple)', opacity: 0.4 }} />
          </div>
        </div>

        {/* ── Stats Strip ── */}
        <div
          className="reveal-up brutal-card mt-14 grid grid-cols-2 gap-0 p-0 sm:grid-cols-4 lg:mt-20"
          style={{ overflow: 'hidden' }}
        >
          {[
            { value: '6+', label: 'Products', color: 'var(--brutal-orange)' },
            { value: '1K+', label: 'Community', color: 'var(--brutal-purple)' },
            { value: 'Self-Funded', label: 'Independence', color: 'var(--brutal-green)' },
            { value: '∞', label: 'Always Evolving', color: 'var(--brutal-teal)' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-4 py-5 sm:py-6 ${
                i < 3 ? 'border-b-2 sm:border-b-0 sm:border-r-2' : ''
              } ${i < 2 ? 'sm:border-b-0' : ''}`}
              style={{
                borderColor: 'var(--brutal-black)',
              }}
            >
              <span
                className="text-2xl font-black sm:text-3xl lg:text-4xl"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span
                className="mt-1 text-xs font-bold uppercase tracking-widest sm:text-sm"
                style={{ color: 'var(--brutal-black)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

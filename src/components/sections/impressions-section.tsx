'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

/* ─── Accent Color Map ─── */
const ACCENT_COLORS = {
  orange: {
    solid: 'var(--brutal-orange)',
    tint: 'rgba(255, 107, 53, 0.06)',
    dot: '#FF6B35',
  },
  teal: {
    solid: 'var(--brutal-teal)',
    tint: 'rgba(78, 205, 196, 0.06)',
    dot: '#4ECDC4',
  },
  purple: {
    solid: 'var(--brutal-purple)',
    tint: 'rgba(166, 108, 255, 0.06)',
    dot: '#A66CFF',
  },
  pink: {
    solid: 'var(--brutal-pink)',
    tint: 'rgba(255, 143, 171, 0.06)',
    dot: '#FF8FAB',
  },
  green: {
    solid: 'var(--brutal-green)',
    tint: 'rgba(107, 203, 119, 0.06)',
    dot: '#6BCB77',
  },
  yellow: {
    solid: 'var(--brutal-yellow)',
    tint: 'rgba(255, 217, 61, 0.06)',
    dot: '#FFD93D',
  },
} as const;

type AccentKey = keyof typeof ACCENT_COLORS;

/* ─── Testimonial Data ─── */
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  accent: AccentKey;
  stars: number;
  hasTint: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'FocusLinks changed everything for me. One platform, all the tools I need, and a community that actually gets optometry.',
    author: 'Priya S.',
    role: '2nd Year Student',
    accent: 'orange',
    stars: 5,
    hasTint: true,
  },
  {
    quote:
      'Focus Meet is a lifesaver for clinical presentations. No more worrying about patient data leaking through Zoom.',
    author: 'Dr. Rahul M.',
    role: 'Junior Optometrist',
    accent: 'teal',
    stars: 5,
    hasTint: false,
  },
  {
    quote:
      'The fact that Focus Labs keeps free tools free? That speaks volumes. They genuinely care about students.',
    author: 'Sneha K.',
    role: 'Intern',
    accent: 'purple',
    stars: 5,
    hasTint: true,
  },
  {
    quote:
      'I was in the beta for OptoLib. The team actually listened to my feedback and shipped changes within a week.',
    author: 'Amit P.',
    role: '3rd Year Student',
    accent: 'pink',
    stars: 5,
    hasTint: false,
  },
  {
    quote:
      'Focus CaseX replaced three different apps I was using. Having everything in one ecosystem makes a real difference.',
    author: 'Kavya R.',
    role: '1st Year Student',
    accent: 'green',
    stars: 4,
    hasTint: true,
  },
  {
    quote:
      'WhatsApp groups are chaos. FocusLinks is where real optometry conversations happen now.',
    author: 'Mohammed F.',
    role: '2nd Year Student',
    accent: 'yellow',
    stars: 5,
    hasTint: true,
  },
];

/* ─── Reveal on Scroll Wrapper ─── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-up ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Star Rating ─── */
function StarRating({ count, color }: { count: number; color: string }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          style={{
            color: i < count ? color : 'var(--brutal-black)',
            opacity: i < count ? 1 : 0.15,
            fill: i < count ? color : 'transparent',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Single Testimonial Card ─── */
function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  const accent = ACCENT_COLORS[testimonial.accent];

  return (
    <Reveal delay={delay}>
      <div
        className="brutal-card p-6 h-full flex flex-col"
        style={{
          background: testimonial.hasTint ? accent.tint : '#FFFFFF',
        }}
      >
        {/* Big quotation mark */}
        <div className="mb-3 -mt-1">
          <span
            style={{
              fontSize: '3.5rem',
              lineHeight: 1,
              color: accent.solid,
              fontFamily: 'Georgia, serif',
              fontWeight: 900,
              display: 'block',
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
        </div>

        {/* Quote text */}
        <p
          className="text-base md:text-lg leading-relaxed flex-grow mb-5"
          style={{
            color: 'var(--brutal-black)',
            fontStyle: 'italic',
          }}
        >
          {testimonial.quote}
        </p>

        {/* Star rating */}
        <div className="mb-4">
          <StarRating count={testimonial.stars} color={accent.dot} />
        </div>

        {/* Author info */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: '2px dashed var(--brutal-black)' }}
        >
          {/* Colored dot indicator */}
          <div
            className="flex-shrink-0 w-4 h-4 rounded-full"
            style={{
              backgroundColor: accent.dot,
              border: '2px solid var(--brutal-black)',
            }}
            aria-hidden="true"
          />
          <div>
            <p
              className="font-bold text-sm"
              style={{ color: 'var(--brutal-black)' }}
            >
              {testimonial.author}
            </p>
            <p
              className="text-xs font-semibold mt-0.5"
              style={{ color: accent.dot }}
            >
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Section Component ─── */
export function ImpressionsSection() {
  return (
    <section id="impressions" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative optometry stickers */}
      <div className="pointer-events-none absolute -right-6 top-16 hidden lg:block" style={{ transform: 'rotate(12deg)', opacity: 0.12 }}>
        <Image src="/stickers/phoropter-sticker.png" alt="" width={120} height={120} className="w-24 h-24 object-contain" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute -left-4 bottom-20 hidden lg:block" style={{ transform: 'rotate(-8deg)', opacity: 0.1 }}>
        <Image src="/stickers/bigeye-sticker.png" alt="" width={100} height={100} className="w-20 h-20 object-contain" aria-hidden="true" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: 'var(--brutal-black)' }}
          >
            What Students{' '}
            <span
              className="brutal-underline"
              style={{ color: 'var(--brutal-orange)' }}
            >
              Say
            </span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--brutal-black)', opacity: 0.65 }}
          >
            Real feedback from the optometry community.
          </p>
        </Reveal>

        {/* Testimonials Grid — Masonry-like 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {testimonials
              .filter((_, i) => i % 2 === 0)
              .map((t, idx) => (
                <TestimonialCard
                  key={t.author}
                  testimonial={t}
                  delay={idx * 120}
                />
              ))}
          </div>
          {/* Right column — offset for masonry effect */}
          <div className="flex flex-col gap-6 md:gap-8 md:mt-12">
            {testimonials
              .filter((_, i) => i % 2 !== 0)
              .map((t, idx) => (
                <TestimonialCard
                  key={t.author}
                  testimonial={t}
                  delay={idx * 120 + 80}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

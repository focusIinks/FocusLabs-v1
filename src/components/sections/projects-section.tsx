'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Project Data ─── */
interface Project {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  status: 'Free' | 'Beta';
  accent: string;
  icon: string;
  href: string;
  banner: string;
  sticker: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'FocusLinks',
    tagline: 'The Core Platform',
    description:
      'Our flagship community platform — the hub where all Focus Labs projects connect.',
    longDescription:
      'The heart of everything we build. Free membership, selective beta access, feedback-driven development, and the home base for every optometry student and professional. Every product we make flows through FocusLinks — one community, one login, one ecosystem.',
    features: ['Free membership forever', 'Community-driven development', 'One login for all products', 'Beta access for early adopters', 'Direct feedback to builders'],
    status: 'Free',
    accent: '#4ECDC4',
    icon: '🔗',
    href: '#',
    banner: '/stickers/links-banner.png',
    sticker: '/stickers/links-sticker.png',
    featured: true,
  },
  {
    title: 'Focus Meet',
    tagline: 'Secure Clinical Meetings',
    description:
      'Built because other platforms compromise clinical data.',
    longDescription:
      'Other video platforms weren\'t built for healthcare. Focus Meet keeps patient information private and presentations clear — designed specifically for optometry professionals. No data leaks, no compromises.',
    features: ['End-to-end encrypted', 'Built for clinical presentations', 'Patient data protection', 'Screen sharing optimized for eye imaging', 'Free for all users'],
    status: 'Free',
    accent: '#FF8FAB',
    icon: '📹',
    href: '#',
    banner: '/stickers/meet-banner.png',
    sticker: '/stickers/meet-sticker.png',
  },
  {
    title: 'Focus CaseX',
    tagline: 'Case Study Platform',
    description:
      'Log cases, practice viva sessions, and manage clinical data — privacy-first.',
    longDescription:
      'Born from the question: can independent optometrists afford expensive EMRs? Focus CaseX lets you log cases, practice viva sessions, and manage clinical data — privacy-first, student-friendly, and completely free.',
    features: ['Case logging & management', 'Viva practice mode', 'Privacy-first architecture', 'Student-friendly interface', 'Export to PDF'],
    status: 'Free',
    accent: '#6BCB77',
    icon: '📋',
    href: '#',
    banner: '/stickers/casex-banner.png',
    sticker: '/stickers/casex-sticker.png',
  },
  {
    title: 'OptoLib',
    tagline: 'Optometry Knowledge Library',
    description:
      'AI-powered knowledge base integrated into our ecosystem.',
    longDescription:
      'What started as a failed standalone AI became the intelligence layer powering all our tools. OptoLib is an AI-powered knowledge base that understands optometry — integrated directly into the FocusLinks ecosystem.',
    features: ['AI-powered search', 'Optometry-specific knowledge', 'Integrated with all products', 'Community-contributed content', 'Constantly learning & improving'],
    status: 'Free',
    accent: '#A66CFF',
    icon: '📚',
    href: '#',
    banner: '/stickers/optolib-banner.png',
    sticker: '/stickers/optolib-sticker.png',
  },
  {
    title: 'OD Cam',
    tagline: 'Optometry Camera Tool',
    description:
      'Purpose-built camera and imaging tool for optometry documentation.',
    longDescription:
      'Capture, annotate, and share clinical images — all within the ecosystem. OD Cam is purpose-built for optometry workflows, not a generic camera app with a medical label slapped on.',
    features: ['Clinical image capture', 'Annotation & markup tools', 'Ecosystem integration', 'Secure image storage', 'Slit-lamp compatible'],
    status: 'Beta',
    accent: '#FF6B35',
    icon: '📷',
    href: '#',
    banner: '/stickers/odcam-banner.png',
    sticker: '/stickers/odcam-sticker.png',
  },
  {
    title: 'Focus EMR',
    tagline: 'Electronic Medical Records',
    description:
      'Affordable, lightweight EMR built for independent optometry clinics.',
    longDescription:
      'No multi-lakh subscriptions. No bloated software designed for hospitals. Focus EMR is clean, functional records management built specifically for independent optometry clinics — because your clinic deserves better than paper.',
    features: ['Affordable pricing', 'Clinic-specific templates', 'Lightweight & fast', 'Patient records management', 'Appointment scheduling'],
    status: 'Beta',
    accent: '#FFD93D',
    icon: '🏥',
    href: '#',
    banner: '/stickers/emr-banner.png',
    sticker: '/stickers/emr-sticker.png',
  },
  {
    title: 'Focus Cast',
    tagline: 'Audio Learning Platform',
    description:
      'Bite-sized, high-yield audio episodes — screen-free learning on the go.',
    longDescription:
      'Bite-sized, high-yield audio episodes on clinical topics — screen-free learning on the go. Whether you\'re commuting, between patients, or just need a break from screens, Focus Cast delivers knowledge to your ears.',
    features: ['Bite-sized episodes', 'Clinical topics covered', 'Screen-free learning', 'Downloadable for offline', 'Free forever'],
    status: 'Free',
    accent: '#4ECDC4',
    icon: '🎧',
    href: '#',
    banner: '/stickers/cast-banner.png',
    sticker: '/stickers/headphones-sticker.png',
  },
];

/* ─── Component ─── */
export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = section.querySelectorAll('.reveal-up, .reveal-scale');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setDirection(index > activeIndex ? 'right' : 'left');
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 400);

    // Scroll the pill into view
    if (scrollRef.current) {
      const pills = scrollRef.current.querySelectorAll('[data-pill]');
      pills[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeIndex, isAnimating]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % projects.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + projects.length) % projects.length);
  }, [activeIndex, goTo]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const project = projects[activeIndex];
  const badgeTextColor =
    project.accent === '#A66CFF' || project.accent === '#FF8FAB'
      ? '#FFFFFF'
      : 'var(--brutal-black)';

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: '#FAFAFA' }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* ─── Section Header ─── */}
        <div className="reveal-up text-center mb-8 md:mb-12">
          <span
            className="brutal-badge brutal-badge-purple mb-4 inline-block"
            style={{ fontSize: '0.75rem' }}
          >
            🧪 Built by Focus Labs
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              color: 'var(--brutal-black)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            <span className="brutal-underline">Our Products</span>
          </h2>
          <p
            style={{
              marginTop: '1rem',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--brutal-black)',
              fontWeight: 500,
              opacity: 0.6,
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            An ecosystem of tools built for optometry, powered by community.
          </p>
        </div>

        {/* ─── Swipable Product Names ─── */}
        <div className="reveal-up mb-8 md:mb-10">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((p, i) => (
              <button
                key={p.title}
                data-pill
                onClick={() => goTo(i)}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm transition-all"
                style={{
                  background: i === activeIndex ? p.accent : '#FFFFFF',
                  color: i === activeIndex ? (p.accent === '#FFD93D' || p.accent === '#6BCB77' ? 'var(--brutal-black)' : '#FFFFFF') : 'var(--brutal-black)',
                  border: `2.5px solid ${i === activeIndex ? p.accent : 'var(--brutal-black)'}`,
                  boxShadow: i === activeIndex ? `3px 3px 0 ${p.accent}60` : '3px 3px 0 var(--brutal-black)',
                  transform: i === activeIndex ? 'scale(1.05)' : 'scale(1)',
                  opacity: i === activeIndex ? 1 : 0.65,
                }}
              >
                <span>{p.icon}</span>
                <span className="whitespace-nowrap">{p.title}</span>
                {p.featured && <span className="text-xs">⭐</span>}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Full-Width Product Card (Carousel) ─── */}
        <div
          className="reveal-up"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="brutal-card overflow-hidden relative"
            key={project.title + '-card'}
            style={{
              borderTop: `5px solid ${project.accent}`,
              boxShadow: project.featured ? '6px 6px 0 var(--brutal-black)' : undefined,
              animation: isAnimating
                ? `product-slide-${direction} 0.35s ease-out`
                : 'none',
            }}
          >
            {/* ── Banner Image ── */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: '220px',
                background: `${project.accent}10`,
                borderBottom: '2.5px solid var(--brutal-black)',
              }}
            >
              <Image
                src={project.banner}
                alt={`${project.title} banner illustration`}
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 30%, ${project.accent}30 100%)`,
                }}
              />

              {/* Badges */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                {project.featured && (
                  <span
                    className="brutal-badge"
                    style={{
                      background: '#FFD93D',
                      color: 'var(--brutal-black)',
                      fontSize: '0.65rem',
                    }}
                  >
                    ⭐ Flagship
                  </span>
                )}
                <span
                  className="brutal-badge"
                  style={{
                    background: project.status === 'Free' ? 'var(--brutal-green)' : 'var(--brutal-yellow)',
                    color: 'var(--brutal-black)',
                    fontSize: '0.65rem',
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Sticker overlay */}
              <div className="absolute -bottom-5 left-6 z-10">
                <div
                  className="brutal-card p-2"
                  style={{ background: '#FFFFFF' }}
                >
                  <Image
                    src={project.sticker}
                    alt={`${project.title} icon`}
                    width={56}
                    height={56}
                    className="h-12 w-12 md:h-14 md:w-14 object-contain sticker-float"
                  />
                </div>
              </div>
            </div>

            {/* ── Content ── */}
            <div className="p-6 md:p-8 pt-8 md:pt-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Left: Info */}
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-black mb-1"
                    style={{ color: 'var(--brutal-black)' }}
                  >
                    {project.icon} {project.title}
                  </h3>
                  <p
                    className="text-sm font-bold mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.tagline}
                  </p>
                  <p
                    className="text-base font-medium leading-relaxed mb-5"
                    style={{ color: 'var(--brutal-black)', opacity: 0.7 }}
                  >
                    {project.longDescription}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.href}
                      className="brutal-btn"
                      style={{
                        background: project.accent,
                        color: badgeTextColor,
                      }}
                    >
                      {project.status === 'Beta' ? 'Join Beta Waitlist' : 'Get Started Free'}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right: Features */}
                <div className="flex-shrink-0 md:w-56">
                  <h4
                    className="text-xs font-black uppercase tracking-widest mb-3"
                    style={{ color: 'var(--brutal-black)', opacity: 0.45 }}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm font-medium"
                        style={{ color: 'var(--brutal-black)', opacity: 0.75 }}
                      >
                        <span
                          className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ background: `${project.accent}20`, color: project.accent }}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Navigation Arrows ── */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 md:px-4 pointer-events-none z-20">
              <button
                onClick={goPrev}
                className="pointer-events-auto h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '2px solid var(--brutal-black)',
                  boxShadow: '2px 2px 0 var(--brutal-black)',
                }}
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" style={{ color: 'var(--brutal-black)' }} />
              </button>
              <button
                onClick={goNext}
                className="pointer-events-auto h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '2px solid var(--brutal-black)',
                  boxShadow: '2px 2px 0 var(--brutal-black)',
                }}
                aria-label="Next product"
              >
                <ChevronRight className="h-5 w-5" style={{ color: 'var(--brutal-black)' }} />
              </button>
            </div>
          </div>

          {/* ── Dots Indicator ── */}
          <div className="flex justify-center gap-2 mt-5">
            {projects.map((p, i) => (
              <button
                key={p.title + '-dot'}
                onClick={() => goTo(i)}
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: i === activeIndex ? '24px' : '10px',
                  background: i === activeIndex ? p.accent : 'var(--brutal-black)',
                  opacity: i === activeIndex ? 1 : 0.2,
                  border: i === activeIndex ? `2px solid var(--brutal-black)` : 'none',
                }}
                aria-label={`Go to ${p.title}`}
              />
            ))}
          </div>
        </div>

        {/* ─── Ecosystem Note + CTA ─── */}
        <div className="mt-12 md:mt-16 reveal-up">
          <div className="brutal-card p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-[0.06] pointer-events-none">
              <Image
                src="/stickers/ecosystem-sticker.png"
                alt=""
                width={150}
                height={150}
                aria-hidden="true"
              />
            </div>

            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src="/stickers/lab-sticker.png"
                alt="Lab sticker"
                width={36}
                height={36}
                className="sticker-float"
              />
              <span
                className="text-lg md:text-xl font-black"
                style={{ color: 'var(--brutal-black)' }}
              >
                Focus Labs builds the backbone. FocusLinks connects everything.
              </span>
            </div>
            <p
              className="text-sm font-medium mb-5 max-w-md mx-auto"
              style={{ color: 'var(--brutal-black)', opacity: 0.6 }}
            >
              Every product integrates seamlessly. One ecosystem, one community, one login.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="brutal-btn brutal-btn-primary"
              >
                🔗 Join FocusLinks Free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#story"
                className="brutal-btn brutal-btn-outline"
              >
                Learn Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Carousel animation keyframes ── */}
      <style jsx global>{`
        @keyframes product-slide-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes product-slide-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;

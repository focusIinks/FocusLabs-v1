'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const storyBlocks = [
  {
    number: '01',
    title: 'It started with a problem.',
    subtitle: 'Dec 2023 — The Spark',
    description:
      "We were optometry students, and we saw it every day. Independent practitioners running clinics on paper. Multi-lakh EMR software priced for hospitals, not small clinics. Nobody was building for the people who actually needed it. That gap wasn't just inconvenient — it was holding an entire profession back.",
    illustration: '/stickers/story-problem.png',
    accent: 'var(--brutal-orange)',
    accentHex: '#FF6B35',
  },
  {
    number: '02',
    title: 'We built, but nobody came.',
    subtitle: 'Jul 2024 — The Launch',
    description:
      "We poured months into Focus-IN, launched it proudly with free tools for everyone. Crickets. A confusing name, zero marketing budget, and no community reach meant even our free products never got to the people who needed them most. The tools were solid — the awareness was non-existent. We had built a lighthouse in a desert.",
    illustration: '/stickers/story-nobody.png',
    accent: 'var(--brutal-yellow)',
    accentHex: '#FFD93D',
  },
  {
    number: '03',
    title: 'The AI that taught us humility.',
    subtitle: 'Jan → Late 2024 — The Pivot',
    description:
      "Focus.Ai was our bold bet — an AI study toolkit that could answer questions, generate quizzes, and help students study smarter. Then ChatGPT happened. And Claude. And Gemini. Competing with billion-dollar AI companies was a losing game. So we did the hardest thing: we shut it down. But here's the twist — we didn't abandon AI. We embedded it into our ecosystem. The failure taught us that standalone AI can't survive, but integrated AI thrives.",
    illustration: '/stickers/story-humility.png',
    accent: 'var(--brutal-purple)',
    accentHex: '#A66CFF',
  },
  {
    number: '04',
    title: 'We rose like a phoenix.',
    subtitle: 'Mar 2025 — The Rebirth',
    description:
      "We didn't just rebrand. We reimagined everything. Focus Labs — a name that finally says what we do: build, experiment, and innovate. And FocusLinks became the flagship — a platform that ensures every project we build actually reaches its audience. No more building in silence. No more lighthouses in deserts. This time, the community comes first.",
    illustration: '/stickers/story-phoenix.png',
    accent: 'var(--brutal-pink)',
    accentHex: '#FF8FAB',
  },
  {
    number: '05',
    title: 'One ecosystem. One mission.',
    subtitle: '2025+ — The Rise',
    description:
      "Today, Focus Labs is the backbone — the lab where every tool is born. FocusLinks is the core — the platform where every tool finds its people. Focus Meet, OptoLib, OD Cam, EMR, CaseX, Cast — each product integrates seamlessly. We're self-funded because independence means we answer to you, not investors. Free tools stay free. We only charge where sustainability demands it. This isn't just software — it's a movement for better optometry.",
    illustration: '/stickers/story-ecosystem.png',
    accent: 'var(--brutal-green)',
    accentHex: '#6BCB77',
  },
];

function useReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

export function StorySection() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* ── Decorative background shapes ── */}
      <div
        className="absolute top-12 right-8 w-24 h-24 rounded-full opacity-[0.06] pointer-events-none hidden md:block"
        style={{ background: 'var(--brutal-yellow)' }}
      />
      <div
        className="absolute bottom-20 left-6 w-16 h-16 opacity-[0.06] pointer-events-none hidden md:block"
        style={{ background: 'var(--brutal-green)', transform: 'rotate(12deg)' }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="brutal-underline reveal-up text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: 'var(--brutal-black)' }}
          >
            Our Story
          </h2>
          <p
            className="mt-6 text-lg md:text-xl font-semibold reveal-up"
            style={{
              color: 'var(--brutal-black)',
              opacity: 0.65,
              transitionDelay: '0.1s',
            }}
          >
            From a spark of frustration to a rising ecosystem.
          </p>
        </div>

        {/* ── Story Blocks ── */}
        <div className="relative flex flex-col gap-10 md:gap-14">
          {storyBlocks.map((block, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={block.number} className="relative">
                <div
                  className="reveal-up relative"
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  <div
                    className="brutal-card overflow-hidden"
                    style={{ borderTop: `4px solid ${block.accentHex}` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* ── Illustration Side ── */}
                      <div
                        className={`flex-shrink-0 p-6 md:p-8 flex items-center justify-center md:w-2/5 ${
                          isEven ? 'md:order-1' : 'md:order-2'
                        }`}
                        style={{
                          background: `${block.accentHex}08`,
                        }}
                      >
                        <div className="sticker-float relative">
                          <div
                            className="rounded-xl p-2"
                            style={{
                              background: `${block.accentHex}15`,
                              border: `2px dashed ${block.accentHex}30`,
                            }}
                          >
                            <Image
                              src={block.illustration}
                              alt={`Illustration for: ${block.title}`}
                              width={180}
                              height={180}
                              className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ── Text Side ── */}
                      <div
                        className={`flex-1 p-6 md:p-8 flex flex-col justify-center ${
                          isEven ? 'md:order-2' : 'md:order-1'
                        }`}
                      >
                        {/* Number + Subtitle row */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="shrink-0 text-4xl md:text-5xl font-black leading-none select-none"
                            style={{
                              color: block.accent,
                              WebkitTextStroke: '2px var(--brutal-black)',
                            }}
                          >
                            {block.number}
                          </span>
                          <span
                            className="brutal-badge"
                            style={{
                              background: block.accent,
                              color: block.accentHex === '#A66CFF' || block.accentHex === '#FF8FAB' ? '#FFFFFF' : 'var(--brutal-black)',
                            }}
                          >
                            {block.subtitle}
                          </span>
                        </div>

                        <h3
                          className="text-xl md:text-2xl font-black mb-3 leading-tight"
                          style={{ color: 'var(--brutal-black)' }}
                        >
                          {block.title}
                        </h3>
                        <p
                          className="text-sm md:text-base font-medium leading-relaxed"
                          style={{ color: 'var(--brutal-black)', opacity: 0.7 }}
                        >
                          {block.description}
                        </p>

                        {/* Accent bar */}
                        <div
                          className="mt-4 h-1 rounded-full"
                          style={{ background: block.accent, width: '40%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashed divider between blocks */}
                {index < storyBlocks.length - 1 && (
                  <div
                    className="mt-10 md:mt-14 mx-auto w-3/4 brutal-divider-dashed reveal-up"
                    style={{ transitionDelay: `${index * 0.12 + 0.05}s` }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Quote Block ── */}
        <div className="mt-16 md:mt-20 reveal-up" style={{ transitionDelay: '0.2s' }}>
          <div className="brutal-card p-6 md:p-8 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[10px]"
              style={{ background: 'var(--brutal-green)' }}
            />
            {/* Small decorative stickers */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.06] pointer-events-none">
              <Image
                src="/stickers/phoenix-sticker.png"
                alt=""
                width={120}
                height={120}
                aria-hidden="true"
              />
            </div>
            <div className="absolute -left-4 -top-4 opacity-[0.06] pointer-events-none">
              <Image
                src="/stickers/ecosystem-sticker.png"
                alt=""
                width={100}
                height={100}
                aria-hidden="true"
              />
            </div>
            <blockquote
              className="text-xl md:text-2xl lg:text-3xl font-black leading-snug relative z-10"
              style={{ color: 'var(--brutal-black)' }}
            >
              &ldquo;We don&rsquo;t just build tools. We build an ecosystem where every tool finds its audience.&rdquo;
            </blockquote>
            <p
              className="mt-4 text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--brutal-green)', opacity: 0.8 }}
            >
              — The Focus Labs Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

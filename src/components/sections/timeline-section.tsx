'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Milestone {
  date: string;
  title: string;
  description: string;
  accentColor: string;
  accentHex: string;
  sticker: string;
  emoji: string;
  isHighlight?: boolean;
}

const milestones: Milestone[] = [
  {
    date: 'Dec 2023',
    title: 'The Idea',
    description:
      'It started with a simple question: can independent optometrists afford multi-lakh EMR software for a small clinic? That question sparked everything.',
    accentColor: 'var(--brutal-orange)',
    accentHex: '#FF6B35',
    sticker: '/stickers/idea-sticker.png',
    emoji: '💡',
  },
  {
    date: 'Jan 2024',
    title: 'Focus.Ai Goes Live',
    description:
      "Our first product — an AI study toolkit for optometry students. Ambitious, bold, and ahead of its time. But the AI landscape was about to change dramatically.",
    accentColor: 'var(--brutal-purple)',
    accentHex: '#A66CFF',
    sticker: '/stickers/brain-sticker.png',
    emoji: '🤖',
  },
  {
    date: 'Jul 2024',
    title: 'Focus-IN Launches',
    description:
      "Official launch with free tools — Focus Cast, Focus Gen, and more. But a confusing name and zero marketing meant even free products couldn't reach people.",
    accentColor: 'var(--brutal-teal)',
    accentHex: '#4ECDC4',
    sticker: '/stickers/megaphone-sticker.png',
    emoji: '📢',
  },
  {
    date: 'Late 2024',
    title: 'The AI Pivot',
    description:
      "ChatGPT and AI giants made Focus.Ai unsustainable. Instead of fighting, we shut it down and integrated AI into our ecosystem. Failure became our greatest teacher.",
    accentColor: 'var(--brutal-yellow)',
    accentHex: '#FFD93D',
    sticker: '/stickers/unlock-sticker.png',
    emoji: '🧪',
  },
  {
    date: 'Mar 2025',
    title: 'Reborn as Focus Labs',
    description:
      "We rebranded to Focus Labs and launched FocusLinks as our flagship. No more building in silence — every project finds its audience.",
    accentColor: 'var(--brutal-pink)',
    accentHex: '#FF8FAB',
    sticker: '/stickers/phoenix-sticker.png',
    emoji: '🔥',
    isHighlight: true,
  },
  {
    date: '2025+',
    title: 'The Ecosystem Rises',
    description:
      "Focus Meet, OptoLib, OD Cam, EMR — every project integrates with FocusLinks. Beta testing, free tools stay free, clinical data privacy. The phoenix keeps rising.",
    accentColor: 'var(--brutal-green)',
    accentHex: '#6BCB77',
    sticker: '/stickers/ecosystem-sticker.png',
    emoji: '🔗',
  },
];

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const revealElements = section.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      id="journey"
    >
      {/* Background decorative stickers */}
      <div
        className="pointer-events-none absolute -right-10 top-20 hidden lg:block"
        style={{ transform: 'rotate(12deg)', opacity: 0.06 }}
      >
        <Image
          src="/stickers/retinoscope-sticker.png"
          alt=""
          width={180}
          height={180}
          className="w-36 h-36 object-contain"
          aria-hidden="true"
        />
      </div>
      <div
        className="pointer-events-none absolute -left-8 bottom-32 hidden lg:block"
        style={{ transform: 'rotate(-10deg)', opacity: 0.05 }}
      >
        <Image
          src="/stickers/trialframe-sticker.png"
          alt=""
          width={150}
          height={150}
          className="w-28 h-28 object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20 reveal-up">
          <span
            className="brutal-badge brutal-badge-green mb-4 inline-block"
            style={{ fontSize: '0.75rem' }}
          >
            📅 2023 — Present
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: 'var(--brutal-black)' }}
          >
            Our <span className="brutal-underline">Journey</span>
          </h2>
          <p
            className="mt-5 text-base md:text-lg font-medium max-w-xl mx-auto"
            style={{ color: 'var(--brutal-black)', opacity: 0.65 }}
          >
            From a spark of frustration to a rising ecosystem — every chapter made us stronger.
          </p>
        </div>

        {/* Timeline — Single column, visually rich */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-[1.5px]"
            style={{ background: 'var(--brutal-black)' }}
          />

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            const total = milestones.length;
            const isLast = index === total - 1;

            return (
              <div
                key={milestone.date + milestone.title}
                className={`relative mb-10 md:mb-14 ${isLast ? 'mb-0' : ''}`}
              >
                {/* ── Timeline Node ── */}
                <div
                  className="absolute z-20 flex items-center justify-center left-[5px] md:left-1/2 md:-translate-x-1/2"
                  style={{
                    top: '28px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: '3px solid var(--brutal-black)',
                    background: milestone.accentColor,
                    boxShadow: '3px 3px 0px var(--brutal-black)',
                  }}
                >
                  <span className="text-xs font-black" style={{ color: 'var(--brutal-black)' }}>
                    {index + 1}
                  </span>
                </div>

                {/* ── Mobile: Card always right of line ── */}
                <div className="pl-14 md:hidden">
                  <MilestoneCard
                    milestone={milestone}
                    index={index}
                  />
                </div>

                {/* ── Desktop: Alternating left/right ── */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 items-start">
                  {/* Left column */}
                  <div className={`${isLeft ? '' : 'md:order-3'}`}>
                    {isLeft ? (
                      <MilestoneCard milestone={milestone} index={index} />
                    ) : (
                      <YearDisplay milestone={milestone} align="right" />
                    )}
                  </div>

                  {/* Center spacer (line goes through here via absolute positioning) */}
                  <div className="md:order-2 w-[3px]" />

                  {/* Right column */}
                  <div className={`${isLeft ? 'md:order-3' : ''}`}>
                    {isLeft ? (
                      <YearDisplay milestone={milestone} align="left" />
                    ) : (
                      <MilestoneCard milestone={milestone} index={index} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — Rising */}
        <div className="mt-14 md:mt-20 text-center reveal-up">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="sticker-float">
              <Image
                src="/stickers/rising-sticker.png"
                alt="Rising — Focus Labs keeps growing"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
              />
            </div>
            <p
              className="text-lg md:text-xl font-black italic"
              style={{ color: 'var(--brutal-orange)' }}
            >
              &ldquo;We fell. We learned. We rose.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Year Display (for alternating side) ─── */
function YearDisplay({
  milestone,
  align,
}: {
  milestone: Milestone;
  align: 'left' | 'right';
}) {
  return (
    <div
      className={`flex flex-col items-start gap-1 pt-3 ${
        align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
      }`}
    >
      <div
        className="sticker-float-alt"
        style={{
          transform: align === 'right' ? 'rotate(-6deg)' : 'rotate(6deg)',
        }}
      >
        <Image
          src={milestone.sticker}
          alt=""
          width={72}
          height={72}
          className="w-14 h-14 md:w-[72px] md:h-[72px] object-contain"
          style={{
            filter: 'drop-shadow(2px 2px 0px var(--brutal-black))',
          }}
          aria-hidden="true"
        />
      </div>
      <span
        className="text-3xl md:text-4xl lg:text-5xl font-black leading-none"
        style={{ color: milestone.accentColor }}
      >
        {milestone.date}
      </span>
      <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--brutal-black)', opacity: 0.4 }}>
        Chapter {milestone.date === '2025+' ? 'Now' : milestone.date.split(' ')[1] || milestone.date}
      </span>
    </div>
  );
}

/* ─── Milestone Card ─── */
function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isHighlight = milestone.isHighlight;
  const badgeTextColor =
    milestone.accentHex === '#A66CFF' || milestone.accentHex === '#FF8FAB'
      ? '#FFFFFF'
      : 'var(--brutal-black)';

  return (
    <div
      className={`brutal-card relative overflow-hidden ${
        isHighlight ? 'ring-2 ring-offset-2' : ''
      }`}
      style={{
        borderLeft: `5px solid ${milestone.accentHex}`,
        ...(isHighlight
          ? {
              ringColor: milestone.accentHex,
              background: `linear-gradient(135deg, #FFFFFF 0%, ${milestone.accentHex}0A 100%)`,
            }
          : {}),
      }}
    >
      {/* Sticker watermark */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-8px',
          bottom: '-8px',
          transform: 'rotate(-8deg)',
          opacity: 0.08,
          zIndex: 0,
        }}
      >
        <Image
          src={milestone.sticker}
          alt=""
          width={140}
          height={140}
          className="w-28 h-28 md:w-36 md:h-36 object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="p-5 md:p-6 relative z-10">
        {/* Top row: emoji + badge + number */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl leading-none" aria-hidden="true">
            {milestone.emoji}
          </span>
          <span
            className="brutal-badge inline-block"
            style={{
              background: milestone.accentColor,
              color: badgeTextColor,
            }}
          >
            {milestone.date}
          </span>
          {isHighlight && (
            <span
              className="brutal-badge"
              style={{
                background: 'var(--brutal-yellow)',
                color: 'var(--brutal-black)',
              }}
            >
              ⭐ Key Moment
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-black mb-2 leading-tight"
          style={{ color: 'var(--brutal-black)' }}
        >
          {milestone.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm md:text-base font-medium leading-relaxed"
          style={{ color: 'var(--brutal-black)', opacity: 0.75 }}
        >
          {milestone.description}
        </p>

        {/* Bottom accent bar */}
        <div
          className="mt-4 h-1 rounded-full"
          style={{
            background: milestone.accentColor,
            width: '30%',
          }}
        />
      </div>
    </div>
  );
}

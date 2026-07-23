'use client';

import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: 'Identify Real Needs',
    subtitle: 'Listen first.',
    description:
      "We don't build based on trends or investor demands. Every tool starts with a real problem voiced by optometry students and practitioners. We listen intensely — in WhatsApp groups, in clinics, in classrooms — before writing a single line of code.",
    accent: 'var(--brutal-teal)',
    accentHex: '#4ECDC4',
    sticker: '/stickers/bigeye-sticker.png',
  },
  {
    number: 2,
    title: 'Build & Experiment',
    subtitle: 'Prototype fast.',
    description:
      "Focus Labs isn't just a name — it's how we work. We prototype fast, fail faster, and iterate relentlessly. Every experiment teaches us something. We'd rather ship something rough and improve it than wait for perfection that never comes.",
    accent: 'var(--brutal-yellow)',
    accentHex: '#FFD93D',
    sticker: '/stickers/build-sticker.png',
  },
  {
    number: 3,
    title: 'Beta Test with Community',
    subtitle: 'Quality over quantity.',
    description:
      "We don't launch to everyone at once. Community volunteers test first, give raw feedback, and shape the final product. This isn't a bug — it's a feature. The people who use our tools help us build them better.",
    accent: 'var(--brutal-orange)',
    accentHex: '#FF6B35',
    sticker: '/stickers/team-sticker.png',
  },
  {
    number: 4,
    title: 'Integrate with FocusLinks',
    subtitle: 'One ecosystem.',
    description:
      "Every product connects to FocusLinks. One community, one login, one ecosystem. No more scattered tools that don't talk to each other. Everything we build flows through the same platform — because fragmentation is the enemy of progress.",
    accent: 'var(--brutal-purple)',
    accentHex: '#A66CFF',
    sticker: '/stickers/links-sticker.png',
  },
  {
    number: 5,
    title: 'Launch & Evolve',
    subtitle: 'Never done.',
    description:
      "We ship, learn, and improve. Our products are never \"done\" — they evolve with the community that uses them. Every piece of feedback, every bug report, every feature request makes the next version better. The phoenix keeps rising.",
    accent: 'var(--brutal-green)',
    accentHex: '#6BCB77',
    sticker: '/stickers/rising-sticker.png',
  },
];

export function BtsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: '#FEF9C3' }}
    >
      {/* Decorative sticker — top-right, rotated */}
      <div className="pointer-events-none absolute -right-8 top-8 hidden rotate-12 opacity-[0.08] md:block">
        <Image
          src="/stickers/lab-sticker.png"
          alt=""
          width={180}
          height={180}
          aria-hidden="true"
        />
      </div>
      {/* Decorative sticker — bottom-left */}
      <div className="pointer-events-none absolute -left-8 bottom-12 hidden -rotate-6 opacity-[0.06] md:block">
        <Image
          src="/stickers/idea-sticker.png"
          alt=""
          width={140}
          height={140}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span
            className="brutal-badge brutal-badge-orange mb-4 inline-block"
            style={{ fontSize: '0.75rem' }}
          >
            🔬 How We Build
          </span>
          <h2
            className="reveal-up mb-3 text-3xl font-black uppercase tracking-tight md:text-5xl"
            style={{ color: 'var(--brutal-black)' }}
          >
            Behind the Scenes
          </h2>
          <p
            className="reveal-up mx-auto max-w-2xl text-base font-semibold md:text-lg"
            style={{ color: 'var(--brutal-black)', opacity: 0.7 }}
          >
            How we build tools that actually work — and make sure they reach
            you.
          </p>
        </div>

        {/* Steps flow — vertical on mobile, horizontal connector on desktop */}
        <div className="flex flex-col gap-6 md:gap-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.number} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute left-1/2 top-full w-[3px] z-0"
                    style={{
                      height: '1.5rem',
                      background: 'var(--brutal-black)',
                      opacity: 0.15,
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}

                <div
                  className="reveal-up"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="brutal-card overflow-hidden"
                    style={{ borderLeft: `5px solid ${step.accentHex}` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* ── Sticker Side ── */}
                      <div
                        className={`flex-shrink-0 p-5 md:p-6 flex items-center justify-center md:w-2/5 ${
                          isEven ? 'md:order-1' : 'md:order-2'
                        }`}
                        style={{
                          background: `${step.accentHex}08`,
                        }}
                      >
                        <div className="sticker-float relative">
                          <div
                            className="rounded-xl p-2"
                            style={{
                              background: `${step.accentHex}12`,
                              border: `2px dashed ${step.accentHex}25`,
                            }}
                          >
                            <Image
                              src={step.sticker}
                              alt={`Step ${step.number}: ${step.title}`}
                              width={120}
                              height={120}
                              className="h-24 w-24 md:h-28 md:w-28 object-contain"
                            />
                          </div>
                          {/* Step number overlay */}
                          <div
                            className="absolute -top-3 -right-3 h-8 w-8 rounded-full flex items-center justify-center text-sm font-black z-10"
                            style={{
                              background: step.accent,
                              color: 'var(--brutal-black)',
                              border: '2.5px solid var(--brutal-black)',
                              boxShadow: '2px 2px 0 var(--brutal-black)',
                            }}
                          >
                            {step.number}
                          </div>
                        </div>
                      </div>

                      {/* ── Text Side ── */}
                      <div
                        className={`flex-1 p-5 md:p-6 flex flex-col justify-center ${
                          isEven ? 'md:order-2' : 'md:order-1'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="brutal-badge"
                            style={{
                              background: step.accent,
                              color: 'var(--brutal-black)',
                              fontSize: '0.6rem',
                            }}
                          >
                            Step {step.number}
                          </span>
                          <span
                            className="text-xs font-bold uppercase tracking-widest"
                            style={{ color: step.accent, opacity: 0.6 }}
                          >
                            {step.subtitle}
                          </span>
                        </div>
                        <h3
                          className="text-lg md:text-xl font-black uppercase tracking-tight mb-2"
                          style={{ color: 'var(--brutal-black)' }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-sm md:text-base font-medium leading-relaxed"
                          style={{ color: 'var(--brutal-black)', opacity: 0.7 }}
                        >
                          {step.description}
                        </p>

                        {/* Progress bar */}
                        <div className="mt-4 flex items-center gap-3">
                          <div
                            className="h-1.5 rounded-full flex-1"
                            style={{ background: `${step.accentHex}15` }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                background: step.accent,
                                width: `${(index + 1) * 20}%`,
                              }}
                            />
                          </div>
                          <span
                            className="text-xs font-black"
                            style={{ color: step.accent }}
                          >
                            {index + 1}/{steps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile arrow connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2 md:hidden">
                    <span
                      className="text-xl font-black"
                      style={{ color: step.accent }}
                    >
                      ↓
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

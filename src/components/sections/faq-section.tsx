'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is Focus Labs?',
    answer:
      'Focus Labs is the backbone of the FocusLinks ecosystem. We build, experiment, and innovate tools specifically for optometry students and professionals. Every product we create integrates with FocusLinks — our central community platform.',
  },
  {
    question: 'What is FocusLinks?',
    answer:
      "FocusLinks is our flagship platform and the core of everything we build. It's a community hub where optometry students and professionals connect, access tools, join beta tests, and shape the future of our products. Membership is free, and beta testing spots are selectively opened to community volunteers.",
  },
  {
    question: 'Why did you rebrand from Focus-IN?',
    answer:
      'The name "Focus-IN" was confusing and didn\'t communicate what we actually do. Combined with poor marketing in our early days, even our free tools struggled to reach people. "Focus Labs" better reflects our identity — we build, experiment, and innovate. And FocusLinks ensures every project finds its audience.',
  },
  {
    question: 'Are the tools really free?',
    answer:
      'Yes — many of our core tools are completely free. FocusLinks, Focus Meet, Focus Cast, and OptoLib are free to use. We only monetize what needs it (like Focus.Ai and Focus EMR) to sustain development. Our philosophy: if it can be free, it stays free.',
  },
  {
    question: 'What happened to Focus.Ai?',
    answer:
      "Focus.Ai launched as a standalone AI tool, but with the rise of ChatGPT and large AI platforms, competing head-to-head wasn't sustainable. Instead, we integrated AI into our ecosystem — it now powers features across OptoLib, Focus CaseX, and other tools. We turned a failure into our greatest advantage.",
  },
  {
    question: 'How do I join beta testing?',
    answer:
      'Join FocusLinks! Community members get first access to experimental features and new products. Beta spots are selective — we choose volunteers who are genuinely interested in shaping products through feedback.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Absolutely. We built Focus Meet specifically because other platforms compromise clinical data. Privacy-first design is in our DNA. For tools like Focus CaseX, data is processed in your browser and never stored on our servers.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Decorative optometry sticker */}
      <div className="pointer-events-none absolute -right-8 top-24 hidden lg:block" style={{ transform: 'rotate(15deg)', opacity: 0.08 }}>
        <Image src="/stickers/retinoscope-sticker.png" alt="" width={140} height={140} className="w-28 h-28 object-contain" aria-hidden="true" />
      </div>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2"
            style={{ color: 'var(--brutal-black)' }}
          >
            Help{' '}
            <span className="brutal-underline" style={{ textDecorationColor: 'var(--brutal-yellow)' }}>
              Center
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="brutal-card reveal-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  overflow: 'hidden',
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  style={{ backgroundColor: 'transparent' }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base md:text-lg font-black uppercase tracking-tight pr-4"
                    style={{ color: 'var(--brutal-black)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8"
                    style={{
                      border: '2px solid var(--brutal-black)',
                      backgroundColor: isOpen ? 'var(--brutal-yellow)' : '#ffffff',
                      boxShadow: isOpen
                        ? 'none'
                        : '2px 2px 0 var(--brutal-black)',
                      transform: isOpen ? 'translate(2px, 2px)' : 'translate(0, 0)',
                      transition:
                        'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    }}
                  >
                    <ChevronDown
                      size={18}
                      style={{
                        color: 'var(--brutal-black)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="px-5 md:px-6 pb-5 md:pb-6 pt-0"
                    style={{
                      borderTop: isOpen ? '2px solid var(--brutal-black)' : 'none',
                    }}
                  >
                    <p
                      className="text-sm md:text-base font-medium leading-relaxed"
                      style={{ color: 'var(--brutal-black)', opacity: 0.8 }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

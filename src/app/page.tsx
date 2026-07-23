'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { StorySection } from '@/components/sections/story-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { BtsSection } from '@/components/sections/bts-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ImpressionsSection } from '@/components/sections/impressions-section';
import { DonationSection } from '@/components/sections/donation-section';
import { TeamSection } from '@/components/sections/team-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Footer } from '@/components/sections/footer';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

/* Community CTA Section */
function CommunitySection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#F0FDFA', borderTop: '3px solid var(--brutal-black)' }}>
      {/* Decorative scattered stickers */}
      <div className="pointer-events-none absolute -right-6 top-8 opacity-[0.08] hidden lg:block" style={{ transform: 'rotate(12deg)' }}>
        <Image src="/stickers/phoenix-sticker.png" alt="" width={120} height={120} className="w-28 h-28 object-contain" aria-hidden="true" />
      </div>
      <div className="pointer-events-none absolute -left-6 bottom-12 opacity-[0.06] hidden lg:block" style={{ transform: 'rotate(-8deg)' }}>
        <Image src="/stickers/ecosystem-sticker.png" alt="" width={100} height={100} className="w-24 h-24 object-contain" aria-hidden="true" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Sticker accent */}
        <div className="mb-6 flex justify-center">
          <div className="sticker-float">
            <div className="brutal-card-sm p-2" style={{ background: 'var(--brutal-teal)' }}>
              <Image src="/stickers/optometrist-sticker.png" alt="Built for optometrists" width={48} height={48} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--brutal-black)' }}>
          Join the <span className="brutal-underline" style={{ color: 'var(--brutal-teal)' }}>FocusLinks</span> Community
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: 'var(--brutal-black)', opacity: 0.65 }}>
          WhatsApp groups are chaos. FocusLinks is where real optometry conversations happen. Connect, learn, and build with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="#products"
            className="brutal-btn brutal-btn-primary"
          >
            🔗 Join FocusLinks Free
          </a>
          <a
            href="https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn brutal-btn-outline"
          >
            <Instagram className="h-5 w-5" /> Follow Updates
          </a>
        </div>
        <div className="flex justify-center gap-3 md:gap-5 opacity-70 flex-wrap">
          <div className="sticker-float"><Image src="/stickers/links-sticker.png" alt="FocusLinks is the community" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 object-contain" /></div>
          <div className="sticker-float-alt"><Image src="/stickers/growth-sticker.png" alt="Growing together" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 object-contain" /></div>
          <div className="sticker-wiggle"><Image src="/stickers/rising-sticker.png" alt="Rising together" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 object-contain" /></div>
          <div className="sticker-float"><Image src="/stickers/idea-sticker.png" alt="Ideas start here" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 object-contain" /></div>
          <div className="sticker-float-alt"><Image src="/stickers/care-sticker.png" alt="We care" width={56} height={56} className="w-10 h-10 md:w-12 md:h-12 object-contain" /></div>
        </div>
      </div>
    </section>
  );
}

/* Scroll Animation Observer */
function ScrollObserver({ children }: { children: React.ReactNode }) {
  useEffect(() => {
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
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <>{children}</>;
}

/* Marquee Banner */
function MarqueeBanner() {
  const items = [
    '🔗 FocusLinks — The Core Platform',
    '📹 Focus Meet — Secure Clinical Meetings',
    '📋 Focus CaseX — Case Studies',
    '📚 OptoLib — Knowledge Library',
    '📷 OD Cam — Imaging Tool',
    '🏥 Focus EMR — Clinical Records',
    '🎧 Focus Cast — Audio Learning',
  ];
  return (
    <div className="py-3 overflow-hidden" style={{ background: 'var(--brutal-yellow)', borderBottom: '2.5px solid var(--brutal-black)' }}>
      <div className="brutal-marquee">
        <div className="brutal-marquee-inner">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="mx-6 text-sm font-bold whitespace-nowrap" style={{ color: 'var(--brutal-black)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Main Page */
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
      <ScrollObserver>
        <Navbar />
        <MarqueeBanner />
        <main className="flex-grow">
          <HeroSection />
          <StorySection />
          <TimelineSection />
          <BtsSection />
          <ProjectsSection />
          <ImpressionsSection />
          <DonationSection />
          <TeamSection />
          <FaqSection />
          <CommunitySection />
        </main>
        <Footer />
      </ScrollObserver>
    </div>
  );
}

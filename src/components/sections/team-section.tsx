'use client';

import { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  quote: string;
  initials: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Janarthan Veeramani',
    title: 'Founder & CEO',
    quote: 'I founded Focus Labs to solve the problems I faced as a student.',
    initials: 'JV',
    color: 'var(--brutal-orange)',
  },
  {
    name: 'Shivashangari M',
    title: 'Head of Product',
    quote: 'I turn ideas into reality through prototyping and real-world problem solving.',
    initials: 'SM',
    color: 'var(--brutal-teal)',
  },
  {
    name: 'Anshi Jha',
    title: 'MD, Focus Cast',
    quote: 'I lead our audio learning platform for high-quality, on-the-go content.',
    initials: 'AJ',
    color: 'var(--brutal-purple)',
  },
  {
    name: 'Akukalia Chinenyenwa Helen',
    title: 'MD, Focus Links',
    quote: 'I manage FocusLinks, our centralized resource hub.',
    initials: 'AC',
    color: 'var(--brutal-pink)',
  },
  {
    name: 'Hariharan',
    title: 'Head of Marketing',
    quote: 'Connecting our innovative tools with students who need them most.',
    initials: 'H',
    color: 'var(--brutal-green)',
  },
  {
    name: 'Mugunthan Mani',
    title: 'Creative Director',
    quote: 'I shape the brand to reflect our innovative and student-first spirit.',
    initials: 'MM',
    color: 'var(--brutal-yellow)',
  },
  {
    name: 'Vimal',
    title: 'Head of Educational Products',
    quote: 'Creating high-quality, accessible learning experiences for students.',
    initials: 'V',
    color: 'var(--brutal-orange)',
  },
];

const LINKEDIN_URL = 'https://www.linkedin.com/company/focusprojects/';
const INSTAGRAM_URL = 'https://www.instagram.com/focus_.in';

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2"
            style={{ color: 'var(--brutal-black)' }}
          >
            Meet the{' '}
            <span className="brutal-underline" style={{ textDecorationColor: 'var(--brutal-yellow)' }}>
              Team
            </span>
          </h2>
          <p
            className="text-lg md:text-xl font-bold mt-4 max-w-2xl mx-auto"
            style={{ color: 'var(--brutal-black)', opacity: 0.7 }}
          >
            The people building the Focus Labs ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="brutal-card p-6 reveal-up flex flex-col items-center text-center"
              style={{
                animationDelay: `${index * 100}ms`,
                transform:
                  hoveredIndex === index
                    ? 'translate(-2px, -2px)'
                    : 'translate(0, 0)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Initials Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-2xl font-black text-white"
                style={{
                  backgroundColor: member.color,
                  border: '3px solid var(--brutal-black)',
                  boxShadow: '3px 3px 0 var(--brutal-black)',
                }}
              >
                {member.initials}
              </div>

              {/* Name */}
              <h3
                className="text-lg font-black uppercase tracking-tight leading-tight"
                style={{ color: 'var(--brutal-black)' }}
              >
                {member.name}
              </h3>

              {/* Title */}
              <p
                className="text-sm font-bold mt-1 mb-3"
                style={{ color: member.color }}
              >
                {member.title}
              </p>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: 'var(--brutal-black)', opacity: 0.75 }}
              >
                &ldquo;{member.quote}&rdquo;
              </p>

              {/* Social Icons */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card-sm flex items-center justify-center w-9 h-9"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid var(--brutal-black)',
                    boxShadow: '2px 2px 0 var(--brutal-black)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-1px, -1px)';
                    e.currentTarget.style.boxShadow = '3px 3px 0 var(--brutal-black)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '2px 2px 0 var(--brutal-black)';
                  }}
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={16} style={{ color: 'var(--brutal-black)' }} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card-sm flex items-center justify-center w-9 h-9"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid var(--brutal-black)',
                    boxShadow: '2px 2px 0 var(--brutal-black)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-1px, -1px)';
                    e.currentTarget.style.boxShadow = '3px 3px 0 var(--brutal-black)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = '2px 2px 0 var(--brutal-black)';
                  }}
                  aria-label={`${member.name} Instagram`}
                >
                  <Instagram size={16} style={{ color: 'var(--brutal-black)' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

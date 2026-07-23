'use client'

import Image from 'next/image'

export function DonationSection() {
  return (
    <section
      id="donate"
      style={{
        background: '#FFFFFF',
        borderTop: '4px solid var(--brutal-black)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="py-16 md:py-24 px-4 md:px-8"
    >
      {/* Decorative background elements */}
      <div
        className="pointer-events-none hidden lg:block"
        style={{
          position: 'absolute',
          top: '40px',
          right: '60px',
          transform: 'rotate(12deg)',
          opacity: 0.08,
          zIndex: 0,
        }}
      >
        <Image src="/stickers/trialframe-sticker.png" alt="" width={120} height={120} className="w-24 h-24 object-contain" aria-hidden="true" />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          fontSize: '2rem',
          transform: 'rotate(15deg)',
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        💰
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '30px',
          fontSize: '1.5rem',
          transform: 'rotate(-20deg)',
          opacity: 0.12,
          zIndex: 0,
        }}
      >
        🪙
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Piggy Bank Visual */}
          <div
            className="reveal-scale flex-shrink-0 flex flex-col items-center justify-center w-full md:w-1/2"
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '1 / 1',
              }}
              className="mx-auto md:mx-0"
            >
              {/* Coin decorations */}
              <span
                className="sticker-wiggle"
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '5%',
                  fontSize: '1.8rem',
                  zIndex: 2,
                }}
              >
                🪙
              </span>
              <span
                className="sticker-float"
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '8%',
                  fontSize: '1.6rem',
                  zIndex: 2,
                }}
              >
                💰
              </span>
              <span
                className="sticker-wiggle"
                style={{
                  position: 'absolute',
                  bottom: '18%',
                  left: '8%',
                  fontSize: '1.4rem',
                  zIndex: 2,
                }}
              >
                🪙
              </span>
              <span
                className="sticker-float"
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '5%',
                  fontSize: '1.7rem',
                  zIndex: 2,
                }}
              >
                💰
              </span>

              {/* Piggy bank image */}
              <div className="sticker-float">
                <Image
                  src="/stickers/piggybank-sticker.png"
                  alt="Piggy bank sticker — support Focus Labs"
                  width={340}
                  height={340}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(6px 6px 0px var(--brutal-black))',
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Title */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--brutal-black)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
                className="text-4xl md:text-5xl font-black mb-3 reveal-up"
              >
                Support Our{' '}
                <span
                  style={{
                    color: 'var(--brutal-orange)',
                  }}
                >
                  Mission
                </span>
              </h2>
              <p
                style={{
                  color: 'var(--brutal-orange)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
                className="reveal-up"
              >
                Self-funded. Community-driven. Free where it matters.
              </p>
            </div>

            {/* Main card */}
            <div
              className="brutal-card reveal-up"
              style={{
                background: '#FFFFFF',
                padding: '1.5rem',
              }}
            >
              <p
                style={{
                  color: 'var(--brutal-black)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  fontSize: '1rem',
                }}
              >
                Focus Labs is entirely self-funded. We don&apos;t have venture
                capital — we have conviction. We only monetize what needs it, and
                everything that can be free stays free. Your support helps us
                keep building.
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '1.5rem',
                }}
              >
                {[
                  'Keep core tools free for everyone',
                  'Build new features the community asks for',
                  'Maintain FocusLinks as the central hub',
                  'Run our own infrastructure for data privacy',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      color: 'var(--brutal-black)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '22px',
                        height: '22px',
                        minWidth: '22px',
                        background: 'var(--brutal-yellow)',
                        border: '2px solid var(--brutal-black)',
                        borderRadius: '2px',
                        textAlign: 'center',
                        lineHeight: '18px',
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="brutal-btn brutal-btn-primary"
                  style={{
                    background: 'var(--brutal-orange)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  Support Focus Labs ☕
                </a>
                <button
                  className="brutal-btn brutal-btn-outline"
                  style={{
                    background: '#FFFFFF',
                    color: 'var(--brutal-black)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    border: '3px solid var(--brutal-black)',
                    cursor: 'pointer',
                  }}
                >
                  Join FocusLinks
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 md:mt-12">
          {/* Impact Card 1 */}
          <div
            className="brutal-card reveal-up"
            style={{
              background: '#FFFFFF',
              padding: '1.25rem',
              borderTop: '5px solid var(--brutal-green)',
              animationDelay: '0ms',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--brutal-green)',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              ₹199
            </p>
            <p
              style={{
                color: 'var(--brutal-black)',
                fontSize: '0.9rem',
                fontWeight: 600,
                margin: '0.4rem 0 0',
                lineHeight: 1.4,
              }}
            >
              Supports one student on FocusLinks
            </p>
          </div>

          {/* Impact Card 2 */}
          <div
            className="brutal-card reveal-up"
            style={{
              background: '#FFFFFF',
              padding: '1.25rem',
              borderTop: '5px solid var(--brutal-purple)',
              animationDelay: '100ms',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--brutal-purple)',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              ₹499
            </p>
            <p
              style={{
                color: 'var(--brutal-black)',
                fontSize: '0.9rem',
                fontWeight: 600,
                margin: '0.4rem 0 0',
                lineHeight: 1.4,
              }}
            >
              Helps build a new feature
            </p>
          </div>

          {/* Impact Card 3 */}
          <div
            className="brutal-card reveal-up"
            style={{
              background: '#FFFFFF',
              padding: '1.25rem',
              borderTop: '5px solid var(--brutal-orange)',
              animationDelay: '200ms',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--brutal-orange)',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              ₹999
            </p>
            <p
              style={{
                color: 'var(--brutal-black)',
                fontSize: '0.9rem',
                fontWeight: 600,
                margin: '0.4rem 0 0',
                lineHeight: 1.4,
              }}
            >
              Keeps a tool free for 100 students
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

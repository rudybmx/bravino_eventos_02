'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const els = contentRef.current?.querySelectorAll('.hero-anim')
    if (!els) return

    gsap.fromTo(
      els,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.18,
        delay: 0.25,
      }
    )
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0E0C09',
      }}
    >
      {/* Warm radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 72% 55% at 50% 48%, rgba(184,147,90,0.08) 0%, rgba(184,147,90,0.03) 38%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#B8935A',
            marginBottom: '32px',
            opacity: 0,
          }}
        >
          Londrina · Wine Concept
        </p>

        {/* H1 */}
        <h1
          className="hero-anim"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 6.5vw, 5.6rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#F0E8DC',
            maxWidth: '820px',
            marginBottom: '28px',
            opacity: 0,
          }}
        >
          Cada taça tem uma história para contar.
        </h1>

        {/* Sub italic */}
        <p
          className="hero-anim"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(240,232,220,0.62)',
            maxWidth: '520px',
            marginBottom: '52px',
            opacity: 0,
          }}
        >
          Na BRAVINO, o vinho é o ponto de partida — a celebração é o destino.
        </p>

        {/* CTAs */}
        <div
          className="hero-anim"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            opacity: 0,
          }}
        >
          <a
            href="#wine-bar"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#B8935A',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid rgba(184,147,90,0.7)',
              borderRadius: '100px',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(184,147,90,0.1)'
              e.currentTarget.style.borderColor = '#B8935A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(184,147,90,0.7)'
            }}
          >
            Explorar experiências
          </a>

          <a
            href="#vinho-no-deck"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: 'rgba(240,232,220,0.6)',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid rgba(240,232,220,0.12)',
              borderRadius: '100px',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240,232,220,0.28)'
              e.currentTarget.style.color = '#F0E8DC'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(240,232,220,0.12)'
              e.currentTarget.style.color = 'rgba(240,232,220,0.6)'
            }}
          >
            Ver programação
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-anim"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: 0,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(240,232,220,0.3)',
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '48px',
            background:
              'linear-gradient(to bottom, rgba(184,147,90,0.7), transparent)',
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background:
            'linear-gradient(to bottom, transparent, #0E0C09)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}

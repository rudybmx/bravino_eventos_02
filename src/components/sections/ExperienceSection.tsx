'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceSectionProps {
  id: string
  tag: string
  tagSub?: string
  heading: string
  body: string
  tags: string[]
  ctaText: string
  ctaHref: string
  flipLayout?: boolean
  glyphLetter: string
  extraContent?: React.ReactNode
}

export function ExperienceSection({
  id,
  tag,
  tagSub,
  heading,
  body,
  tags,
  ctaText,
  ctaHref,
  flipLayout = false,
  glyphLetter,
  extraContent,
}: ExperienceSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const textCol = ref.current?.querySelector('.exp-text')
    const visualCol = ref.current?.querySelector('.exp-visual')

    gsap.fromTo(
      textCol,
      { opacity: 0, x: flipLayout ? 24 : -24 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: '100px bottom',
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      visualCol,
      { opacity: 0, x: flipLayout ? -24 : 24 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: '100px bottom',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: ref })

  const textCol = (
    <div
      className="exp-text"
      style={{
        flex: '1 1 480px',
        maxWidth: '520px',
        opacity: 0,
      }}
    >
      {/* Tag pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '28px',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#B8935A',
            padding: '5px 14px',
            border: '1px solid rgba(184,147,90,0.45)',
            borderRadius: '100px',
          }}
        >
          {tag}
        </span>
        {tagSub && (
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: 'rgba(240,232,220,0.38)',
              textTransform: 'uppercase',
            }}
          >
            {tagSub}
          </span>
        )}
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#F0E8DC',
          marginBottom: '22px',
          maxWidth: '420px',
        }}
      >
        {heading}
      </h2>

      {/* Body */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          fontWeight: 300,
          lineHeight: 1.85,
          color: 'rgba(240,232,220,0.62)',
          marginBottom: '28px',
        }}
      >
        {body}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '36px',
        }}
      >
        {tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(240,232,220,0.5)',
              padding: '5px 12px',
              background: 'rgba(240,232,220,0.04)',
              border: '1px solid rgba(240,232,220,0.08)',
              borderRadius: '100px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        target={ctaHref.startsWith('http') ? '_blank' : undefined}
        rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          color: '#B8935A',
          textDecoration: 'none',
          transition: 'gap 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = '14px' }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
      >
        {ctaText}
        <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
      </a>

      {/* Extra content (for Mezanino grid) */}
      {extraContent}
    </div>
  )

  const visualCol = (
    <div
      className="exp-visual"
      style={{
        flex: '1 1 340px',
        minHeight: '380px',
        background: '#221D17',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(184,147,90,0.14)',
      }}
    >
      {/* Warm ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(184,147,90,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Typographic glyph */}
      <span
        aria-hidden
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(160px, 22vw, 280px)',
          fontWeight: 800,
          color: 'rgba(184,147,90,0.06)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        {glyphLetter}
      </span>
      {/* Gold corner accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          width: '40px',
          height: '40px',
          borderRight: '1px solid rgba(184,147,90,0.3)',
          borderBottom: '1px solid rgba(184,147,90,0.3)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          width: '40px',
          height: '40px',
          borderLeft: '1px solid rgba(184,147,90,0.3)',
          borderTop: '1px solid rgba(184,147,90,0.3)',
        }}
      />
    </div>
  )

  return (
    <section
      ref={ref}
      id={id}
      style={{
        backgroundColor: '#0E0C09',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(184,147,90,0.07)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'center',
          flexDirection: flipLayout ? 'row-reverse' : 'row',
        }}
      >
        {textCol}
        {visualCol}
      </div>
    </section>
  )
}

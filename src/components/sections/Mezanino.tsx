'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mezItems = [
  {
    num: 'I.',
    title: 'Degustações guiadas',
    body: 'Imersão com sommelier, terroirs e harmonizações',
  },
  {
    num: 'II.',
    title: 'Cursos de vinho',
    body: 'Do iniciante ao avançado',
  },
  {
    num: 'III.',
    title: 'Jantares harmonizados',
    body: 'Menu autoral para potencializar cada rótulo',
  },
  {
    num: 'IV.',
    title: 'Eventos privados',
    body: 'Corporativo ou celebração, proposta personalizada',
  },
]

export default function Mezanino() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.mez-anim') ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: '80px bottom',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: ref })

  return (
    <section
      ref={ref}
      id="mezanino"
      style={{
        backgroundColor: '#181410',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(184,147,90,0.07)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          className="mez-anim"
          style={{ marginBottom: '16px', opacity: 0 }}
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
            Mezanino · Espaço exclusivo
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '64px',
            alignItems: 'flex-start',
            marginTop: '28px',
          }}
        >
          {/* Left: text */}
          <div style={{ flex: '1 1 360px', maxWidth: '440px' }}>
            <h2
              className="mez-anim"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#F0E8DC',
                marginBottom: '22px',
                opacity: 0,
              }}
            >
              Para quem quer ir além da taça.
            </h2>
            <p
              className="mez-anim"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(240,232,220,0.62)',
                marginBottom: '40px',
                opacity: 0,
              }}
            >
              O Mezanino é o espaço mais intimista da BRAVINO. Degustações guiadas, cursos, jantares harmonizados e eventos privados com alto padrão de atendimento.
            </p>

            {/* CTAs */}
            <div
              className="mez-anim"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                opacity: 0,
              }}
            >
              <a
                href="https://wa.me/5543991231069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: '#0E0C09',
                  textDecoration: 'none',
                  padding: '12px 26px',
                  background: '#B8935A',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #B8935A',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A46B' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#B8935A' }}
              >
                Reservar o Mezanino
              </a>
              <a
                href="https://wa.me/5543991231069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'rgba(240,232,220,0.6)',
                  textDecoration: 'none',
                  padding: '12px 26px',
                  border: '1px solid rgba(240,232,220,0.12)',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F0E8DC' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(240,232,220,0.6)' }}
              >
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Right: 4-up grid */}
          <div
            style={{
              flex: '1 1 360px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
            }}
          >
            {mezItems.map((item, i) => (
              <div
                key={item.title}
                className="mez-anim"
                style={{
                  padding: '30px 24px',
                  background: '#221D17',
                  borderTop: '1px solid rgba(184,147,90,0.18)',
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: '13px',
                    color: 'rgba(184,147,90,0.7)',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  {item.num}
                </span>
                <h4
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#F0E8DC',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: 'rgba(240,232,220,0.5)',
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

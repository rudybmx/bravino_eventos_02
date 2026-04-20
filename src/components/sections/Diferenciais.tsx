'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const diferenciais = [
  {
    num: '01',
    title: 'Curadoria Velho & Novo Mundo',
    body: 'França, Itália, Portugal, Argentina, Chile e Brasil — rótulos selecionados com rigor para cada ocasião.',
  },
  {
    num: '02',
    title: 'Atendimento especializado',
    body: 'Sommeliers prontos para guiar do básico ao premium, sem julgamentos e com genuíno prazer.',
  },
  {
    num: '03',
    title: 'Ambiente & estacionamento',
    body: 'Climatizado, acolhedor e estacionamento gratuito nas duas unidades em Londrina.',
  },
  {
    num: '04',
    title: 'E-commerce & entrega',
    body: 'Frete grátis Londrina R$299 / Brasil R$499. Até 6x sem juros para todo o Brasil.',
  },
]

export default function Diferenciais() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.dif-anim') ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.14,
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
      style={{
        backgroundColor: '#0E0C09',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(184,147,90,0.07)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <p
          className="dif-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B8935A',
            marginBottom: '20px',
            opacity: 0,
          }}
        >
          Por que a BRAVINO
        </p>

        {/* Heading */}
        <h2
          className="dif-anim"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#F0E8DC',
            marginBottom: '72px',
            maxWidth: '560px',
            opacity: 0,
          }}
        >
          Mais do que uma adega.{' '}
          <em style={{ fontStyle: 'italic', color: 'rgba(240,232,220,0.72)' }}>
            Um Wine Concept.
          </em>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}
        >
          {diferenciais.map((d) => (
            <div
              key={d.num}
              className="dif-anim"
              style={{
                padding: '40px 32px',
                background: '#221D17',
                borderTop: '1px solid rgba(184,147,90,0.2)',
                opacity: 0,
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#2a241c'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#221D17'
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: 'rgba(184,147,90,0.55)',
                  display: 'block',
                  marginBottom: '20px',
                  letterSpacing: '0.1em',
                }}
              >
                {d.num}
              </span>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#F0E8DC',
                  marginBottom: '12px',
                  lineHeight: 1.35,
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'rgba(240,232,220,0.5)',
                }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

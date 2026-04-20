'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const unidades = [
  {
    tag: 'Flagship',
    name: 'BRAVINO Aurora',
    address: 'Av. Ayrton Senna da Silva, 509 · Palhano',
    subAddress: 'em frente ao Shopping Aurora',
    hours1: 'Seg–Sex: 09h–22h',
    hours2: 'Sáb: 09h–13h',
    phones: ['(43) 3321-0036', '(43) 99840-3950'],
    essence: 'Consultoria, Wine Bar e grandiosidade',
    highlight: true,
    phone_link: '5543998403950',
  },
  {
    tag: null,
    name: 'BRAVINO Santana',
    address: 'Alameda Santana · bairro Santana',
    subAddress: '',
    hours1: 'Seg–Sáb: 11h–23h',
    hours2: '',
    phones: ['(43) 99973-1534'],
    essence: 'Gastronomia integrada e praticidade',
    highlight: false,
    phone_link: '5543999731534',
  },
]

export default function Unidades() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.unit-anim') ?? [],
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
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
        backgroundColor: '#181410',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(184,147,90,0.07)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <h2
          className="unit-anim"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#F0E8DC',
            marginBottom: '64px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          Duas unidades, a mesma paixão.
        </h2>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {unidades.map((u) => (
            <div
              key={u.name}
              className="unit-anim"
              style={{
                background: u.highlight ? '#221D17' : '#1a1510',
                borderTop: u.highlight
                  ? '1px solid rgba(184,147,90,0.35)'
                  : '1px solid rgba(184,147,90,0.12)',
                padding: '44px 40px',
                opacity: 0,
                position: 'relative',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Tag */}
              {u.tag && (
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#B8935A',
                    padding: '4px 12px',
                    border: '1px solid rgba(184,147,90,0.45)',
                    borderRadius: '100px',
                    marginBottom: '20px',
                  }}
                >
                  {u.tag}
                </span>
              )}

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#F0E8DC',
                  marginBottom: '20px',
                  marginTop: u.tag ? '0' : '28px',
                }}
              >
                {u.name}
              </h3>

              {/* Divider */}
              <div style={{ width: '32px', height: '1px', background: 'rgba(184,147,90,0.3)', marginBottom: '24px' }} />

              {/* Address */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(240,232,220,0.65)',
                  lineHeight: 1.6,
                  marginBottom: u.subAddress ? '4px' : '16px',
                }}
              >
                {u.address}
              </p>
              {u.subAddress && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: 'rgba(240,232,220,0.38)',
                    marginBottom: '16px',
                  }}
                >
                  {u.subAddress}
                </p>
              )}

              {/* Hours */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(240,232,220,0.55)', marginBottom: '4px' }}>
                {u.hours1}
              </p>
              {u.hours2 && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(240,232,220,0.55)', marginBottom: '20px' }}>
                  {u.hours2}
                </p>
              )}

              {/* Phones */}
              <div style={{ marginBottom: '24px', marginTop: u.hours2 ? '0' : '20px' }}>
                {u.phones.map((p) => (
                  <p key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(240,232,220,0.45)', marginBottom: '2px' }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Essence */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: 'rgba(184,147,90,0.65)',
                  borderTop: '1px solid rgba(184,147,90,0.1)',
                  paddingTop: '20px',
                }}
              >
                {u.essence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

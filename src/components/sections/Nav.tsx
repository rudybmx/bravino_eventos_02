'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.5s ease, backdrop-filter 0.5s ease',
        background: scrolled
          ? 'rgba(250, 245, 238, 0.78)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(123,31,53,0.08)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <img
            src={
              scrolled
                ? 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/logo_bravino_vermelha.png'
                : 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/logo_bravino_branca.svg'
            }
            alt="Bravino"
            style={{
              height: '36px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {['Wine Bar', 'Vinho no Deck', 'Mezanino'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                background: scrolled
                  ? 'linear-gradient(135deg, #A37E44 0%, #765727 100%)'
                  : 'linear-gradient(135deg, #FFE2B7 0%, #C9A46B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/5543991231069"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            background: 'linear-gradient(135deg, #C9A46B 0%, #A37E44 100%)',
            color: '#2D2320',
            textDecoration: 'none',
            padding: '9px 22px',
            border: 'none',
            borderRadius: '100px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 10px rgba(201, 164, 107, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #FFE2B7 0%, #C9A46B 100%)'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(201, 164, 107, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #C9A46B 0%, #A37E44 100%)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(201, 164, 107, 0.15)'
          }}
        >
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: scrolled ? '#2D2320' : '#FAF5EE',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(250, 245, 238, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(123,31,53,0.08)',
            padding: '24px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {['Wine Bar', 'Vinho no Deck', 'Mezanino'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                color: 'rgba(45,35,32,0.7)',
                textDecoration: 'none',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5543991231069"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#7B1F35',
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid rgba(123,31,53,0.6)',
              borderRadius: '100px',
              textAlign: 'center',
            }}
          >
            Reservar
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

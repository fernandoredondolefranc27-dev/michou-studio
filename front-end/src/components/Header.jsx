import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'À PROPOS', path: '/about' },
    { name: 'GALERIE', path: '/gallery' },
    { name: 'TÉMOIGNAGES', path: '/testimonials' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '1rem 0' : '1.75rem 0',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 167, 44, 0.12)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />

          {/* Nav Desktop */}
          <nav className="desktop-nav">
            <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => ({
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: isActive ? '500' : '300',
                      letterSpacing: '0.18em',
                      color: isActive ? 'var(--color-gold)' : 'var(--color-white)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      paddingBottom: '4px',
                      borderBottom: isActive ? '1px solid var(--color-gold)' : '1px solid transparent'
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Button */}
          <div className="desktop-action">
            <Button to="/booking" variant="outline">
              RÉSERVER
            </Button>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-white)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              zIndex: 110
            }}
            className="mobile-menu-btn"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X size={26} color="#D4A72C" /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Nav */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--color-black)',
          zIndex: 95,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          padding: '2rem'
        }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <Logo size="large" />
        </div>

        <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0, margin: '0 0 3rem 0' }}>
          {navLinks.map((link) => (
            <li key={link.path} style={{ marginBottom: '1.75rem' }}>
              <NavLink
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  letterSpacing: '0.08em',
                  color: isActive ? 'var(--color-gold)' : 'var(--color-white)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button to="/booking" variant="primary" onClick={() => setMobileMenuOpen(false)}>
          RÉSERVER VOTRE SÉANCE
        </Button>
      </div>
    </>
  );
};

export default Header;
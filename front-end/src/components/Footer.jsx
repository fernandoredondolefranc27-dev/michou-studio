import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { STUDIO_INFO } from '../data/mockData';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid var(--color-border)', color: 'var(--color-gray)' }}>
      <div className="container section-padding" style={{ paddingBottom: '3rem' }}>
        <div className="grid-editorial" style={{ marginBottom: '4rem' }}>
          
          {/* Col 1 : Logo & Mission */}
          <div style={{ gridColumn: 'span 4' }}>
            <Logo className="mb-4" />
            <p style={{ fontSize: '0.9rem', marginTop: '1.5rem', maxWidth: '320px', lineHeight: '1.7' }}>
              MICHOU est un studio privé haut de gamme dédié aux soins du visage d'exception, à la coiffure haute couture et à la sublimation naturelle.
            </p>
          </div>

          {/* Col 2 : Navigation */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.2', fontSize: '0.85rem' }}>
              <li><Link to="/" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>Accueil</Link></li>
              <li><Link to="/services" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>Nos Services</Link></li>
              <li><Link to="/about" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>L'Univers MICHOU</Link></li>
              <li><Link to="/gallery" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>Galerie Éditoriale</Link></li>
              <li><Link to="/testimonials" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>Témoignages</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>Contact & Accès</Link></li>
              <li><Link to="/booking" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>Réserver un Rendez-vous</Link></li>
            </ul>
          </div>

          {/* Col 3 : Contact & Horaires */}
          <div style={{ gridColumn: 'span 5' }}>
            <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
              LE STUDIO
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>
              {STUDIO_INFO.address}
            </p>
            <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              {STUDIO_INFO.phone} — {STUDIO_INFO.email}
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: 'var(--color-gold)' }}>
              {STUDIO_INFO.hours}
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem' }}>
              <a href={STUDIO_INFO.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--color-white)', transition: 'color 0.2s' }}>
                <Instagram size={20} />
              </a>
              <a href={STUDIO_INFO.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--color-white)', transition: 'color 0.2s' }}>
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem' }}>
          <span>© {new Date().getFullYear()} MICHOU — STUDIO DE BEAUTÉ. Tous droits réservés.</span>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
            <span style={{ color: 'var(--color-gold)', fontWeight: '500' }}>
              Designed and created by Redondo dev contact for service +509 3883 0432
            </span>
            <a 
              href="https://dev-fernando.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--color-gold)', 
                fontWeight: '500',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              https://dev-fernando.netlify.app/
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
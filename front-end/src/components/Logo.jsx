import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Logo = ({ className = '', size = 'normal' }) => {
  const isLarge = size === 'large';

  return (
    <Link 
      to="/" 
      className={`inline-flex flex-col text-decoration-none group ${className}`} 
      style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      {/* Mot MICH + [LOGO] + U */}
      <div style={{ display: 'flex', alignItems: 'center', lineHeight: '1' }}>
        <span 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isLarge ? 'clamp(2.2rem, 4vw, 3.5rem)' : '1.75rem',
            fontWeight: '500',
            letterSpacing: '0',
            color: 'var(--color-white, #ffffff)'
          }}
        >
          MICH
        </span>

        {/* Logo ajusté avec espace très serré pour la lettre U */}
        <img 
          src={logoImg} 
          alt="O" 
          style={{
            height: isLarge ? '3.8rem' : '2.6rem',
            width: 'auto',
            objectFit: 'contain',
            marginLeft: '-3px',
            marginRight: '-7px', // Colle fortement le U au logo
            display: 'inline-block',
            transform: 'translateY(-1px)'
          }} 
        />

        <span 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isLarge ? 'clamp(2.2rem, 4vw, 3.5rem)' : '1.75rem',
            fontWeight: '500',
            letterSpacing: '0',
            color: 'var(--color-white, #ffffff)'
          }}
        >
          U
        </span>
      </div>

      {/* Sous-titre STUDIO DE BEAUTÉ */}
      <span 
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: isLarge ? '0.75rem' : '0.50rem',
          fontWeight: '400',
          letterSpacing: '0.35em',
          color: 'var(--color-gold, #c5a059)',
          marginTop: '0.25rem',
          textTransform: 'uppercase'
        }}
      >
        STUDIO DE BEAUTÉ
      </span>
    </Link>
  );
};

export default Logo;
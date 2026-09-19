import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { GALLERY_ITEMS } from '../data/mockData';

const categories = ['TOUT', 'MAQUILLAGE', 'COIFFURE', 'TRESSE AFRICAINE', 'ONGLES', 'BARBER SHOP'];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('TOUT');

  const items = activeTab === 'TOUT'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="gallery-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container">
        
        <SectionTitle 
          number="GALERIE"
          subtitle="NOTRE PORTFOLIO"
          title="GALERIE ÉDITORIALE MICHOU STUDIO"
          align="center"
        />

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                background: 'none',
                border: activeTab === cat ? '1px solid var(--color-gold)' : '1px solid transparent',
                backgroundColor: activeTab === cat ? 'rgba(212, 167, 44, 0.1)' : 'transparent',
                color: activeTab === cat ? 'var(--color-gold)' : 'var(--color-gray)',
                padding: '0.6rem 1.4rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {items.map((item) => (
            <div 
              key={item.id} 
              style={{
                position: 'relative',
                height: '460px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s var(--transition-smooth)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem'
                }}
              >
                <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '0.2em' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { SERVICES } from '../data/mockData';

const Services = () => {
  return (
    <div className="services-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
          <SectionTitle 
            number="01"
            subtitle="MENU DE BEAUTÉ"
            title="NOS PRESTATIONS SUR MESURE"
            align="center"
          />
          <p className="lead">
            Chaque service est conçu comme une expérience globale associant technicité de pointe, soins précieux et diagnostic personnalisé.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {SERVICES.map((s) => (
            <div 
              key={s.id}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                padding: 'clamp(2rem, 5vw, 4rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div style={{ gridColumn: 'span 7' }}>
                <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{s.number}</span>
                <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{s.title}</h2>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1.5rem' }}>
                  {s.subtitle} — Durée : {s.duration}
                </span>
                
                <p style={{ marginBottom: '2rem' }}>{s.description}</p>

                <h4 style={{ fontSize: '0.8rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                  CE QUE COMPREND LE RITUEL :
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', lineHeight: '2' }}>
                  {s.details.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-gray)' }}>
                      <span style={{ color: 'var(--color-gold)' }}>—</span> {item}
                    </li>
                  ))}
                </ul>

                <Button to="/booking" variant="primary">
                  RÉSERVER CE RITUEL
                </Button>
              </div>

              <div style={{ gridColumn: 'span 5' }}>
                <div style={{ height: '480px', overflow: 'hidden' }}>
                  <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
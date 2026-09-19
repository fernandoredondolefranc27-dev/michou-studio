import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <div className="about-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container">
        
        {/* Editorial Header */}
        <div className="grid-editorial" style={{ alignItems: 'center', marginBottom: '7rem' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <SectionTitle 
              number="MICHOU STUDIO"
              subtitle="L'ESPRIT DU STUDIO"
              title="UNE SIGNATURE, UN EXPERIENCE,UN SAVOIR-FAIRE."
            />
            <p className="lead" style={{ marginBottom: '1.5rem' }}>
              Notre vision repose sur une conviction essentielle : la véritable beauté se révèle dans l’équilibre, la précision et l’authenticité. Chez MICHOU, chaque détail compte afin de créer une mise en beauté élégante, naturelle et en parfaite harmonie avec votre personnalité.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Nous avons imaginé un espace où la beauté se vit autrement : dans le calme, l’intimité et la discrétion. Chaque rendez-vous est pensé comme une parenthèse privilégiée, où le temps, l’écoute et l’attention accordée à chaque cliente deviennent partie intégrante de l’expérience.
            </p>
            <p>
              Nos stylistes et visagistes associent maîtrise technique, sens artistique et approche personnalisée. Inspirés par l’élégance de la haute couture et la sobriété du design contemporain, nous façonnons chaque prestation avec exigence pour sublimer votre beauté jusque dans les moindres détails.
            </p>
          </div>

          <div style={{ gridColumn: 'span 6' }}>
            <div style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
              <img 
                src={aboutImage} 
                alt="Studio Michou Interior" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Values section */}
        <div style={{ backgroundColor: 'var(--color-dark)', padding: 'clamp(2rem, 6vw, 5rem)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <SectionTitle 
            subtitle="NOS ENGAGEMENTS"
            title="L'EXCELLENCE SANS COMPROMIS"
            align="center"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3.5rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>01. UNE BEAUTÉ PERSONNALISÉE</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Chaque visage, chaque chevelure et chaque style possède son identité. Nous privilégions une approche sur mesure afin de créer un résultat harmonieux, élégant et adapté à chaque cliente.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>02. L’EXIGENCE DU DÉTAIL</h3>
              <p style={{ fontSize: '0.9rem' }}>
                La qualité se joue dans les détails. Nous accordons une attention particulière aux finitions, aux proportions, à la précision des gestes et à l’harmonie de l’ensemble.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>03. DES PRODUITS SOIGNEUSEMENT SÉLECTIONNÉS</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Nous privilégions des produits et des techniques choisis pour leur qualité, leur rendu et leur adéquation avec chaque prestation
              </p>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <Button to="/booking" variant="primary">
              RÉSERVER UNE EXPOSIITION / SÉANCE
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
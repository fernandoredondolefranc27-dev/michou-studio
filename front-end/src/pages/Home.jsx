import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { SERVICES, GALLERY_ITEMS, STUDIO_INFO } from '../data/mockData';
import { getTestimonials } from '../services/api';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';

// Imports des images locales
import heroBg from '../assets/hero-bg.png';
import aboutImg from '../assets/about-img.png';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('TOUT');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchAvis = async () => {
      try {
        const data = await getTestimonials();
        if (Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Erreur de chargement des témoignages sur l'accueil :", error);
      }
    };
    fetchAvis();
  }, []);

  const filteredGallery = activeFilter === 'TOUT'
    ? GALLERY_ITEMS.slice(0, 6)
    : GALLERY_ITEMS.filter(item => item.category === activeFilter).slice(0, 6);

  return (
    <div className="home-page">
      
      {/* ================= HERO SECTION ================= */}
      <section 
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '6rem',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            filter: 'brightness(0.42) contrast(1.05)',
            transform: 'scale(1.03)',
            transition: 'transform 10s ease'
          }}
        />

        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, transparent 20%, #050505 90%), linear-gradient(to bottom, transparent 60%, #050505 100%)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1000px' }}>
          <span 
            className="animate-fade-up"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              display: 'block',
              marginBottom: '1.25rem',
              fontWeight: '500'
            }}
          >
            STUDIO DE BEAUTÉ PRIVÉ — PORT-AU-PRINCE, DELMAS 40b
          </span>

          <h1 className="hero-title animate-fade-up" style={{ marginBottom: '1.75rem', animationDelay: '0.15s' }}>
            L'ÉLÉGANCE AU BOUT<br />DES DOIGTS.
          </h1>

          <p className="lead animate-fade-up" style={{ maxWidth: '620px', margin: '0 auto 2.75rem auto', animationDelay: '0.3s' }}>
            Des soins précis, des finitions raffinées et des créations pensées pour sublimer vos ongles et révéler votre personnalité.
          </p>

          <div className="animate-fade-up" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', animationDelay: '0.45s' }}>
            <Button to="/booking" variant="primary">
              RÉSERVER UNE SÉANCE
            </Button>
            <Button to="/services" variant="outline">
              DÉCOUVRIR NOS SERVICES
            </Button>
          </div>
        </div>

        <div 
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: 0.75
          }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
            DÉCOUVRIR
          </span>
          <ChevronDown size={18} color="#D4A72C" style={{ animation: 'scrollIndicator 2s infinite' }} />
        </div>
      </section>

      {/* ================= 01. L'UNIVERS MICHOU ================= */}
      <section className="section-padding" style={{ position: 'relative', backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <div className="grid-editorial" style={{ alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 6', position: 'relative' }}>
              <div style={{ overflow: 'hidden', height: '100%', maxHeight: '680px' }}>
                <img 
                  src={aboutImg} 
                  alt="MICHOU Studio Visual"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0rem, 3vw, 2.5rem)' }}>
              <SectionTitle 
                number="01"
                subtitle="PHILOSOPHIE & MAISON"
                title="LÀ OÙ LA BEAUTÉ PREND FORME AVEC ÉLÉGANCE."
              />

              <p className="lead" style={{ marginBottom: '1.5rem', color: 'var(--color-gold-light)' }}>
                MICHOU STUDIO est une maison dédiée à l'expression d'une beauté singulière.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Chaque rendez-vous est imaginé comme une parenthèse précieuse.
                Nos expertes prennent le temps de comprendre vos envies et de porter attention à chaque détail.
              </p>

              <p style={{ marginBottom: '2.5rem' }}>
                Nous privilégions la lumière naturelle, la justesse des nuances et le respect de chaque texture.
              </p>

              <Button to="/about" variant="text">
                EN SAVOIR PLUS SUR MICHOU STUDIO &rarr;
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 02. NOS SERVICES ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <SectionTitle 
            number="02"
            subtitle="NOS PRESTATIONS"
            title="L'ÉLÉGANCE DANS CHAQUE DÉTAIL."
          />

          <div style={{ marginTop: '4rem' }}>
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '3rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ gridColumn: 'span 7', order: index % 2 === 1 ? 2 : 1 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-gold)', fontStyle: 'italic', display: 'block', marginBottom: '0.5rem' }}>
                    {service.number}
                  </span>
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                  <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-sans)', color: 'var(--color-gray)', fontWeight: '400', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    {service.subtitle}
                  </h4>
                  <p style={{ maxWidth: '540px', marginBottom: '1.75rem' }}>
                    {service.description}
                  </p>
                  <Button to="/booking" variant="outline">
                    RÉSERVER CETTE PRESTATION
                  </Button>
                </div>

                <div style={{ gridColumn: 'span 5', order: index % 2 === 1 ? 1 : 2 }}>
                  <div style={{ overflow: 'hidden', height: '380px' }}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)', transition: 'transform 0.8s var(--transition-smooth)' }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 03. EXPÉRIENCE MICHOU ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
        <div className="container">
          <SectionTitle 
            number="03"
            subtitle="NOTRE ENGAGEMENT"
            title="L'EXPÉRIENCE MICHOU."
            align="center"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem 2rem', border: '1px solid var(--color-border)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>01</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PERSONNALISATION</h3>
              <p style={{ fontSize: '0.9rem' }}>Chaque prestation commence par l’écoute de vos envies.</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem 2rem', border: '1px solid var(--color-border)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>02</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>EXIGENCE</h3>
              <p style={{ fontSize: '0.9rem' }}>Attention particulière à chaque geste et finition.</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem 2rem', border: '1px solid var(--color-border)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>03</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SAVOIR-FAIRE</h3>
              <p style={{ fontSize: '0.9rem' }}>Précision technique et sens esthétique au service de la beauté.</p>
            </div>

            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem 2rem', border: '1px solid var(--color-border)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>04</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>INTIMITÉ</h3>
              <p style={{ fontSize: '0.9rem' }}>Une atmosphère calme, élégante et confidentielle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 04. GALERIE PREVIEW ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <SectionTitle 
              number="04"
              subtitle="GALERIE ÉDITORIALE"
              title="L'ART DE LA BEAUTÉ."
            />
            <Button to="/gallery" variant="text">
              VOIR TOUTE LA GALERIE &rarr;
            </Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredGallery.map((item) => (
              <div key={item.id} style={{ position: 'relative', overflow: 'hidden', height: '420px' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.75rem'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--color-white)', marginTop: '0.25rem' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 05. TÉMOIGNAGES (MongoDB Atlas) ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <SectionTitle 
            number="05"
            subtitle="MOMENTS PARTAGÉS"
            title="LES CLIENTS PARLENT DE MICHOU."
            align="center"
          />

          <div style={{ marginTop: '3rem' }}>
            {testimonials.length === 0 ? (
              <p style={{ color: 'var(--color-gray)', fontStyle: 'italic' }}>
                Aucun témoignage pour le moment. Soyez la première à donner votre avis !
              </p>
            ) : (
              testimonials.map((t, index) => (
                <div key={t._id || t.id || index} style={{ marginBottom: '3.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < (t.rating || 5) ? "#D4A72C" : "none"} 
                        color={i < (t.rating || 5) ? "#D4A72C" : "var(--color-gray)"} 
                      />
                    ))}
                  </div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--color-white)' }}>
                    “{t.quote}”
                  </p>
                  <span style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: '500' }}>
                    {t.author}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gray)' }}>
                    {t.role}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= 06. CTA BANNER ================= */}
      <section 
        className="section-padding" 
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-dark)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-subtitle">VOTRE RENDEZ-VOUS EXCLUSIF</span>
          <h2 className="section-title-large" style={{ marginBottom: '1.5rem' }}>
            PRÊTE À RÉSERVER POUR VOUS EMBELLIR ?
          </h2>
          <p style={{ marginBottom: '2.5rem' }}>
            Découvrez l'ambiance apaisante de notre studio et laissez-vous emporter par une expérience de beauté exceptionnelle.
          </p>
          <Button to="/booking" variant="primary">
            RÉSERVER POUR PASSER UN MOMENT INOUBLIABLE
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
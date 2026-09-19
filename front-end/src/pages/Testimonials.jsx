import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Star, AlertCircle, MessageSquare } from 'lucide-react';
import { getTestimonials, createTestimonial } from '../services/api';

const Testimonials = () => {
  // Liste des témoignages issue du Back-End
  const [list, setList] = useState([]);

  // États du formulaire
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Charger les témoignages depuis le serveur au chargement de la page
  useEffect(() => {
    const fetchAvis = async () => {
      const data = await getTestimonials();
      if (Array.isArray(data)) {
        setList(data);
      }
    };
    fetchAvis();
  }, []);

  // Soumettre un nouveau témoignage au Back-End
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author || !quote) return;

    try {
      const newTestimonial = await createTestimonial({
        author,
        role,
        quote,
        rating,
      });

      // Mise à jour dynamique de la liste avec l'élément renvoyé par l'API
      setList([newTestimonial, ...list]);
      setSubmitted(true);
      setAuthor('');
      setRole('');
      setQuote('');
      setRating(5);
    } catch (error) {
      alert("Erreur lors de la publication de votre témoignage.");
    }
  };

  return (
    <div className="testimonials-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <SectionTitle 
          number="AVIS"
          subtitle="TÉMOIGNAGES CLIENTES"
          title="ELLES RACONTENT LEUR RITUEL MICHOU"
          align="center"
        />

        {/* Bloc Formulaire & Mémo Réclamation */}
        <div style={{ 
          marginTop: '4rem', 
          marginBottom: '5rem',
          backgroundColor: 'var(--color-card)', 
          padding: '2.5rem', 
          border: '1px solid var(--color-border)' 
        }}>

          {/* Mémo cliquable vers la page Contact / Plaintes */}
          <div style={{ 
            marginBottom: '2rem', 
            padding: '1rem 1.25rem', 
            backgroundColor: 'rgba(212, 167, 44, 0.05)', 
            borderLeft: '3px solid var(--color-gold)', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertCircle color="#D4A72C" size={20} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--color-gray)' }}>
                Une insatisfaction ou une plainte concernant un service ?
              </span>
            </div>
            <Link 
              to="/contact" 
              style={{ 
                color: 'var(--color-gold)', 
                fontSize: '0.85rem', 
                fontWeight: '600',
                textDecoration: 'underline',
                letterSpacing: '0.05em'
              }}
            >
              Déposer une plainte confidentielle ici →
            </Link>
          </div>

          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>
            LAISSER VOTRE TÉMOIGNAGE
          </h3>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <p style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Merci pour votre témoignage !
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>
                Votre avis a bien été publié ci-dessous.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--color-gold)', color: '#fff', padding: '0.5rem 1.5rem', cursor: 'pointer' }}
              >
                Rédiger un autre avis
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Étoiles interactives */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                  NIVEAU DE SATISFACTION *
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      fill={(hoverRating || rating) >= star ? "#D4A72C" : "none"}
                      color={(hoverRating || rating) >= star ? "#D4A72C" : "var(--color-gray-dark)"}
                      style={{ transition: 'all 0.15s ease' }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                    VOTRE NOM / INITIALES *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Marie L. ou Cliente M." 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                    SERVICE RÉALISÉ
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: Pose Lace, Barber, Manucure..." 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                  VOTRE TÉMOIGNAGE *
                </label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Racontez votre expérience au studio Michou..." 
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                />
              </div>

              <Button type="submit" variant="primary">
                PUBLIER VOTRE AVIS
              </Button>
            </form>
          )}

        </div>

        {/* Section Affichage des Avis ou État Vide */}
        {list.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            backgroundColor: 'var(--color-card)', 
            border: '1px dashed var(--color-border)',
            color: 'var(--color-gray)'
          }}>
            <MessageSquare size={36} color="var(--color-gold)" style={{ marginBottom: '1rem', opacity: 0.8 }} />
            <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
              Aucun témoignage pour le moment.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Soyez la première personne à partager votre expérience au Studio Michou ci-dessus !
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {list.map((t) => (
              <div 
                key={t.id}
                style={{
                  backgroundColor: 'var(--color-card)',
                  padding: '3rem',
                  border: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < t.rating ? "#D4A72C" : "none"} 
                      color={i < t.rating ? "#D4A72C" : "var(--color-gray-dark)"} 
                    />
                  ))}
                </div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--color-white)' }}>
                  “{t.quote}”
                </p>
                <div style={{ borderTop: '1px solid var(--color-gray-dark)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: '500', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
                    {t.author}
                  </span>
                  <span style={{ color: 'var(--color-gray)', fontSize: '0.8rem' }}>
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <p style={{ marginBottom: '2rem' }}>Prête à vivre l'expérience à votre tour ?</p>
          <Button to="/booking" variant="primary">
            RÉSERVER VOTRE MOMENT
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
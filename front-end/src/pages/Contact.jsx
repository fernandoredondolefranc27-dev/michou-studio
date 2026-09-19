import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { STUDIO_INFO } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { sendComplaint } from '../services/api';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // États du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);
    try {
      await sendComplaint({ name, email, subject, message });
      setSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      alert("Erreur lors de l'envoi de votre réclamation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container">
        
        <SectionTitle 
          number="CONTACT"
          subtitle="CONCIERGERIE BEAUTÉ"
          title="PARLONS DE VOTRE PROCHAINE EXPÉRIENCE."
        />

        <div className="grid-editorial" style={{ marginTop: '4rem' }}>
          
          {/* Left Info Column */}
          <div style={{ gridColumn: 'span 5' }}>
            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem', border: '1px solid var(--color-border)', height: '100%' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-gold)', marginBottom: '2rem' }}>LE STUDIO MICHOU</h3>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                <MapPin color="#D4A72C" size={22} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ADRESSE</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{STUDIO_INFO.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                <Phone color="#D4A72C" size={22} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TÉLÉPHONE</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{STUDIO_INFO.phone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                <Mail color="#D4A72C" size={22} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>EMAIL</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{STUDIO_INFO.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock color="#D4A72C" size={22} style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>HORAIRES</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>{STUDIO_INFO.hours}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ backgroundColor: 'var(--color-card)', padding: '2.5rem', border: '1px solid var(--color-border)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <h3 style={{ color: 'var(--color-gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>MESSAGE TRANSMIS À LA DIRECTION</h3>
                  <p style={{ color: 'var(--color-gray)' }}>Votre retour a été enregistré en toute confidentialité. La direction générale examinera votre message sous 24h.</p>
                  <button 
                    onClick={() => setSent(false)}
                    style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--color-gold)', color: '#fff', padding: '0.5rem 1.5rem', cursor: 'pointer' }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  
                  {/* Encadré Réclamation / Direction */}
                  <div style={{ 
                    gridColumn: 'span 2', 
                    padding: '1.25rem', 
                    backgroundColor: 'rgba(212, 167, 44, 0.05)', 
                    borderLeft: '3px solid var(--color-gold)', 
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}>
                    <AlertCircle color="#D4A72C" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                        ESPACE RÉCLAMATIONS & DIRECTION
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-gray)', lineHeight: '1.45', margin: 0 }}>
                        Un désaccord, un manquement ou une insatisfaction concernant un membre de notre équipe ? Votre expérience est notre priorité. Ce formulaire est réservé à vos retours critiques et sera transmis de manière <strong style={{ color: '#fff' }}>strictly confidentielle</strong> à la direction.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>NOM *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Votre nom" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>EMAIL *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Votre email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                    />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>SUJET</label>
                    <input 
                      type="text" 
                      placeholder="Signaler une situation, plainte sur un membre de l'équipe..." 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                    />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>MESSAGE *</label>
                    <textarea 
                      rows="5" 
                      required 
                      placeholder="Décrivez la situation avec précision..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem', backgroundColor: 'var(--color-black)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none' }} 
                    />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading ? 'TRANSMISSION EN COURS...' : 'ENVOYER LE MESSAGE À LA DIRECTION'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
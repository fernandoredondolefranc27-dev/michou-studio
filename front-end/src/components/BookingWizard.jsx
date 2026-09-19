import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import Button from './Button';
import { Check, Calendar as CalendarIcon, Clock, Ticket } from 'lucide-react';
import { createBooking } from '../services/api';

const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const getTomorrowString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

const getCurrentTimeString = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const BookingWizard = () => {
  const todayStr = getTodayString();
  const tomorrowStr = getTomorrowString();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingPass, setBookingPass] = useState(null);

  const isTimeValid = () => {
    if (!selectedTime) return false;
    if (selectedDate === todayStr) {
      const now = new Date();
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const chosenTimeObj = new Date();
      chosenTimeObj.setHours(hours, minutes, 0, 0);
      return chosenTimeObj > now;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const response = await createBooking({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: selectedService.title,
        duration: selectedService.duration,
        date: selectedDate,
        time: selectedTime,
        notes: formData.notes
      });

      if (response.success) {
        setBookingPass(response.pass);
        setIsSubmitted(true);
      } else {
        alert(response.message || 'Erreur lors de la réservation.');
      }
    } catch (error) {
      alert('Erreur réseau lors de la création de la réservation.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted && bookingPass) {
    return (
      <div 
        style={{
          backgroundColor: 'var(--color-dark)',
          border: '1px solid var(--color-gold)',
          padding: 'clamp(1.25rem, 4vw, 3rem)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}
        className="animate-fade-in"
      >
        <div 
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212, 167, 44, 0.15)',
            color: 'var(--color-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}
        >
          <Check size={28} />
        </div>
        <span className="section-subtitle">RÉSERVATION CONFIRMÉE</span>
        <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', marginBottom: '1rem' }}>VOTRE PASS STUDIO EST PRÊT</h3>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-gray)', fontSize: '0.9rem' }}>
          Présentez cette carte numérique à votre arrivée au studio.
        </p>

        <div style={{ 
          backgroundColor: 'var(--color-black)', 
          border: '2px dashed var(--color-gold)', 
          padding: 'clamp(1rem, 3vw, 2rem)', 
          textAlign: 'left', 
          marginBottom: '2rem',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-gray-dark)', paddingBottom: '1rem', marginBottom: '1.25rem', gap: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>MICHOU STUDIO PASS</span>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{bookingPass.service}</h4>
            </div>
            <Ticket color="#D4A72C" size={28} style={{ flexShrink: 0 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.7rem', margin: 0 }}>TITULAIRE</p>
              <p style={{ color: '#fff', fontWeight: '600', margin: 0 }}>{bookingPass.name}</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.7rem', margin: 0 }}>PASS ID</p>
              <p style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1rem', margin: 0 }}>{bookingPass.passId}</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.7rem', margin: 0 }}>TÉLÉPHONE</p>
              <p style={{ color: '#fff', margin: 0 }}>{bookingPass.phone}</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.7rem', margin: 0 }}>DATE DE RENDEZ-VOUS</p>
              <p style={{ color: '#fff', margin: 0 }}>{bookingPass.date}</p>
            </div>
            <div>
              <p style={{ color: 'var(--color-gray)', fontSize: '0.7rem', margin: 0 }}>HEURE</p>
              <p style={{ color: '#fff', margin: 0 }}>{bookingPass.time}</p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'rgba(212, 167, 44, 0.1)', 
            padding: '0.85rem', 
            borderLeft: '3px solid var(--color-gold)', 
            fontSize: '0.8rem', 
            color: 'var(--color-gold)',
            lineHeight: '1.4'
          }}>
            Capturez cet écran et présentez-le à votre arrivée.
          </div>
        </div>

        <Button to="/" variant="outline">
          RETOURNER À L'ACCUEIL
        </Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 0.5rem', boxSizing: 'border-box' }}>
      
      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', position: 'relative', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s} 
            onClick={() => s < step && setStep(s)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              cursor: s < step ? 'pointer' : 'default',
              flex: 1
            }}
          >
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: step >= s ? 'var(--color-gold)' : 'var(--color-dark)',
                color: step >= s ? 'var(--color-black)' : 'var(--color-gray)',
                border: step >= s ? '1px solid var(--color-gold)' : '1px solid var(--color-gray-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '0.8rem',
                transition: 'all 0.3s'
              }}
            >
              {s}
            </div>
            <span style={{ 
              fontSize: '0.55rem', 
              letterSpacing: '0.05em', 
              marginTop: '0.35rem', 
              color: step >= s ? 'var(--color-white)' : 'var(--color-gray)', 
              textTransform: 'uppercase',
              textAlign: 'center',
              lineHeight: '1.1'
            }}>
              {s === 1 && 'Prestation'}
              {s === 2 && 'Date'}
              {s === 3 && 'Heure'}
              {s === 4 && 'Infos'}
              {s === 5 && 'Récap'}
            </span>
          </div>
        ))}
      </div>

      {/* STEP 1: SERVICE SELECT */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', textAlign: 'center' }}>01. CHOISISSEZ VOTRE PRESTATION</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                onClick={() => setSelectedService(serv)}
                style={{
                  backgroundColor: selectedService.id === serv.id ? 'rgba(212, 167, 44, 0.08)' : 'var(--color-card)',
                  border: selectedService.id === serv.id ? '1px solid var(--color-gold)' : '1px solid var(--color-gray-dark)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
              >
                <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: '500' }}>{serv.number}</span>
                <h4 style={{ fontSize: '1rem', margin: '0.4rem 0' }}>{serv.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-gray)', marginBottom: '0.5rem' }}>{serv.subtitle}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-light)' }}>Durée : {serv.duration}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <Button onClick={() => setStep(2)}>
              ÉTAPE SUIVANTE — DATE
            </Button>
          </div>
        </div>
      )}

      {/* STEP 2: DATE SELECT */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', textAlign: 'center' }}>02. CHOISISSEZ UNE DATE</h3>
          <div style={{ 
            backgroundColor: 'var(--color-card)', 
            padding: '1.5rem 1rem', 
            border: '1px solid var(--color-gray-dark)', 
            textAlign: 'center', 
            maxWidth: '450px', 
            margin: '0 auto',
            boxSizing: 'border-box'
          }}>
            <CalendarIcon size={32} color="#D4A72C" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>Sélectionnez la date de votre rendez-vous :</p>
            
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <button
                type="button"
                onClick={() => setSelectedDate(todayStr)}
                style={{
                  flex: 1,
                  padding: '0.75rem 0.5rem',
                  backgroundColor: selectedDate === todayStr ? 'var(--color-gold)' : 'var(--color-black)',
                  color: selectedDate === todayStr ? 'var(--color-black)' : 'var(--color-white)',
                  border: '1px solid var(--color-gold)',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}
              >
                Aujourd'hui
              </button>
              <button
                type="button"
                onClick={() => setSelectedDate(tomorrowStr)}
                style={{
                  flex: 1,
                  padding: '0.75rem 0.5rem',
                  backgroundColor: selectedDate === tomorrowStr ? 'var(--color-gold)' : 'var(--color-black)',
                  color: selectedDate === tomorrowStr ? 'var(--color-black)' : 'var(--color-white)',
                  border: '1px solid var(--color-gold)',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}
              >
                Demain
              </button>
            </div>

            <input 
              type="date" 
              min={todayStr}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                border: '1px solid var(--color-gold)',
                padding: '0.85rem 1rem',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
            <Button variant="outline" onClick={() => setStep(1)}>RETOUR</Button>
            <Button onClick={() => setStep(3)}>ÉTAPE SUIVANTE — HEURE</Button>
          </div>
        </div>
      )}

      {/* STEP 3: TIME SELECT */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', textAlign: 'center' }}>03. CHOISISSEZ VOTRE HEURE</h3>
          <div style={{ 
            backgroundColor: 'var(--color-card)', 
            padding: '1.5rem 1rem', 
            border: '1px solid var(--color-gray-dark)', 
            textAlign: 'center', 
            maxWidth: '450px', 
            margin: '0 auto',
            boxSizing: 'border-box'
          }}>
            <Clock size={32} color="#D4A72C" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>Indiquez l'heure d'arrivée ({selectedDate}) :</p>
            
            <input 
              type="time" 
              value={selectedTime}
              min={selectedDate === todayStr ? getCurrentTimeString() : undefined}
              onChange={(e) => setSelectedTime(e.target.value)}
              style={{
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
                border: isTimeValid() ? '1px solid var(--color-gold)' : '1px solid #e74c3c',
                padding: '0.85rem 1rem',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            />

            {!isTimeValid() && (
              <p style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.85rem' }}>
                ⚠️ L'heure choisie est déjà passée. Veuillez indiquer un horaire ultérieur.
              </p>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
            <Button variant="outline" onClick={() => setStep(2)}>RETOUR</Button>
            <Button onClick={() => isTimeValid() && setStep(4)} disabled={!isTimeValid()}>
              ÉTAPE SUIVANTE — MES INFOS
            </Button>
          </div>
        </div>
      )}

      {/* STEP 4: CLIENT INFO */}
      {step === 4 && (
        <div className="animate-fade-in">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', textAlign: 'center' }}>04. VOS COORDONNÉES</h3>
          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--color-gold)' }}>PRÉNOM *</label>
              <input 
                type="text" 
                name="firstName" 
                required
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Votre prénom"
                style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--color-gold)' }}>NOM *</label>
              <input 
                type="text" 
                name="lastName" 
                required
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Votre nom"
                style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--color-gold)' }}>EMAIL</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="exemple@domaine.com"
                style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--color-gold)' }}>TÉLÉPHONE *</label>
              <input 
                type="tel" 
                name="phone" 
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+33 6 00 00 00 00"
                style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', color: 'var(--color-gold)' }}>DEMANDE PARTICULIÈRE (OPTIONNEL)</label>
              <textarea 
                name="notes" 
                rows="3"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Précisions..."
                style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-gray-dark)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </form>
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
            <Button variant="outline" onClick={() => setStep(3)}>RETOUR</Button>
            <Button onClick={() => setStep(5)}>ÉTAPE SUIVANTE — RÉCAPITULATIF</Button>
          </div>
        </div>
      )}

      {/* STEP 5: SUMMARY */}
      {step === 5 && (
        <div className="animate-fade-in">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', textAlign: 'center' }}>05. CONFIRMATION DE VOTRE DEMANDE</h3>
          <div style={{ backgroundColor: 'var(--color-card)', padding: '1.5rem', border: '1px solid var(--color-gold)', maxWidth: '650px', margin: '0 auto', boxSizing: 'border-box' }}>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1rem', marginBottom: '0.75rem' }}>MICHOU — STUDIO DE BEAUTÉ</h4>
            <div style={{ borderBottom: '1px solid var(--color-gray-dark)', paddingBottom: '0.75rem', marginBottom: '0.75rem', lineHeight: '1.8', fontSize: '0.85rem' }}>
              <p><strong>Service :</strong> {selectedService.title}</p>
              <p><strong>Durée estimée :</strong> {selectedService.duration}</p>
              <p><strong>Date choisie :</strong> {selectedDate}</p>
              <p><strong>Heure demandée :</strong> {selectedTime}</p>
            </div>
            <div style={{ lineHeight: '1.8', fontSize: '0.85rem' }}>
              <p><strong>Nom complet :</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email :</strong> {formData.email || 'Non renseigné'}</p>
              <p><strong>Téléphone :</strong> {formData.phone}</p>
              <p><strong>Demande particulière :</strong> {formData.notes || 'Aucune'}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
            <Button variant="outline" onClick={() => setStep(4)}>RETOUR</Button>
            <Button onClick={handleConfirm} disabled={loading}>
              {loading ? 'GÉNÉRATION DU PASS...' : 'CONFIRMER LA DEMANDE'}
            </Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BookingWizard;
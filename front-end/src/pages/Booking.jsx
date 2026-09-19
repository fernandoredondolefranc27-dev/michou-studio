import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BookingWizard from '../components/BookingWizard';

const Booking = () => {
  return (
    <div className="booking-page section-padding" style={{ paddingTop: '10rem' }}>
      <div className="container">
        
        <SectionTitle 
          number="RÉSERVATION"
          subtitle="PRENDRE RENDEZ-VOUS"
          title="RÉSERVER VOTRE MOMENT MICHOU"
          align="center"
        />

        <div style={{ marginTop: '3rem' }}>
          <BookingWizard />
        </div>

      </div>
    </div>
  );
};

export default Booking;
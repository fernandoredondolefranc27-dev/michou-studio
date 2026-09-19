const API_URL = import.meta.env.VITE_API_URL;

// Récupérer les témoignages
export const getTestimonials = async () => {
  try {
    const response = await fetch(`${API_URL}/testimonials`);
    return await response.json();
  } catch (error) {
    console.error('Erreur API (getTestimonials):', error);
    return [];
  }
};

// Publier un témoignage
export const createTestimonial = async (data) => {
  const response = await fetch(`${API_URL}/testimonials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Envoyer une réclamation
export const sendComplaint = async (data) => {
  const response = await fetch(`${API_URL}/contact/complaint`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

// Créer une réservation (Génère le Pass ID)
export const createBooking = async (data) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};
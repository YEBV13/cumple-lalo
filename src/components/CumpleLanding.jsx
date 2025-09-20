import React, { useState } from 'react';
import './CumpleLanding.css';
import FotoCarrusel2 from './FotoCarrusel2';
import GaleriaRecuerdos from './GaleriaRecuerdos';
import Countdown from './Countdown';

export default function CumpleLanding() {
  const [page, setPage] = useState(0);
  const totalPages = 3;

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <>
      {/* Header fijo y visible SIEMPRE */}
      <header className="fixed-header fade-in delay-1" style={{paddingTop: 4, paddingBottom: 4}}>
        <img src="/images/logo2.jpg" alt="Logo Transformers" style={{ width: 70, height: 70, borderRadius: '50%', boxShadow: '0 2px 8px #FFD700', marginBottom: 4, objectFit: 'cover', border: '3px solid #FFD700', background: '#fff' }} />
        <span style={{ color: '#FFD700', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 2, textShadow: '0 2px 8px #000' }}>TRANSFORMERS PARTY</span>
      </header>
      {/* Navegación SIEMPRE visible, debajo del header */}
      <div className="book-flip-nav book-flip-nav-sticky">
        <button onClick={goPrev} disabled={page === 0} className="book-flip-btn">⟵</button>
        <span className="book-flip-indicator">{page + 1} / {totalPages}</span>
        <button onClick={goNext} disabled={page === totalPages - 1} className="book-flip-btn">⟶</button>
      </div>
      <div className="book-flip-container">
        <div className={`book-flip-page${page === 0 ? ' active' : ''}`}
          style={{ zIndex: page === 0 ? 2 : 1 }}>
          <div className="landing-container">
            <div className="card-section fade-in delay-2">
              <Countdown />
              <h1 style={{ fontSize: '2.8rem', marginBottom: 0 }}>🎉 ¡Feliz Cumpleaños Lalito!</h1>
              <h2 style={{ color: '#FFD700', marginTop: 0, marginBottom: 10 }}>¡Ya cumple 5 años! 🥳</h2>
              <p style={{ fontSize: '1.2rem', color: '#fff', margin: '10px 0 30px 0', background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: 8 }}>
                ¡Estás invitado a una fiesta llena de diversión, sorpresas y mucha alegría!<br />
                Ven a celebrar con nosotros este día tan especial para Lalito.
              </p>
            </div>
          </div>
        </div>
        <div className={`book-flip-page${page === 1 ? ' active' : ''}`}
          style={{ zIndex: page === 1 ? 2 : 1 }}>
          <div className="landing-container">
            <div className="card-section fade-in delay-3" style={{ background: 'rgba(0,0,0,0.13)', margin: '40px 0', border: '2px solid #FFD700', boxShadow: '0 2px 16px #FFD70033' }}>
              <h3 style={{ color: '#00BFFF', marginBottom: 18 }}>📸 Momentos de Lalito</h3>
              <FotoCarrusel2 />
              <h4 style={{ color: '#FFD700', margin: '24px 0 10px 0', fontWeight: 700 }}>Galería de recuerdos</h4>
              <GaleriaRecuerdos />
            </div>
          </div>
        </div>
        <div className={`book-flip-page${page === 2 ? ' active' : ''}`}
          style={{ zIndex: page === 2 ? 2 : 1 }}>
          <div className="landing-container">
            <div className="card-section details fade-in delay-4" style={{ margin: '30px 0 20px 0', background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <p><strong>📍 Dirección:</strong> <a href="https://maps.app.goo.gl/ksJ5QruyTuimEK65A" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700', textDecoration: 'underline' }}>Calle Nicolás Rivera  esq. Los pinos</a>.</p>
              <p><strong>🕒 Hora:</strong> <span style={{ color: '#00BFFF' }}>Viernes 26 de septiembre, 4:00 PM</span></p>
              <p><strong>🎂 Lugar:</strong> <span style={{ color: '#FF69B4' }}>Salon Multifiestas</span></p>
            </div>
            <div className="card-section fade-in delay-5">
              <p className="message" style={{ fontWeight: 600, fontSize: '1.2rem', color: '#fff', margin: '18px 0 30px 0', textShadow: '0 2px 8px #000' }}>
                ¡No faltes! Tu presencia hará este día aún más especial 🎁
              </p>
              <a href="https://wa.me/5217861000479?text=Confirmo asistencia al cumple de Lalito"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginBottom: 30 }}
              >
                <button className="confirm-button">
                  <span role="img" aria-label="whatsapp">💬</span> Confirmar por WhatsApp
                </button>
              </a>
            </div>
            <div style={{ marginTop: 30, padding: 12, background: 'rgba(0,0,0,0.15)', borderRadius: 10, color: '#FFD700', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center', letterSpacing: 1 }}>
              ¡Te esperamos con mucha emoción! 🚀
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import './FotoCarrusel.css';

const personajes = [
  { id: 'bakugo', nombre: 'LALO1', img: '/images/Lalo1.jpg' },
  { id: 'deku', nombre: 'LALO2', img: '/images/Lalo2.jpg' },
  { id: 'todoroki', nombre: 'LALO3', img: '/images/Lalo3.jpg' },
  { id: 'Red_Riot', nombre: 'LALO4', img: '/images/Lalo4.jpg' },
  { id: 'lemillion', nombre: 'LALO5', img: '/images/Lalo5.jpg' },
];

export default function FotoCarrusel() {
  const [zoomed, setZoomed] = useState(null);
  return (
    <div className="escena">
      <div className="carrusel">
        {personajes.map((p, i) => (
          <div
            key={p.id}
            className="tarjeta"
            style={{
              transform: `rotateY(${i * (360 / personajes.length)}deg) translateZ(100px)`,
              backgroundImage: `url(${p.img})`,
              cursor: 'pointer',
            }}
            onClick={() => setZoomed(p)}
          >
            <h3>{p.nombre}</h3>
          </div>
        ))}
      </div>
      {zoomed && (
        <div
          className="zoom-overlay"
          style={{
            position: 'center',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#fff',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setZoomed(null)}
        >
          <div style={{ position: 'relative', background: '#fff', padding: 20, borderRadius: 20 }}>
            <div style={{ color: 'black', marginBottom: 10, fontSize: 14 }}></div>
            <img
              src={zoomed.img}
              alt="bat-signal"
              className="zoom-img-bat-signal"
              style={{ zIndex: 2 }}
            />
            <img
              src={zoomed.img}
              alt={zoomed.nombre}
              className="zoom-img"
              style={{
                maxWidth: '60vw',
                maxHeight: '60vh',
                borderRadius: '16px',
                boxShadow: '0 0 40px #FFD700cc',
                animation: 'zoomIn 0.5s',
                position: 'relative',
                zIndex: 3,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}



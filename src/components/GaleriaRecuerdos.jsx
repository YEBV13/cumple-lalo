import React from 'react';
import './GaleriaRecuerdos.css';

const fotos = [
  'images/Lalo1.jpg',
  'images/Lalo2.jpg',
  'images/Lalo3.jpg',
  'images/Lalo4.jpg',
  'images/Lalo5.jpg',
];

export default function GaleriaRecuerdos() {
  return (
    <div className="galeria-recuerdos">
      {fotos.map((src, i) => (
        <img key={i} src={src} alt={`Recuerdo ${i+1}`} className="galeria-img" />
      ))}
    </div>
  );
}

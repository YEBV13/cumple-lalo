import React from 'react';



const personajes = [
  { id: 'bakugo', nombre: 'BAKUGO', img: '/images/Lalo1.jpg', sombra: 'rgb(255, 0, 0)', delay: '-7s' },
  { id: 'deku', nombre: 'DEKU', img: '/images/Lalo2.jpg', sombra: 'rgb(0, 255, 128)', delay: '-6s' },
  { id: 'todoroki', nombre: 'TODOROKI', img: '/images/Lalo3.jpg', sombra: 'rgb(255, 166, 0)', delay: '-5s' },
  { id: 'Red_Riot', nombre: 'RED RIOT', img: '/images/Lalo4.jpg', sombra: 'rgb(255, 0, 0)', delay: '-4s' },
  { id: 'lemillion', nombre: 'LEMILLION', img: '/images/Lalo5.jpg', sombra: 'rgb(0, 0, 0)', delay: '-3s' },
  { id: 'all_might', nombre: 'ALL MIGHT', img: '/images/Lalo1.jpg', sombra: 'rgb(0, 102, 255)', delay: '-2s' },
  { id: 'shigaraki', nombre: 'SHIGARAKI', img: '/images/Lalo2.jpg', sombra: 'rgb(225, 0, 255)', delay: '-1s' },
  { id: 'all_for_one', nombre: 'ALL FOR ONE', img: '/images/Lalo3.jpg', sombra: 'yellow', delay: '0s' },
];


export default function CarruselPersonajes() {
  return (
    <div className="container">
      {personajes.map(({ id, nombre, img, sombra, delay }) => (
        <div
          key={id}
          className="tarjeta"
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: delay,
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = `0px 0px 10px ${sombra}`}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          <h3>{nombre}</h3>
        </div>
      ))}
    </div>
  );
}



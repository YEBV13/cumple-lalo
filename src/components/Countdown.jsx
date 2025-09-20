import React, { useEffect, useState } from 'react';

// Cambia la fecha y hora del evento aquí
const EVENT_DATE = new Date('2025-09-26T16:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = EVENT_DATE - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  if (!timeLeft) {
    return <div className="countdown">¡El evento ya comenzó! 🎉</div>;
  }

  return (
    <div className="countdown">
      <span role="img" aria-label="clock">⏰</span> Faltan
      <span className="countdown-number"> {timeLeft.days}d </span>
      <span className="countdown-number">{timeLeft.hours}h </span>
      <span className="countdown-number">{timeLeft.minutes}m </span>
      <span className="countdown-number">{timeLeft.seconds}s </span>
      para la fiesta
    </div>
  );
}

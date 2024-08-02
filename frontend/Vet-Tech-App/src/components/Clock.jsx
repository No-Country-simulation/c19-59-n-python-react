import { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Cambiar a true si quieres formato de 12 horas
  });

  const formattedDate = time.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className='flex flex-col items-center gap-y-1'>
      <div className='text-[20px]'>{formattedTime}</div>
      <div className='text-[12px]'>{formattedDate}</div>
    </div>
  );
};
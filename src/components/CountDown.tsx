import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import store from '../store';
import Box from './Box';

const timezone = store.getState().timezone;

interface PropTypes {
  start?: Date;
  end: Date;
}

function CountDown({ end }: PropTypes) {
  const getTimeRemaining = () => {
    const endTime = dayjs(end).tz(timezone);
    const startDate = dayjs().tz(timezone);

    const total = dayjs(endTime).diff(dayjs(startDate));
    // const total = Date.parse(endTime) - Date.parse(startDate);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [{ days, hours, minutes, seconds }, setTimeRemaining] = useState(() =>
    getTimeRemaining()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    () => clearInterval(interval);
  }, []);

  return (
    <div className=" p-2 grid grid-cols-2 gap-1 md:grid-cols-4">
      <Box label="Días" value={String(days)} />
      <Box label="Horas" value={String(hours)} />
      <Box label="Minutos" value={String(minutes)} />
      <Box label="Segundos" value={String(seconds)} />
    </div>
  );
}

export default CountDown;

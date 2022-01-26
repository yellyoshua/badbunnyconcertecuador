import dayjs from 'dayjs';
import store from '../store';

interface PropTypes {
  date: Date;
}

const timezone = store.getState().timezone;

function EventDate({ date }: PropTypes) {
  const parsedDate = dayjs(date)
    .tz(timezone)
    .format('DD [de] MMMM [del] YYYY, hh[:]mm a');

  return (
    <p className="bg-black bg-opacity-60 text-white text-xs text-center tracking-wide font-sans">
      {parsedDate.toUpperCase()}
    </p>
  );
}

export default EventDate;

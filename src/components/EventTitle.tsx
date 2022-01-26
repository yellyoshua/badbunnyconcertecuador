import styles from './styles.module.css';
import store from '../store';

function EventTitle() {
  const title = store((state) => state.eventName);

  return (
    <p
      className={`text-center text-base md:text-2xl py-3 bg-white bg-opacity-60 ${styles.textBadBunnyStyle}`}
    >
      {title}
    </p>
  );
}

export default EventTitle;

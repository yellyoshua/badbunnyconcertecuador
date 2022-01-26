import styles from './styles.module.css';

interface PropTypes {
  content: string | React.ReactNode;
}

function Title({ content }: PropTypes) {
  return (
    <h1
      className={`text-center text-2xl tracking-widest ${styles.textBadBunnyStyle}`}
    >
      {content}
    </h1>
  );
}

export default Title;

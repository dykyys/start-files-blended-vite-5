import styles from './Heading.module.css';
import clsx from 'clsx';

export const Heading = ({ title, top, bottom, error, info }) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.error]: error,
        [styles.info]: info,
      })}
    >
      {title}
    </h2>
  );
};

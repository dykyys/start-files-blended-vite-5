import styles from './Heading.module.css';
import clsx from 'clsx';

const Heading = ({ title, top, bottom, error, info, tad: Tag = 'h2' }) => {
  return (
    <Tag
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
        [styles.error]: error,
        [styles.info]: info,
      })}
    >
      {title}
    </Tag>
  );
};
export default Heading;

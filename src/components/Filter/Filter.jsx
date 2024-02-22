import styles from './Filter.module.css';
export const Filter = () => {
  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};

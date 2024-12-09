import styles from './Filter.module.css';

const Filter = () => {
  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};

export default Filter;

import Select from 'react-select';

// import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';

export const SelectRates = () => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
      />
    </div>
  );
};

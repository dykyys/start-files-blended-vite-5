import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  setDefaultCurrency,
} from '../../redux/currencySlice';

const SelectRates = () => {
  const dispatch = useDispatch();
  const baseValue = useSelector(selectBaseCurrency);
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        value={{ value: baseValue, label: baseValue }}
        options={symbols}
        onChange={e => dispatch(setDefaultCurrency(e.value))}
      />
    </div>
  );
};

export default SelectRates;

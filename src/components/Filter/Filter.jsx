import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { selectFilter, setFilter } from '../../redux/currencySlice';

const Filter = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilter);


  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={currentFilter}
      onChange={e=>{dispatch(setFilter(e.target.value))}}
    />
  );
};

export default Filter;

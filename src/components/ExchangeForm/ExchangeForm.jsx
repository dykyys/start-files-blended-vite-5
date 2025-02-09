import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { getExchangeInfo } from '../../redux/currencySlice';


const pattern = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/;

const ExchangeForm = () => {

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.input.value;
    const isValideValue = pattern.test(value);
    if (!isValideValue) {    
      return;
    }
    const [amount, from, , to] = value.split(' ');
    const exchangeRequest = {amount,from,to};
    dispatch(getExchangeInfo(exchangeRequest));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        name="input"
        title="Request format 15 USD in UAH"
        className={styles.input}
      />
    </form>
  );
};

export default ExchangeForm;

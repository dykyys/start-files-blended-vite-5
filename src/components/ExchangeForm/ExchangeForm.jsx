import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const hendleSubbmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    const [amount, from, , to] = value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={hendleSubbmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        name="currency"
        title="Request format 15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        className={styles.input}
        placeholder="15 USD in UAH"
        required
      />
    </form>
  );
};

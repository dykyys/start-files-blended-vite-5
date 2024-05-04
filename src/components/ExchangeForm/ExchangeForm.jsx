import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.elements.currency.value);
    const [amount, from, , to] =
      event.currentTarget.elements.currency.value.split(' ');
    const currencyObj = { amount, from, to };
    console.log(currencyObj);
    dispatch(fetchExchangeCurrency(currencyObj));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        title="Request format 15 USD in UAH"
        className={styles.input}
        required
        placeholder="15 USD in UAH"
        name="currency"
      />
    </form>
  );
};

//{to: "UAH", from: "USD", amount: 15}

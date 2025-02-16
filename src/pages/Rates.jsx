import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';

import { useDispatch, useSelector } from 'react-redux';
import RatesList from '../components/RatesList/RatesList';
import { filteredRates, getExchangeRates, selectBaseCurrency } from '../redux/currencySlice';
import { useEffect } from 'react';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const isError = false;
  const rates = useSelector(filteredRates);
  const dispatch = useDispatch();
  const baseRates= useSelector(selectBaseCurrency)

  useEffect(() => {
    dispatch(getExchangeRates(rates));
  }, [rates, dispatch]);

  return (
    <Section>
      <Container>
        <Filter/>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseRates} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {rates.length > 0 && <RatesList rates={rates} />}
      </Container>
    </Section>
  );
};

export default Rates;

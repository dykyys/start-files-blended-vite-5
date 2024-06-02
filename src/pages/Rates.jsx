import { Wave } from 'react-animated-text';

import { Container, Heading, Loader, RatesList, Section } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLatestSymbols } from 'reduxState/operations';
import {
  selectError,
  selectFiltredRates,
  selectLoading,
  selectorBaseCurrency,
} from 'reduxState/selector';

const Rates = () => {
  const baseCurrency = useSelector(selectorBaseCurrency);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filtredRates = useSelector(selectFiltredRates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {isLoading && <Loader />}
        {filtredRates.length > 0 && <RatesList rates={filtredRates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;

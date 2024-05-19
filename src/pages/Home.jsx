import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from 'reduxState/selector';

const Home = () => {
  const isError = false;
  const exchangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        <Heading info title="What currencies do you want to exchange?🙂" />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;

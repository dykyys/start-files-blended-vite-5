import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectExchangeInfo,
  selectLoading,
} from 'reduxState/selector';

const Home = () => {
  const exchangeInfo = useSelector(selectExchangeInfo);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {isLoading && <Loader />}
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

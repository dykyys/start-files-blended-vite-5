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
  selectConvertInfo,
  selectError,
  selectLoading,
} from '../redux/selectors';

const Home = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const convertInfo = useSelector(selectConvertInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {convertInfo && <ExchangeInfo {...convertInfo} />}
        {!isError && !convertInfo && (
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

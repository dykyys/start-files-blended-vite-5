import { Container, ExchangeForm, Heading, Section } from 'components';

const Home = () => {
  const isError = false;

  return (
    <Section>
      <Container>
        <ExchangeForm />
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

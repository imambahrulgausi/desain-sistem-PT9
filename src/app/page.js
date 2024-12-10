
import Button from '../app/componen/button';
import Container from "./componen/container";
import Layout from './componen/layout';

const HomePage = () => {
  return (
      <Layout>
          <Container size="small">
              <h2>Small Container</h2>
              <p>This is a small container.</p>
          </Container>

          <Button state="success">Success</Button>
          <Button state="info">Info</Button>
          <Button state="danger">Danger</Button>
          <Button state="default">Default</Button>
          <Button state="warning">Warning</Button>

      </Layout>
  );
};
export default HomePage;


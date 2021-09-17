import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './components/UI/Footer';
import ProfileCard from './components/Card/ProfileCard';
import './assets/sass/custom.scss';
import bg from './assets/images/bg-pattern-card.svg';
import person from './assets/images/image-victor.jpg';

function App() {
  return (
    <>
      <main>
        <section className='section-main'>
          <Container fluid='sm'>
            <Row className='justify-content-center'>
              <ProfileCard
                bg={bg}
                person={person}
                name='Victor Crest'
                age='26'
                city='London'
                followers='80K'
                likes='803K'
                photos='1.4K'
              />
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

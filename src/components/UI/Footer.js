import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer>
      <Container className='text-center'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#top'>Your Name Here</a>.
      </Container>
    </footer>
  );
}

export default Footer;

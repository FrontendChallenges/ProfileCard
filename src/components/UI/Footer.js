import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className='mb-3'>
      <Container className='text-center'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
          className='text-white-50'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='#top' className='text-white-50'>
          Jinok
        </a>
        .
      </Container>
    </footer>
  );
}

export default Footer;

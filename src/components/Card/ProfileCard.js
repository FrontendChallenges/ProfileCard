import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function ProfileCard({
  bg,
  person,
  name,
  age,
  city,
  followers,
  likes,
  photos,
}) {
  return (
    <Col>
      <Card className='card__container overflow-hidden'>
        <Row className='position-relative'>
          <Image src={bg} />
          <Card.ImgOverlay>
            <Image
              src={person}
              roundedCircle
              className='position-absolute top-100 start-50 translate-middle border border-5 border-white'
            />
          </Card.ImgOverlay>
        </Row>
        <Card.Body className='card__content'>
          <Row className='my-5 pt-5'>
            <p>
              <span className='fw-bold'>{name} </span>
              <span className='text-secondary'>{age}</span>
            </p>
            <small className='text-secondary'>{city}</small>
          </Row>
          <Row></Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProfileCard;

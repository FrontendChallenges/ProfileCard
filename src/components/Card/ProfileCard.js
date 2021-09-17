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
      <Card className='card-container overflow-hidden'>
        <Row className='position-relative'>
          <Image src={bg} />
          <Card.ImgOverlay>
            <Image
              src={person}
              roundedCircle
              className='position-absolute top-100 start-50 translate-middle'
            />
          </Card.ImgOverlay>
        </Row>

        <Card.Body></Card.Body>
      </Card>
    </Col>
  );
}

export default ProfileCard;

import React from 'react';
import axios from 'axios';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Art_Collection = () => {
  const [arts, setArts] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/photos';

  useEffect(() => {
    axios.get(url).then((response) => {
      setArts(response.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h1
                style={{ color: 'orange', fontWeight: '900', fontSize: '45px' }}
              >
                {' '}
                Art Gallery
              </h1>
              {arts.map((Element, index) => {
                return (
                  <img
                    key={index}
                    className="G_img"
                    src={Element.url}
                    alt="#"
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Art_Collection;

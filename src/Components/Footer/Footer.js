import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  const footerData = [
    {
      item: 'Content',
      class: 'footer_item',
    },
    {
      item: 'Content',
      class: 'footer_item',
    },
    {
      item: 'Content',
      class: 'footer_item',
    },
    {
      item: 'Content',
      class: 'footer_item',
    },
    {
      item: 'Content',
      class: 'footer_item',
    },
  ];
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Footer;

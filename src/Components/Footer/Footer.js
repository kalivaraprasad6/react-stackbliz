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
            <Col>
              {footerData.map((Element, index) => {
                return <p key={index}>{Element.item}</p>;
              })}
            </Col>
            <Col>
              {footerData.map((Element, index) => {
                return <p key={index}>{Element.item}</p>;
              })}
            </Col>
            <Col>
              {footerData.map((Element, index) => {
                return <p key={index}>{Element.item}</p>;
              })}
            </Col>
            <Col>
              {footerData.map((Element, index) => {
                return <p key={index}>{Element.item}</p>;
              })}
            </Col>
          </Row>
        </Container>
        <hr />
        <p style={{ textAlign: 'center' }}>Help & Support</p>
      </div>
    </div>
  );
};
export default Footer;

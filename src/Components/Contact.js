import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <>
      <div className="container">
        <header className="text-center">
          <h1 id="title">
            <em> Contact Form</em>
          </h1>
          <p id="description">
            <em>Thank you for your Intrest, Please fill the form</em>
          </p>
        </header>

        <form action="#" id="contact-form">
          <div className="form-group">
            <label htmlFor="name" id="name-label">
              <em> Name </em>
            </label>
            <input
              type="text"
              id="name-input"
              className="form-control"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="" id="-label">
              <em> Email </em>
            </label>
            <input
              type="text"
              id="email-input"
              className="form-control"
              placeholder="Enter Email"
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;

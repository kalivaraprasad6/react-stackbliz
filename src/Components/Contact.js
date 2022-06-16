import React from 'react';
import './Contact.css';
import { useState } from 'react';
const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    age: '',
    role: '',
  });

  const { name, email, age, role } = contactData;

  const changeHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contactData);
  };
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
        <div className="row">
          <div className="col-4">
            <p></p>
            <form action="#" id="contact-form" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name" id="name-label">
                  <em> Name: </em>
                </label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={changeHandler}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" id="email-label">
                  <em> Email: </em>
                </label>
                <input
                  type="text"
                  id="email-input"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" id="age-label">
                  <em> Age: </em>
                </label>
                <input
                  type="text"
                  id="age-input"
                  name="age"
                  value={age}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Age"
                  min="10"
                  max="99"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dropdown" id="dropdown-label">
                  <em>Choose best describes your current role?</em>
                </label>
                <select
                  
                  id="dropdown"
                  name="role"
                  value={role}
                  onChange={changeHandler}
                  className="form-control"
                  required
                >
                  <option defaultValue value="Select">
                    Select Current Role
                  </option>
                  <option value="Student">Student</option>
                  <option value="Full Time Job">Full Time Job</option>
                  <option value="Learner">Learner</option>
                </select>
              </div>
              <p></p>
              <button
                className="btn-submit btn-lg"
                type="submit"
                name="submit"
                id="btn-submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './logincard.css';

function LoginApp() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/homepage/homepage');
  };

  return (
    <div className="login-container">
      <h1>Log in</h1>

      <Form className="login-form">
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={homePage}>
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default LoginApp;
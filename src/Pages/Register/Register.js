import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import background from '../../Images/M.png'


export function Register() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid style={{ backgroundImage: `url(${background})` }}>
      <Row >
        <Col>
        </Col>
        <Col xs lg="5">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
            <Form className='w-100 mx-5' noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center' }} className="font-weight-bold mb-5"> Register </h1>
              <Form.Group className="mb-3 mx-5" as={Col} controlId="validationCustom01">
                <Form.Label className='mb-0'>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mx-5" as={Col} controlId="validationCustom02">
                <Form.Label className='mb-0'>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email address.."
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mx-5" as={Col} controlId="validationCustom03">
                <Form.Label className='mb-0'>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password.."
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mx-5" as={Col} controlId="validationCustom04">
                <Form.Label className='mb-0'>Date of Birth</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="date of birth.."
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a date of birth.
                </Form.Control.Feedback>
              </Form.Group>

              
              <div className="d-grid gap-2">
                <Button variant="primary" className='mx-5' type="submit">
                  Register
                </Button>
                <a href='/Login' className='mx-5 text-center mt-5 link-secondary' style={{color: "grey"}}>Already have an account? </a>
              </div>            </Form>
          </div>
        </Col>
      </Row>
    </Container >

  );
}




export default Register;
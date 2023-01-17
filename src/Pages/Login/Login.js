import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import background from '../../Images/M.png'
import axios, * as others from 'axios';


export function Login() {

  const handleSubmit = async () => {
    await GetAllUsers()
  };

  var userData = JSON.parse(localStorage.getItem("accessToken"));
  console.log(userData)
  const loggedInUser = userData !== null && userData.accessToken.length > 0 && new Date(userData.refreshtokens[0].expiryDate).getTime() > new Date(Date.now()).getTime()

  if (loggedInUser) {
    window.location.replace("http://localhost:3009/");
  } else {
    return (
      <Container fluid style={{ backgroundImage: `url(${background})` }}>
        <Row >
          <Col>
          </Col>
          <Col xs lg="5">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
              <Form className='w-100 mx-5'>
                <h1 style={{ textAlign: 'center' }} className="font-weight-bold mb-5"> Login </h1>
                <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                  <Form.Label className='mb-0'>Usernmae</Form.Label>
                  <Form.Control id="usernameValue" type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                  <Form.Label className='mb-0'>Password</Form.Label>
                  <Form.Control id="passwordValue" type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button onClick={handleSubmit} variant="primary" className='mx-5'>
                    Login
                  </Button>
                  <p className='mx-5 text-center text-danger d-none' id="notFound" style={{ color: "grey" }}>Account not found!</p>
                  <a href='/Register' className='mx-5 text-center mt-4 link-secondary' style={{ color: "grey" }}>Create Your Account </a>
                </div>

              </Form>
            </div>
          </Col>
        </Row>
      </Container >
    );
  }
}

export function GetAllUsers() {

  var username = document.getElementById("usernameValue").value;
  var password = document.getElementById("passwordValue").value;
  var notfound = document.getElementById("notFound");



  var data = JSON.stringify({
    "firstName": "",
    "lastName": "",
    "username": username,
    "password": password
  });
  console.log(data);
  var config = {
    method: 'post',
    url: 'https://localhost:7094/api/Users/Login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };


  axios(config)
    .then(function (response) {
      console.log("Succes", response.data.accessToken);
      localStorage.setItem("accessToken", JSON.stringify(response.data));
      console.log("Logged in Redirect")
      window.location.replace("http://localhost:3009/")
    })
    .catch(function (error) {
      console.log("error", error);
      notfound.classList.remove('d-none')
      notfound.classList.add("d-inline")

    });

}


export default Login;
import React from "react";
import { useState } from "react";
import axios from "axios";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function SignupPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // const [userData, setUserData] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handlePwChange = (e) => {
    setPw(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 name, email, id, pw를 처리하거나 서버로 보낼 수 있습니다.
    console.log('이름:', name);
    console.log('이메일:', email);
    console.log('아이디:', id);
    console.log('비밀번호:', pw);

    
    const userData = {
      name,
      email,
      id,
      pw
    };
    sendSignupData(userData);
  }

  // 백엔드로 회원가입 데이터 보내기
  const sendSignupData = async function sendData(userData) {
  try {
    const response = await fetch("http://222.98.255.30:12344/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (sendSignupData.ok) {
      alert('회원가입이 완료되었습니다.');
      console.log(sendSignupData.ok);
      // 원하는 페이지로 리다이렉트하거나 다른 작업을 수행할 수 있습니다.
    } else {
      alert('회원가입에 실패했습니다.');
      console.log(sendSignupData.ok);
    }
  } catch (error) {
    console.error('회원가입 요청 중 오류 발생:', error);
  }
};

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">회원가입</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* <Form> */}
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label htmlFor="name">Name</label>
                        <Form.Control
                          type="text"
                          id="name"
                          value={name}
                          onChange={handleNameChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label htmlFor="email">Email</label>
                        <Form.Control
                           type="email"
                           id="email"
                           value={email}
                           onChange={handleEmailChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label htmlFor="id">ID</label>
                        <Form.Control
                           type="text"
                           id="id"
                           value={id}
                           onChange={handleIdChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label htmlFor="pw">Password</label>
                        <Form.Control
                          type="password"
                          id="pw"
                          value={pw}
                          onChange={handlePwChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Button onClick={handleSubmit}></Button> */}
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmit}
                  >
                    회원가입
                  </Button>
                {/* </Form> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupPage;


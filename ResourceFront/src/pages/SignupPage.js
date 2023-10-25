import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  Col,
} from "react-bootstrap";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  // const [userData, setUserData] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 name, email, id, pw를 처리하거나 서버로 보낼 수 있습니다.
    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("아이디:", id);
    console.log("비밀번호:", password);

    const userData = {
      name,
      email,
      id,
      password,
    };
    sendSignupData(userData);
  };

  const history = useHistory();

  const handleSignupClick = () => {
    history.push("/admin/signin");
  };

  // 백엔드로 회원가입 데이터 보내기
  const sendSignupData = async function sendData(userData) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}user/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
    } catch (error) {
      console.error("회원가입 요청 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Container fluid className="text-center">
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">회원가입</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* <Form> */}
                <Row className="justify-content-center">
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <Col md="1" style={{ padding: "6px" }}>
                        <label htmlFor="name">Name</label>
                      </Col>
                      <Form.Control
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <Col md="1" style={{ padding: "6px" }}>
                        <label htmlFor="email">Email</label>
                      </Col>
                      <Form.Control
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <Col md="1" style={{ padding: "6px" }}>
                        <label htmlFor="id">ID</label>
                      </Col>
                      <Form.Control
                        type="text"
                        id="id"
                        value={id}
                        onChange={handleIdChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <Col md="1" style={{ padding: "6px" }}>
                        <label htmlFor="password">Password</label>
                      </Col>
                      <Form.Control
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePwChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                {/* <Button onClick={handleSubmit}></Button> */}
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                  onClick={handleSignupClick}
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

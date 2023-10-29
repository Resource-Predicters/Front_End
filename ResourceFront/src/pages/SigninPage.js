import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  Col,
} from "react-bootstrap";

function SigninPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // 보낼 데이터
    const data = {
      id: id,
      password: pw,
    };

    // POST 요청을 보낼 엔드포인트 URL
    const url = process.env.REACT_APP_BACKEND_URL + "user/login";
    // JSON 데이터와 함께 POST 요청 보내기
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json", // 데이터가 JSON 형식임을 지정
        },
      })
      .then((response) => {
        console.log("토큰 : .", response.data);
      })
      .catch((error) => {
        console.error("로그인 실패 : ", error);
      });
  };

  const history = useHistory();

  const handleSignupClick = () => {
    history.push("/admin/signup");
  };

  const handleSigninClick = () => {
    history.push("/admin/main");
    handleSubmit();
  };

  return (
    <>
      <Container fluid className="text-center">
        <Row>
          <Col md="6">
            <form onSubmit={handleSubmit}>
              <Card>
                <Card.Header>
                  <Card.Title as="h4">로그인</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
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
                            <label htmlFor="pw">Password</label>
                          </Col>
                          <Form.Control
                            type="password"
                            id="pw"
                            value={pw}
                            onChange={handlePwChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <p />
                    <Button
                      className="btn-fill pull-right mr-1"
                      type="submit"
                      variant="info"
                      onClick={handleSigninClick}
                    >
                      로그인
                    </Button>
                    <Button
                      className="btn-fill pull-left ml-1"
                      type="submit"
                      variant="info"
                      onClick={handleSignupClick}
                    >
                      회원가입
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SigninPage;

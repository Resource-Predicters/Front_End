import React from "react";
import { useState } from "react";

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

function SigninPage() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handlePwChange = (e) => {
    setPw(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이곳에서 id와 pw를 처리하거나 서버로 보낼 수 있습니다.
    console.log('ID:', id);
    console.log('Password:', pw);
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
          <form onSubmit={handleSubmit}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">로그인</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form> 
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
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    로그인
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

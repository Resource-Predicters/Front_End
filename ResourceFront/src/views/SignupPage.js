import React from "react";

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
                <Form>
                  <Row>
                    
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>ID</label>
                        <Form.Control
                          placeholder="ID"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="Password"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    회원가입
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignupPage;


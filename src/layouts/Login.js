import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";


import Login from "../views/Login";
const LoginLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Login />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
      </Col>
    </Row>
  </Container>
);

export default LoginLayout;

import React from 'react';
import PageTitle from '../components/common/PageTitle';
import { Redirect } from 'react-router-dom';

import UserDetails from '../components/user-profile-lite/UserDetails';
import UserAccountDetails from '../components/user-profile-lite/UserAccountDetails';
import { runInThisContext } from 'vm';

import PropTypes from 'prop-types';

import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from 'shards-react';

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      toDashboard: false,
      error: false,
      errorMessage: 'User & Pass Cannot be Empty'
    };
    this.props = props;
  }

  handleChange = e => {
    console.log('im vol--->', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    console.log('username: ' + this.state.username);
    console.log('password: ' + this.state.password);

    if (this.state.username && this.state.password) {
      this.setState({ toDashboard: true });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/blog-overview" />;
    }

    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            align="center"
            title="User Login"
            subtitle="Overview"
            md="12"
            className="ml-sm-auto mr-sm-auto"
          />
        </Row>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">{this.state.title}</h6>
              </CardHeader>

              {this.state.error ? (
                <h6 className="m-0">{this.state.errorMessage}</h6>
              ) : (
                ''
              )}

              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          {/* First Name */}
                          <Col md="3"></Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="feUsername">Username</label>
                            <FormInput
                              id="feUsername"
                              name="username"
                              placeholder="Username"
                              value={this.state.username}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          {/* Email */}
                          <Col md="3"></Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="fePassword">Password</label>
                            <FormInput
                              type="password"
                              name="password"
                              id="fePassword"
                              placeholder=" Enter the Password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="3" className="form-group">
                            <Button onClick={this.handleLogin} theme="accent">
                              Back
                            </Button>
                            <Col md="3"></Col>
                          </Col>
                          <Col md="3"></Col>
                          <Col md="3" className="form-group">
                            <Button theme="accent">Register</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Register;

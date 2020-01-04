import React from 'react';

import PageTitle from '../components/common/PageTitle';

import { runInThisContext } from 'vm';
import PropTypes from 'prop-types';
import NavButton from '../components/common/NavButton';
import Loading from '../components/common/Loading';

import firebase from './../firebase';

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

class AddVolunteers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      education: '',
      subject: '',
      date: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      pageMode: 'add',
      loading: false,
      pageTitle: 'Add New Volunteers'
    };
    console.log(props);
    this.props = props;

    if (props.location.state) {
      this.state = props.location.state;
      this.state.pageMode = 'view';
      this.state.inputDisabled = true;
      this.state.loading = false;
      this.state.pageTitle = 'View  Volunteers';
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addVolunteers = () => {
    this.setState({ loading: true });
    const db = firebase.firestore();
    const userRef = db.collection('volunteers');
    userRef
      .add({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        education: this.state.education,
        subject: this.state.subject,
        date: this.state.date,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      })
      .then(d => {
        console.log(d);
        if (d) {
          this.setState({
            loading: false,
            pageMode: 'view',
            inputDisabled: true,
            pageTitle: 'View Volunteers',
            id: d.id
          });
        }
      });
    console.log('add');
  };
  updateVolunteers = () => {
    console.log('update');
  };
  render() {
    const item = {
      title: 'Volunteers',
      to: '/volunteers'
    };
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title={this.state.pageTitle}
            subtitle="Overview"
            className="ml-sm-auto mr-sm-auto"
          />
          <NavButton sm="4" key={111} item={item} className="text-sm-right" />
        </Row>
        <Row>
          <Col lg="6">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">{this.state.title}</h6>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          {/* First Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feFirstName">First Name</label>
                            <FormInput
                              id="feFirstName"
                              name="firstName"
                              placeholder="First Name"
                              value={this.state.firstName}
                              onChange={this.handleChange}
                            />
                          </Col>
                          {/* Last Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feLastName">Last Name</label>
                            <FormInput
                              id="feLastName"
                              name="lastName"
                              placeholder="Last Name"
                              value={this.state.lastName}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          {/* Student Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feEducation">
                              Highest Education
                            </label>
                            <FormInput
                              id="feEducation"
                              name="education"
                              placeholder="Highest Education"
                              value={this.state.education}
                              onChange={this.handleChange}
                            />
                          </Col>
                          {/* Father Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="fesubject">Subject Handle</label>
                            <FormSelect
                              id="fesubject"
                              name="subject"
                              value={this.state.subject}
                              onChange={this.handleChange}
                            >
                              <option>Choose...</option>
                              <option>English</option>
                              <option>Maths</option>
                              <option>Science</option>
                              <option>Social</option>
                              <option>Environmental</option>
                              <option>General Knowledge</option>
                              <option>Fundamental Science</option>
                              <option>Computer Science</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        <Row form>
                          {/* First Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feDob">D.O.B</label>
                            <FormInput
                              id="feDob"
                              name="date"
                              placeholder="D.O.B"
                              value={this.state.date}
                              onChange={this.handleChange}
                            />
                          </Col>
                          {/* Last Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feEmail">Email</label>
                            <FormInput
                              id="feEmail"
                              name="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                        <FormGroup>
                          <label htmlFor="feAddress">Address</label>
                          <FormInput
                            id="feAddress"
                            name="address"
                            placeholder="Address"
                            value={this.state.address}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        <Row form>
                          {/* City */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feCity">City</label>
                            <FormSelect
                              id="feCity"
                              name="city"
                              value={this.state.city}
                              onChange={this.handleChange}
                            >
                              <option>Choose...</option>
                              <option>Coimbatore</option>
                              <option>Chennai</option>
                              <option>Bangalore</option>
                            </FormSelect>
                          </Col>
                          {/* State */}
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputState">State</label>
                            <FormSelect
                              id="feInputState"
                              name="state"
                              value={this.state.state}
                              onChange={this.handleChange}
                            >
                              <option>Choose...</option>
                              <option>TamilNadu</option>
                              <option>Kerala</option>
                              <option>TamilNadu</option>
                            </FormSelect>
                          </Col>
                          {/* Zip Code */}
                          <Col md="2" className="form-group">
                            <label htmlFor="feZipCode">Zip</label>
                            <FormInput
                              id="feZipCode"
                              name="zipcode"
                              placeholder="Zipcode"
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>

                        {this.state.pageMode === 'add' ? (
                          <Button theme="accent" onClick={this.addVolunteers}>
                            Add Volunteers
                          </Button>
                        ) : (
                          <Button
                            theme="accent"
                            onClick={this.updateVolunteers}
                          >
                            Update Volunteers
                          </Button>
                        )}
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg="6">
            <Card small className="mb-4">
              <Loading open={this.state.loading} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddVolunteers;

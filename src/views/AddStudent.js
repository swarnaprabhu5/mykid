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

class AddStudent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      medium: '',
      standard: '',
      school: '',
      title: '',
      dob: '',
      fePhone: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      description: '',
      pageMode: 'add',
      loading: false,
      pageTitle: 'Add New Student'
    };

    console.log(props);
    this.props = props;

    if (props.location.state) {
      this.state = props.location.state;
      this.state.pageMode = 'view';
      this.state.inputDisabled = true;
      this.state.loading = false;
      this.state.pageTitle = 'View Student';
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addStudent = () => {
    this.setState({ loading: true });
    const db = firebase.firestore();
    const userRef = db.collection('students');
    userRef
      .add({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        medium: this.state.medium,
        standard: this.state.standard,
        school: this.state.school,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        description: this.state.description
      })
      .then(d => {
        console.log(d);
        if (d) {
          this.setState({
            loading: false,
            pageMode: 'view',
            inputDisabled: true,
            pageTitle: 'View Student',
            id: d.id
          });
        }
      });
    console.log('add');
  };

  updateStudent = () => {
    console.log('update');
  };

  render() {
    const item = {
      title: 'Students List',
      to: '/students'
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
                          {/* Student Name */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feFirstName">Student Name</label>
                            <FormInput
                              id="feFirstName"
                              name="firstName"
                              placeholder="First Name"
                              value={this.state.firstName}
                              onChange={this.handleChange}
                            />
                          </Col>
                          {/* Father Name */}
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
                          {/* Medium */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feMedium">Medium</label>
                            <FormSelect
                              id="feMedium"
                              name="medium"
                              value={this.state.medium}
                              onChange={this.handleChange}
                            >
                              <option>Choose...</option>
                              <option>English</option>
                              <option>Tamil</option>
                            </FormSelect>
                          </Col>
                          {/* Password */}
                          <Col md="6" className="form-group">
                            <label htmlFor="standard">Standard</label>
                            <FormSelect
                              id="standard"
                              name="standard"
                              value={this.state.standard}
                              onChange={this.handleChange}
                            >
                              <option>Choose...</option>
                              <option>I</option>
                              <option>II</option>
                              <option>III</option>
                              <option>IV</option>
                              <option>V</option>
                              <option>VI</option>
                              <option>VII</option>
                              <option>VIII</option>
                              <option>IX</option>
                              <option>X</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        <FormGroup>
                          {/* School Name */}
                          <label htmlFor="school">School Name</label>
                          <FormInput
                            id="school"
                            name="school"
                            placeholder="Enter School Name"
                            value={this.state.school}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
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
                        <Row form>
                          {/* Description */}
                          <Col md="12" className="form-group">
                            <label htmlFor="feDescription">Description</label>
                            <FormTextarea
                              id="feDescription"
                              name="description"
                              rows="5"
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>
                        {this.state.pageMode === 'add' ? (
                          <Button theme="accent" onClick={this.addStudent}>
                            Add Student
                          </Button>
                        ) : (
                          <Button theme="accent" onClick={this.updateStudent}>
                            Update Student
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
export default AddStudent;

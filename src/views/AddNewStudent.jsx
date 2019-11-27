import React from "react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { runInThisContext } from "vm";
import PropTypes from "prop-types";
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
} from "shards-react";

class AddNewStudent extends React.Component {

    constructor(props) {
        super();
        this.state = {feFirstName : '', title: '', dob: '',fePhone:'',feAddress:'',feCity:''}
        this.props = props;
    }
    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value });
   }

    render () {
        return(
    
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Add New Student" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
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
                  <label htmlFor="feFirstName">Student Name</label>
                  <FormInput
                    id="feFirstName"
                    name="feFirstName"
                    placeholder="First Name"
                    value={this.state.feFirstName}
                    onChange={this.handleChange} 
                  />
                </Col>
                {/* Last Name */}
                <Col md="2" className="form-group">
                  <label htmlFor="age">Age</label>
                  <FormInput
                    id="dob"
                    name="dob"
                    placeholder="DOB"
                    value={this.state.dob}
                    onChange= {this.handleChange} 
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePhone">Phone-No</label>
                  <FormInput
                    type=""
                    name="fePhone"
                    id="fePhone"
                    placeholder="Enter 10 digits"
                    value={this.state.fePhone}
                    onChange={this.handleChange} 
                    autoComplete="phone"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  name="feAddress"
                  placeholder="Address"
                  value={this.state.feAddress}
                  onChange={this.handleChange} 
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    name="feCity"
                    placeholder="City"
                    value={this.state.feAddress}
                    onChange={this.handleChange} 
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
      </Col>
    </Row>
  </Container>
        )}
        }
export default AddNewStudent;

import React from "react";
import SidebarNavItem from "../components/layout/MainSidebar/SidebarNavItem"
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { runInThisContext } from "vm";
import PropTypes from "prop-types";

import firebase from "./../firebase";


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

class AddStudent extends React.Component {

    constructor(props) {
        super();
        this.state = {firstName : '', lastName: '', title: '', dob: '',fePhone:'',feAddress:'',feCity:''};
        this.props = props;
    }
    handleChange = (e) => {
      console.log('im vol--->', e.target.value);
      this.setState({ [e.target.name] : e.target.value });
   }

   addStudent = () => {
    const db = firebase.firestore();
    const userRef = db.collection("students");
    userRef.add({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }); 

    userRef.doc("9047578585").set({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    
    console.log(userRef);
  
  };

    render () {

      const item = {
        title: "Students",
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: "/students",
      };
        return(
    
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
    <Col lg="6">

      <PageTitle title="Add New Student" subtitle="Overview" className="ml-sm-auto mr-sm-auto" />
     </Col>      <Col lg="6">

      <SidebarNavItem key={111} item={item} />
      </Col>
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
          
                <Col md="2" className="form-group">
                  <label htmlFor="dob">D.O.B</label>
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
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="standard">Standard</label>
                  <FormInput
                    type="email"
                    name="fePhone"
                    id="fePhone"
                    placeholder="Enter 10 digits"
                    value={this.state.fePhone}
                    type="standard"
                    name="standard"
                    id="standard"
                    placeholder="Enter the Standard"
                    value={this.state.standard}
                    onChange={this.handleChange} 
                    autoComplete="standard"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="medium">Medium</label>
                  <FormInput
                    type="medium"
                    id="medium"
                    placeholder="Enter the Medium"
                    value={this.state.standard}
                    onChange={this.handleChange} 
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="schoolName">School Name</label>
                <FormInput
                  id="schoolName"
                  name="schoolName"
                  placeholder="Enter School Name"
                  value={this.state.schoolName}
                  onChange={this.handleChange} 
                />
              </FormGroup>
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
              <Button theme="accent" onClick={this.addStudent}>Update Account</Button>
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
export default AddStudent;

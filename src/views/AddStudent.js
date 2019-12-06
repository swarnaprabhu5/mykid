import React from "react";
import SidebarNavItem from "../components/layout/MainSidebar/SidebarNavItem"
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { runInThisContext } from "vm";
import PropTypes from "prop-types";
import NavButton from "../components/common/NavButton"

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
        this.state = {firstName : '', lastName: '', medium: '',standard: '',school:'',title: '', dob: '',fePhone:'',feAddress:'',feCity:''};
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
      lastName: this.state.lastName,
      medium:this.state.medium,
      standard:this.state.standard,
      school:this.state.school

    }); 

    userRef.doc("9047578585").set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      medium:this.state.medium,
      standard:this.state.standard,
      school:this.state.school
    })
    alert("Added successfully : ");
    console.log(userRef);
  };
    render () {
      const item = {
        title: "Students",
        to: "/students"
      };
        return(
    
      <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
              <PageTitle title="Add New Student" subtitle="Overview" className="ml-sm-auto mr-sm-auto" />
              <NavButton sm="4" key={111} item={item} className="text-sm-right"/>      
     
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
                  <label htmlFor="lastname">Last Name</label>
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
                  <label htmlFor="medium">Medium</label>
                  <FormSelect 
                   id="medium" 
                   name="medium"
                   value={this.state.medium}
                   onChange={this.handleChange}>
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
                   onChange={this.handleChange}>
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
              <Button theme="accent" onClick={this.addStudent}>Add Student</Button>
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

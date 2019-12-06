import React from "react";
import firebase from "./../firebase";


import {
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
  Button
} from "shards-react";

class AddNewVolunteer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {feFirstName : ''};

    const title = props.title;
    console.log('im tutle--->', title);
  }
  addVolunteer = () => {
    const db = firebase.firestore();
    const userRef = db.collection("volunteers");
    userRef.add({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }); 
  }

  handleChange = (e) => {
    console.log('im vol--->', e.target.value);
    this.setState({[e.target.name] : e.target.value})
    // this.setState({[e.target.name] : e.target.value})
    // this.setState({feFirstName: e.target.value});
      
  }
  handleAddVolunteer = (e) =>{
    alert("hello : "+ this.state.firstName )
  }

  

render () 
{ 
  return (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{this.title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="4" className="form-group">
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
                <Col md="4" className="form-group">
                  <label htmlFor="MobileNumber">Mobile Number</label>
                  <FormInput
                    id="MobileNumber"
                    name="lastName"
                    placeholder="Mobile Number" 
                    value={this.state.mobileNumber}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="4" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    name="Email"
                    placeholder="Email Address"
                    value={this.state.Email}
                    onChange={this.handleChange}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="4" className="form-group">
                  <label htmlFor="FeDob">DOB</label>
                  <FormInput
                    id="FeDob"
                    placeholder="DOB"
                    name="feDob"
                    value={this.setState.feDob}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="4" className="form-group">
                  <label htmlFor="feEducation">Education</label>
                  <FormInput
                    id="feEducation"
                    name="Education"
                    placeholder="Highest Level Education"
                    value={this.state.Education}
                    onChange={this.handleChange}
                  />
                </Col>
                {/* Password */}
                <Col md="4" className="form-group">
                  <label htmlFor="feHomeTown">Home Town</label>
                  <FormInput
                    id="feHomeTown"
                    placeholder="Home Town"
                    name="FeHomeTown"
                    value={this.setState.FeHomeTown}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddressOne">Address Line One</label>
                <FormInput
                  id="feAddressOne"
                  placeholder="Address One"
                  name="AddressOne"
                  value={this.setState.AddressOne}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                <label htmlFor="feAddressOne">Address Line Two</label>
                <FormInput
                  id="feAddressTwo"
                  placeholder="Address Two"
                  name="AddressOne"
                  value={this.setState.AddressTwo}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="4" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
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
                <Col md="4" className="form-group">
                  <label htmlFor="feCountry">Country</label>
                  <FormInput
                    id="feCountry"
                    name="Country"
                    placeholder="Country"
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              {/* <Row form> */}
                {/* Description */}
                {/* <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row> */}
<<<<<<< Updated upstream
              <Button theme="accent" onClick={this. addVolunteer }>Update Account</Button>
=======
              <Button onClick={this.handleAddVolunteer} theme="accent">Add Volunteer</Button>
>>>>>>> Stashed changes
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)}
}

export default AddNewVolunteer;

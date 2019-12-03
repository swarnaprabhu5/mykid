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

class Login extends React.Component {
 

    constructor(props) {
        super();
        this.state = {feFirstName : '', passWord: ''}
        this.props = props;
    }
    
  
  
    handleChange = (e) => {
      console.log('im vol--->', e.target.value);
      this.setState({ [e.target.name] : e.target.value });
    
   }
   
   handleLogin= (e) => {
    console.log("username: " + this.state.feFirstName);
    console.log("Password: " + this.state.passWord);
     console.log( this.state);
     
    alert("hello : "+ this.state.feFirstName +this.state.passWord);
    
}
    render () {
      
     
        return(
    
  <Container  fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle align="center" title="User Login" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
    <Col lg="3"></Col>
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
                <Col md="3"></Col>
                <Col md="6" className="form-group">
                  <label  htmlFor="feFirstName">User Name</label>
                  <FormInput
                    id="feFirstName"
                    name="feFirstName"
                    placeholder="First Name"
                    value={this.state.feFirstName}
                    onChange={this.handleChange} 
                  />
                </Col>
               </Row>
              <Row form>
                {/* Email */}
                <Col md="3"></Col>
                <Col md="6" className="form-group">
                  <label htmlFor="password">Password</label>
                  <FormInput
                    type="password"
                    name="passWord"
                    id="passWord"
                    placeholder=" Enter  the Password"
                    onChange = {this.handleChange}
                  />

                </Col>
                </Row>
                <Row form>
                <Col md="3"></Col>
                <Col md="3" className="form-group">
                <Button theme="accent">Register</Button>  
                </Col>



                <Col md="3" className="form-group">



              <Button  onClick={this.handleLogin} theme="accent">Login</Button>

           
              <Col md="3"></Col>
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
        )}
        }
       
export default Login;


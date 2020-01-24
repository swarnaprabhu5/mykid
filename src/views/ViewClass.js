import React from 'react';
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

import PageTitle from '../components/common/PageTitle';
import firebase from '../firebase';
import NavButton from '../components/common/NavButton';

class ViewClass extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      userMobile: JSON.parse(localStorage.getItem('userData')).mobileNumber,
    attendance: '',
    reason: '',
  };
    this.props = props;
    // console.log('check prop det--->', props);   
    if (props.location.state) {
        const state = props.location.state;
        console.log(state);
        state.dob = state.dob != null ? new Date(state.dob) : null;
        this.state = state;
        this.state.pageTitle = 'View Class';
      }
    };

    
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    addattendence = () => {
      this.setState({ loading: true });
      const db = firebase.firestore();
      const userRef = db.collection('attendence');
      userRef
        .add({
          attendance: this.state.attendance,
          reason: this.state.reason,
          classId: this.state.id,
          userMobile: this.state.userMobile
        }).then(a => {
          console.log(a)
        })
      }

  render() {
    const item = {
        title: 'View Student',
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: '/view-class'
    };
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Class List"
            subtitle="List"
            className="text-sm-left"
          />
        </Row>

         <Card small className="mb-4 pt-3">
         <CardHeader className="border-bottom text-center">
          <div >
              Title: {this.state.title}  <br></br>
              Description: {this.state.desc}
          </div>
          </CardHeader>
          <ListGroup flush>
          <ListGroupItem className="px-4">
             <div className="progress-wrapper">
              <Col md="2" className="form-group" align="left">
                <label htmlFor="feAttendance">Attedence:</label>
                <FormSelect
                 id="feAttendance"
                 name="attendance"
                 value={this.state.state}
                 onChange={this.handleChange}
                  >
                   <option>Choose...</option>
                   <option>Coming</option>
                   <option>Late</option>
                   <option>Not Coming</option>
                      </FormSelect>
                </Col>
               <Col md="2" className="form-group" align="left">
                <label htmlFor="feReason">Reason:</label>
                 <FormTextarea
                   id="feReason"
                   name="reason"
                   rows="1"
                   onChange={this.handleChange}
                   />
                </Col>
                <Button theme="accent" onClick={this.addattendence}>
                Submit
               </Button>
                </div>
            </ListGroupItem>
           </ListGroup>
          </Card> 
          </Container>
    );
  }
}
export default ViewClass;


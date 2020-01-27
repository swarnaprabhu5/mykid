import React from 'react';
import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormSelect,
  FormTextarea,
  Button,
  CardBody
} from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import firebase from '../firebase';
import NavButton from '../components/common/NavButton';

class ViewClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      volunteerId: JSON.parse(localStorage.getItem('userData')).mobileNumber,
      volunteerName: JSON.parse(localStorage.getItem('userData')).firstName,
      attendance: '',
      reason: '',
      done: false,
      attendances: []
    };
    this.props = props;
    // console.log('check prop det--->', props);
    if (props.location.state) {
      const state = props.location.state;
      console.log(state);
      this.state.classId = state.id;
      this.state.title = state.title;
      this.state.desc = state.desc;
      this.state.pageTitle = 'View Class';
    }
  }

  componentDidMount() {
    let attendances = [];
    let self = this;

    firebase
      .firestore()
      .collection('attendance')
      .where('classId', '==', this.state.classId)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const d = doc.data();
          attendances.push(d);
        });
        self.setState({ attendances: attendances });
      })
      .catch(function(error) {
        console.log('errorr', error);
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addAttendance = () => {
    this.setState({ loading: true });
    const db = firebase.firestore();
    const userRef = db.collection('attendance');
    userRef
      .add({
        attendance: this.state.attendance,
        reason: this.state.reason,
        classId: this.state.classId,
        volunteerId: this.state.volunteerId,
        volunteerName: this.state.volunteerName
      })
      .then(a => {
        console.log(a);
      });
  };

  render() {
    const item = {
      title: 'Classe Log',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/class-log'
    };
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={this.state.title}
            subtitle={this.state.desc}
            className="text-sm-left"
          />
          <NavButton
            sm="4"
            item={item}
            data={this.state}
            className="text-sm-right"
          />
        </Row>

        <Row>
          <Col lg="4">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <div>Attendance</div>
              </CardHeader>
              <ListGroup flush>
                <ListGroupItem className="px-4">
                  <div className="progress-wrapper">
                    <Col md="12" className="form-group">
                      <label htmlFor="feAttendance">Attedence:</label>
                      <FormSelect
                        id="feAttendance"
                        name="attendance"
                        value={this.state.attendance}
                        onChange={this.handleChange}
                      >
                        <option>Choose...</option>
                        <option>Coming</option>
                        <option>Late</option>
                        <option>Not_Coming</option>
                      </FormSelect>
                    </Col>
                    <Col md="12" className="form-group">
                      <label htmlFor="feReason">Reason:</label>
                      <FormTextarea
                        id="feReason"
                        name="reason"
                        value={this.state.reason}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Button theme="accent" onClick={this.addAttendance}>
                      Submit
                    </Button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>

          <Col lg="8">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">My Mentee</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Name
                      </th>
                      <th scope="col" className="border-0">
                        Attendance
                      </th>
                      <th scope="col" className="border-0">
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.attendances.map((attd, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{attd.volunteerName}</td>
                          <td>{attd.attendance}</td>
                          <td>{attd.reason}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ViewClass;

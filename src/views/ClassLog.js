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

class ClassLog extends React.Component {
  constructor(props) {
    super();
    this.state = {
      volunteerId: JSON.parse(localStorage.getItem('userData')).mobileNumber,
      volunteerName: JSON.parse(localStorage.getItem('userData')).firstName,
      attendance: '',
      comment: '',
      done: false,
      studentLogs: [],
      students: [{ id: 0, firstName: 'None' }]
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
    let students = this.state.students;
    let self = this;

    firebase
      .firestore()
      .collection('students')
      .where('mentorId', '==', this.state.volunteerId)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const d = doc.data();
          console.log(d);
          students.push(d);
        });
        self.setState({ students: students });
      })
      .catch(function(error) {
        console.log('errorr', error);
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addStudentLog = () => {
    this.setState({ loading: true });
    const db = firebase.firestore();
    const userRef = db.collection('student');
    userRef
      .add({
        student: this.state.student,
        comment: this.state.comment,
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
      to: '/classe-log'
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
          <NavButton sm="4" item={item} className="text-sm-right" />
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
                      <label htmlFor="feAttendance">Student:</label>
                      <FormSelect
                        id="feAttendance"
                        name="attendance"
                        value={this.state.attendance}
                        onChange={this.handleChange}
                      >
                        {this.state.students.map((value, index) => {
                          return (
                            <option key={index} value={index}>
                              {value.firstName}
                            </option>
                          );
                        })}
                      </FormSelect>
                    </Col>
                    <Col md="12" className="form-group">
                      <label htmlFor="feComment">Comment:</label>
                      <FormTextarea
                        id="feComment"
                        name="comment"
                        value={this.state.comment}
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
                        Comments
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.studentLogs.map((attd, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{attd.studentName}</td>
                          <td>{attd.comments}</td>
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
export default ClassLog;

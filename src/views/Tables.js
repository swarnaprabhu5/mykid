import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import firebase from './../firebase';

class Tables extends React.Component{
  
  constructor(props) {
    super();
    this.state = {students: []};
    this.props = props;
    

}

componentDidMount() {

  const db = firebase.firestore();
  const userRef = db.collection("students");

  let students = [];

  userRef.get().then(doc => {

    doc.docs.forEach(d => {
      let student = d.data();
      student.id = d.id;
      students.push(student)
    })

    this.setState({students: students})
  })

}

viewStudent = (id) => {
  console.log(id);
}

deleteStudent = (id, index) => {
  console.log(id, index);
  let students = [...this.state.students];

  console.log(students);
  firebase.firestore().collection('students').doc(id).delete().then(() => {
    console.log("Document successfully deleted!");

    students.splice(index, 1);

    this.setState({students: students});
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}
  
  render() {

    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Country
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
          
                {this.state.students.map(( listValue, index ) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{listValue.firstName}</td>
                      <td>{listValue.lastName}</td>
                      <td>{listValue.lastName}</td>
                      <td><button onClick={this.viewStudent.bind(this, listValue.id, index)}>View</button></td>
                      <td><button onClick={this.deleteStudent.bind(this, listValue.id, index)}>Delete</button></td>
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

export default Tables;

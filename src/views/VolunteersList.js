import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import firebase from "../firebase";
import SidebarNavItem from "../components/layout/MainSidebar/SidebarNavItem"
import NavButton from "../components/common/NavButton"

class VolunteersList extends React.Component{
  
  constructor(props) {
    super();
    this.state = {volunteers: []};
    this.props = props;
    

}

componentDidMount() {

  const db = firebase.firestore();
  const userRef = db.collection("volunteers");

  let volunteers = [];

  userRef.get().then(doc => {

    doc.docs.forEach(d => {
      let volunteer = d.data();
      volunteer.id = d.id;
      volunteers.push(volunteer)
    })

    this.setState({volunteers: volunteers})
  })

}

viewVolunteers= (id) => {
  console.log(id);
}

deleteVolunteers = (id, index) => {
  console.log(id, index);
  let volunteers = [...this.state.volunteers];

  console.log(volunteers);
  firebase.firestore().collection('volunteers').doc(id).delete().then(() => {
    console.log("Document successfully deleted!");

    volunteers.splice(index, 1);

    this.setState({volunteers: volunteers});
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}
  
  render() {

 const item = {
      title: "Volunteers",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-volunteer",
    };
    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    

    <Row noGutters className="page-header py-4">
        <PageTitle title="Add New volunteer" subtitle="Overview" className="ml-sm-auto mr-sm-auto" />   
        <NavButton sm="4" item={item} className="text-sm-right"/>
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
          
                {this.state.volunteers.map(( listValue, index ) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{listValue.firstName}</td>
                      <td>{listValue.lastName}</td>
                      <td>{listValue.lastName}</td>
                      <td><button onClick={this.viewVolunteers.bind(this, listValue.id, index)}>View</button></td>
                      <td><button onClick={this.deleteVolunteers.bind(this, listValue.id, index)}>Delete</button></td>
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

export default VolunteersList;

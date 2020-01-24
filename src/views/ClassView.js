import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import firebase from '../firebase';
import NavButton from '../components/common/NavButton';

class ClassView extends React.Component {
  constructor(props) {
    super();
    this.state = { classes: [] };
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

        <Row>
          <Col>
          <Card small className="mb-2 pt-2  ">
          <CardHeader className="border-bottom text-center">
          <div className="mb-2 mx-auto">
              Title: {this.state.title}  <br></br>
              Description: {this.state.desc}
           </div>    
        </CardHeader>

        </Card>
        </Col>     
        </Row>
      </Container>
    );
  }
}
export default ClassView;


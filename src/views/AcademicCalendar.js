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

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

class AcademicCalendar extends React.Component {
  constructor(props) {
    super();
    this.state = { pageTitle: 'cal', events: [] };
    this.props = props;
  }

  componentDidMount() {
    const userRef = firebase.firestore().collection('timetable');

    let events = [];

    userRef.get().then(doc => {
      doc.docs.forEach(d => {
        let event = d.data();
        event.id = d.id;
        event.start = new Date(2020, 1, 1, 10, 33, 30, 0);
        event.end = new Date(2020, 1, 1, 10, 33, 30, 0);
        events.push(event);
      });

      console.log('mount');
      console.log(events);

      this.setState({ events: events });
    });
  }

  addEvent = event => {
    const db = firebase.firestore();
    const userRef = db.collection('timetable');
    userRef.add(event).then(d => {
      console.log(d);
      if (d) {
        this.setState({
          events: [...this.state.events, event]
        });
      }
    });
  };

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');

    console.log(typeof end);
    if (title)
      this.addEvent({
        start,
        end,
        title
      });
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title={this.state.pageTitle}
            subtitle="Overview"
            className="ml-sm-auto mr-sm-auto"
          />
        </Row>

        <Row>
          <Col lg="12">
            <Calendar
              selectable
              localizer={localizer}
              events={this.state.events}
              defaultView={Views.MONTH}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(2020, 1, 1)}
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={this.handleSelect}
              style={{ height: 500 }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AcademicCalendar;

import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-responsive-modal';
import classNames from 'classnames';
import Spinner from './Spinner';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100px !important'
};

const classes = classNames('col-12');

class Loading extends React.Component {
  constructor(props) {
    super();
    this.state = { open: props.open };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Modal
        open={this.props.open}
        onClose={this.onCloseModal}
        styles={styles}
        center
      >
        <Spinner />
      </Modal>
    );
  }
}

export default Loading;

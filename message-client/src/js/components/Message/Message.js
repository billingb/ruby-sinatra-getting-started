// import './Message.scss';

import React, { Component, PropTypes } from 'react';

export default class Message extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  };

  render () {
    return (
      <li className="message" id={"message" + this.props.id}>
        {this.props.message}
      </li>
    );
  }
}

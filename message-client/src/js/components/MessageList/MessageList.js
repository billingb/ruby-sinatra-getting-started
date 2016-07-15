// import './MessageList.scss';

import React, { Component, PropTypes } from 'react';

import Message from '../Message/Message';

export default class MessageList extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired
  };

  renderList() {
    return this.props.messages.map((message) =>
      (
        <Message
          id={message.id}
          message={message.message}
          {...this.props.actions} />
      )
    );
  }

  componentWillMount () {
    this.fetchData();
  }

  fetchData () {
    let token = this.props.token;
    this.props.actions.fetchMessages(token);
  }

  render () {
    return (
      <div>
        {this.props.isFetching === true
          ? <h1>Loading data...</h1>
          : <ul className="messageList">{this.renderList()}</ul>
        }
      </div>
    );
  }
}

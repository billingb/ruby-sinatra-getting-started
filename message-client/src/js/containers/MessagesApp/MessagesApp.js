import './MessagesApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MessageActions from '../../actions/MessageActions';
import { MessageList } from '../../components';

class MessagesApp extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired
  };

  render () {
    const { messages: {messages}, token, actions } = this.props;

    return (
      <div className="messagesApp">
        <h1>Messages</h1>
        <MessageList messages={messages} token={token} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    token: state.authentication.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MessageActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesApp);

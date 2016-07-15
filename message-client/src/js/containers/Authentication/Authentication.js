import './Authentication.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AuthenticationActions from '../../actions/AuthenticationActions';
import { LoginForm, SignUpForm } from '../../components';

class Authentication extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render () {
    const { actions } = this.props;

    return (
      <div className="authentication">
        <h1>Welcome</h1>
        <LoginForm login={actions.login} />
        <SignUpForm signUp={actions.signUp} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // friendList: state.friendList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthenticationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);

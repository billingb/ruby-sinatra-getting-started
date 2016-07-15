import './LoginForm.scss';

import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: this.props.email || '',
      password: this.props.password || ''
    };

    console.log('state:' + this.state);

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.state = Object.assign({}, this.state, {email: e.target.value});
  }

  passwordChange(e) {
    this.state = Object.assign({}, this.state, {password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div id="signin" class="row-fluid">
        <div class="span10">
          <h2>Login</h2>
          <form class="form-horizontal" onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="inputSignInEmail" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input class="input-block-level"
                       type="email"
                       id="inputSignInEmail"
                       name="email"
                       placeholder="Your email"
                       title="Enter a valid email address."
                       data-valid-min="4" maxlength="50" required=""
                       onChange={this.emailChange}/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputSignInPassword" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input class="input-block-level"
                       type="password"
                       id="inputSignInPassword"
                       name="password"
                       placeholder="password"
                       title="Password must be at least 6 characters."
                       data-valid-min="6" maxlength="30" required=""
                       onChange={this.passwordChange}/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
          <div class="span2">
            <div id="carbonads-container"><div class="carbonad"><div id="azcarbon"></div></div></div>
          </div>
        </div>
      </div>
    );
  }
}

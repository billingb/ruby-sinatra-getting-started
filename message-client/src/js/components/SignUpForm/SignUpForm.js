import './SignUpForm.scss';

import React, { Component, PropTypes } from 'react';

export default class SignUpForm extends Component {

  static propTypes = {
    signUp: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: this.props.email || '',
      password: this.props.password || '',
      passwordConfirmation: this.props.passwordConfirmation || ''
    };

    console.log('state:' + this.state);

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.passwordConfirmationChange = this.passwordConfirmationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.state = Object.assign({}, this.state, {email: e.target.value});
  }

  passwordChange(e) {
    this.state = Object.assign({}, this.state, {password: e.target.value});
  }

  passwordConfirmationChange(e) {
    this.state = Object.assign({}, this.state, {passwordConfirmation: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div id="signup" class="row-fluid">
        <div class="span10">
          <h4>New user? Sign-up here.</h4>
          <form class="form-horizontal" onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input class="input-block-level"
                       type="email"
                       id="inputEmail"
                       name="email"
                       placeholder="Your email"
                       title="Enter a valid email address."
                       data-valid-min="4" maxlength="50" required=""
                       onChange={this.emailChange}/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input class="input-block-level"
                       type="password"
                       id="inputPassword"
                       name="password"
                       placeholder="password"
                       pattern="^[a-z,A-Z,0-9,_!@#$%^&]{6,15}$"
                       title="Password must be at least 6 characters."
                       data-valid-min="6" maxlength="30" required=""
                       onChange={this.passwordChange}/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input class="input-block-level"
                       type="password" id="inputVerify"
                       name="verify"
                       placeholder="verify (password again)"
                       title="Type the password you entered again."
                       data-valid-min="6" data-valid-match="inputPassword" maxlength="30" required=""
                       onChange={this.passwordConfirmationChange}/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import { bindActionCreators } from "C:/Users/Developer/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux";
import { connect } from "react-redux";
import { login } from "../actions/loginAction";
import { string } from "prop-types";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginFormSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
    // this.props.history.push('/login')    ;
  };
  render() {
    if (
      this.props.isLoggedIn.isLoggedIn === true &&
      parseInt(this.props.isLoggedIn.role) === 3
    ) {
      return <Redirect to="/traineedashboard" />;
    }
    if (
      this.props.isLoggedIn.isLoggedIn === true &&
      parseInt(this.props.isLoggedIn.role) === 2
    ) {
      return <Redirect to="/trainerdashboard" />;
    }
    if (
      this.props.isLoggedIn.isLoggedIn === true &&
      parseInt(this.props.isLoggedIn.role) === 1
    ) {
      return <Redirect to="/admindashboard" />;
    }
    return (
      <div className="body-color">
        <div className="row">
          <div className="offset-md-4" />
          <div className="col-md-4">
            <Form
              className="form-inline-block form-login"
              onSubmit={this.onLoginFormSubmit}
            >
              <center>
                <h3>Log In</h3>
                <Link to="/register" style={{ color: "#ffe458" }}>
                  <small>Not Registered? Create an account.</small>
                </Link>
              </center>

              <hr />
              <FormGroup row>
                <Label for="exampleEmail" sm={3}>
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    required
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Enter Your Email"
                    onChange={this.onInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={3}>
                  Password
                </Label>
                <Col sm={9}>
                  <Input
                    required
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Enter Your Password"
                    onChange={this.onInputChange}
                  />
                </Col>
              </FormGroup>
              <center>
                <button className="btn btn-outline-success">
                  Login&nbsp;
                  <i className="fas fa-sign-in-alt" />
                </button>
              </center>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loginreducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

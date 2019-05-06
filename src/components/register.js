import React, { Component } from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {  Link } from 'react-router-dom';
import { bindActionCreators } from 'C:/Users/Developer/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import { connect } from 'react-redux';
import {register} from '../actions/loginAction'

class Register extends Component {

  state={
    name:'',
    contact:'',
    email:'',
    password:'',
    password2:''
  }

  onInputChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onRegisterFormSubmit=(e)=>{
    e.preventDefault()
    const user = {
      
      name: this.state.name,
      contact: this.state.contact,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
     
    };
    this.props.register(user)
    this.props.history.push('/login')    ;
  }


  render() {
   
    return (
      <div className="body-color">
        <div className="row">
          <div className="offset-md-4"></div>
          <div className="col-md-4">
            <Form className="form-inline-block form-login" onSubmit={this.onRegisterFormSubmit}>
              <center><h3>Register User</h3>
                <Link to="/login" style={{color: "#ffe458"}}><small>Already have an account?</small></Link></center>

              <hr></hr>
              <FormGroup row>
                <Label for="exampleEmail" sm={3}>Name</Label>
                <Col sm={9}>
                  <Input required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    onChange={this.onInputChange}
                  /></Col>
              </FormGroup>
              <FormGroup row>
                <Label for="contact" sm={3}>Contact</Label>
                <Col sm={9}>
                  <Input required
                    type="number"
                    name="contact"
                    id="Contact"
                    placeholder="Enter Your Contact"
                    onChange={this.onInputChange}
                  /></Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={3}> Email</Label>
                <Col sm={9}>
                  <Input required
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Enter Your Email"
                    onChange={this.onInputChange}
                  /></Col>
              </FormGroup>
              
              <FormGroup row>
                <Label for="Password" sm={3}>Password</Label>
                <Col sm={9}>
                  <Input required
                    autoComplete='true' 
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Enter Your Password"
                    onChange={this.onInputChange}
                  /></Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>Confirm Password</Label>
                <Col sm={9}>
                  <Input required
                    autoComplete='true'
                    type="password"
                    name="password2"
                    id="Password2"
                    placeholder="Confirm Password"
                    onChange={this.onInputChange}
                  /></Col>
              </FormGroup>


              {/* <FormFeedback> {this.state.error || ""} </FormFeedback> */}
              <center><button className="btn btn-outline-success" >Register&nbsp;<i className="fas fa-user-plus"></i></button></center>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    isLoggedIn: state.loginreducer.isLoggedIn
  }
}
function mapDispatchToProps(dispatch) {
  return {
    register:bindActionCreators(register, dispatch),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
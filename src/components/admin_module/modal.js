import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AddModal extends Component {
  state = {
    name: "",
    contact: "",
    email: "",
    role: "",
    status: ""
  };

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      contact: this.props.user.contact,
      email: this.props.user.email,
      role: this.props.user.role.id,
      status: this.props.user.status
    });
  }
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const token = this.props.token;
    const role = this.state.role;
    const status = this.state.status;
    const id = this.props.user._id;

    this.props.editProduct(id, role, status, token);

    this.props.toggle();
  };

  render() {
    return (
      <span>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Edit
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content modal-custom">
              <div className="modal-body">
                <Form
                  className="form-inline-block form-login"
                  onSubmit={this.onFormSubmit}
                >
                  <FormGroup row>
                    <Label for="exampleEmail" sm={3}>
                      Name
                    </Label>
                    <Col sm={9}>
                      <Input
                        disabled
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        placeholder="Enter Your Name"
                        onChange={this.onInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="contact" sm={3}>
                      Contact
                    </Label>
                    <Col sm={9}>
                      <Input
                        disabled
                        required
                        type="number"
                        name="contact"
                        id="Contact"
                        value={this.state.contact}
                        placeholder="Enter Your Contact"
                        onChange={this.onInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={3}>
                      {" "}
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        disabled
                        required
                        type="email"
                        name="email"
                        id="Email"
                        value={this.state.email}
                        placeholder="Enter Your Email"
                        onChange={this.onInputChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="Role" sm={3}>
                      Role
                    </Label>
                    <Col sm={9}>
                      <Input
                        required
                        autoComplete="true"
                        type="text"
                        name="role"
                        value={this.state.role}
                        id="role"
                        onChange={this.onInputChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={3}>Status</Label>
                    <Col sm={9}>
                      <Input
                        required
                        autoComplete="true"
                        type="text"
                        name="status"
                        value={this.state.status}
                        id="status"
                        onChange={this.onInputChange}
                      />
                    </Col>
                  </FormGroup>

                  {/* <FormFeedback> {this.state.error || ""} </FormFeedback> */}
                  <center>
                    <button className="btn btn-outline-success">
                      Save&nbsp;
                    </button>
                  </center>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.loginreducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModal);

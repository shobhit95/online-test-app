import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logout } from "../../actions/loginAction";
import { fetchUser, deleteuser, editProduct } from "../../actions/userActions";
import AddModal from "./modal";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentWillMount() {
    if (this.props.isLoggedIn) {
      let token = this.props.token;
      this.props.fetchUser(token);
    }
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    if (this.props.isLoggedIn) {
      var count = 1;
      var users = this.props.usersdata.length
        ? this.props.usersdata.map(i => {
            return (
              <tr key={i._id}>
                <th scope="row">{count++}</th>
                <td>{i.name}</td>
                <td>{i.contact}</td>
                <td>{i.email}</td>
                <td>{i.role.id}</td>
                <td>{i.status ? "Active" : "Not Active"}</td>
                <td>
                  <AddModal
                    editProduct={this.props.editProduct}
                    toggle={this.toggle}
                    user={i}
                  />
                  &nbsp;
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      this.props.deleteuser(i._id, this.props.token)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        : "<div>No users found</div>";
    }
    return (
      <div className="body-color">
        <div className="bs-header ">
          <h1>Online Test App</h1>
          <div style={{ float: "left" }}>
            <h5>Welcome : {this.props.userData.name.toUpperCase()}</h5>
            <h5 style={{ float: "left" }}>
              Role: {this.props.userData.role.type.toUpperCase()}
            </h5>
          </div>
          <div style={{ float: "Right" }}>
            <a href="/login">
              <button
                className="btn btn-outline-primary"
                onClick={this.props.logout}
              >
                Log Out
              </button>
            </a>
          </div>
        </div>

        <div className="container">
          <table className="table table-hover" style={{ marginTop: "5%" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </table>
        </div>
        <div className="bs-footer" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("admin state", state);
  return {
    isLoggedIn: state.loginreducer.isLoggedIn,
    userData: state.loginreducer.data,
    token: state.loginreducer.token,
    usersdata: state.userreducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
    fetchUser: bindActionCreators(fetchUser, dispatch),
    deleteuser: bindActionCreators(deleteuser, dispatch),
    editProduct: bindActionCreators(editProduct, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard);

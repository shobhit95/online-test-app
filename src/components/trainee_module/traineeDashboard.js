import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "C:/Users/Developer/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux";
import { logout } from "../../actions/loginAction";
import Topics from "./examtopics";
import { fetchTopics } from "../../actions/examAction";

class TraineeDashboard extends Component {
  componentDidMount() {
    this.props.fetchTopics(this.props.token);
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="body-color">
        <div className="bs-header">
          <h1>Online Test App</h1>
          <div style={{ float: "left" }}>
            <h5>Welcome : Trainee</h5>
          </div>
          <div style={{ float: "Right" }}>
            <button
              className="btn btn-outline-primary"
              onClick={this.props.logout}
            >
              Log Out
            </button>
          </div>
        </div>
        {/* <Topics /> */}
        <div className="bs-footer" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("trainee dashboard state", state);
  return {
    isLoggedIn: state.loginreducer.isLoggedIn,
    token: state.loginreducer.token
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
    fetchTopics: bindActionCreators(fetchTopics, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraineeDashboard);

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from 'react-router-dom'
import SignIn from './components/signin'
import Register from './components/register';
import NotFound from './components/NotFound'
import { bindActionCreators } from 'C:/Users/Developer/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import { connect } from 'react-redux';
import TraineeDashboard from './components/trainee_module/traineeDashboard'
import TrainerDashboard from './components/trainer_module/trainerDashboard'
import AdminDashboard from './components/admin_module/adminDashboard'

class App extends Component {
  state = {
    userStatus: ''
  }

  render() {
    //role 1 ->Admin
    //role 2 ->Trainer
    //role 3 ->Trainee
    
    return (
      
      <div >
        <Router>
          <Switch>
            <Route exact path="/register" component={Register} ></Route>
            <Route exact path="/login" component={SignIn} ></Route>
            <Route exact path="/trainerdashboard" component={(props) => <TrainerDashboard {...props} />} ></Route>
            <Route exact path="/traineedashboard" component={(props) => <TraineeDashboard {...props} />} ></Route>
            <Route exact path="/admindashboard" component={(props) => <AdminDashboard {...props} />} ></Route>

            
          </Switch>
        </Router>

      </div>
    );
  }

}


function mapStateToProps(state) {
  console.log("app state",state)
  return {
    isLoggedIn: state.loginreducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    //register:bindActionCreators(register, dispatch),
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);

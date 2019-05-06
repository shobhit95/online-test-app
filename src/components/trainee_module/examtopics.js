import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topics extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h6>Select Topics you want to give an exam.</h6>
          <ul>
            <li>
              <Link>
                <strong>Javascript</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Topics;

import React, { Component } from "react";
import logo from "./../../logo.png";
import groupIcon from "./../images/abc.png";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#2D4250",
            width: "100%",
          }}
        >
          <div className="nav-flex-container" align="center">
            <img
              src={groupIcon}
              width="200"
              align="left"
              style={{ marginLeft: 30, marginTop: 10 }}
            />
            <img
              src={logo}
              align="center"
              style={{ marginLeft: 400, marginTop: 10 }}
            />
          </div>
          <h2
            style={{
              color: "white",
              marginLeft: 30,
              fontSize: "20px",
              marginBottom: 0,
            }}
          >
            Invoice List
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
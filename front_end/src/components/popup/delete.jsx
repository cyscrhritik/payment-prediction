import React, { Component } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

class Delete_Data extends Component {
  state = {
    record: this.props.selectedRows[0],
  };
  submitPopup = async () => {
    console.log(this.props.selectedRows.length);
    console.log(this.state.record);
    for (const [key, val] of Object.entries(this.state.record)) {
      if (
        key !== "clear_date" &&
        key !== "area_business" &&
        (val === "" || val === undefined)
      ) {
        wait(3000).then(
          console.log("The required field " + key + " is missing")
        );

        return;
      } else {
        console.log(key + "correct");
      }
    }

    try {
      let resp = await axios.post(
        "http://localhost:8080/HRCINTERN/delete",
        new URLSearchParams(this.state.record),
        {}
      );
      console.log(resp);
    } catch (err) {
      wait(3000).then(console.log("Error in updating"));
    }
    this.props.stateHandler(false);
    window.location.reload(false);
  };
  render() {
    return this.props.deleteData ? (
      ""
    ) : (
      <div className="popup">
        <div className="popup-inner-edit-data">
          <div className="grid-container-edit-data">
            <h1
              className="grid-rowitem-1"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Delete Records?
            </h1>
            <h3
              className="grid-rowitem-2"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Are you sure you want to delete selected record[s]?
            </h3>
            <button
              className="btn btn-default m-2 grid-colitem-1 grid-rowitem-3"
              onClick={this.submitPopup}
            >
              Submit
            </button>
            <button
              className="btn btn-default m-2 grid-colitem-2 grid-rowitem-3"
              onClick={this.props.handler}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete_Data;
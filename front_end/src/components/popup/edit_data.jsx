import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./popup.css";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

class EditData extends Component {
  state = {
    record: this.props.selectedRows[0],
  };
  render() {
    console.log("Edit Data invoked", this.props.trigger);
    console.log(this.state.record);
    return !this.props.trigger ? (
      ""
    ) : (
      <div className="popup">
        <div className="popup-inner-edit-data">
          <div className="grid-container-edit-data">
            <h1
              className="grid-rowitem-1"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Edit for {this.state.record["cust_number"]}
            </h1>

            <TextField
              name="invoice_currency"
              color="primary"
              type="text"
              className="grid-colitem-1 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice Currency"
              value={this.state.record["invoice_currency"]}
              onChange={this.fieldValueChange}
            ></TextField>
            <TextField
              name="cust_payment_terms"
              color="primary"
              type="text"
              className="grid-colitem-2 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Customer Payment Terms"
              value={this.state.record["cust_payment_terms"]}
              onChange={this.fieldValueChange}
            />
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
  fieldValueChange = (e, newValue) => {
    const newRecord = this.state.record;
    newRecord[e.target.name] = e.target.value;
    this.setState({ record: newRecord });
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
        "http://localhost:8080/HRCINTERN/update",
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
}

export default EditData;
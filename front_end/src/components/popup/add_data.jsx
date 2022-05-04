import React, { Component } from "react";
import "./popup.css";
import TextField from "@mui/material/TextField";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
export default class Add_Data extends Component {
  state = {
    record: {
      business_code: undefined,
      cust_number: undefined,
      clear_date: undefined,
      business_year: undefined,
      doc_id: undefined,
      posting_date: undefined,
      document_create_date: undefined,
      due_in_date: undefined,
      invoice_currency: undefined,
      document_type: undefined,
      posting_id: undefined,
      total_open_amount: undefined,
      baseline_create_date: undefined,
      cust_payment_terms: undefined,
      invoice_id: undefined,
    },
  };
  fieldValueChange = (e, newValue) => {
    e.persist();
    const newRecord = this.state.record;
    newRecord[e.target.name] = e.target.value;
    this.setState({ record: newRecord });
  };
  submitPopup = async () => {
    console.log(this.state.record);

    for (const [key, val] of Object.entries(this.state.record)) {
      if (key !== "clear_date" && (val === "" || val === undefined)) {
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
        "http://localhost:8080/HRCINTERN/create",
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
    return this.props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <h3
            style={{
              color: "white",
            }}
          >
            Add Data
          </h3>
          <div className="grid-container">
            <TextField
              name="business_code"
              color="primary"
              className="grid-colitem-1 grid-rowitem-1"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="BusinessCode"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="cust_number"
              color="primary"
              className="grid-colitem-2 grid-rowitem-1"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="CustomerNumber"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="clear_date"
              color="primary"
              type="date"
              className="grid-colitem-3 grid-rowitem-1"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="ClearDate"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="business_year"
              color="primary"
              type="number"
              className="grid-colitem-4 grid-rowitem-1"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="BusinessYear"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="doc_id"
              color="primary"
              className="grid-colitem-1 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="DocumentID"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="posting_date"
              color="primary"
              type="date"
              className="grid-colitem-2 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="PostingDate"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="document_create_date"
              color="primary"
              type="date"
              className="grid-colitem-3 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Document Create Date"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="due_in_date"
              color="primary"
              type="date"
              className="grid-colitem-4 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Due Date"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="invoice_currency"
              color="primary"
              type="text"
              className="grid-colitem-1 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice Currency"
              onChange={this.fieldValueChange}
            ></TextField>

            <TextField
              name="document_type"
              color="primary"
              type="text"
              className="grid-colitem-2 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Document Type"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="posting_id"
              color="primary"
              type="number"
              className="grid-colitem-3 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Posting ID"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="total_open_amount"
              color="primary"
              type="number"
              className="grid-colitem-4 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Total Open Amount"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="baseline_create_date"
              color="primary"
              type="date"
              className="grid-colitem-1 grid-rowitem-4"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Baseline Create Date"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="cust_payment_terms"
              color="primary"
              type="text"
              className="grid-colitem-2 grid-rowitem-4"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Customer Payment Terms"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="invoice_id"
              color="primary"
              type="number"
              className="grid-colitem-3 grid-rowitem-4"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice Id"
              onChange={this.fieldValueChange}
            />
            <button
              className="btn btn-default m-2 grid-colitem-2 grid-rowitem-5"
              onClick={this.submitPopup}
            >
              Submit
            </button>
            <button
              className="btn btn-default m-2 grid-colitem-3 grid-rowitem-5"
              onClick={this.props.handler}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}
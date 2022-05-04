import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

class AdvSearch extends Component {
  state = {
    p: {
      docID: "",
      invID: "",
      custNumber: "",
      bYear: "",
    },
  };

  submitSearch = async () => {
    this.props.mainDataHandler(!this.props.mainDataState);
    console.log(this.props.mainDataState, this.state.p);
    this.props.tableHandler(!this.advTable);
    this.props.setAdvSearchState(false);
    try {
      let resp = await axios.post(
        "http://localhost:8080/HRCINTERN/search",
        new URLSearchParams(this.state.p),
        {}
      );
      console.log(resp);
      this.props.setAdvData(resp.data);
    } catch (err) {
      wait(3000).then(console.log("Error in updating"));
    }
  };
  docValueChange = (e, value) => {
    e.persist();
    const di = e.target.value;
    const np = this.state.p;
    np["docID"] = di;
    this.setState({ p: np });
  };
  invoiceIdChange = (e, value) => {
    e.persist();
    const iId = e.target.value;
    const np = this.state.p;
    np["invID"] = iId;
    this.setState({ p: np });
  };
  CustValueChange = (e, value) => {
    e.persist();
    const cn = e.target.value;
    const np = this.state.p;
    np["custNumber"] = cn;
    this.setState({ p: np });
  };
  bYearValueChange = (e, value) => {
    e.persist();
    const by = e.target.value;
    const np = this.state.p;
    np["bYear"] = by;
    this.setState({ p: np });
  };
  render() {
    return this.props.advSearchState ? (
      <div className="popup">
        <div className="popup-inner-adv-data">
          <div className="grid-container-adv-data">
            <h3
              className="grid-colitem-1 grid-rowitem-1"
              style={{ color: "white" }}
            >
              Advance Search
            </h3>
            <TextField
              name="doc_id"
              color="primary"
              type="text"
              className="grid-colitem-1 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Document ID"
              onChange={this.docValueChange}
            />
            <TextField
              name="invoice_id"
              color="primary"
              type="text"
              className="grid-colitem-2 grid-rowitem-2"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice ID"
              onChange={this.invoiceIdChange}
            />
            <TextField
              name="cust_number"
              color="primary"
              type="text"
              className="grid-colitem-1 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Customer Number"
              onChange={this.CustValueChange}
            />
            <TextField
              name="business_year"
              color="primary"
              type="text"
              className="grid-colitem-2 grid-rowitem-3"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Business Year"
              onChange={this.bYearValueChange}
            />
            <button
              className="btn btn-default m-2 grid-colitem-1 grid-rowitem-4"
              onClick={this.submitSearch}
            >
              Submit
            </button>
            <button
              className="btn btn-default m-2 grid-colitem-2 grid-rowitem-4"
              ref={this.close}
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

export default AdvSearch;
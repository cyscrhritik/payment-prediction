import React, { Component } from "react";

class Toolbar extends Component {
  state = {
    searchValue: "",
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#283D4A",
          paddingLeft: 20,
          paddingTop: 5,
          paddingBottom: 5,
        }}
        className="flex-container"
      >
        <button className="btn btn-primary mx-2">Predict</button>
        <button className="btn btn-default mx-2">Analytics view</button>
        <button
          className="btn btn-default mx-2"
          onClick={this.props.advSearchHandler}
        >
          Advance Search
        </button>
        <button
          className="btn btn-default mx-2"
          onClick={this.props.refreshHandler}
        >
          Refresh
        </button>
        <form onSubmit={this.props.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Search Customer ID"
            onChange={this.props.searchHandler}
          />
          <input type="submit" className="btn btn-default" />
        </form>
        <button
          className="btn btn-default mx-2"
          onClick={this.props.addDataHandler}
        >
          Add
        </button>
        <button
          disabled={this.props.selectedRows.length === 1 ? "" : "true"}
          className="btn btn-default mx-2"
          onClick={this.props.editDataHander}
        >
          Edit
        </button>
        <button
          disabled={this.props.selectedRows.length === 1 ? "" : "true"}
          className="btn btn-default mx-2"
          onClick={this.props.deleteDataHandler}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Toolbar;
import React, { Component } from "react";
import Navbar from "./components/navigations/navbar";
import Table from "./components/tables/table";
import Toolbar from "./components/navigations/toolbar";
import Add_Data from "./components/popup/add_data";
import { useState } from "react";
import { useEffect } from "react";
import { getData, keys } from "./services/data";
import EditData from "./components/popup/edit_data";
import Delete_Data from "./components/popup/delete";
import AdvSearch from "./components/popup/advance_search";
import AdvSearchTable from "./components/tables/advSearchTable";
import './App.css'
function App() {
  const [searchValue, setSearchVal] = useState("");
  const [addDataState, setAddDataState] = useState(false);
  const [editDataState, setEditDataState] = useState(false);
  const [selectedRows, selectRow] = useState([]);
  const [deleteDataState, setDeleteDataState] = useState(false);
  const [advSearchState, setAdvSearchState] = useState(false);
  const [mainDataState, setMainDataState] = useState(true);
  const [advData, setAdvData] = useState([]);
  const [advSearchTable, setAdvDataTable] = useState(false);
  const [data, setData] = useState([]);

  useEffect(async () => {
    setData(await getData());
  }, []);

  const handleAdvSearch = () => {
    setAdvSearchState(!advSearchState);
    console.log("Advance Search State", advSearchState);
    setMainDataState(true);
    setAdvDataTable(false);
    console.log("Advance Search Data", advData);
  };
  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("Submitted");
  };

  const refreshHandler = () => {
    setMainDataState(!mainDataState);
    setAdvDataTable(false);
    console.log(mainDataState, advSearchTable);
    if (mainDataState === true) {
      window.location.reload(false);
    }

    console.log(mainDataState, advSearchTable);
  };

  const handleAddData = () => {
    setAddDataState(!addDataState);
    console.log("addData state changed", addDataState);
  };

  const handleEditData = () => {
    setEditDataState(!editDataState);
    console.log("Edit Data state changed", editDataState);
  };

  const handleDeleteData = () => {
    setDeleteDataState(!deleteDataState);
    console.log("Delete Data State", deleteDataState);
  };
  return (
    <React.Fragment>
      <div style={{ position: "sticky", top: 0, overflow: "hidden" }}>
        <Navbar />
        <Toolbar
          selectedRows={selectedRows}
          searchHandler={handleSearchInput}
          submitHandler={handleSubmit}
          addDataHandler={handleAddData}
          editDataHander={handleEditData}
          deleteDataHandler={handleDeleteData}
          advSearchHandler={handleAdvSearch}
          refreshHandler={refreshHandler}
        />
      </div>

      <main className="container" style={{ overflow: "scroll" }}>
        {mainDataState && !advSearchTable && (
          <Table selectedRows={selectedRows} selectRow={selectRow} />
        )}
        {!mainDataState && advSearchTable && (
          <AdvSearchTable
            data={advData}
            selectedRows={selectedRows}
            selectRow={selectRow}
          />
        )}
        {addDataState && (
          <Add_Data
            stateHandler={setAddDataState}
            trigger={addDataState}
            handler={handleAddData}
          />
        )}
        {editDataState && (
          <EditData
            cust_number={selectedRows[0]["cust_number"]}
            selectedRows={selectedRows}
            stateHandler={setEditDataState}
            trigger={editDataState}
            handler={handleEditData}
          />
        )}
        {deleteDataState && (
          <Delete_Data
            selectedRows={selectedRows}
            stateHandler={setDeleteDataState}
            trigger={deleteDataState}
            handler={handleDeleteData}
          />
        )}
        {advSearchState && (
          <AdvSearch
            data={data}
            advSearchState={advSearchState}
            setAdvSearchState={setAdvSearchState}
            handler={handleAdvSearch}
            mainDataState={mainDataState}
            mainDataHandler={setMainDataState}
            setAdvData={setAdvData}
            advTable={advSearchTable}
            tableHandler={setAdvDataTable}
          />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
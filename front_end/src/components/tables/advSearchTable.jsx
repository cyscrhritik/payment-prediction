import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

export default function AdvSearchTable({ data, selectedRows, selectRow }) {
  const columns = [
    {
      field: "id",
      headName: "Serial No.",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "business_code",
      headName: "Business Code",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "cust_number",
      headName: "Customer No",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "clear_date",
      headName: "Clear Date",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "business_year",
      headName: "Business Year",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "doc_id",
      headName: "Document ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "posting_date",
      headName: "Posting Date",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "document_create_date",
      headName: "Document Create Date",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },

    {
      field: "due_in_date",
      headName: "Due Date",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "invoice_currency",
      headName: "Invoice Currency",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "document_type",
      headName: "Document Type",
      width: 70,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "posting_id",
      headName: "Posting ID",
      width: 50,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "total_open_amount",
      headName: "Total Open Amount",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "baseline_create_date",
      headName: "Baseline Create Date",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "cust_payment_terms",
      headName: "Customer Payment Terms",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "invoice_id",
      headName: "Invoice ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
  ];

  const rows = data;
  console.log("table seacrh data", data);
  return (
    <div style={{ height: 650, width: "100%", position: "sticky" }}>
      <Box
        sx={{
          height: 650,
          width: 1,
          "& .super-app-theme--header": {
            backgroundColor: "#283d4a",
            color: "white",
          },
          backgroundColor: "#2D4250",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row.id}
          rowsPerPageOptions={[10, 20, 50, 100]}
          selectionModel={selectedRows.map((e) => e.id)}
          onSelectionModelChange={(ids) => {
            selectRow(rows.filter((e) => ids.indexOf(e.id) != -1));
          }}
          checkboxSelection
          sx={{
            "& .MuiToolbar-root": {
              color: "white",
            },
            border: "none",
            backgroundColor: "#293C4A",
            color: "white",
            "& .MuiDataGrid-columnSeparator--sideRight": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "white",

              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1,
            },
          }}
        />
      </Box>
    </div>
  );
}
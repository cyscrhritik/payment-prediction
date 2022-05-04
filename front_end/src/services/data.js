import axios from "axios";
export const keys = [
  "sl_no",
  "business_code",
  "cust_number",
  "clear_date",
  "business_year",
  "doc_id",
  "posting_date",
  "document_create_date",
  "document_create_date_1",
  "due_in_date",
  "invoice_currency",
  "document_type",
  "posting_id",
  "total_open_amount",
  "baseline_create_date",
  "cust_payment_terms",
  "invoice_id",
  "isOpen",
  "aging_bucket",
  "is_deleted",
];
export const getData = async () => {
  let response = await axios.get("http://localhost:8080/HRCINTERN/fetch");

  console.log(response);
  return response.data;
};
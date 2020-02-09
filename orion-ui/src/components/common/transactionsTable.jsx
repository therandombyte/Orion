import React, { Component } from "react";
import { Link } from "react-router-dom";
import Monitor from "./monitor";
import Table from "./table";

class TransactionsTable extends Component {
  columns = [
    {
      path: "request_id",
      label: "Request ID",
      content: transaction => (
        <Link to={`/transaction/${transaction.metric_id}`}>
          {transaction.request_id}
        </Link>
      )
    },
    { path: "module_name", label: "Catalog Name" },
    { path: "status", label: "Status" },
    { path: "create_date", label: "Create Date" },
    { path: "create_date", label: "Last Updated" },
    { path: "errorMsg", label: "Error Message" },
    { path: "update_message", label: "Update Message" },
    { path: "requestor", label: "Requestor" },
    { path: "ticket_id", label: "Ticket ID" },

    {
      key: "monitor",
      content: transaction => (
        <Monitor
          onClick={() => this.props.onMonitor(transaction)}
          monitor={transaction.monitor}
        />
      )
    }
  ];

  render() {
    const { transactions, onSort, sortColumn } = this.props;
    {
      /*
        <button className="btn-danger btn-sm m-1">Refresh</button>
        <button className="btn-danger btn-sm m-1">In-Progress</button>
        <button className="btn-danger btn-sm m-1">Todays</button>
        <button className="btn-danger btn-sm m-4">Filter</button>
    */
    }
    return (
      <Table
        columns={this.columns}
        data={transactions}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TransactionsTable;

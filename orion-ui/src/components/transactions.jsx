import React, { Component } from "react";
import { getTransactions } from "../services/fakeTransactions";
import { getServices } from "../services/fakeServices";
import axios from "axios";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import TransactionsTable from "./common/transactionsTable";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Transactions extends Component {
  // initializing arrays to [] as system will query db to get details,
  //till then array should not be undefined
  state = {
    transactions: [],
    services: [],
    pageSize: 4,
    currentPage: 1,
    selectedService: "",
    searchQuery: "",
    sortColumn: { path: "module_name", order: "asc" },
    isRetriggerDisabled: "false"
  };

  // this function is called post component rendering
  // good place to init states
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3009/api/transactions");
    const transactions = data.recordset;
    const services = [{ id: "", name: "All Tickets" }, ...getServices()];
    //this.setState({ transactions: getTransactions(), services });
    this.setState({ transactions, services });
  }

  handleSearch = query => {
    console.log("search clicked", query);
    this.setState({
      searchQuery: query,
      selectedService: null,
      currentPage: 1
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleServiceSelect = service => {
    this.setState({
      selectedService: service,
      searchQuery: "",
      currentPage: 1
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleRetrigger = transaction => {
    console.log("Retrigger clicked" + transaction);
    this.setState({ isRetriggerDisabled: "true" });
  };

  handleInProgress = () => {
    const transactions = this.state.transactions.filter(
      t => t.status === "New"
    );
    this.setState({ transactions });
  };

  handleMonitor = transaction => {
    const transactions = [...this.state.transactions];
    const index = transactions.indexOf(transaction);
    transactions[index] = { ...transactions[index] };
    transactions[index].monitor = !transactions[index].monitor;
    this.setState({ transactions });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      transactions: allTransactions,
      selectedService,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = allTransactions;
    if (searchQuery) {
      filtered = allTransactions.filter(t =>
        t.request_id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedService && selectedService.id) {
      filtered = allTransactions.filter(
        t => t.module_name === selectedService.name
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const transactions = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: transactions };
  };

  render() {
    const { length: count } = this.state.transactions;
    const {
      pageSize,
      currentPage,
      services,
      selectedService,
      sortColumn,
      searchQuery,
      isRetriggerDisabled
    } = this.state;

    if (count === 0) return <p>There are no automation transactions</p>;

    const { totalCount, data: transactions } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={services}
            selectedService={selectedService}
            onServiceSelect={this.handleServiceSelect}
          />
        </div>
        <div className="col">
          <table
            className="table borderless"
            style={{ width: 1550, marginTop: 0 }}
          >
            <tr>
              <td>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </td>
              <td>
                <p>Showing {totalCount} automation transactions</p>
              </td>

              <td style={{ textAlign: "right" }}>
                <button
                  onClick={this.handleInProgress}
                  className="btn btn-danger btn-sm m-1"
                >
                  In-Progress
                </button>
                <button
                  onClick={this.handleRetrigger}
                  className="btn btn-danger btn-sm m-1"
                >
                  Retrigger
                </button>
              </td>
            </tr>
          </table>

          <TransactionsTable
            transactions={transactions}
            onMonitor={this.handleMonitor}
            onRetrigger={this.handleRetrigger}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            onDisable={isRetriggerDisabled}
          />

          <Pagination
            onPageChange={this.handlePageChange}
            itemsCount={totalCount}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default Transactions;

//import * as servicesAPI from "./fakeServices";

const transactions = [
  {
    metric_id: "5b21ca3eeb7f6fbccd471815",
    module_name: "SQL_DB_Release",
    ticket_id: "CRQ00000011111",
    status: "New",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd471816",
    module_name: "SQL_DB_Release",
    ticket_id: "CRQ00000011110",
    status: "Success",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd471817",
    module_name: "Oracle_DB_Review",
    ticket_id: "CRQ00000011118",
    status: "Success",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd471819",
    module_name: "Oracle_DB_Release",
    ticket_id: "CRQ00000011117",
    status: "Reassign",
    create_Date: "2018-01-03T19:04:28.809Z",
    monitor: true
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd47181a",
    module_name: "Oracle_DB_Release",
    ticket_id: "CRQ00000011116",
    status: "Reassign",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd47181b",
    module_name: "Oracle_DB_Release",
    ticket_id: "CRQ00000011115",
    status: "Reassign",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd47181e",
    module_name: "Oracle_DB_Review",
    ticket_id: "CRQ00000011114",
    status: "Success",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd47181f",
    module_name: "Oracle_DB_Review",
    ticket_id: "CRQ00000011113",
    status: "Success",
    create_Date: "2018-01-03T19:04:28.809Z"
  },
  {
    metric_id: "5b21ca3eeb7f6fbccd471821",
    module_name: "SQL_DB_Release",
    ticket_id: "CRQ00000011112",
    status: "Success",
    create_Date: "2018-01-03T19:04:28.809Z"
  }
];

export function getTransactions() {
  return transactions;
}

export function getTransaction(id) {
  return transactions.find(t => t.metric_id === id);
}

/*
export function saveTransaction(transaction) {
  let transactionInDB = transactions.find(t => t._id === transaction._id) || {};
  transactionInDB.name = transaction.name;
  transactionInDB.genre = servicesAPI.genres.find(g => g._id === movie.genreId);
  transactionInDB.numberInStock = movie.numberInStock;
  transactionInDB.dailyRentalRate = movie.dailyRentalRate;

  if (!transactionInDDB._id) {
    transactionInDB._id = Date.now();
    transactions.push(transactionInDBDB);
  }

  return transactionInDB;
}

export function deleteTransaction(id) {
  let transactionInDB = transactions.find(t => t._id === id);
  transactions.splice(transactions.indexOf(transactionInDB), 1);
  return transactionInDB;
}
*/

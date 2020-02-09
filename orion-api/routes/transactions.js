const sql = require("mssql");
const express = require("express");
const router = express.Router(); // get the router, add routes to it, then export the router

const dbConfig = {
  user: "sa",
  password: "Sunday123",
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "WINKEEPER",
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

sql
  .connect(dbConfig)
  .then(() => console.log("Connected to SQL..."))
  .catch(err => console.log("Could not connect to SQL...", err));

// later to come from DB
const transactions = [
  { id: 1, name: "transaction1" },
  { id: 2, name: "transaction2" },
  { id: 3, name: "transaction3" }
];

router.get("/", async (req, res) => {
  const transactions1 = await sql.query`SELECT * FROM [WinKeeper].[dbo].[tblMetrics_BAOExecutionRecord]`;
  res.send(transactions1);
});

router.get("/:id", (req, res) => {
  const transaction = transactions.find(t => t.id === parseInt(req.params.id)); // find(): a method available to all JS arrays
  if (!transaction) res.status(404).send("transaction not found");
  res.send(transaction);
});

// 1) to use Joi, define a schema and validate against the schema
router.post("/", (req, res) => {
  const { error } = validateTransaction(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const transaction = {
    id: transactions.length + 1,
    name: req.body.name
  };
  transactions.push(transaction);
  res.send(transaction);
});

router.put("/:id", (req, res) => {
  const transaction = transactions.find(t => t.id === parseInt(req.params.id)); // find(): a method available to all JS arrays
  if (!transaction) res.status(404).send("transaction not found");

  const { error } = validateTransaction(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  transaction.name = req.body.name;
  res.send(transaction);
});

function validateTransaction(transaction) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(transaction, schema);
}

module.exports = router;

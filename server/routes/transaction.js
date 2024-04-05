const router = require("express").Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transaction");
//http Request handlers
router.route("/").get(getTransactions).post(addTransaction);
router.delete("/:id").delete(deleteTransaction);

module.exports = router;

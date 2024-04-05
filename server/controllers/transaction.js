const Transaction = require("../models/TransactionSchema");

//@desc Get all the Transactions from the DB
//@route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    console.log("Result : " + transactions);
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Server Error : ${error}.`,
    });
    console.log("Error : " + error);
  }
};
//@desc Insert the Transactions from the DB
//@route POST /api/v1/transactions
//@access Public
exports.addTransaction = async (req, res, next) => {
  const { text, amount } = req.body;
  try {
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: `Server Error : ${error}.`,
      });
    }
  }
};

//@desc DELETE the Transaction from the DB
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    console.log("request received" + req.params);
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "No Transaction Found" });
    } else {
      await transaction.remove();
      return res.status(200).json({ success: true, data: {} });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Server Error : ${error}.`,
    });
  }
};

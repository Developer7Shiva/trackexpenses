const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error Occured : ${err.message}`.yellow);
    process.exit(1);
  }
};
module.exports = connectDB;

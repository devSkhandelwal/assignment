const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db is connected at ${connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


module.exports = connectDB;
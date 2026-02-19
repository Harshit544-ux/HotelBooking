const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Mongoose connected to DB");
    });

    await mongoose.connect(
      `${process.env.MONGODB_URL}/hotel-booking`
    );

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

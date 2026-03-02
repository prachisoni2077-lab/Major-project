const mongoose = require("mongoose");
const initData = require("./data.js"); // File path sahi rakhein
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
    initDB(); // <--- Isse call karna bahut zaroori hai
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    
    // Terminal mein data dekhne ke liye log karein
    console.log("Data to be inserted:", initData.data); 
    
    await Listing.insertMany(initData.data);
    console.log("Data was initialized successfully!");
  } catch (err) {
    console.log("Error inserting data:", err);
  }
};
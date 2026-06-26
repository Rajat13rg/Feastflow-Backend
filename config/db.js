const mongoose = require("mongoose");

require("dotenv").config();
const connectDB = async () => {
        await mongoose.connect(process.env.mongo_url).then(()=>console.log("DB connected"));
}

module.exports = connectDB;
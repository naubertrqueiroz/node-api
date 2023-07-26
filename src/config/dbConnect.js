import 'dotenv/config'
import mongoose from "mongoose"

mongoose.connect(process.env.SECRET_KEY);

let db = mongoose.connection;

export default db;
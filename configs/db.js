import mongoose from "mongoose";
import configs from "./index.js";
async function dbConnection() {
    try {
        mongoose.connect(configs.dbConfigs.DB_URL)
        await mongoose.connection.on('open', () => {
            console.log('mongoose connection successfully');
        })
    } catch (error) {
        console.log("error", error);
    }
}

export default dbConnection

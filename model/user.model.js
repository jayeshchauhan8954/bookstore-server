import mongoose from "mongoose";
const { models } = require("../utils/constants/model")
const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    },
    profile_image: {
        type: String,
        required: true
    }
})
const User = mongoose.model(models, userSchema)
export default User
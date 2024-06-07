import mongoose from "mongoose";
import models from "../utils/contants/model.js";

const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true
    },
    contact_no: {
        type: Number,
        // required: true
    },
    profile_image: {
        type: String,
        // required: true
    }
})
const User = mongoose.model(models.user_model, userSchema)

export default User
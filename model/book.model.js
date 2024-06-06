import mongoose from "mongoose";
const { models } = require("../utils/constants/model")

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const Book = mongoose.model(models, bookSchema)
export default Book
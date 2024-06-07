import mongoose from "mongoose";
import models from "../utils/contants/model.js";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const Category = mongoose.model(models.category_model, categorySchema)
export default Category;
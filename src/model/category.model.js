import mongoose from "mongoose";
import { models } from "../../utils/constants/model.js";

const categorySchema = mongoose.Schema({
    id: {
        // type:
    },
    name: {

    },


})
const Category = mongoose.model(models.category_module, categorySchema)
export default Category
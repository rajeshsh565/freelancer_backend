import mongoose from "mongoose";
import {all_tags} from "../utils/all_tags.js"

const Project = new mongoose.Schema({
    title: String,
    days: String,
    verified: {
        type: Boolean,
        default: false
    },
    avg_bid: Number,
    num_bid: Number,
    text: String,
    tags: Array
}, {timestamps:true})

export default mongoose.model("Project", Project);
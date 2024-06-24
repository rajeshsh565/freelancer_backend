import mongoose from "mongoose";

const users = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    role: {
        type: String,
        enum: ['client', 'freelancer'],
        default: 'freelancer'
    }
},
{timestamps:true});

export default mongoose.model("Users", users)
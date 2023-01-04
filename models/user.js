import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, default: ""},
    profilePic: { type: String},
    email: { type: String, default: ""},
    password: { type: String, default: ""},
    age: { type: Number, default: 0},
    createdAt:{ type: Date, default: new Date()},
});

const User = mongoose.model('User', userSchema);

export default User;
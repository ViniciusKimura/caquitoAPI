import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    tags: [String],
    profilePic: String,
    age: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

const User = mongoose.model('User', userSchema);

export default User;
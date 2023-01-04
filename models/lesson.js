import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    profilePic: String,
    professor: String,
    createdAt:{
        type: Date,
        default: new Date()
    },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

export default Lesson;
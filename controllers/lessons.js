import mongoose from 'mongoose';
import Lesson from '../models/lesson.js'

export const getLessons = async (req, res) =>{
    try {
        const Lessons = await Lesson.find();

        res.status(200).json(Lessons);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addLesson = async (req, res) => {
    const body = req.body;

    let newLesson = new Lesson(body);

    try{
        await newLesson.save();

        res.status(201).json(newLesson);
    } catch (error){
        res.status(409).json({ message: error.message });
    }
}

export const getLesson = async (req,res) => {
    const { id } = req.params;
    try {
        const Lessons = await Lesson.findById(id);

        res.status(200).json(Lessons);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteLesson = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No lesson with that id');

    await Lesson.findByIdAndRemove(_id);

    res.json({ message: 'Lesson deleted sucessfuly'});
}

export const updateLesson = async (req, res) => {
    const { id: _id } = req.params;
    const lesson = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No lesson with that id');

    const updatedLesson = await Lesson.findByIdAndUpdate(_id, { ...lesson, _id }, {new: true});

    res.json(updatedLesson);
}
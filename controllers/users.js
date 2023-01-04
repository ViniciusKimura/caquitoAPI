import mongoose from 'mongoose';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

let users = []

export const getUsers = async (req, res) =>{
    try {
        const Users = await User.find();

        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addUser = async (req, res) => {
    const body = req.body;

    let newUser = new User(body);

    try{
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message });
    }
}

export const getUser = async (req,res) => {
    const { id: _id } = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

        const Users = await User.findById(_id);

        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

    await User.findByIdAndRemove(_id);

    res.json({ message: 'User deleted sucessfuly'});
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id }, {new: true});

    res.json(updateUser);
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).send('No user with that email');

        if (existingUser.password != password) return res.status(404).send('Wrong credentials');

        res.json({ message: "login sucessfuly" })
    } catch (error) {
        console.log(error);
    }
    
}
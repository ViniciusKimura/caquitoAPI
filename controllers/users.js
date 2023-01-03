import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/user.js'

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
    const body = req.body

    console.log(User())
    let newUser = new User(body);
    console.log(newUser);

    try{
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error){
        res.status(409).json({ message: error.message });
    }
}

export const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');

    await User.findByIdAndRemove(id);

    res.json({ message: 'Post deleted sucessfuly'});
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { fistName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(fistName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated`)
}
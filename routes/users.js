import express from 'express';
import { getUsers, addUser, getUser, deleteUser, updateUser, loginUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', addUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

router.post('/login', loginUser);

export default router;
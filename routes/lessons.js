import express from 'express';
import { getLessons, addLesson, getLesson, deleteLesson, updateLesson } from '../controllers/lessons.js';

const router = express.Router();

router.get('/', getLessons);

router.post('/', addLesson);

router.get('/:id', getLesson);

router.delete('/:id', deleteLesson);

router.patch('/:id', updateLesson);

export default router;
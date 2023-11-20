import express from 'express';
import { studentColtrollers } from './student.controlar';

const router = express.Router();

// will call controlar func
router.post('/create-student', studentColtrollers.createStudent);

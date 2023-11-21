import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentInDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student is creat successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.gelAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentColtrollers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};

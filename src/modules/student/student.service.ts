import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentInDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentServices = {
  createStudentInDB,
};

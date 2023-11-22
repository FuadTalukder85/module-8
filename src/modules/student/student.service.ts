import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentInDB = async (studentData: TStudent) => {
  const result = await Student.create(studentData); //build in static method

  // const student = new Student(studentData); // create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exixts!');
  // }

  // const result = await student.save(); //built in instance method

  return result;
};

const gelAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentInDB,
  gelAllStudentFromDB,
  getSingleStudentFromDB,
};

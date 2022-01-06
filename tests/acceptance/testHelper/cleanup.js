const { deleteStudent, getStudents } = require("./apiHelper");

const deleteAllStudents = async () => {
  const students = await getStudents();

  students.forEach(async (student) => {
    await deleteStudent(student._id);
  });
};

module.exports = { deleteAllStudents };

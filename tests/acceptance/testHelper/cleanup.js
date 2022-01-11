const { deleteStudent, getStudents, deleteUser } = require("./apiHelper");

const deleteAllStudents = async () => {
  const students = await getStudents();
  students.forEach(async (student) => {
    await deleteStudent(student._id);
  });
};

const deleteTestUsers = async () => {
  console.log(global.testUsers);
  const users = global.testUsers;

  users.forEach(async (user) => {
    await deleteUser(user);
  });
};

module.exports = { deleteAllStudents, deleteTestUsers };

const { deleteStudent, getStudent } = require("./APIHelper")


const deleteAllStudents = () => {

    const students = await getStudent()

    students.forEach(student => {
        student.deleteStudent(student._id)
    });
}

module.exports = { deleteAllStudents }
const { default: axios} = require("axios")

const HEROKUURL = "https://wave-entry.herokuapp.com/"

const deleteStudent = (studentID) =>{
    return axios("${HEROKUURL}/delete/${studentID}")
}

const getStudent = async () =>{
    const response = await axios("${HEROKUURL}/home")
    return response.data
}
module.exports = { deleteStudent, getStudent }
const { default: axios } = require("axios");

const HEROKUURL = "https://wave-entry-server.herokuapp.com";

const deleteStudent = (studentID) => {
  return axios(`${HEROKUURL}/delete/${studentID}`);
};

const getStudents = async () => {
  const response = await axios(`${HEROKUURL}/home`);

  console.log(response.data);
  return response.data;
};

module.exports = { deleteStudent, getStudents };

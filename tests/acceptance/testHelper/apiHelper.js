const { GlobalStyles } = require("@mui/material");
const { default: axios } = require("axios");

const { getAdminAuth } = require("./auth");
const serverURL = process.env.SERVER_URL || "http://localhost:3001";

const fetch = axios.create({
  baseURL: serverURL,
});

const ENDPOINT = {
  student: "/student",
  admin: "/admin",
};

// Add a request interceptor
fetch.interceptors.request.use(function (req) {
  // Do something before request is sent
  req.headers.Authorization = getAdminAuth();
  return req;
});

const deleteStudent = (studentID) => {
  return fetch.delete(`${ENDPOINT.student}/${studentID}`);
};

const getStudents = async () => {
  const response = await fetch.get(ENDPOINT.student);
  return response.data;
};

const createUser = (user) => {
  return fetch
    .post(ENDPOINT.admin, user)
    .then((res) => {
      if (res.status === 201) {
        global.testUsers.push(user.username);
      }
      return res;
    })
    .catch((error) => error.response);
};

const deleteUser = (username) => {
  return fetch.delete(ENDPOINT.admin, {
    data: {
      username,
    },
  });
};

module.exports = { deleteStudent, getStudents, createUser, deleteUser };

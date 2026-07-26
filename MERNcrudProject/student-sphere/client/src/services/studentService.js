import api from "./api";

export const getStudents = () => api.get("/students");

export const createStudent = (studentData) =>
  api.post("/students", studentData);

export const updateStudent = (id, studentData) =>
  api.put(`/students/${id}`, studentData);

export const deleteStudent = (id) =>
  api.delete(`/students/${id}`);
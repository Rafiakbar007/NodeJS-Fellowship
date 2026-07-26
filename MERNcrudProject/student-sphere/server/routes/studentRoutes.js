const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/authMiddleware");

const {
    getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,

} = require("../controllers/studentController")

// get all students
router.get(
  "/",
  checkAuth,
   getAllStudents)

// get specific student
router.get(
  "/:id",
  checkAuth,
   getStudentById)

// cretae new student
router.post(
  "/",
  checkAuth,
   createStudent)

//update a student
router.put(
  "/:id",
  checkAuth,
   updateStudent)

// delete a student
router.delete(
  "/:id",
  checkAuth,
   deleteStudent)

module.exports = router;

const Student = require("../models/Student")
const mongoose = require("mongoose");


//------------------------
//--- get data of all student---
//--------------------------
const getAllStudents = async(req, res) => {

  try{
    const student = await Student.find();

    res.status(200).json({
    success: true,
    count: student.length,
    student,
  });

  }
  catch(error){
    return res.status(500).json({
      success: false,
      message: error.message,
    })

  }

};


//------------------------
//--- get data of specifix student---
//--------------------------
const getStudentById = async (req, res) => {
  try{
    const {id} = req.params

    const student = await Student.findById(id)

    if(!student){
      return res.status(400).json({
        success: false,
        message: "student not found",
      })
    }

    res.status(200).json({
    success: true,
    student,
  });
  }

  catch(error){
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};

//------------------------
//--- create new student---
//--------------------------
const createStudent = async(req, res) => {
   try{
    //1- get data from request body
  const {
    fullName, email, phone, department, semester, cgpa, address
  } = req.body

  //2- validate data 
  if(!fullName || !email || !phone || !department || !semester || !cgpa || !address){

    return res.status(400).json({
      success: false,
      message: "please fill all required fields"
    })
  }

  // 3-  verify duplicate email
  const existingStudent = await Student.findOne({email})

  if(existingStudent){
    return res.status(400).json({
      success: false,
      message: "student already exists"
    })
  }

  //4- store student in db
  const student = await Student.create({
     fullName, email, phone, department, semester, cgpa, address,
     createdBy: req.user._id
  })

  res.status(201).json({
    success: true,
    message: "Student Created Successfully",
    student,
  });
   }

   catch(error){
    return res.status(500).json({
      success: false,
      message: error.message,
    })
   }
};


//------------------------
//--- update a  student---
//--------------------------
const updateStudent = async(req, res) => {
  try{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
      success: false,
      message: "Invalid Student ID.",
    });
    }

    const updateStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    )

    if(!updateStudent) {
      return res.status(404).json({
        success: false,
        message: "student not found",
      })
    }

     res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student: updateStudent,
    });

  }
  catch(error){

    return res.status(500).json({
      success: false,
      message: error.message,
    })

  }
};


//------------------------
//--- delete a student---
//--------------------------
const deleteStudent = async (req, res) => {

  try{

    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
      success: false,
      message: "Invalid Student ID.",
    });
    }

    const deleteStudent = await Student.findByIdAndDelete(id)

   if(!deleteStudent) {
    return res.status(404).json({
      success: false,
      message: "student not found",
    })
   }

   res.status(200).json({
    success: true,
    message: "Student Deleted Successfully",
  });


  }

  catch(error){

    return res.status(500).json({
      success: false,
      message: error.message,
    })

  }
  
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
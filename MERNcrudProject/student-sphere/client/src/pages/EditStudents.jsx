import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/common/MainLayout";
import StudentForm from "../components/forms/StudentForm";
import {
  getStudentById,
  updateStudent,
} from "../services/studentService";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(response.data.student);
    } catch (error) {
      alert(error.response?.data?.message || "Student not found");
    }
  };

  const handleUpdateStudent = async (id, studentData) => {
    try {
      const response = await updateStudent(id, studentData);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!student) {
    return (
      <MainLayout>
        <h2 className="text-xl font-semibold">Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Student
        </h1>

        <StudentForm
          editingStudent={student}
          onUpdateStudent={handleUpdateStudent}
        />

      </div>
    </MainLayout>
  );
}

export default EditStudent;
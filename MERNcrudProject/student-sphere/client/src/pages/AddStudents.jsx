import { useNavigate } from "react-router-dom";
import StudentForm from "../components/forms/StudentForm";
import MainLayout from "../components/common/MainLayout";
import { createStudent } from "../services/studentService";

function AddStudent() {
  const navigate = useNavigate();

  const handleAddStudent = async (studentData) => {
    try {
      const response = await createStudent(studentData);

      alert(response.data.message);

      // Go back to Dashboard after adding student
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">
          Add Student
        </h1>

        <StudentForm
          onAddStudent={handleAddStudent}
          editingStudent={null}
        />
      </div>
    </MainLayout>
  );
}

export default AddStudent;
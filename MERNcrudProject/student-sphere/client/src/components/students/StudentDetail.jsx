
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import { getStudentById } from "../../services/studentService";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(response.data.student);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  if (!student) {
    return (
      <MainLayout>
        <h2 className="text-xl">Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Student Profile
        </h1>

        <div className="space-y-4 text-lg">

          <p><strong>Name:</strong> {student.fullName}</p>

          <p><strong>Email:</strong> {student.email}</p>

          <p><strong>Phone:</strong> {student.phone}</p>

          <p><strong>Department:</strong> {student.department}</p>

          <p><strong>Semester:</strong> {student.semester}</p>

          <p><strong>CGPA:</strong> {student.cgpa}</p>

          <p><strong>Address:</strong> {student.address}</p>

        </div>

      </div>
    </MainLayout>
  );
}

export default StudentDetails;
import { useEffect, useState } from "react";
import MainLayout from "../components/common/MainLayout";
import StudentCard from "../components/students/StudentCard";
import {
  getStudents,
  deleteStudent,
} from "../services/studentService";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data.student);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleDeleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteStudent(id);

      alert(response.data.message);

      fetchStudents();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Student Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            View and manage all registered students.
          </p>
        </div>

        {/* Student List */}
        {students.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-slate-700">
              No Students Found
            </h2>

            <p className="text-slate-500 mt-2">
              Add a student from the sidebar to get started.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {students.map((student) => (
              <StudentCard
                key={student._id}
                student={student}
                onDelete={handleDeleteStudent}
                onEdit={() =>
                  alert("Edit page will be added in the next step.")
                }
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
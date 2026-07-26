import StudentForm from "../components/forms/StudentForm";
import MainLayout from "../components/common/MainLayout";


function AddStudent() {
  return (
    <MainLayout>
      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Add Student
        </h1>

        <StudentForm />

      </div>
    </MainLayout>
  );
}

export default AddStudent;


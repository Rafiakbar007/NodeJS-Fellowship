import MainLayout from "../components/common/MainLayout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome to StudentSphere 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your students efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <Link
            to="/dashboard"
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">
              👨‍🎓 Student Dashboard
            </h2>

            <p className="mt-3 text-slate-500">
              View, edit and delete students.
            </p>
          </Link>

          <Link
            to="/add-student"
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">
              ➕ Add Student
            </h2>

            <p className="mt-3 text-slate-500">
              Register a new student.
            </p>
          </Link>

        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
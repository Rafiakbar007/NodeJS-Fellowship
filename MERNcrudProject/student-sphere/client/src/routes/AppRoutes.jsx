import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AddStudent from "../pages/AddStudents";
import EditStudent from "../pages/EditStudents";
import StudentDetails from "../components/students/StudentDetail";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/add-student" element={<AddStudent />} />

        <Route
  path="/edit-student/:id"
  element={<EditStudent />}
/>

<Route
  path="/student/:id"
  element={<StudentDetails />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
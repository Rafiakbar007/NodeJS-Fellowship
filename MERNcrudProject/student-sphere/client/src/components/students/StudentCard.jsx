import { useNavigate } from "react-router-dom";

function StudentCard({
  student,
  onDelete,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition">

      <h3 className="text-xl font-bold text-slate-800 mb-4">
        👤 {student.fullName}
      </h3>

      <div className="space-y-2 text-slate-600">

        <p>
          <span className="font-medium">📧 Email:</span> {student.email}
        </p>

        <p>
          <span className="font-medium">📱 Phone:</span> {student.phone}
        </p>

        <p>
          <span className="font-medium">🎓 Department:</span> {student.department}
        </p>

        <p>
          <span className="font-medium">📚 Semester:</span> {student.semester}
        </p>

        <p>
          <span className="font-medium">⭐ CGPA:</span> {student.cgpa}
        </p>

        <p>
          <span className="font-medium">📍 Address:</span> {student.address}
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button
  onClick={() => navigate(`/student/${student._id}`)}
  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition"
>
  View
</button>

        <button
          onClick={() => navigate(`/edit-student/${student._id}`)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(student._id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default StudentCard;
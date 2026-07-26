import { useEffect, useState } from "react";

function StudentForm({
  onAddStudent,
  onUpdateStudent,
  editingStudent,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    semester: "",
    cgpa: "",
    address: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingStudent) {
      await onUpdateStudent(editingStudent._id, formData);
    } else {
      await onAddStudent(formData);
    }

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      semester: "",
      cgpa: "",
      address: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Full Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          placeholder="03XXXXXXXXX"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Department */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Department
        </label>

        <input
          type="text"
          name="department"
          placeholder="BSCS"
          value={formData.department}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Semester */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Semester
        </label>

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* CGPA */}
      <div>
        <label className="block mb-2 text-sm font-medium text-slate-700">
          CGPA
        </label>

        <input
          type="number"
          step="0.01"
          name="cgpa"
          placeholder="3.75"
          value={formData.cgpa}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Address
        </label>

        <textarea
          rows="4"
          name="address"
          placeholder="Enter complete address..."
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Button */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
            editingStudent
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
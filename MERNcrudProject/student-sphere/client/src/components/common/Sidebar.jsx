
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove if you don't use localStorage
    navigate("/");
  };

  const menuItems = [
    {
      title: "Home",
      path: "/home",
      icon: <FaHome />,
    },
    {
      title: "Students",
      path: "/dashboard",
      icon: <FaUserGraduate />,
    },
    {
      title: "Add Student",
      path: "/add-student",
      icon: <FaPlusCircle />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-white border-r border-slate-200 shadow-sm flex flex-col">

      {/* Logo */}
      <div className="px-8 py-8 border-b">
        <h1 className="text-3xl font-bold text-slate-800">
          🎓 StudentSphere
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Student Management System
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-5 py-8 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-3 rounded-xl transition duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">
              {item.title}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <div className="p-5 border-t">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
        >
          <FaSignOutAlt />

          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
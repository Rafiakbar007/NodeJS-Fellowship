
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Student Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Manage all student records
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

       

        {/* Notification */}
        <button className="text-2xl text-slate-500 hover:text-blue-600 transition">
          <FaBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-slate-500" />

          <div>

            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
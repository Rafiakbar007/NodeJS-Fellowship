
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

        {/* Search */}
        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search students..."
            className="w-72 border border-slate-300 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>

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
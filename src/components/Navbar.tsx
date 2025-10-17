"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

interface NavbarProps {
  username: string;
}

export default function Navbar({ username }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-gray-900">ticktock</h1>
        <h3 className="text-md text-gray-700">Timesheets</h3>
      </div>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex text-gray-900 items-center space-x-2  px-4 py-2  transition"
        >
          <span>{username}</span>
          <svg
            className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-gray-900 text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

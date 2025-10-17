"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ThisWeekDetails from "./ThisWeekDetails";

export default function TimesheetTable() {
  const [entries, setEntries] = useState<any[]>([]);
  const [selectedRange, setSelectedRange] = useState("All");

  useEffect(() => {
    axios.get("/api/timesheets").then((res) => setEntries(res.data));
  }, []);

  if (selectedRange === "This Week") {
    return <ThisWeekDetails />;
  }

  return (
    <div className="container md:w-[1280px] p-8 gap-6 rounded-lg shadow-md bg-white">
      <h2 className="text-gray-900 text-2xl font-semibold mb-4">Your Timesheets</h2>

      {/* Dropdowns */}
      <div className="flex gap-4 mb-4">
        <select
          className="border rounded px-4 py-2 text-gray-600"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option>All</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>

        <select className="border rounded px-4 py-2 text-gray-600">
          <option>Status</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse mb-2">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 font-medium">WEEK #</th>
            <th className="py-2 px-4 font-medium">DATE</th>
            <th className="py-2 px-4 font-medium">STATUS</th>
            <th className="py-2 px-4 font-medium">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2 px-4 text-gray-600">{entry.week}</td>
              <td className="py-2 px-4 text-gray-600">{entry.date}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${entry.statusColor}`}
                >
                  {entry.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <a href="#" className="text-blue-600 hover:underline">
                  {entry.action}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <select className="border rounded px-2 py-1 text-gray-600">
          <option>5 per page</option>
          <option>10 per page</option>
          <option>15 per page</option>
        </select>
        <div className="flex items-center">
          <button className="px-2 py-1 text-gray-500 border rounded-l-md">
            Previous
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((pg) => (
            <button
              key={pg}
              className={`px-2 py-1 border ${
                pg === 3 ? "bg-blue-500 text-white" : "text-gray-700"
              }`}
            >
              {pg}
            </button>
          ))}
          <span className="px-2 py-1 text-gray-800 border">...</span>
          <button className="px-2 py-1 border text-gray-700">99</button>
          <button className="px-2 py-1 text-gray-500 border rounded-r-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

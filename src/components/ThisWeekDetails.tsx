import { useState } from 'react';
import AddEntryModal from './AddEntryModal';

export default function ThisWeekDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [tasks, setTasks] = useState([
    { id: 1, date: 'Jan 21', description: 'Homepage Development', hours: 4, project: 'Project A' },
    { id: 2, date: 'Jan 21', description: 'API Integration', hours: 3, project: 'Project B' },
    { id: 3, date: 'Jan 22', description: 'UI Fixes', hours: 5, project: 'Project A' },
    { id: 4, date: 'Jan 23', description: 'Testing', hours: 4, project: 'Project C' },
    { id: 5, date: 'Jan 24', description: 'Deployment', hours: 2, project: 'Project A' },
  ]);

  const handleAddEntry = (newEntry: {
    project: string;
    workType: string;
    description: string;
    hours: number;
  }) => {
    if (!selectedDate) return;

    const newTask = {
      id: tasks.length + 1,
      date: selectedDate,
      description: newEntry.description,
      hours: newEntry.hours,
      project: newEntry.project,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="container md:w-[1280px] p-8 gap-6 rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="text-xl text-gray-900 font-bold">This Week's Timesheet</h2>
        <div className="relative w-[140px] h-2 bg-gray-200 rounded-full">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      {['Jan 21', 'Jan 22', 'Jan 23', 'Jan 24'].map((date) => (
        <div key={date} className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-900">{date}</h3>

          {tasks.filter((task) => task.date === date).map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded mb-2 hover:bg-gray-100 transition"
            >
              <div className="flex-1 ml-4">
                <div className="flex text-gray-900 items-center space-x-2 mb-1">
                  <p className="text-sm">{task.description}</p>

                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">{task.hours} hrs</span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                  {task.project}
                </span>
                <button className="text-gray-400 hover:text-gray-600 rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setSelectedDate(date);
              setShowModal(true);
            }}
            className="w-full mt-2 border-dotted border-2 border-gray-300 bg-white text-gray-900 hover:text-blue-600 py-2 px-4 rounded text-sm hover:bg-blue-200 transition cursor-pointer"
          >
            + Add new task
          </button>
        </div>
      ))}

      <AddEntryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddEntry={handleAddEntry}
      />
    </div>
  );
}

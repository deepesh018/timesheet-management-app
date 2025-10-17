import React from 'react';

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ isOpen, onClose }) => {
  const [project, setProject] = React.useState('');
  const [workType, setWorkType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [hours, setHours] = React.useState(12);

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-900 font-semibold">Add New Entry</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            ✖
          </button>
        </div>

       
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
          
            console.log({ project, workType, description, hours });
            onClose();
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">
              Select Project <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full text-gray-900 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="">Project Name</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
            </select>
          </div>

          {/* Type of Work */}
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-1">
              Type of Work <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full text-gray-900 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option value="">Bug fixes</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

         
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-1">
              Task description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full text-gray-900 border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Write text here ..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p className="text-xs text-gray-900 mt-1">A note for extra info</p>
          </div>

         
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-2">
              Hours <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="bg-gray-200 text-gray-900 rounded px-2 py-1"
                onClick={() => setHours((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <span className="px-3 py-1 text-gray-900 bg-gray-100 rounded">{hours}</span>
              <button
                type="button"
                className="bg-gray-200 text-gray-900 rounded px-2 py-1"
                onClick={() => setHours((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          
          <div className="flex  space-x-2 pt-4">
            
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add entry
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 text-gray-900 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;

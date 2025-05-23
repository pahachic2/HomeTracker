import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TaskList } from './TaskList';
import { AddTaskForm } from './AddTaskForm';

interface Column {
  id: string;
  title: string;
}

const MainAppPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [columns, setColumns] = useState<Column[]>([]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const handleAddColumn = () => {
    const title = prompt("Enter column title:");
    if (title) {
      const newColumn: Column = {
        id: Date.now().toString(),
        title: title,
      };
      setColumns(prevColumns => [...prevColumns, newColumn]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">My Application</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
      </header>
      
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex justify-start">
          <button
            onClick={handleAddColumn}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Add New Column
          </button>
        </div>

        {/* Columns Display Area - to be implemented next */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {columns.map(column => (
            <div key={column.id} className="bg-gray-200 p-4 rounded-lg shadow-md min-w-[250px] w-64">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{column.title}</h3>
              {/* Tasks for this column will go here */}
            </div>
          ))}
        </div>

        {/* Existing Task Management Section - can be kept or integrated differently */}
        <div className="mt-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Трекер задач (Legacy)</h2>
          <div className="space-y-8">
            <AddTaskForm />
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainAppPage;

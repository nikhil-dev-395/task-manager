import React, { useState } from "react";
import { MdDone, MdOutlineCancel } from "react-icons/md";

const HomePage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Design Homepage",
      description: "Create a responsive homepage design",
      status: "pending",
    },
    {
      id: 2,
      task: "Implement API",
      description: "Integrate backend API with frontend",
      status: "completed",
    },
  ]);

  const handleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 w-full h-screen">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="py-2 px-4 border-b">Index</th>
            <th className="py-2 px-4 border-b">Task</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b">{task.task}</td>
              <td className="py-2 px-4 border-b">{task.description}</td>
              <td className="py-2 px-4 border-b text-center">
                <span
                  className={`px-2 py-1 rounded ${
                    task.status === "completed"
                      ? "bg-green-400/40 text-green-800"
                      : "bg-yellow-400/40 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => handleDone(task.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                >
                  <MdDone />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  <MdOutlineCancel />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

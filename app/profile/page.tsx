'use client'; // Enables client-side rendering

import { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon

export default function Profile() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Form Saved:', formData);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-poppins">
      <div className="w-24 h-24 rounded-full bg-pink-600 mb-5 flex items-center justify-center shadow-md">
        <span className="text-white text-5xl">👤</span>
      </div>

      <div className="relative w-full max-w-sm bg-gray-900 p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-5 text-pink-600 text-center">User Details</h1>

        {/* Edit Icon */}
        <button onClick={handleEdit} className="absolute top-5 right-5 text-pink-600 hover:text-pink-500">
          <FaEdit size={20} />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fname" className="block mb-2 text-gray-300">Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              required
              disabled={!isEditing}
              className="w-full p-2 border border-gray-800 rounded bg-black text-white disabled:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-300">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={true} // Email field is always disabled
              className="w-full p-2 border border-gray-800 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-300">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              disabled={!isEditing}
              className="w-full p-2 border border-gray-800 rounded bg-black text-white disabled:bg-gray-800"
            />
          </div>
          {isEditing && (
            <div className="flex">
              <button type="submit" className="flex-1 px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-500 transition-colors">
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

'use client'; // Enables client-side rendering

import { useState } from 'react';
import './globals.css'; // Import global CSS

export default function Page() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(true);

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
    <div className="flex flex-col align-middle justify-center min-h-100vh bg-black">
      <div className="profilePlaceholder"></div>

      <h1 className="title">User Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="fname"> Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            required
            disabled={!isEditing}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={!isEditing}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            disabled={!isEditing}
            className="input"
          />
        </div>
        <div className="buttonGroup">
          {isEditing ? (
            <button type="submit" className="saveButton">Save</button>
          ) : (
            <button type="button" className="editButton bg-purple-500" onClick={handleEdit}>Edit</button>
          )}
        </div>
      </form>
    </div>
  );
}

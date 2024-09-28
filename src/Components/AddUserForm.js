import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', address: { city: '', zipcode: '' } });

  const handleAddUser = () => {
    onAddUser(newUser);
    setNewUser({ name: '', email: '', phone: '', address: { city: '', zipcode: '' } });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <form className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            value={newUser.address.city}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Zipcode</label>
          <input
            type="text"
            value={newUser.address.zipcode}
            onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleAddUser}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;

import React, { useState, useEffect } from 'react';

const EditUserModal = ({ isOpen, onClose, editingUser, onUpdateUser }) => {
  const [localUser, setLocalUser] = useState(editingUser);

  useEffect(() => {
    setLocalUser(editingUser);
  }, [editingUser]);

  const handleUpdateUser = () => {
    onUpdateUser(localUser);
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <span
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold cursor-pointer text-gray-500 hover:text-red-600"
        >
          ×
        </span>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Edit User</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={localUser?.name || ''}
                onChange={(e) => setLocalUser({ ...localUser, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={localUser?.email || ''}
                onChange={(e) => setLocalUser({ ...localUser, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={localUser?.phone || ''}
                onChange={(e) => setLocalUser({ ...localUser, phone: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                value={localUser?.address?.city || ''}
                onChange={(e) =>
                  setLocalUser({
                    ...localUser,
                    address: { ...localUser.address, city: e.target.value },
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Zipcode</label>
              <input
                type="text"
                value={localUser?.address?.zipcode || ''}
                onChange={(e) =>
                  setLocalUser({
                    ...localUser,
                    address: { ...localUser.address, zipcode: e.target.value },
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdateUser}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;

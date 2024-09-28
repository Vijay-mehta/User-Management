import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
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
          <h1 className="text-2xl font-bold mb-4">Delete Account</h1>
          <p className="mb-6">Are you sure you want to delete this account?</p>

          <div className="flex justify-between">
            <button
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2 hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

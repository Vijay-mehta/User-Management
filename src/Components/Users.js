import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, addUser, editUser, deleteUser } from '../redux/actions';
import { Table, Button } from 'react-bootstrap';
import AddUserForm from './AddUserForm';
import EditUserModal from './EditUserModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleAddUser = (newUser) => {
    const newId = users.length + 1;
    const user = { id: newId, ...newUser };
    dispatch(addUser(user));
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = (updatedUser) => {
    dispatch(editUser(updatedUser));
    setIsEditModalOpen(false);  
  };

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(userToDelete.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      
      <AddUserForm onAddUser={handleAddUser} />

      <div className="mt-8 w-full px-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City with Zipcode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}, {user.address.zipcode}</td>
                <td>
                  <Button variant="warning" className="mr-2" onClick={() => openEditModal(user)}>Edit</Button>
                  <Button variant="danger" onClick={() => openDeleteModal(user)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default Users;

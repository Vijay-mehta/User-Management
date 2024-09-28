import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: GET_USERS, payload: response.data });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const editUser = (user) => ({
  type: EDIT_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

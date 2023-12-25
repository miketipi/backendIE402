import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from '../components/User/CreateUserForm.js'
import DeleteUserForm from '../components/User/DeleteUserForm.js';
import UpdateUserForm from '../components/User/UpdateUserForm.js';

const User = () => {
  const [users, setUsers] = useState([]);
  const [displayAdmin, setDisplayAdmin] = useState('');

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:4000/userControl/users');
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    getAllUsers();
  }, []);

  const displayUserRole = (role) => {
    return role ? 'Admin' : 'User';
  };

  const toggleDisplay = (e) => {
    setDisplayAdmin(e.target.value);
  };

  const filteredUsers = users.filter(user => {
    return displayAdmin === '' || (displayAdmin === 'admin' ? user.admin : !user.admin);
  });

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold m-auto">Danh sách người dùng</h2>

        {/* Creat user btn */}
        <CreateUserForm></CreateUserForm>
      </div>

      <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
        {/* Dropdown to select role */}
        <div className="mb-4 mr-3 flex items-center justify-end">
          <label className="mr-2">Lọc:</label>
          <select
            className="px-2 py-1 border rounded-md"
            onChange={toggleDisplay}
            defaultValue=""
          >
            <option value="">Tất cả</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <table className="table-zebra w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.phone || 'Not update'}</td>
                  <td className="px-6 py-4">{displayUserRole(user.admin)}</td>
                  <td className="flex space-x-4 px-6 py-4">
                    <UpdateUserForm id={user._id}></UpdateUserForm>
                    <DeleteUserForm id={user._id}></DeleteUserForm>      
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="100%">
                  No users yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default User;

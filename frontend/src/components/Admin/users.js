import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_BACKEND_URL + '/users'
            );
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const editUser = (id) => {
        window.location.href = `/admin/users/edit/${id}`;
    };

    const validateUser = async (id) => {
        try {
            await axios.put(
                process.env.REACT_APP_BACKEND_URL + `/users/${id}/validate`
            );
            fetchUsers();
        } catch (error) {
            console.error('Error validating user:', error);
        }
    };

    const deleteUser = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }

        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `/users/${id}`
            );
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl mb-6 font-bold">User Management</h1>
            <button
                className="bg-sky-700 text-white px-4 py-2 rounded-lg mb-4"
                onClick={() => window.location.href = '/admin'}
            >
                Go To Admin Panel
            </button>
            <div className="flex justify-center overflow-x-auto mb-12">
                <table className="w-fit text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Username</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Bio</th>
                        <th className="px-6 py-3">Image</th>
                        <th className="px-6 py-3">GitHub</th>
                        <th className="px-6 py-3">LinkedIn</th>
                        <th className="px-6 py-3">Twitter</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b bg-gray-800 border-gray-700"
                        >
                            <th className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                {user.name}
                            </th>
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">
                                {user.description
                                    ? user.description.substr(0, 15) +
                                    '\u2026'
                                    : ''}
                            </td>
                            <td className="px-6 py-4">
                                {user.image_url && (
                                    <img
                                        src={user.image_url}
                                        alt={user.username}
                                        className="w-8 h-8 rounded-full"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {user.github_url && (
                                    <a
                                        href={user.github_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {user.linkedin_url && (
                                    <a
                                        href={user.linkedin_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        LinkedIn
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {user.twitter_url && (
                                    <a
                                        href={user.twitter_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500"
                                    >
                                        Twitter
                                    </a>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {!user.validated && (
                                    <button
                                        className="text-green-500"
                                        onClick={() =>
                                            validateUser(user.id)
                                        }
                                    >
                                        Validate
                                    </button>
                                )}
                                <br/>
                                <button
                                    className="text-blue-500"
                                    onClick={() => editUser(user.id)}
                                >
                                    Edit
                                </button>
                                <br/>
                                <button
                                    className="text-red-500"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;

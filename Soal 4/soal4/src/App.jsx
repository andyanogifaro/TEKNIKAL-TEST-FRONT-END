import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengguna");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-gray-700 mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500 mt-10">Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <h2 className="text-3xl font-extrabold text-white mb-6">Daftar Pengguna</h2>
      <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-4xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-sm font-semibold">Nama</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Perusahaan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-gray-700 font-medium">{user.id}</td>
                <td className="px-6 py-4 text-gray-900 font-semibold">{user.name}</td>
                <td className="px-6 py-4 text-blue-500 hover:underline">{user.email}</td>
                <td className="px-6 py-4 text-gray-700">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

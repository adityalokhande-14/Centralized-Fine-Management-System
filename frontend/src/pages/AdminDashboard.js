import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/fineApi';
import FineTable from '../components/FineTable';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>
      <FineTable fines={users} />
    </div>
  );
};

export default AdminDashboard;

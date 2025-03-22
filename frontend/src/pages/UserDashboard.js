import React, { useEffect, useState } from 'react';
import { getUserFines } from '../api/fineApi';
import FineTable from '../components/FineTable';
import DocumentTable from '../components/DocumentTable';
import Navbar from '../components/Navbar';

const UserDashboard = () => {
  const [fines, setFines] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fineData = await getUserFines();
      setFines(fineData);
      if (fineData.every(fine => fine.status === "Paid")) {
        setDocuments([{ name: "Aadhaar.pdf" }, { name: "PAN Card.pdf" }]);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>User Dashboard</h2>
      <FineTable fines={fines} />
      {documents.length > 0 && <DocumentTable documents={documents} />}
    </div>
  );
};

export default UserDashboard;

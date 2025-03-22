import React from 'react';

const FineTable = ({ fines }) => {
  return (
    <table className="fine-table">
      <thead>
        <tr>
          <th>Fine Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {fines.map((fine, index) => (
          <tr key={index}>
            <td>{fine.type}</td>
            <td>₹{fine.amount}</td>
            <td>{fine.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FineTable;

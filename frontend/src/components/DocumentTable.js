import React from 'react';

const DocumentTable = ({ documents, handleDownload }) => {
  return (
    <table className="doc-table">
      <thead>
        <tr>
          <th>Document</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc, index) => (
          <tr key={index}>
            <td>{doc.name}</td>
            <td>
              <button onClick={() => handleDownload(doc.name)}>Download</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocumentTable;

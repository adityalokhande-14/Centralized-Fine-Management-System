import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

export const fetchDocuments = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/documents`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
};

export const downloadDocument = async (docId, token) => {
    try {
        const response = await axios.get(`${API_URL}/documents/download/${docId}`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob',  // Required for downloading files
        });
        return response;
    } catch (error) {
        console.error("Error downloading document:", error);
        return null;
    }
};

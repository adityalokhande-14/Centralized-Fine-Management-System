import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;

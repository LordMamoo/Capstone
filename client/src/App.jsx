import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Admin from './pages/admin.jsx';
import Profile from './pages/profile.jsx';
import Register from './pages/registration.jsx';
import Course from './pages/courses.jsx';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/courses' element={<Profile />} />
        <Route path='/profile' element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
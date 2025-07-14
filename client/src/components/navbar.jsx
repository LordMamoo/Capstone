import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <Link to="/register">Registration</Link> |{' '}
        <Link to="/courses">Courses</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/">Sign Out</Link>
    </nav>
  );
}

export default Navbar;
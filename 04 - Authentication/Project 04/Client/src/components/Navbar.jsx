import { NavLink } from 'react-router-dom';
import '../styles/navbar.styles.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-link'>
        Home
      </NavLink>
      <NavLink to='/profile' className='nav-link'>
        Profile
      </NavLink>
      <NavLink to='/register' className='nav-link'>
        Register
      </NavLink>
      <NavLink to='/login' className='nav-link'>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;

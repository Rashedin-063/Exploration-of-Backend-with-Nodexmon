import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{
        backgroundColor: '#333',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white'
    }}>
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
    </div>
  );
};

export default Navbar;

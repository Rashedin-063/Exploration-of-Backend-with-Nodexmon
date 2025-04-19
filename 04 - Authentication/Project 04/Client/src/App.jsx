import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className='layout'>
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <footer className='footer'>&copy; 2025 Your Website</footer>
      </div>
    </Router>
  );
};

export default App;

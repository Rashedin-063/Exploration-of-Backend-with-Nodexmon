import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Profile from './../pages/Profile';
import Register from './../pages/Register';
import Login from './../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/register', element: <Register /> },
      {path: '/login', element: <Login />}, 
    ]
  },
]);

export default router;
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
    navigate('/login')
    } else {
      try {
       axios.get('http://localhost:3000/api/profile', {
          headers: {
            Authorization: token,
          },
        })
      }
      catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
  }, [navigate])

  return <div>Profile Page</div>;
};

export default Profile;

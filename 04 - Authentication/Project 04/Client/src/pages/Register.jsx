import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   console.log('Form submitted:', formData);
    
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register',
        formData
      );
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const styles = {
    container: {
      height: '90vh',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80%',
    },
    title: {
      fontSize: '34px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      paddingBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      padding: '40px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fcfcfc',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9',
      height: '30px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      height: '50px',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Please Register</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          <button
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
            type='submit'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;

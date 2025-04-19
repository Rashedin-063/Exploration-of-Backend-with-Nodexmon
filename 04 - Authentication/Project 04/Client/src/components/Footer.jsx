import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '20px', paddingBottom: '11px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ textDecoration: 'none', color: '#007bff' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ textDecoration: 'none', color: '#007bff' }}>Terms of Service</a>
      </p>
      <p>
        Follow us: 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Twitter</a> | 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;

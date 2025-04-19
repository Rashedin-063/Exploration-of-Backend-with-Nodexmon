import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        // // paddingTop: '20px',
        // paddingBottom: '11px',
        textAlign: 'center',
        borderTop: '1px solid #000',
        width: '100vw',
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
      <p>
        <a
          href='/privacy-policy'
          style={{ textDecoration: 'none', color: '#007bff' }}
        >
          Privacy Policy
        </a>{' '}
        <span style={{ margin: '0 5px' }}>|</span>
        <a
          href='/terms-of-service'
          style={{ textDecoration: 'none', color: '#007bff' }}
        >
          Terms of Service
        </a>
      </p>
      <p>
        Follow us:
        <span>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              textDecoration: 'none',
              color: '#007bff',
              marginLeft: '1rem',
            }}
          >
            Twitter
          </a>{' '}
          <span style={{ margin: '0 5px' }}>|</span>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              textDecoration: 'none',
              color: '#007bff',
            }}
          >
            Facebook
          </a>{' '}
          <span style={{ margin: '0 5px' }}>|</span>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: '#007bff' }}
          >
            Instagram
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;

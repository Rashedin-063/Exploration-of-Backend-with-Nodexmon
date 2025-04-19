import '../styles/footer.styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
      <p>
        <a href='/terms' className='footer-link'>
          Terms of Service
        </a>{' '}
        |
        <a href='/privacy' className='footer-link'>
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;

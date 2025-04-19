import {  Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (

      <div >
        <Navbar />
        <div style={{ minHeight: '77vh',  }}>
          <Outlet/>
       </div>
       <Footer/>
      </div>
  
  );
};

export default App;

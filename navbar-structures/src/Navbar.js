import react from 'react';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
        <img src={logo} alt ="logo" />
        <button className="nav-toggle">
          
        </button>
      </div>
      </div>

    </nav>
  )
}

export default Navbar;
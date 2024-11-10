import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333' }}>
      <div>
        <h2 style={{ color: 'white' }}>My Company</h2>
      </div>
      <div>
        <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

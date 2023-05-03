import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <>Math Magicians</>
    <div className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Calculator">Calculator</NavLink>
      <NavLink to="/Quote">Quote</NavLink>
    </div>

  </nav>
);

export default Navbar;

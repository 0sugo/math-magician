import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <>Math Magicians</>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Calculator">Calculator</NavLink>
    <NavLink to="/Quote">Quote</NavLink>
  </nav>
);

export default Navbar;

// import { Button, NavItem, Nav } from "reactstrap";
// import { NavLink } from "react-router-dom";

// export const Navigation = ({ token, handleUserLogout }) => {
//   return (
    
//     <Nav>
//       <NavItem>
//         <NavLink to="/">Home</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink to="/dashboard">Dashboard</NavLink>
//       </NavItem>
//       {token && <Button onClick={handleUserLogout}>Logout</Button>}
//     </Nav>
//   );
// };

import { Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Navigation = ({ token, handleUserLogout }) => {
  return (
    <Nav className="w-50 mt-1 mx-auto d-flex justify-content-center align-items-center">
      <NavItem className="border p-2 me-1">
        {/* <NavLink to="/">Home</NavLink> */}
        <Link className="text-decoration-none text-uppercase" to="/">
          Home
        </Link>
      </NavItem>
      <NavItem className="border p-2 me-1">
        {/* <NavLink to="/">Home</NavLink> */}
        <Link className="text-decoration-none text-uppercase" to="/about">
          About
        </Link>
      </NavItem>
      <NavItem className="border p-2 me-1">
        {/* <NavLink to="/">Home</NavLink> */}
        <Link className="text-decoration-none text-uppercase" to="/contact">
          Contact
        </Link>
      </NavItem>
      <NavItem className="border p-2 me-1">
        {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
        <Link className="text-decoration-none text-uppercase" to="/dashboard">
          Dashboard
        </Link>
      </NavItem>
      {token && (
        <NavItem className="border p-2 bg-secondary rounded">
          <Link
            className="text-decoration-none text-uppercase text-white"
            onClick={handleUserLogout}
          >
            Sign out
          </Link>
        </NavItem>
      )}
      {/* {token && <Button onClick={onLogout}>Sign out</Button>} */}
    </Nav>
  );
};


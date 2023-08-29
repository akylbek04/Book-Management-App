import { Button, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";

export const Navigation = ({ token, handleUserLogout }) => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </NavItem>
      {token && <Button onClick={handleUserLogout}>Logout</Button>}
    </Nav>
  );
};

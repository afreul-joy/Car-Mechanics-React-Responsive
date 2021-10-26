import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
  return (

  <div className="sticky-top container">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Car Mechanics</Navbar.Brand>
            <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">          
              {/* <Nav.Link href="/home#home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>     
              <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
            {user?.email ?
            <button onClick={logOut} type="button" class="btn btn-light">LogOut</button> :
              <Nav.Link as={Link} to="/login">login</Nav.Link>}
                <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </div>
  );
};

export default Header;
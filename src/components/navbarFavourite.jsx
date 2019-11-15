import React, { Component } from 'react'
import { Navbar, Nav, Icon } from 'rsuite';
import { Link } from "react-router-dom"


class NavbarFavourite extends Component {

    render() {
        const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

    return (
        <div className='navbarFavourite'>
        <Navbar>
        <Navbar.Body>
          <Nav>
            <NavLink to='/'>
                <span role="img" aria-label="Grinning Cat">😺</span> Cat Gallery
            </NavLink>
          </Nav>
          <Nav pullRight>
           <NavLink to='/' icon={<Icon icon="home" />}>Back </NavLink>
          </Nav>
        </Navbar.Body>
      </Navbar>
        </div>
    )}
}

export default NavbarFavourite
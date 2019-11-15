import React, { Component } from 'react'
import { Navbar, Nav, Icon } from 'rsuite';
import { Link } from "react-router-dom"


class NavbarMenu extends Component {

    render() {
        const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

    return (
        <div>
        <Navbar>
        <Navbar.Body>
          <Nav>
            <NavLink to='/'>
                <span role="img" aria-label="Grinning Cat">😺</span> Cat Gallery
            </NavLink>
          </Nav>
          <Nav pullRight>
           <NavLink to='favourite' icon={<Icon icon="heart" />}>Favourites </NavLink>
          </Nav>
        </Navbar.Body>
      </Navbar>
        </div>
    )}
}

export default NavbarMenu
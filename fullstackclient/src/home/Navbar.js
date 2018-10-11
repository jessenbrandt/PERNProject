import React, { Component } from 'react';
import RouteFile from '../Route';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <nav>

                    <Navbar light expand="md" className="navbar sticky-top">
                        <NavbarBrand tag={Link} to="/"><i className="fas fa-hand-holding-heart"></i></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/aboutus" active>About Us</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Volunteers
                                     </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/authform" active>Login/ Signup</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Organizations
                                     </DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem>
                                            <NavLink tag={Link} to="/orgdata" active>List of Organizations</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink tag={Link} to="/orgauthform" active>Login/ Signup</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/profile" active>Profile <i className="far fa-user-circle"></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </nav>
                <RouteFile />
            </div>
        );
    }

}

export default NavBar;
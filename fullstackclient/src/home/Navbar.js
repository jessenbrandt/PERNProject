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
        if (localStorage.getItem('token') !== null)
            this.state.loggedin = true;
        else
            this.state.loggedin = false;

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
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
                                <NavItem className='dropdown'>
                                    <NavLink tag={Link} to="/about" active>About Us</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar className='dropdown' active>
                                    <DropdownToggle className='dropdown' nav caret>
                                        Volunteers
                                     </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className='dropdown'>
                                            <NavLink tag={Link} to="/events" active>Events</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar className='dropdown' active>
                                    <DropdownToggle nav caret className='dropdown'>
                                        Organizations
                                     </DropdownToggle>
                                    <DropdownMenu right >
                                        <DropdownItem className='dropdown'>
                                            <NavLink tag={Link} to="/orgdata" active>List of Organizations</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                {this.state.loggedin && <UncontrolledDropdown nav inNavbar className='dropdown' active>
                                    <DropdownToggle nav caret className='dropdown'>
                                        Profile<i className="far fa-user-circle"></i>
                                    </DropdownToggle>
                                    <DropdownMenu right >
                                        <DropdownItem className="dropdown">
                                            <NavLink tag={Link} to="/mainprofile" active>Profile</NavLink>
                                        </DropdownItem>
                                        <DropdownItem className='dropdown'>
                                            <NavLink onClick={this.logOut} active>Logout</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>}
                                {!this.state.loggedin && <NavItem className='dropdown' active>
                                    <NavLink tag={Link} to="/authform" className='dropdown' active>Signup/ Login <i className="far fa-user-circle"></i></NavLink>
                                </NavItem>}
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
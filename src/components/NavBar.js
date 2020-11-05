import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Fragment>
            <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand className={props.statusHome}><Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Features 2</Nav.Link>
                        <NavDropdown title="Top years" id="collasible-nav-dropdown" className={props.statusTop2020}>
                            <NavDropdown.Item className={props.statusTop2020}><Link to="/top2020">Top-2020</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/top2020">Top-2020</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/top2020">Top-2020</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={props.statusCreate}><Link to="/formCreateNew">Create New</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default NavBar
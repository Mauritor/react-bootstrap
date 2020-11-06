import React, { Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Fragment>
            <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand className={props.statusHome}><Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav>
                            <Link
                                to="/crearDisco"
                                className={props.statusDisco + " mt-2 mx-2 text-Light"}
                            >
                                Crear Disco
                            </Link>
                         </Nav>
                         <Nav>   
                            <Link
                                to="/top2020"
                                className={props.statusTop2020 + " mt-2 mx-2  text-Light"}
                            >
                                Top 2020
                            </Link>
                        </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link >Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default NavBar
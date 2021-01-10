import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavItems.css';
const style = {
    navItem: {
      color: "white",
      padding:"0 30px",
      letterSpacing: "5px",
    },
    nav: {
      marginLeft: "300px",
    }
    }


const NavItems = () => {
    return (
        <div className="bg_image">
            <Navbar expand="lg" className="main_nav">
                    <Navbar.Brand href="/home" className="text-light" style={{ fontSize: '35px', marginLeft: "50px" }}>
                        Qubi
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "white" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div style={style.nav}>
                            <Nav className="nav">
                                <Nav.Link href="/Home" style={style.navItem}>HOME</Nav.Link>
                                <Nav.Link href="/service" style={style.navItem}>ABOUT US</Nav.Link>
                                <Nav.Link href="/ourClasses" style={style.navItem}>PRODUCTS</Nav.Link>
                                <Nav.Link href="#aboutUs" style={style.navItem}>GET A QUBI</Nav.Link>
                                <Nav.Link href="/pricing" style={style.navItem}>CONTACT US</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavItems;
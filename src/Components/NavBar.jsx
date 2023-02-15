import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky>
            <Container>
                <Row className='nav-top'>
                    <Col xs={3} className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.75" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="4" width="18" height="12" rx="1" />
                            <line x1="7" y1="20" x2="17" y2="20" />
                            <line x1="9" y1="16" x2="9" y2="20" />
                            <line x1="15" y1="16" x2="15" y2="20" />
                        </svg>
                        <NavLink to={'/'}>Perifericos de PC</NavLink>
                    </Col>

                    <Col xs={6}>
                        <Form.Control type="search" placeholder="Buscar productos, marcas y más..." />
                    </Col>

                    <Col xs={3} className='div-buttons'>
                        <button className='navbar-button button-help'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.75" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="17" x2="12" y2="17.01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            Ayuda
                        </button>

                        <button className='navbar-button'>
                            <CartWidget />
                            Carrito
                        </button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='nav-bottom'>
                    <Col xs={3}>
                    </Col>

                    <Col xs={6}>
                        <Nav className='me-auto'>
                            <NavLink to={'/'}>Inicio</NavLink>
                            <NavLink to={`/category/monitores`}>Monitores</NavLink>
                            <NavLink to={'/category/teclados'}>Teclados</NavLink>
                            <NavLink to={'/category/mouses'}>Mouses</NavLink>
                            <NavLink to={'/category/auriculares'}>Auriculares</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={3}>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
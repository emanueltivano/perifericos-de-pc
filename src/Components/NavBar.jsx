import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../Assets/Icons/LogoIcon.svg';
import { ReactComponent as HelpIcon } from '../Assets/Icons/HelpIcon.svg';

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky>
            <Container>
                <Row className='nav-top'>
                    <Col xs={3} className='logo'>
                        <LogoIcon />
                        <NavLink to={'/'}>Perifericos de PC</NavLink>
                    </Col>

                    <Col xs={6}>
                        <Form.Control type="search" placeholder="Buscar productos, marcas y más..." />
                    </Col>

                    <Col xs={3} className='div-buttons'>
                        <Link to={'/help'}>
                            <button className='navbar-button button-help'>
                                <HelpIcon />
                                Ayuda
                            </button>
                        </Link>

                        <CartWidget />
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
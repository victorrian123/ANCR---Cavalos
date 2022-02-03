import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Container, Navbar, Image, Button } from 'react-bootstrap';
import logo from '../../assets/img/logo512.png'
import Footer from "./footer";
const Layout = ({ children }) => {
    const itens = [
        { id: 0, text: 'Noticías', link: '/noticias' },
        { id: 1, text: 'Animais', link: '/animais' },
        { id: 0, text: 'Competidores', link: '/competidores' },
        { id: 0, text: 'Sobre', link: '/sobre' },
    ]
    const { push } = useHistory()
    return <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container fluid> 
                <Navbar.Brand href="#" className="p-0 m-0">
                    <Link to="/">
                        <Image src={logo} style={{ maxWidth: 100, maxHeight: 100 }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                        {itens.map(item => (
                            <Nav.Item>
                                <Nav.Link href="#" className="text-light" key={item.id} onClick={() => push(item.link)}>{item.text}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" onClick={() => push('/filiarse')}>
                            <Button variant="warning" className="text-light">
                                Filiar-se já
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {children}
        <Footer />
    </>
}
export default Layout
import React, { useCallback, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import TopNavAuthButton from '../TopNavAuthButton/TopNavAuthButton';
import LoginModal from '../../modals/LoginModal';
import { useGlobalContext } from '../../utils/GlobalContext'
import './TopNav.css';

const TopNav = (props) => {
    // * I messed with using an auth state instead of human state,
    //  //  Having a Component doesn't do it either 🤷‍♂️
    const [{ human }, dispatch] = useGlobalContext();
    // * Set Authentication Status in State
    const [auth, setAuth] = useState(false);

    // * Handle Login Modal
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => { setShowLogin(true); }

    const handleLogout = async (e) => {
        e.preventDefault();
        // {NOTE: Everything breaks when users logout }
        // // Either manage state data better so it renders unAuth page or do this or leave it
        window.location.href = '/';
        await localStorage.clear();
        dispatch({ type: 'setHuman', payload: {} })
        setAuth(false);
        // console.log(human);
    }

    // * Not sure if this is doing what I wanted it too, should check auth so the login button will change but i still cant get to to change on click
    const checkAuth = useCallback(() => {
        if (human) {
            setAuth(true);
        }
    }, [human])

    useEffect(() => {
        checkAuth();
    }, [checkAuth])

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src="/img/ipretty.jpg"
                        className="d-inline-block align-top TopNav-main-img"
                        alt="#"
                    />
                    My 25th, Bitches
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav align-right">
                    <Nav className="mr-auto">
                        <Nav.Link href="/zoomrooms">Breakout Rooms</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <Nav.Link href="/guests">Guests</Nav.Link>

                        {!auth &&
                            <Nav.Link
                                type='button'
                                className=''
                                onClick={() => {
                                    handleShowLogin();
                                }}
                            >
                                Login
                            </Nav.Link>
                        }
                        {auth &&
                            <Nav.Link
                                type='button'
                                className=''
                                onClick={handleLogout}
                            >
                                Logout
                            </Nav.Link>
                        }
                        {/* <TopNavAuthButton
                            auth={human}
                        ></TopNavAuthButton> */}

                    </Nav>
                </Navbar.Collapse>
                <LoginModal show={showLogin} onHide={() => handleCloseLogin(false)} />
            </Navbar>

        </Container>
    );
};

export default TopNav;
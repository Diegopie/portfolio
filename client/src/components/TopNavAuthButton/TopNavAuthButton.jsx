import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './TopNavAuthButton.css';

const TopNavAuthButton = (props) => {
    console.log();

    if (!props.auth) {
        return (
            <Nav.Link
                type='button'
                className=''
                onClick={() => {

                }}
            >
                Login
            </Nav.Link>
        )
    }

    if (props.auth) {
        return (
            <Nav.Link
                type='button'
                className=''
                onClick={() => {

                }}
            >
                Logout
            </Nav.Link>
        )
    }
};

export default TopNavAuthButton;
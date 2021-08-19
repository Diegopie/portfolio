import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify';
// Utils
// CSS
import './LoginModal.css';

const LoginModal = (props) => {
    let loginCounter = 0;
    // * Reference User's Code and Handle Login Request
    const accessCodeRef = useRef();

    const handleLogin = async e => {
        e.preventDefault();
        const accessCode = accessCodeRef.current.value;
        // console.log(accessCode);
        // ** Send Req
        try {
            const loginResponse = await fetch('/api/guest/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accessCode: accessCode
                }),
                method: 'POST'
            });

            // ** Verify Data
            const data = await loginResponse.json();
            // console.log(data);
            // ** No Success
            if (!data.success) {
                if (loginCounter > 3) {
                    toast.error("Lol, message me. This could be my fault 😅", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return;
                }
                toast.error("Access Code Not Found 😲", {
                    position: toast.POSITION.TOP_RIGHT
                });
                loginCounter++;
                return;
            }

            // ** Success
            localStorage.setItem('human', JSON.stringify(data.message.human));
            props.onHide();
            toast.success(`Hey ${data.message.human.name}!`, {
                position: toast.POSITION.TOP_RIGHT
            });

            // { NOTE: Without refresh the page will still render unAuth content; need to figure out how to change render with state better}
            if (window.location.pathname === '/guests') window.location.reload();

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <Modal
                {...props}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Access Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor='accessCode'> Access Code:</label>
                            <input required id='accessCode' name='accessCode' type='text' ref={accessCodeRef} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginModal;
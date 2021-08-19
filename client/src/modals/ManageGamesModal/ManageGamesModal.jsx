import React, { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
// Utils
import { useGlobalContext } from '../../utils/GlobalContext';
// CSS
import './ManageGamesModal.css';

const ManageGamesModal = (props) => {

    const [{ getGameData, game }, dispatch] = useGlobalContext();

    // State, state, baby (Sends Info to Backend and Renders Guest Preview)
    const [link, setLink] = useState();
    const [gameInfo, setGameInfo] = useState();

    // console.log(link);

    // * On Render, Set State Based on the Current Game
    const setSelectedGuestState = useCallback(() => {
        setLink(game.link);
        setGameInfo({
            img: game.img,
            title: game.title,
        });
    }, [game.img, game.link, game.title])

    useEffect(() => {
        setSelectedGuestState()
    }, [setSelectedGuestState]);


    const handleUpdateReq = async (e) => {
        e.preventDefault();
        try {
            // * Send JSON to API
            const updateGuestResponse = await fetch('/api/game/update', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    link: link,
                    gameInfo: gameInfo,
                }),
                method: 'POST'
            });

            // * Validate Data
            const data = await updateGuestResponse.json();
            // console.log(data);
            // * No Success
            if (!data.success) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
            // * Success
            // ** Toast, Fetch New DB Data, and Set Global Context
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            getGameData()
                .then(data => {
                    if (data) {
                        // console.log(data);
                        dispatch({ type: 'setGame', payload: data });
                    }
                })
            props.onHide();
            // ** Reset State
            // setLink('');
            // setGameInfo('Pending');

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container style={{ backgroundColor: '#dedede' }} className='py-5'>
                    <form className='Signup-form' onSubmit={handleUpdateReq}>
                        {/* Group (Link) */}
                        <Row className='SignupModal-row'>
                            {/* Link */}
                            <div className='SignupModal-form-group col-6'>
                                <label htmlFor='link'>Link: </label>
                                <input
                                    required
                                    id='link'
                                    name='link'
                                    type='text'
                                    value={link}
                                    onChange={(e) => {
                                        setLink(e.target.value)
                                    }}
                                />
                            </div >
                        </Row >
                        {/* Group (Drawful, Cards) */}
                        <Row className='SignupModal-row'>
                            {/* Change Game */}
                            <Row className='SignupModal-form-group'>
                                <label htmlFor='draw'>RSVP: </label>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => {
                                        setGameInfo({
                                            img: 'https://fanatical.imgix.net/product/original/86ca1c7f-a3ea-40e0-8d80-52d80890a1e8.jpg?auto=compress,format&w=450&fit=max',
                                            title: 'Drawful 2',
                                        });
                                    }}
                                >Drawful 2</Button>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => {
                                        setGameInfo({
                                            img: 'https://allbad.cards/logo-small.png?2',
                                            title: 'All Bad Cards',
                                        });
                                    }}
                                >Cards</Button>
                            </Row>
                        </Row>
                        {/* Button */}
                        <Row className='mr-1 mt-3 d-flex justify-content-center'>
                            <button
                                className='SignupModal-btn'
                                type='submit'
                            >
                                Update
                            </button>
                        </Row>
                    </form>
                </Container>
            </Modal.Body>
        </Modal>
    );

};

export default ManageGamesModal;

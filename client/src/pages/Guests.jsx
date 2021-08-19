import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GuestList from '../components/GuestsList';
import GuestUserInfo from '../components/GuestUserInfo';
import CreateGuestModal from '../modals/CreateGuestModal';
import { useGlobalContext } from '../utils/GlobalContext';
import './css/Pages.css'

const Guest = () => {

    const [{ human },] = useGlobalContext();

    // * Manage CreateGuestModal
    const [showCreate, setShowCreate] = useState(false);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);



    // * Handle Unauthenticated Users
    if (!human) {
        return (
            <main>
                <h2> Login to View Guests</h2>
            </main>
        )
    }

    return (
        <main>
            {/* Render For Admins  */}
            { human.role === 'admin' &&
                <Container>
                    <Row className='Guest-admin-controls'>
                        <h3>Admin Controls: </h3>
                        <Button
                            onClick={() => handleShowCreate()}
                        > Create Guest </Button>
                    </Row>
                </Container>
            }
            <div className='Guest-padding'>
                <Container>
                    <Row>
                        <GuestUserInfo />
                    </Row>
                </Container>
            </div>
            <GuestList />
            <CreateGuestModal
                show={showCreate}
                onHide={() => handleCloseCreate(false)}
                human={human}
            />
        </main>
    );
};

export default Guest;

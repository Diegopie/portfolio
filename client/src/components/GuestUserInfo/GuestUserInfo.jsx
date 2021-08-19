import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EditGuestModal from '../../modals/EditGuestModal';
import { useGlobalContext } from '../../utils/GlobalContext';
import './GuestUserInfo.css';

const GuestUserInfo = (props) => {

    const [ { human, selectedGuest }, dispatch ] = useGlobalContext();

    // * Manage EditGuestModal
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <Container className='GuestUserInfo-container'>
            <Row className='justify-content-center'>
                <div className='col-12 d-flex flex-row justify-content-start align-items-center mb-2' key={human._id}>
                    <img
                        className='GuestUserInfo-img'
                        src={human.icons}
                        alt={human.name}
                    />
                    <p className='mx-2 my-0 SbUserCont-Text'>
                        {human.name.substring(0, 16)}
                    </p>
                    <p className='mx-2 my-0 SbUserCont-Text'>
                        RSVP: {human.rsvp.substring(0, 16)}
                    </p>
                    { human.public && 
                        <p className='mx-2 my-0 SbUserCont-Text'>
                            Show RSVP Status: Public 
                        </p>
                    }
                    { !human.public && 
                        <p className='mx-2 my-0 SbUserCont-Text'>
                            RSVP Status: Private 
                        </p>
                    }
                    <Button
                        className='SbUserCont-btn'
                        onClick={() => { 
                            dispatch({ type: 'setSelectedGuest', payload: human});
                            handleShowEdit();
                        }}

                    ><small>View Profile</small> </Button>

                </div>
            </Row>
            <EditGuestModal
                show={showEdit}
                onHide={() => handleCloseEdit(false)}
                humandata={selectedGuest}
            />
        </Container>
    );
};

export default GuestUserInfo;
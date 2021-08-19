import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useGlobalContext } from '../../utils/GlobalContext'
import GuestsListContainer from '../GuestsListContainer';
import EditGuestModal from '../../modals/EditGuestModal';
import dummyGuests from '../../data/develop/users';
import './GuestsList.css';

const GuestsList = (props) => {
    
    // * Sends Set To GuestListContainer To Set State To Clicked User; Sends editModalData to EditGuestModal
    const [editModalData, setEditModalData] = useState({});

    const [{ allHuman, allHumanFiltered, human },] = useGlobalContext();

    // * Manage EditGuestModal
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // * Change Data Given Based on Role
    const userDummyData = false;
    let humanData = allHumanFiltered;
    if (human.role === 'admin') {
        humanData = allHuman;
    } 
    if (userDummyData) {
        humanData = dummyGuests;
    }

    // * Create New Filtered Arrays To Render
    const rsvpYes = humanData.filter(human => {
        if (human.rsvp === 'Yes') {
            return true
        }
        return false;
    });
    const rsvpMaybe = humanData.filter(human => {
        if (human.rsvp === 'Maybe') {
            return true
        }
        return false;
    });
    const rsvpNo = humanData.filter(human => {
        if (human.rsvp === 'No') {
            return true
        }
        return false;
    });
    
    const rsvpPending = humanData.filter(human => {
        if (human.rsvp === 'Pending') {
            return true
        }
        return false;
    });
    // * Limit The Amount of People Shown in Pending
    const rsvpPendingLimited = [...rsvpPending];
    rsvpPendingLimited.length = 20;
    
    let rsvpPendingData = rsvpPendingLimited;
    if (human.role === 'admin') {
        rsvpPendingData = rsvpPending;
    }

    // console.log(rsvpPendingLimited);
    // console.log(rsvpPending);
    // console.log(rsvpPendingData);

    // console.log(
    //     { rsvpYes },
    //     { rsvpMaybe },
    //     { rsvpNo },
    //     { rsvpPending },
    // );

    return (
        <section>
            {/* Check If Data Has a Truthy Value then Render */}
            <Container>
                {/* Yes */}
                <GuestsListContainer 
                    title='Attending 😎:'
                    array={rsvpYes}
                    human={human}
                    handleShowEdit={handleShowEdit}
                    setEditModalData={setEditModalData}

                />
                {/* Maybe */}
                <GuestsListContainer 
                    title='Maybies 🤔:'
                    array={rsvpMaybe}
                    human={human}
                    handleShowEdit={handleShowEdit}
                    setEditModalData={setEditModalData}
                />
                {/* No */}
                <GuestsListContainer 
                    title='Nos 😮:'
                    array={rsvpNo}
                    human={human}
                    handleShowEdit={handleShowEdit}
                    setEditModalData={setEditModalData}
                />
                {/* Pending */} 
                <GuestsListContainer 
                    title='Pending 😮:'
                    array={rsvpPendingData}
                    human={human}
                    handleShowEdit={handleShowEdit}
                    setEditModalData={setEditModalData}
                />
            </Container>
            <EditGuestModal
                show={showEdit}
                onHide={() => handleCloseEdit(false)}
                humandata={editModalData}
            />

        </section>
    );
};

export default GuestsList;
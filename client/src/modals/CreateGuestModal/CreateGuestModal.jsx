import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
// Utils
import { useGlobalContext } from '../../utils/GlobalContext';
import userIcons from '../../data/production/userIcons'
// CSS
import './CreateGuestModal.css';

const CreateGuestModal = (props) => {

    const [{ getGuestData }, dispatch] = useGlobalContext();

    // *  State, state, baby (Sends Info to Backend and Renders Guest Preview)
    const [name, setName] = useState('');
    const [accessKey, setAccessKey] = useState('');
    const [role, setRole] = useState('guest');
    const [rsvp, setRsvp] = useState('Pending');
    const [showPublic, setShowPublic] = useState(true);
    const [selectedImg, setSelectedImg] = useState('https://i.imgur.com/Zix2esr.png');


    const handleCreateGuestReq = async (e) => {
        e.preventDefault();
        // console.log(
        //     { name },
        //     { accessKey },
        //     { rsvp },
        //     { showPublic },
        //     { role },
        //     { selectedImg },
        // );

        try {
            // * Send JSON to API
            const createGuestResponse = await fetch('/api/guest/new', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    accessKey: accessKey,
                    rsvp: rsvp,
                    public: showPublic,
                    role: role,
                    icons: selectedImg,
                }),
                method: 'POST'
            });

            // * Validate Data
            const data = await createGuestResponse.json();
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
            getGuestData()
            .then(data => {
                if (data) {
                    // console.log(data);
                    localStorage.setItem('human', JSON.stringify(data.human));
                    dispatch({ type: 'setHuman', payload: data.human });
                    dispatch({ type: 'setAllHuman', payload: data.allHuman });
                    dispatch({ type: 'setAllHumanFiltered', payload: data.allHumansFiltered });
                }
            })
            props.onHide();
            // ** Reset State
            setName('');
            setAccessKey('');
            setRole('guest');
            setRsvp('Pending');
            setShowPublic(true);

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Modal
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create a New Guest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container style={{ backgroundColor: '#dedede' }} className='py-5'>
                    <form className='Signup-form' onSubmit={handleCreateGuestReq}>
                        {/* Group (Name, Access, Role) */}
                        <Row className='SignupModal-row'>
                            {/* Name */}
                            <div className='SignupModal-form-group col-6'>
                                <label htmlFor='name'>Name: </label>
                                <input
                                    required id='name'
                                    name='name'
                                    type='text'
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div >
                            {/* accessKey */}
                            <div className='SignupModal-form-group col-6'>
                                <label htmlFor='accessKey'>Access Key: </label>
                                <input
                                    required id='accessKey'
                                    name='accessKey'
                                    type='text'
                                    onChange={(e) => {
                                        setAccessKey(e.target.value)
                                    }}
                                />
                            </div>
                            {/* role */}
                            <div className='SignupModal-form-group col-6'>
                                <label htmlFor='role'>Role: </label>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setRole('guest')}
                                >Guest</Button>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setRole('admin')}
                                >Admin</Button>
                            </div>
                        </Row >
                        {/* Group (RSVP, Public) */}
                        <Row className='SignupModal-row'>
                            {/* RSVP */}
                            <Row className='SignupModal-form-group'>
                                <label htmlFor='rsvp'>RSVP: </label>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setRsvp('Yes')}
                                >Attending</Button>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setRsvp('Maybe')}
                                >Maybe</Button>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setRsvp('No')}
                                >No</Button>
                            </Row>
                            {/* Public */}
                            <Row className='SignupModal-form-group'>
                                <label htmlFor='rsvp'>Show RSVP Status? </label>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setShowPublic(true)}
                                >Show</Button>
                                <Button
                                    className='CreateGuestModal-button'
                                    onClick={() => setShowPublic(false)}
                                >Hide</Button>
                            </Row>
                        </Row>
                        {/* Set Icons */}
                        <Row className='d-flex flex-column justify-content-center align-items-center mt-4'>
                            <h6 className='text-muted'>Choose Your Avatar</h6>
                            <div className='d-flex flex-wrap justify-content-center mt-1 px-5'>
                                {userIcons.map(image => (
                                    <img key={image.id}
                                        src={image.imageSrc} alt='default' className='SignupModal-image d-inline-block mr-2 mb-3'
                                        onClick={() => {
                                            setSelectedImg(image.imageSrc);
                                        }}
                                    />
                                ))}
                            </div>
                        </Row>
                        {/* Preview Guest Info */}
                        <div className='CreateGuestModel-preview'>
                            {/* Image */}
                            <h4 className='CreateGuestModal-align-center'>Preview Guest</h4>
                            <Row className='d-flex flex-row justify-content-center mt-5'>
                                <div>
                                    <img
                                        className='SignupModal-image-selected'
                                        src={selectedImg}
                                        alt='profile'
                                    />
                                </div>
                            </Row>
                            {/* Group (Name, Access, Role) */}
                            <Row className='CreateGuestModal-space-between'>
                                {/* Name */}
                                <div>
                                    <label>Name: </label>
                                    <h5 className='SignupModal-form-group col-4'>{name}</h5>
                                </div>
                                {/* accessKey */}
                                <div>
                                    <label>Access Key: </label>
                                    <h5 className='SignupModal-form-group col-4'>{accessKey}</h5>
                                </div>
                                {/* role */}
                                <div>
                                    <label>Role: </label>
                                    <h5 className='SignupModal-form-group col-4'>{role}</h5>
                                </div>
                            </Row>
                            {/* Group (RSVP, Public) */}
                            <Row className='CreateGuestModal-space-between'>
                                {/* RSVP */}
                                <div>
                                    <label>RSVP: </label>
                                    <h5 className='SignupModal-form-group col-4'>{rsvp}</h5>
                                </div>
                                {/* Public */}
                                <div>
                                    <label>Show RSVP: </label>
                                    {showPublic &&
                                        <h5 className='SignupModal-form-group col-4'>Public</h5>
                                    }
                                    {!showPublic &&
                                        <h5 className='SignupModal-form-group col-4'>Private</h5>
                                    }
                                </div>
                            </Row>
                            {/* Button */}
                            <Row className='mr-1 mt-3 d-flex justify-content-center'>
                                <button
                                    className='SignupModal-btn'
                                    type='submit'
                                >
                                    Create Guest
                            </button>
                            </Row>
                        </div>
                    </form>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default CreateGuestModal;

import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { useGlobalContext } from '../../utils/GlobalContext';
import './GuestsListContainer.css';

const GuestsListContainer = (props) => {

    const [, dispatch] = useGlobalContext();

    const renderArray = props.array;

    return (
        <section className='GuestListContainer-cont'>
            <h5>{props.title} </h5>
            <Row className='justify-content-start'>
                {renderArray.map(mapData => (
                    <article className='GuestListContainer-card col-sm-5 col-md-4 col-lg-3 d-flex flex-row align-items-center mb-2' key={mapData._id}>
                        <img
                            src={mapData.icons}
                            alt={mapData.name}
                            className='GuestListContainer-img'
                            style={{ width: 42, height: 42 }}
                        />
                        {props.human._id !== mapData._id &&
                            <p className='mx-2 my-0 SbUserCont-Text'>
                                {mapData.name.substring(0, 16)}
                            </p>
                        }
                        {props.human._id === mapData._id &&
                            <p className='mx-2 my-0 SbUserCont-Text'>
                                You
                            </p>
                        }
                        {/* * Only Render if It Matches Logged In User or Admins */}
                        <Row>
                            {(props.human._id === mapData._id || props.human.role === 'admin') &&
                                <Button
                                    variant="info"
                                    size="sm"
                                    // * Set Global State for EditGuestModal
                                    onClick={() => {
                                        dispatch({ type: 'setSelectedGuest', payload: mapData });
                                        props.handleShowEdit();

                                    }}
                                    className='SbUserCont-btn col-12'

                                >Profile </Button>
                            }
                        </Row>
                    </article>
                ))
                }
            </Row>
        </section>
    );
};

export default GuestsListContainer;
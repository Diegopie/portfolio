import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../utils/GlobalContext';
import './GamesPlayerContainer.css';

const GamesPlayerContainer = (props) => {

    const [{ getGuestData }, dispatch] = useGlobalContext();

    const renderArray = props.array;

    const handleReq = async (id, whatDo) => {
    
        try {
            const updatePlayerRes = await fetch('/api/game/players', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    whatDo: whatDo
                }),
                method: 'POST'
            });

            // * Validate Data
            const data = await updatePlayerRes.json();

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
        } catch (err) {
            console.log(err);
        }
    }


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
                            {props.title === 'Playing:' &&
                                <Button
                                    variant="warning"
                                    size="sm"
                                    // * Set Global State for EditGuestModal
                                    onClick={() => {
                                        handleReq(mapData._id, 'absent');
                                    }}
                                    className='SbUserCont-btn col-12'
                                >Not Playing</Button>
                            }

                            {props.title === "Not Playing:" &&
                                <Button
                                    variant="success"
                                    size="sm"
                                    // * Set Global State for EditGuestModal
                                    onClick={() => {
                                        handleReq(mapData._id, 'present');
                                    }}
                                    className='SbUserCont-btn col-12'
                                >Mark Playing</Button>
                            }

                        </Row>
                    </article>
                ))
                }
            </Row>
        </section>
    );
};

export default GamesPlayerContainer;

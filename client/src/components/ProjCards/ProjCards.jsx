import React, { useState } from 'react';
import ProjectModal from '../../modals/ProjectModal/ProjectModal';
import './ProjCards.css';

const ProjCards = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleMouseEnter = (e) => {
        const img = e.currentTarget.children[0];
        img.src = props.animateImage;
        img.classList.add('ProjCards-opacity');
        setShowInfo(true);
    }

    const handleMouseLeave = (e) => {
        const img = e.currentTarget.children[0];
        img.src = props.stillImage;
        img.classList.remove('ProjCards-opacity');
        setShowInfo(false);
    }

    const handleModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <article
                className='ProjCards-card ProjCards-lowOp'
                datastill={props.stillImage}
                dataanimate={props.animateImage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className='ProjCards-img' src='/img/projects/among-still.png' alt='project img'></img>
                {showInfo &&
                    <>
                        <div className='ProjCards-content'>
                            <h3> {props.name} </h3>
                            <p className='ProjCards-center'>{props.techStack}</p>
                            <div className='ProjCards-center'>
                                <button
                                    className='ProjCards-button'
                                    onClick={handleModal}
                                >Learn More</button>
                            </div>
                        </div>
                    </>
                }
            </article>
            <ProjectModal
                showModal={showModal}
                setShowModal={setShowModal}
                data={props}

            />
        </>
    );
};

export default ProjCards;
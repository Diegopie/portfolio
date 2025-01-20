import React, { useState } from 'react';
import ProjectModal from '../../../modals/ProjectModal/ProjectModal';
import useDarkMode from '../../../utils/DarkMode';
import './ProjCards.css';

const ProjCards = (props) => {

    const [showModal, setShowModal] = useState(false);

    // Change to Project's Gif File On Mouse Enter
    const handleMouseEnter = (e) => {
        const img = e.currentTarget.children[0];
        img.src = props.animateImage || props.stillImage;
    }

    // Change to Project's Still File On Mouse Leave
    const handleMouseLeave = (e) => {
        const img = e.currentTarget.children[0];
        img.src = props.stillImage;
    }

    // Show Modal and Apply CSS Class to Prevent Scrolling
    const handleModal = () => {
        setShowModal(true);
        document.body.classList.add('App-scrollLock');
    }

    // Set Dark Mode Theme
    const backColor = useDarkMode(
        {lightItem: 'Light',
        darkItem: 'Dark'
    });

    return (
        <>
            <article
                className={`ProjCards-card ProjCards-card-backColor${backColor}`}
                datastill={props.stillImage}
                dataanimate={props.animateImage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className='ProjCards-img' src={props.stillImage} loading='lazy' alt='project img'></img>
                <div className='ProjCards-content App-zIndex-1'>
                    <h3 className='ProjCards-title'> {props.name} </h3>
                    <p className='ProjCards-stack ProjCards-center'>{props.position}</p>
                    <p className='ProjCards-stack ProjCards-center'>{props.techStack}</p>
                    <div className='ProjCards-center'>
                        <button
                            className='ProjCards-button'
                            onClick={handleModal}
                        >Learn More</button>
                    </div>
                </div>
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

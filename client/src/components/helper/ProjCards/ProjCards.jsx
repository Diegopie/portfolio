import React, { useEffect, useState } from 'react';
import ProjectModal from '../../../modals/ProjectModal/ProjectModal';
import { useGlobalContext } from '../../../utils/GlobalContext';
import './ProjCards.css';

const ProjCards = (props) => {

    const [showModal, setShowModal] = useState(false);

    // Change to Project's Gif File On Mouse Enter
    const handleMouseEnter = (e) => {
        const img = e.currentTarget.children[0];
        img.src = props.animateImage;
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

    // Get Value of Dark Mode
    const [{ darkMode },] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backColor, setBackColor] = useState(() => {
        return (darkMode ? 'Light' : 'Dark')
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackColor('Dark')
        } else {
            setBackColor('Light')
        }
    }, [darkMode])

    return (
        <>
            <article
                className={`ProjCards-card ProjCards-card-backColor${backColor}`}
                datastill={props.stillImage}
                dataanimate={props.animateImage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className='ProjCards-img' src={props.stillImage} alt='project img'></img>
                <div className='ProjCards-content App-zIndex-1'>
                    <h3 className='ProjCards-title'> {props.name} </h3>
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

import React, { useState } from 'react';
import ProjectModal from '../../modals/ProjectModal/ProjectModal';
import './ProjCards.css';

const ProjCards = (props) => {

    const [show, setShow] = useState(false);

    const handleMouseEnter = (e) => {
        // console.log('current target ', e.currentTarget);
        e.currentTarget.style.backgroundImage = `url(${props.animateImage})`
    }

    const handleMouseLeave = (e) => {
        // console.dir(e.target);
        e.currentTarget.style.backgroundImage = `url(${props.stillImage})`
    }

    const handleModal = () => {
        setShow(true);
    }

    return (
        <>
            <article
                className='ProjCards-card ProjCards-lowOp'
                datastill={props.stillImage}
                dataanimate={props.animateImage}
                style={{ backgroundImage: `url(${props.stillImage})` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* <img src='/img/projects/among-still.png' alt='fuck'></img> */}
                <div className='ProjCards-highOp'>
                    <h3 className='anti-hover'> The Smartest Among Us </h3>
                    <p className='ProjCards-center'>Tech Used</p>
                    <div className='ProjCards-center'>
                        <button
                            className='ProjCards-button'
                            onClick={handleModal}
                        >Learn More</button>
                    </div>
                </div>
            </article>
            <ProjectModal
                show={show}
                setShow={setShow}
                data={{

                }}

            />
        </>
    );
};

export default ProjCards;
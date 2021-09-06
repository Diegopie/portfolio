import React from 'react';
import './ProjCards.css';

const ProjCards = (props) => {

    // const renderedImage = props.stillImage

    const handleMouseEnter = (e) => {
        // console.log('current target ', e.currentTarget);
        e.currentTarget.style.backgroundImage = `url(${props.animateImage})`
    }

    const handleMouseLeave = (e) => {
        // console.dir(e.target);
        e.currentTarget.style.backgroundImage = `url(${props.stillImage})`
    }

    return (
        <article
            className='ProjCards-card'
            datastill={props.stillImage}
            dataanimate={props.animateImage}
            style={{ backgroundImage: `url(${props.stillImage})` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3 className='anti-hover'> The Smartest Among Us </h3>

        </article>
    );
};

export default ProjCards;
import React from 'react';
import ProjCards from '../ProjCards/ProjCards';
import './MyProjects.css';

const MyProjects = (props) => {

    return (
        <section>
            <section className='MyProjects-container'>
                <ProjCards 
                    stillImage={'/img/projects/among-still.png'}
                    animateImage={'/img/projects/among-animate.gif'}
                />
            </section>
            <a className='button' href='./projects'>View More Projects</a>
        </section>
    );
};

export default MyProjects;
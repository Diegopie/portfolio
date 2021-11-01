import React from 'react';
import ProjCards from '../helper/ProjCards';
import allProjects from '../../data/production/AllProjects';
import './MyProjectsFull.css';

const MyProjectsFull = (props) => {


    return (
        <section className=''>
            <h3 className='MyProjectsFull-header App-dropShadow '>Click to Learn More</h3>
            <section className='MyProjectsFull-container'>
                {allProjects.map(projData => (
                    <ProjCards
                    name={projData.name}
                    projDesc={projData.projDesc}
                    role={projData.role}
                    techStack={projData.techStack}
                    githubLink={projData.githubLink}
                    liveLink={projData.liveLink}
                    stillImage={projData.stillImage}
                    animateImage={projData.animateImage}
                    />
                ))}
            </section>
        </section>
    );
};

export default MyProjectsFull;
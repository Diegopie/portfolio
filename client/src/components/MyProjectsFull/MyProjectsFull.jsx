import React from 'react';
import ProjCards from '../helper/ProjCards';
import allProjects from '../../data/production/allProjects';
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
                    key={projData.name}
                    />
                ))}
            </section>
        </section>
    );
};

export default MyProjectsFull;
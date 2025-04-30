import React from 'react';
import skillsArr from '../../data/production/allIcons';
import './Icons.css';

const Icons = (props) => {

    return (
        <section role='region' aria-roledescription='Showcase of many of my skills/tools'>
            <ul aria-label="My skills" className='Icons'>
                {skillsArr.map(skillData => {
                    const uniqueId = skillData.alt.replace(/\s+/g, '-').toLowerCase();
                    return (
                        <li key={skillData.name} aria-labelledby={uniqueId} >
                            <img
                                className="Icons-icon"
                                src={skillData.src}
                                alt={skillData.alt}
                                id={uniqueId}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Icons;

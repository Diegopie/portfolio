import React from 'react';
import skillsArr from '../../data/production/allIcons';
import './Icons.css';

const Icons = (props) => {

    return (
        <section className='Icons'>
            {skillsArr.map(skillData => (
                <img
                    className="Icons-icon"
                    src={skillData.src}
                    alt={skillData.alt}
                    key={skillData.name}
                />
            ))}
        </section>
    );
};

export default Icons;

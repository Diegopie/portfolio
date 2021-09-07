import React from 'react';
import './Icons.css';

const Icons = (props) => {

    const skillsArr = [
        {
            name: 'html',
            src: '/img/icons/skills/html.svg',
            alt: 'HTML 5 Icon',
        },
        {
            name: 'css',
            src: '/img/icons/skills/css.svg',
            alt: 'CSS Icon',
        },
        {
            name: 'javascript',
            src: '/img/icons/skills/javascript.svg',
            alt: 'JavaScript Icon',
        },
        {
            name: 'jquery',
            src: '/img/icons/skills/jquery.svg',
            alt: 'jQuery Icon',
        },
        {
            name: 'react',
            src: '/img/icons/skills/react.svg',
            alt: 'React Icon',
        },
        {
            name: 'node',
            src: '/img/icons/skills/node.svg',
            alt: 'NodeJS Icon',
        },
        {
            name: 'express',
            src: '/img/icons/skills/express.svg',
            alt: 'Express Icon',
        },
        {
            name: 'handlebars',
            src: '/img/icons/skills/handlebars.svg',
            alt: 'Handlebars Icon',
        },
        {
            name: 'mongodb',
            src: '/img/icons/skills/mongodb.svg',
            alt: 'MongoDB Icon',
        },
        {
            name: 'mysql',
            src: '/img/icons/skills/mysql.svg',
            alt: 'MySQL Icon',
        },
        {
            name: 'git',
            src: '/img/icons/skills/git.svg',
            alt: 'Git Icon',
        }
    ]

    return (
        <section className='Icons'>
            {skillsArr.map(skillData => (
                <img
                    className="Icons-icon"
                    src={skillData.src}
                    alt={skillData.alt}
                />
            ))}
        </section>
    );
};

export default Icons;
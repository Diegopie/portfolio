import React from 'react';
import './Icons.css';

const Icons = (props) => {

    // Store Skills in an Array to Easy Render, Rearrange, and Add New Ones
    const skillsArr = [
        {
            name: 'html',
            src: '/assets/img/icons/skills/html.svg',
            alt: 'HTML 5 Icon',
        },
        {
            name: 'css',
            src: '/assets/img/icons/skills/css.svg',
            alt: 'CSS Icon',
        },
        {
            name: 'javascript',
            src: '/assets/img/icons/skills/javascript.svg',
            alt: 'JavaScript Icon',
        },
        {
            name: 'jquery',
            src: '/assets/img/icons/skills/jquery.svg',
            alt: 'jQuery Icon',
        },
        {
            name: 'react',
            src: '/assets/img/icons/skills/react.svg',
            alt: 'React Icon',
        },
        {
            name: 'node',
            src: '/assets/img/icons/skills/node.svg',
            alt: 'NodeJS Icon',
        },
        {
            name: 'express',
            src: '/assets/img/icons/skills/express.svg',
            alt: 'Express Icon',
        },
        {
            name: 'handlebars',
            src: '/assets/img/icons/skills/handlebars.svg',
            alt: 'Handlebars Icon',
        },
        {
            name: 'mongodb',
            src: '/assets/img/icons/skills/mongodb.svg',
            alt: 'MongoDB Icon',
        },
        {
            name: 'mysql',
            src: '/assets/img/icons/skills/mysql.svg',
            alt: 'MySQL Icon',
        },
        {
            name: 'git',
            src: '/assets/img/icons/skills/git.svg',
            alt: 'Git Icon',
        },
        {
            name: 'photoshop',
            src: '/assets/img/icons/skills/photoshop.svg',
            alt: 'Photoshop Icon from https://www.freepik.com',
        },
        {
            name: 'illustrator',
            src: '/assets/img/icons/skills/illustrator.svg',
            alt: 'Illustrator Icon from https://www.freepik.com',
        },
        {
            name: 'xd',
            src: '/assets/img/icons/skills/xd.svg',
            alt: 'XD Icon from https://www.freepik.com',
        },
        {
            name: 'premier',
            src: '/assets/img/icons/skills/premier.svg',
            alt: 'Premier Pro Icon from https://www.freepik.com',
        },
        {
            name: 'indesign',
            src: '/assets/img/icons/skills/indesign.svg',
            alt: 'InDesign Icon from https://www.freepik.com',
        },
        {
            name: 'lightroom',
            src: '/assets/img/icons/skills/lightroom.svg',
            alt: 'Lightroom Icon from https://www.freepik.com',
        },
    ]

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
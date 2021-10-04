import React from 'react';
import ProjCards from '../helper/ProjCards';
import './MyProjects.css';

const MyProjects = (props) => {

    return (
        <section>
            <h3 className='MyProjects-header'>Click to Learn More</h3>
            <section className='MyProjects-container'>
                {/* PWA Budget Tracker */}
                <ProjCards
                    stillImage={'/img/projects/budgetPWA-still.png'}
                    animateImage={'/img/projects/budgetPWA-animate.gif'}
                    name={'PWA Budget Tracker'}
                    projDesc={'This demo application was made to practice PWA implementation. It is an installable app with full offline support'}
                    role={'Role: Implement Mongo and IndexDB database so they may sync together'}
                    techStack={'HTML, CSS, Bootstrap, Service Worker, PWA, IndexedDB, Node/Express Server, Mongoose'}
                    githubLink={'https://github.com/Diegopie/PWA-Budget-App'}
                    liveLink={'https://budget-pwaa.herokuapp.com/'}
                />
                {/* The Smartest Among Us */}
                <ProjCards
                    stillImage={'/img/projects/among-still.png'}
                    animateImage={'/img/projects/among-animate.gif'}
                    name={'The Smartest Among Us'}
                    projDesc={'Entertainment site for playing randomly generated quizzes. Users can save and edit randomly generated quizzes or create their own. Any saved quiz is shareable with friends to compete in leaderboards'}
                    role={'Role: Role: Team Lead - Assign tasks, set deadlines. Architect database, UX/UI Lead, front-end dev'}
                    techStack={'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign'}
                    githubLink={'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor'}
                    liveLink={'https://the-smartest-among-us.herokuapp.com/'}
                />
                {/* Water Cooler */}
                <ProjCards
                    stillImage={'/img/projects/waterCooler-still.png'}
                    animateImage={'/img/projects/waterCooler-animate.gif'}
                    name={'Water Cooler'}
                    projDesc={'This video conferencing application uses a unique GUI interface for interacting with large social groups. Users can use sprites to create new social spaces with unique video and text chats'}
                    role={'Role: Full-Stack dev. Wrote friend request, room invitations, social space request systems, and connected front end UI with live database info. Managed architecting database, managing seed data, and UX/UI design'}
                    techStack={'React, CSS, Bootstrap, React-Toastify, Service Workers, PWA, Node/Express Server, Mongoose, Jest, socket.io, Passport, Bcrypt, JWT, Eslint, Illustrator, Photoshop, XD'}
                    githubLink={'https://github.com/Diegopie/water-cooler-refactor'}
                    liveLink={'https://water-cooler-app.herokuapp.com/'}
                />
            </section>
            <section className='MyProjects-all'>
                <a className='MyProjects-button' href='./projects'>View More Projects</a>
            </section>
        </section>
    );
};

export default MyProjects;
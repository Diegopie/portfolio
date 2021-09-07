import React from 'react';
import ProjCards from '../ProjCards/ProjCards';
import './MyProjects.css';

const MyProjects = (props) => {

    return (
        <section>
            <h3 className='MyProjects-header'>Click to Learn More</h3>
            <section className='MyProjects-container'>
                <ProjCards
                    stillImage={'/img/projects/among-still.png'}
                    animateImage={'/img/projects/among-animate.gif'}
                    name={'The Smartest Among Us'}
                    techStack={'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign'}
                    liveLink={'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor'}
                    githubLink={'https://the-smartest-among-us.herokuapp.com/'}
                    projDesc={'Entertainment site for playing randomly generated quizzes. Users create their own quizzes to share with friends and compete in leaderboards'}
                    role={'Role: Team Lead: Assigned tasks, set deadlines. UX/UI Designer and front end developer'}
                />
            </section>
            <section className='MyProjects-all'>
                <a className='MyProjects-button' href='./projects'>View More Projects</a>
            </section>
        </section>
    );
};

export default MyProjects;
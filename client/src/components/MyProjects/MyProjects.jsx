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
                    projDesc={'Entertainment site for playing randomly generated quizzes. Users can save and edit randomly generated quizzes or create their own. Any saved quiz is shareable with friends to compete in leaderboards'}
                    role={'Role: Role: Team Lead - Assign tasks, set deadlines. Architect database, UX/UI Lead, front-end dev'}
                    techStack={'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign'}
                    liveLink={'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor'}
                    githubLink={'https://the-smartest-among-us.herokuapp.com/'}
                />
                <ProjCards
                    stillImage={'/img/projects/among-still.png'}
                    animateImage={'/img/projects/among-animate.gif'}
                    name={'New Component'}
                    projDesc={'Entertainment site for playing randomly generated quizzes. Users create their own quizzes to share with friends and compete in leaderboards'}
                    role={'Role: Team Lead: Assigned tasks, set deadlines. UX/UI Designer and front end developer'}
                    techStack={'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign'}
                    liveLink={'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor'}
                    githubLink={'https://the-smartest-among-us.herokuapp.com/'}
                />
            </section>
            <section className='MyProjects-all'>
                <a className='MyProjects-button' href='./projects'>View More Projects</a>
            </section>
        </section>
    );
};

export default MyProjects;
import React from 'react';
import { Link } from 'react-router-dom';
import ProjCards from '../helper/ProjCards';
import './MyProjects.css';

const MyProjects = (props) => {


    // - I'm thinking we can change the Projects button to an onClick listener that saves userYScroll in a variable. Then maybe run Link or Redirect to send that info to /projects, so when the return home we can maintain their scroll position;
    // const userYScroll = window.scrollY;
    // console.log(userYScroll);


    return (
        <section>
            <h3 className='MyProjects-header'>Click to Learn More</h3>
            <section className='MyProjects-container'>
                {/* PWA Budget Tracker */}
                <ProjCards
                    stillImage='/assets/img/projects/d2Challenge-still.png'
                    animateImage='/assets/img/projects/d2Challenge-animate.gif'
                    name='Destiny 2 Seasonal Challenges'
                    projDesc={`I used to spend hours organizing and tracking the huge amount of challenges available in Destiny 2 in OneNote so I knew how to most efficiently complete all of them. But all that time organizing could have been spent just playing the game!
                    So now I let code do the work for me. By just getting data available from the game developer this site will do the hours of organizing I used to do for me!`}
                    role={'Role: Full-Stack Dev, sole author'}
                    techStack={'React, CSS, Bootstrap Navbar, PWA, Node/Express Server, Mongoose'}
                    githubLink={'https://github.com/Diegopie/d2_seasonal_challenges'}
                    liveLink={'https://d2-seasonal-challenges.herokuapp.com/'}
                />
                {/* The Smartest Among Us */}
                <ProjCards
                    stillImage={'/assets/img/projects/among-still.png'}
                    animateImage={'/assets/img/projects/among-animate.gif'}
                    name={'The Smartest Among Us'}
                    projDesc={'Entertainment site for playing randomly generated quizzes. Users can save and edit randomly generated quizzes or create their own. Any saved quiz is shareable with friends to compete in leaderboards'}
                    role={'Role: Role: Team Lead - Assign tasks, set deadlines. Architect database, UX/UI Lead, front-end dev'}
                    techStack={'HTML, CSS, Bootstrap, jQuery, Open Trivia API, Node/Express Server, Sequelize, Passport, Bcrypt, Photoshop, InDesign'}
                    githubLink={'https://github.com/Diegopie/The-Smartest-Among-Us-Refactor'}
                    liveLink={'https://the-smartest-among-us.herokuapp.com/'}
                />
                {/* Water Cooler */}
                <ProjCards
                    stillImage={'/assets/img/projects/waterCooler-still.png'}
                    animateImage={'/assets/img/projects/waterCooler-animate.gif'}
                    name={'Water Cooler'}
                    projDesc={'This video conferencing application uses a unique GUI interface for interacting with large social groups. Users can use sprites to create new social spaces with unique video and text chats'}
                    role={'Role: Full-Stack dev. Wrote friend request, room invitations, social space request systems, and connected front end UI with live database info. Managed database architecture, managing seed data, and UX/UI design'}
                    techStack={'React, CSS, Bootstrap, React-Toastify, Service Workers, PWA, Node/Express Server, Mongoose, Jest, socket.io, Passport, Bcrypt, JWT, Eslint, Illustrator, Photoshop, XD'}
                    githubLink={'https://github.com/Diegopie/water-cooler-refactor'}
                    liveLink={'https://water-cooler-app.herokuapp.com/'}
                />
            </section>
            <section className='MyProjects-all'>
                <Link to="/projects">
                    <button className='MyProjects-button'>View More Projects</button>
                </Link>
            </section>
        </section>
    );
};

export default MyProjects;
import React from 'react'
import { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjCards from '../helper/ProjCards';
import { useGlobalContext } from '../../utils/GlobalContext';
import './MyProjects.css';

const MyProjects = (props) => {

    const [{ darkMode },] = useGlobalContext();

    // - I'm thinking we can change the Projects button to an onClick listener that saves userYScroll in a variable. Then maybe run Link or Redirect to send that info to /projects, so when the return home we can maintain their scroll position;
    // const userYScroll = window.scrollY;
    // console.log(userYScroll);

    const buttonRef = useRef(null)

    useEffect(() => {
        darkMode ? buttonRef.current.classList.add('App-Button-Main-Dark') : buttonRef.current.classList.remove('App-Button-Main-Dark');
    }, [darkMode]);


    return (
        <section>
            <h3 className='MyProjects-header'>Click to Learn More</h3>
            <section className='MyProjects-container'>
                {/* PWA Budget Tracker */}
                <ProjCards
                     name= 'GRC Metrix'
                     projDesc= {`GRC Metrix is a simple landing page for an exciting consulting company for those who need to streamline their and understand their expenses. Founded by a trio of University professors, GRC Metrix offers workshops and sessions to improve their client's growth and optimization.  
                     This was very fun to work on and guiding the clients through multiple of their design changes. They had specific requirements for hosting and managing site updates and are pleased with the results`}
                     role= 'Role= Freelance Designer and developer.'
                     techStack= 'jQuery, Bootstrap, Adobe XD'
                     githubLink= {null}
                     liveLink= 'https://grcmetrix.com//'
                     stillImage= '/assets/img/projects/grc-still.png'
                     animateImage= '/assets/img/projects/grc-animate.gif'
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
                    <button className='App-Button-Main' ref={buttonRef}>View More Projects</button>
                </Link>
            </section>
        </section>
    );
};

export default MyProjects;
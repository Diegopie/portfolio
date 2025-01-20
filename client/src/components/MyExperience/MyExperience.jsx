import React from 'react'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjCards from '../helper/ProjCards';
import { useGlobalContext } from '../../utils/GlobalContext';
import './MyExperience.css';

const MyExperience = (props) => {

    const [{ darkMode },] = useGlobalContext();

    // - I'm thinking we can change the Projects button to an onClick listener that saves userYScroll in a variable. Then maybe run Link or Redirect to send that info to /projects, so when the return home we can maintain their scroll position;
    // const userYScroll = window.scrollY;
    // console.log(userYScroll);

    // const buttonRef = useRef(null)

    // useEffect(() => {
    //     darkMode ? buttonRef.current.classList.add('App-Button-Main-Dark') : buttonRef.current.classList.remove('App-Button-Main-Dark');
    // }, [darkMode]);


    return (
        <section>
            <h3 className='MyProjects-header'>Click to Learn More</h3>
            <section className='MyProjects-container'>
                {/* PWA Budget Tracker */}
                <ProjCards
                    name='Udundi'
                    projDesc={`Udundi is a custom web design and development agency that specializes in creating tailored digital solutions for businesses. We offer services in website design, development, digital marketing, A/B Testing and eCommerce solutions, and App development. Udundi focuses on delivering high-quality, user-friendly, and responsive web experiences. I have contributed to a variety of projects including Cozy Earth and Blomberg.`}
                    role='Developer and QA Engineer'
                    techStack='Liquid, Vue, Alpine, Alpine AJAX, Glider, Bootstrap, Tailwind, Web Components, TypeScript, Sveltekit'
                    githubLink={null}
                    liveLink='https://www.udundi.com/'
                    linkedInLink='https://www.linkedin.com/company/udundi/'
                    stillImage='/assets/img/experience/udundi-still.png'
                    animateImage={null}
                    position="Lead QA and Developer"
                />
                {/* Compose */}
                <ProjCards
                    stillImage={'/assets/img/experience/compose-still.png'}
                    animateImage={null}
                    name={'Compose'}
                    projDesc={'Compose offers affordable A/B testing for eCommerce businesses, allowing them to optimize websites using data-driven experimentation. We supports features like A/B and split URL tests, audience segmentation, custom goals, and Shopify integration, all within a pay-as-you-go pricing model. Compose aims to make conversion rate optimization accessible with no-code solutions and real-time analytics, enabling businesses to grow efficiently.'}
                    techStack='Vue, Vitest, Playwright, Mongoose, Postgres, AWS, Zendesk'
                    role={'QA Engineer'}
                    linkedInLink={'https://www.linkedin.com/company/composeco/posts/'}
                    liveLink={'https://www.compose.co/'}
                    position="Developer, Outreach, Support"
                />
                {/* Devmountain */}
                <ProjCards
                    stillImage={'/assets/img/experience/devmountain-still.png'}
                    animateImage={null}
                    name={'Devmountain'}
                    projDesc={`I Led a classroom of ambitious students seeking to enhance their skills and career prospects. As an instructor, I guided learning through structured lessons, hands-on projects, and real-world applications. I collaborated with a team of Teacher Assistants to ensure personalized attention and foster a supportive learning environment. 
                    Together, we maximized each student's learning potential by offering targeted feedback and adapting teaching methods to meet individual needs. This experience has brought me so much joy and I honer the responsibility of helping students achieve their educational and professional goals.`}
                    role={'Instructor'}
                    techStack={'HTML, CSS, JavaScript, NodeJS, Nunkucks, Express, Postgres, Redux, Git, Github, Sequelize, PWA, TypeScript, jQuery, OOP, DataStructures, Jest, Vite, React, SQL'}
                    linkedInLink={'https://www.linkedin.com/school/devmountain/posts/'}
                    liveLink={'https://devmountain.com/'}
                    position="Full Stack Web Instructor"
                />
            </section>
            {/* <section className='MyProjects-all'>
                <Link to="/projects">
                    <button className='App-Button-Main' ref={buttonRef}>View More Projects</button>
                </Link>
            </section> */}
        </section>
    );
};

export default MyExperience;
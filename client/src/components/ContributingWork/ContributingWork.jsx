import React from 'react'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjCards from '../helper/ProjCards';
import { useGlobalContext } from '../../utils/GlobalContext';
import './ContributingWork.css';

const ContributingWork = (props) => {

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
                    name='Cozy Earth'
                    projDesc={`Cozy Earth offers premium bedding, loungewear, and home essentials crafted from sustainable and eco-friendly materials like bamboo and silk. Known for its unmatched softness and temperature-regulating properties, the brand ensures comfort and luxury for everyday living.`}
                    role='Developer and Lead QA'
                    techStack='Shopify, Liquid, Vue, Alpine, Alpine AJAX, Tailwind'
                    githubLink={null}
                    liveLink='https://cozyearth.com/'
                    linkedInLink='https://www.linkedin.com/company/cozy-earth/'
                    stillImage='/assets/img/contributing/cozyearth-still.png'
                    animateImage='/assets/img/contributing/cozyearth-animated.gif'
                    position="Developer and Lead QA"
                />
                {/* Compose */}
                <ProjCards
                    stillImage='/assets/img/contributing/blomberg-still.png'
                    animateImage='/assets/img/contributing/blomberg-animated.gif'
                    name={'Blomberg'}
                    projDesc={'Blomberg Appliances provides innovative and energy-efficient home appliances designed to simplify daily life while maintaining a sleek, modern aesthetic. With a focus on sustainability and advanced technology, Blomberg delivers reliable performance for eco-conscious households.'}
                    techStack='Shopify, Liquid, Bootstrap, Tailwind, Mapbox'
                    role={'Project Manager and Developer'}
                    linkedInLink={'https://www.linkedin.com/company/blomberg-usa/'}
                    liveLink={'https://blombergappliances.com/'}
                    position="Project Manager and Developer"
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

export default ContributingWork;
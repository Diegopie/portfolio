import React, { useEffect } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
// import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import MyProjects from '../components/MyProjects/MyProjects';
import Transition from '../components/Transition';
import './css/Pages.css'

const Homepage = () => {

    return (
        <main className='App-backMaxHeight'>
            <Intro />
            <Icons />
            <Transition
                text='My Work'
                imgLight='Transition-backImg-2-light'
                imgDark='Transition-backImg-2-dark'
            />
            <MyProjects />
            <Transition
                text='About Me'
                imgLight='Transition-backImg-3-light'
                imgDark='Transition-backImg-3-dark'
            />
            <About />
            <Contact />
            {/* <DummyText /> */}
        </main>
    );
};

export default Homepage;

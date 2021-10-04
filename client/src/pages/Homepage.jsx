import React, { useEffect } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import MyProjects from '../components/MyProjects/MyProjects';
import ProjectModal from '../modals/ProjectModal/ProjectModal';
import Transition from '../components/Transition';
import { useGlobalContext } from '../utils/GlobalContext';
import './css/Pages.css'

const Homepage = () => {

    const [{ darkMode },] = useGlobalContext();

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
    }, [darkMode])

    return (
        <main className='max-Height'>
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
            <DummyText />
            <ProjectModal />
        </main>
    );
};

export default Homepage;

import React from 'react';
import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import MyProjects from '../components/MyProjects/MyProjects';
import ProjectModal from '../modals/ProjectModal/ProjectModal';
import Transition from '../components/Transition';
import './css/Pages.css'

const Homepage = () => {

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
            <DummyText />
            <ProjectModal />
        </main>
    );
};

export default Homepage;

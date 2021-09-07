import React from 'react';
import BackImg2 from '../components/BackImg2';
import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import MyProjects from '../components/MyProjects/MyProjects';
import ProjectModal from '../modals/ProjectModal/ProjectModal';
import './css/Pages.css'

const Homepage = () => {

    return (
        <main className='max-Height'>
            <Intro />
            <Icons />
            <BackImg2 />
            <MyProjects />
            <ProjectModal />
            <DummyText />
        </main>
    );
};

export default Homepage;

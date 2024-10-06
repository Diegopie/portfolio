import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
// import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import MyProjects from '../components/MyProjects/MyProjects';
import MyExperience from '../components/MyExperience';
import Transition from '../components/Transition';

const Homepage = () => {

    return (
        <main className='App-backMaxHeight'>
            <Intro />
            <Icons />
            <Transition
                text='My Work'
                lightImg='App-backImg-myWork-light'
                darkImg='App-backImg-myWork-dark'
                invisImgLight='/assets/img/background/backImg-myWork-light.jpg'
                invisImgDark='/assets/img/background/backImg-myWork-dark.jpg'
            />
            <MyProjects />
            <Transition
                text='My Experience'
                lightImg='App-backImg-experience-light'
                darkImg='App-backImg-experience-dark'
                invisImgLight='/assets/img/background/backImg-experience-light.jpg'
                invisImgDark='/assets/img/background/backImg-experience-dark.jpg'
            />
            <MyExperience />
            <Transition
                text='About Me'
                lightImg='App-backImg-aboutMe-light'
                darkImg='App-backImg-aboutMe-dark'
                invisImgLight='/assets/img/background/backImg-aboutMe-light.jpg'
                invisImgDark='/assets/img/background/backImg-aboutMe-dark.jpg'
            />
            <About />
            <Contact />
            {/* <DummyText /> */}
        </main>
    );
};

export default Homepage;

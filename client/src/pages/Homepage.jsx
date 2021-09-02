import React from 'react';
import BackImg2 from '../components/BackImg2';
import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import './css/Pages.css'

const Homepage = () => {

    return (
        <main className='max-Height'>
            <Intro />
            <Icons />
            <BackImg2 />
            <DummyText />
        </main>
    );
};

export default Homepage;

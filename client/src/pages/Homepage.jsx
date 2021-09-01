import React from 'react';
import DummyText from '../components/helper/DummyText';
import Icons from '../components/Icons';
import Intro from '../components/Intro/Intro';
import './css/Pages.css'

const Homepage = () => {

    return (
        <main className='max-Height'>
            <Intro />
            <Icons />
            <DummyText />
        </main>
    );
};

export default Homepage;

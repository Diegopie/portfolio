import React from 'react';
import DummyText from '../components/DummyText';
import Intro from '../components/Intro/Intro';
import './css/Pages.css'

const Homepage = () => {

    return (
        <main className='max-Height'>
            <Intro/>
            <DummyText/>
        </main>
    );
};

export default Homepage;

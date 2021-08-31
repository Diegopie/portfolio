import React from 'react';
import Typed from 'react-typed'
import './Intro.css';

const Intro = (props) => {

    return (
        <section
            // style={sectionStyle}
            className="intro backImg backImg-1">
            <h1 className='typedFix'>
                <Typed
                    showCursor={false}
                    strings={['Diego Hernandez']}
                    typeSpeed={40}
                // onComplete={(self) => self.cursor.remove()}
                />
            </h1>
            <img
                // style={imgStyle}
                className='mainPhoto intro-margin'
                src='/img/main-img-light.jpg'
                alt='me xD'
            />
            <h2
                className='typedFix intro-margin'
                // style={marginStyle}
            >
                <Typed
                    showCursor={false}
                    strings={['Web Developer', 'UX/UI Designer', 'Gamer']}
                    typeSpeed={80}
                />
            </h2>
        </section>
    );
};

export default Intro;
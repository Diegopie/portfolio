import React from 'react';
import Typed from 'react-typed'
import './Intro.css';

const Intro = (props) => {

    const clientHeight = document.documentElement.clientHeight;
    const imgHeight = clientHeight / 2;
    const marginHeight = clientHeight / 14;

    // target.style.height = clientHeight + 'px';

    const sectionStyle = {
        height: clientHeight
    }
    const imgStyle = {
        height: imgHeight,
        marginTop: marginHeight
    };

    const marginStyle = {
        marginTop: marginHeight
    }


    return (
        <section
            // style={sectionStyle}
            className="intro backImg backImg-1">
            <h1 className=''>
                <Typed
                    showCursor={false}
                    strings={['Diego Hernandez']}
                    typeSpeed={40}
                // onComplete={(self) => self.cursor.remove()}
                />
            </h1>
            <img
                style={imgStyle}
                className='mainPhoto'
                src='/img/main-img-light.jpg'
                alt='me xD'
            />
            <h2
                className='SubTitle'
                style={marginStyle}
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
import React from 'react';
import Typed from 'react-typed'
import './Intro.css';

const Intro = (props) => {

    const clientHeight = document.documentElement.clientHeight;
    const imgHeight = clientHeight/2;
    
    // target.style.height = clientHeight + 'px';

    const sectionStyle = {
        height: clientHeight
    }
    const imgStyle = {
        height: imgHeight
    };


    return (
        <section style={sectionStyle}>
            <h1 className='center-text'>
                <Typed
                    showCursor={false}
                    strings={['Diego Hernandez']}
                    typeSpeed={40}
                // onComplete={(self) => self.cursor.remove()}
                />
            </h1>
            <div id='hotPic'>
                <img
                    
                    style={imgStyle}
                    src='https://diegopie.herokuapp.com/assets/img/main-image-02-2.png'
                    alt='me xD'
                />
            </div>
            <h2 className='center-text'>
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
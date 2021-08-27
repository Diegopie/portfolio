import React from 'react';
import Typed from 'react-typed'
import './Intro.css';

const Intro = (props) => {

    const clientHeight = document.documentElement.clientHeight;
    const imgHeight = clientHeight/2;
    const marginHeight = clientHeight/14;
    
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
        <section style={sectionStyle} className="intro backImg backImg-1">
            <h1 className=''>
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
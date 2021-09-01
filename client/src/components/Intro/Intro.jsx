import React, { useCallback, useEffect, useState } from 'react';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import './Intro.css';

const Intro = (props) => {

    const [{ darkMode },] = useGlobalContext();

    const [backImg, setBackImg] = useState(() => {
        if (darkMode) {
            return 'backImg-1-dark'
        }
        return 'backImg-1-light'
    })

    useEffect(() => {
        console.dir(document.querySelector('#toggler'))
        if (darkMode) {
            document.querySelector('#toggler').checked = true;
        }
    }, [darkMode])

    return (
        <section
            // style={sectionStyle}
            className={`intro backImg ${backImg}`}>
            <label className="Intro-dark-toggle">
                <input id='toggler' type='checkbox'></input>
                <span className='Intro-slider Intro-round'></span>
            </label>
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
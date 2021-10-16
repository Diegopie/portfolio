import React, { useEffect, useState } from 'react';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import './NotFound.css';

const NotFound = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, ] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'backImg-1-dark' : 'backImg-1-light')
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackImg('backImg-1-dark');
        } else {
            setBackImg('backImg-1-light');
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Intro-container'>
                <article className='intro'>
                    <h1 className='typedFix'>
                        <Typed
                            showCursor={false}
                            strings={['Page Not Found 😯']}
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
                </article>
            </article>
        </section>
    );
};

export default NotFound;
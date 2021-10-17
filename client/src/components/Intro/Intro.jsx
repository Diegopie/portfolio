import React, { useEffect, useState } from 'react';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import DarkToggler from '../helper/DarkToggler/DarkToggler';
import './Intro.css';

const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'backImg-1-dark' : 'backImg-1-light')
    })

    // Update State On Toggle and Save Boolean Value to Local Storage For Persisting User Choice on Refresh
    const handleToggle = () => {
        if (darkMode) {
            localStorage.setItem('darkMode', false);
            dispatch({ type: 'setDarkMode', payload: false });
            return;
        }
        localStorage.setItem('darkMode', true);
        dispatch({ type: 'setDarkMode', payload: true });
    }

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            document.querySelector('#toggler').checked = true;
            setBackImg('backImg-1-dark');
        } else {
            setBackImg('backImg-1-light');
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Intro-dark-toggle'>
                <DarkToggler
                    handleToggle={handleToggle}
                />
            </article>
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 className='App-typedFix App-dropShadow'>
                        <Typed
                            showCursor={false}
                            strings={['Diego Hernandez']}
                            typeSpeed={40}
                        // onComplete={(self) => self.cursor.remove()}
                        />
                    </h1>
                    <img
                        className='Intro-mainPhoto intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    />
                    <h2
                        className='App-typedFix Intro-margin App-dropShadow'
                    >
                        <Typed
                            showCursor={false}
                            strings={['Web Developer', 'UX/UI Designer', 'Gamer']}
                            typeSpeed={80}
                        />
                    </h2>
                </article>
            </article>
        </section>
    );
};

export default Intro;
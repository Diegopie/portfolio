import React, { useEffect } from 'react';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import useDarkMode from '../../utils/DarkMode';
import DarkToggler from '../helper/DarkToggler/DarkToggler';
import './Intro.css';

const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    const backImg = useDarkMode(
        {
            lightItem: 'App-backImg-1-light',
            darkItem: 'App-backImg-1-dark'
        });

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
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    />
                    <h2
                        className='App-typedFix Intro-margin App-dropShadow'
                    >
                        {/* Delay time so this starts when my name finishes typing */}
                        <Typed
                            showCursor={false}
                            strings={['UX/UI', 'Full Stack Web Developer', 'Entrepreneur']}
                            typeSpeed={68}
                            startDelay={1400}
                        />
                    </h2>
                </article>
            </article>
        </section>
    );
};

export default Intro;
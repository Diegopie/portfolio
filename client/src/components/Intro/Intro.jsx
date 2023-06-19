import React, { useEffect, useState } from 'react';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import useDarkMode from '../../utils/DarkMode';
import DarkToggler from '../helper/DarkToggler/DarkToggler';
import './Intro.css';
import useBackImg from '../../utils/BackgroundImage';

const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    const { backImg } = useBackImg(
        {
            lightImg: 'App-backImg-intro-light',
            darkImg: 'App-backImg-intro-dark'
        });

    const [smallBackImg, setSmallBackImg] = useState(backImg + '-small');
    console.log(smallBackImg);

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
    }, [darkMode, setSmallBackImg, backImg])

    return (
        <section className={` App-backImg ${smallBackImg} ${backImg}`}
            onLoad={() => { console.log('why'); }}
        >
            <img src='/backImg-intro-light.jpg' alt='invisible img' className='App-Invisible-Img'
                onLoad={() => { setSmallBackImg('') }}
            />
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

// ffmpeg -i backImg-intro-light.jpg -vf scale=60:-1 backImg-intro-light-small.jpg
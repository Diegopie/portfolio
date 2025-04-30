import React, { useEffect } from 'react';
import DarkToggler from '../helper/DarkToggler/DarkToggler';
import Typed from 'react-typed'
import { useGlobalContext } from '../../utils/GlobalContext';
import useBackImg from '../../utils/BackgroundImage';
import './Intro.css';

const Intro = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    const { invisImg, backImg, smallBackImg, setSmallBackImg } = useBackImg(
        {
            lightImg: 'App-backImg-intro-light',
            darkImg: 'App-backImg-intro-dark',
            invisImgLight: '/assets/img/background/backImg-intro-light.jpg',
            invisImgDark: '/assets/img/background/backImg-intro-dark.jpg'
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
        <section className={`App-backImg ${smallBackImg} ${backImg}`}>
            <img src={invisImg} alt='' className='App-Invisible-Img'
                onLoad={() => { setSmallBackImg('') }}
            />
            <article className='Intro-dark-toggle'>
                <DarkToggler
                    handleToggle={handleToggle}
                />
            </article>
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 aria-hidden='true' className='App-typedFix App-dropShadow'>
                        <Typed
                            showCursor={false}
                            strings={['Diego Hernandez']}
                            typeSpeed={55}
                            // onComplete={(self) => self.cursor.remove()}
                        />
                    </h1>
                    <h1 className='sr-only'>Diego Hernandez</h1>
                    <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt="A very handsome and hireable man looks into your soul, lighting it up until you form the words: he's the one"
                    />
                    <p
                        className='App-typedFix Intro-margin App-dropShadow'
                        aria-hidden='true'
                    >
                        {/* Delay time so this starts when my name finishes typing */}
                        <Typed
                            showCursor={false}
                            strings={['Full Stack Web Developer', ' ', 'Instructor', ' ', 'UX/UI Designer', ' ', 'Entrepreneur']}
                            startDelay={2600}
                            typeSpeed={55}
                            backSpeed={50}
                            backDelay={700}
                            loop
                        />
                    </p>
                    <p className='sr-only' aria-hidden='true'>Full Stack Web Developer, Instructor, UX/UI Designer, Entrepreneur</p>
                </article>
            </article>
        </section>
    );
};

export default Intro;

// ffmpeg -i d2Challenge-still-og.png -vf scale=700:-1 d2Challenge-still.png
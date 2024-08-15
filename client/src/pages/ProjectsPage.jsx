import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MyProjectsFull from '../components/MyProjectsFull';
import DarkToggler from '../components/helper/DarkToggler';
import { useGlobalContext } from '../utils/GlobalContext';
import useBackImg from '../utils/BackgroundImage';

const Homepage = () => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

    const buttonRef = useRef(null)

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

        darkMode ? buttonRef.current.classList.add('App-Button-Main-Dark') : buttonRef.current.classList.remove('App-Button-Main-Dark');
    }, [darkMode])

    return (
        <main className={`App-backImg ${smallBackImg} ${backImg}`}>
            <section>
                <img src={invisImg} alt='invisible img' className='App-Invisible-Img'
                    onLoad={() => { setSmallBackImg('') }}
                />
                <article className='Intro-dark-toggle'>
                    <DarkToggler
                        handleToggle={handleToggle}
                    />
                </article>
                <MyProjectsFull />
            </section>
            <section className='MyProjects-all'>
                <Link to="/">
                    <button ref={buttonRef} className='App-Button-Main'>Go Home</button>
                </Link>
            </section>

        </main>
    );
};

export default Homepage;

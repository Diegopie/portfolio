import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyProjectsFull from '../components/MyProjectsFull';
import DarkToggler from '../components/helper/DarkToggler';
import { useGlobalContext } from '../utils/GlobalContext';
import './css/Pages.css'

const Homepage = () => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();
    
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'App-backImg-1-dark' : 'App-backImg-1_1-light')
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
            setBackImg('App-backImg-1-dark');
        } else {
            setBackImg('App-backImg-1_1-light');
        }
    }, [darkMode])

    return (
        <main className={`App-backImg ${backImg}`}>
            <section>
                <article className='Intro-dark-toggle'>
                    <DarkToggler
                        handleToggle={handleToggle}
                    />
                </article>
                <MyProjectsFull />
            </section>
            <section className='MyProjects-all'>
                <Link to="/">
                    <button className='MyProjects-button'>Go Home</button>
                </Link>
            </section>

        </main>
    );
};

export default Homepage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyProjectsFull from '../components/MyProjectsFull';
import DarkToggler from '../components/helper/DarkToggler';
import { useGlobalContext } from '../utils/GlobalContext';
import './css/Pages.css'

const Homepage = () => {

    // Get Value of Dark Mode
    const [{ darkMode }, dispatch] = useGlobalContext();

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
        <main className='App-backMaxHeight'>
            <section>
                <article className='Intro-dark-toggle'>
                    <DarkToggler
                        handleToggle={handleToggle}
                    />
                </article>
                <MyProjectsFull />
            </section>
            <section className='MyProjects-all'>
                <Link to="/projects">
                    <button className='MyProjects-button'>View More Projects</button>
                </Link>
            </section>

        </main>
    );
};

export default Homepage;

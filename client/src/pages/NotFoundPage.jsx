import React, { useEffect } from 'react';
import NotFound from '../components/NotFound'
import { useGlobalContext } from '../utils/GlobalContext';
import './css/Pages.css'

const Homepage = () => {

    const [{ darkMode },] = useGlobalContext();

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
    }, [darkMode])

    return (
        <main className='App-backMaxHeight'>
            <NotFound />
        </main>
    );
};

export default Homepage;

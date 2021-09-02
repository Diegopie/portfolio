import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './BackImg2.css';

const BackImg2 = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, ] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'backImg-1-dark' : 'backImg-1-light')
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackImg('backImg-2-dark')
        } else {
            setBackImg('backImg-2-light')
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg} BackImg2-container` }>
            <article >
                <h2 className='center' >My Work</h2>
            </article>
        </section>
    );
};

export default BackImg2;
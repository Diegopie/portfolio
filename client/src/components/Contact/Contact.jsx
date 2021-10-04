import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './Contact.css';

const Contact = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode },] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'backImg-4-dark' : 'backImg-4-light')
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackImg('backImg-4-dark')
        } else {
            setBackImg('backImg-4-light')
        }
    }, [darkMode])

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Contact-container'>
                <h1 className='Contact-title'>
                    Contact Me
                </h1>
                <article>
                </article>
            </article>
        </section>
    );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import ContactCards from '../helper/ContactCards/ContactCards';
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
            <h1 className='Contact-title'>Contact Me</h1>
            <article className='Contact-body'>
                <ContactCards
                    link='https://github.com/Diegopie'
                    img='/img/icons/github.svg'
                    title='Find Me on GitHub!'
                />
                <ContactCards
                    link='https://www.linkedin.com/in/diego-hernandez-7327381b2'
                    img='/img/icons/iconmonstr-linkedin-3.svg'
                    title='Find Me on LinkedIn!'
                />
                <ContactCards
                    link='https://github.com/Diegopie'
                    img='/img/icons/github.svg'
                    title='Find Me on GitHub!'
                />
            </article>
        </section>
    );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import ContactCards from '../helper/ContactCards/ContactCards';
import './Contact.css';

const Contact = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode },] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? 'App-backImg-4-dark' : 'App-backImg-4-light')
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackImg('App-backImg-4-dark')
        } else {
            setBackImg('App-backImg-4-light')
        }
    }, [darkMode])

    return (
        <section className={`Contact-container App-backImg ${backImg}`}>
            <header className='Contact-heading'>
                <h2 className='Contact-title App-dropShadow'>Contact Me</h2>
                <a
                    href='mailto:diegopie@outlook.com'
                    title='Email Me!'
                    target='_blank'
                    rel="noreferrer"
                > <p className='Contact-sub App-dropShadow'> diegopie@outlook.com </p> </a>
            </header>
            <article className='Contact-cards'>
                <ContactCards
                    link='https://github.com/Diegopie'
                    img='/assets/img/icons/github.svg'
                    title='Find Me on GitHub!'
                />
                <ContactCards
                    link='https://www.linkedin.com/in/diego-hernandez-7327381b2'
                    img='/assets/img/icons/iconmonstr-linkedin-3.svg'
                    title='Find Me on LinkedIn!'
                />
                <ContactCards
                    link='/assets/HernandezD_Resume.pdf'
                    img='/assets/img/icons/iconmonstr-cv-3.svg'
                    title='Download My Resume!'
                />
            </article>
        </section>
    );
};

export default Contact;
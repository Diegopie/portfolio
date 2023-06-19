import React from 'react'
import useDarkMode from '../../utils/DarkMode';
import ContactCards from '../helper/ContactCards/ContactCards';
import './Contact.css';

const Contact = (props) => {

    const backImg = useDarkMode(
        {lightItem: 'App-backImg-contact-light',
        darkItem: 'App-backImg-contact-dark'
    });

    return (
        <section className={`Contact-container App-backImg ${backImg}`}>
            <header className='Contact-heading'>
                <h2 className='Contact-title App-dropShadow'>Contact Me</h2>
                <a
                    href='mailto:diegopie@outlook.com'
                    title='Email Me!'
                    target='_blank'
                    rel="noopener noreferrer"
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
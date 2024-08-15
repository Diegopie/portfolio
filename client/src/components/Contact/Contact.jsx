import React, { useState } from 'react'
import ContactCards from '../helper/ContactCards/ContactCards';
import './Contact.css';
import useBackImg from '../../utils/BackgroundImage';
import { EmailModal } from '../../modals/ProjectModal/EmailModal/EmailModal';

const Contact = (props) => {

    const { invisImg, backImg, smallBackImg, setSmallBackImg } = useBackImg(
        {
            lightImg: 'App-backImg-contact-light',
            darkImg: 'App-backImg-intro-dark',
            invisImgLight: '/assets/img/background/backImg-contact-light.jpg',
            invisImgDark: '/assets/img/background/backImg-intro-dark.jpg'
        });

    const [showModal, setShowModal] = useState(false)

    return (
        <section className={`Contact-container App-backImg ${smallBackImg} ${backImg}`}>
            <img src={invisImg} alt='invisible img' className='App-Invisible-Img'
                onLoad={() => { setSmallBackImg('') }}
            />
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
                {/* <ContactCards
                    setShowModal={setShowModal}
                    img='/assets/img/icons/iconmonstr-paper-plane-5.svg'
                    altText='Email Icon'
                    title='Send me a message!'
                /> */}
                <ContactCards
                    link='https://github.com/Diegopie'
                    img='/assets/img/icons/github.svg'
                    altText='Github Icon'
                    title='Find Me on GitHub!'
                />
                <ContactCards
                    link='https://www.linkedin.com/in/diegopie'
                    img='/assets/img/icons/iconmonstr-linkedin-3.svg'
                    altText='LinkedIn Icon'
                    title='Find Me on LinkedIn!'
                />
                <ContactCards
                    link='/assets/HernandezD_Resume.pdf'
                    img='/assets/img/icons/iconmonstr-cv-3.svg'
                    altText='Resume Icon'
                    title='Download My Resume!'
                />
            </article>
            <section className="App-Center">

                <EmailModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            </section>
        </section>
    );
};

export default Contact;
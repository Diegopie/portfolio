import React from 'react'
import useDarkMode from '../../../utils/DarkMode';
import './ContactCards.css';

const ContactCards = (props) => {

    const handleModal = () => {
        props.setShowModal(true);
        document.body.classList.add('App-scrollLock');
    }

    const darkStyle = useDarkMode(
        {
            lightItem: null,
            darkItem: 'ContactCards-darkImg'
        });

    return (
        <article className='ContactCards-container'>
            {props.link ?
                <a
                    href={props.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    title={props.title}
                >

                    <img className={`ContactCards-img ${darkStyle}`}
                        src={props.img}
                        alt={props.altText}
                    />
                </a>
                :
                <a
                    role="button"
                    onClick={handleModal}
                    title={props.title}
                >

                    <img className={`ContactCards-img ${darkStyle}`}
                        src={props.img}
                        alt={props.altText}
                    />
                </a>
            }
        </article>
    );
};

export default ContactCards;
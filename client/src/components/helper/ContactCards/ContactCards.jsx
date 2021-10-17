import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../utils/GlobalContext';
import './ContactCards.css';

const ContactCards = (props) => {

    const [{ darkMode }, ] = useGlobalContext();

    // Adds Dark Mode Styling, else switches to null class for no additional styling
    const [darkStyle, setDarkStyle] = useState(() => {
        return (darkMode ? 'ContactCards-darkImg' : 'null')
    })

    // Use State Change to Update DOM
        useEffect(() => {
        if (darkMode) {
            setDarkStyle('ContactCards-darkImg')
        } else {
            setDarkStyle('null')
        }
    }, [darkMode])

    return (
        <article className='ContactCards-container'>
            <a 
                href={props.link}
                target='_blank'
                rel="noreferrer"
                title={props.title}
            >
                <img className={`ContactCards-img ${darkStyle}`}
                    src={props.img}
                    alt={props.altText}
                />
            </a>
        </article>
    );
};

export default ContactCards;
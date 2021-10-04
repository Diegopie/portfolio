import React from 'react';
import './ContactCards.css';

const ContactCards = (props) => {

    return (
        <article className='ContactCards-container'>
            <a 
                href={props.link}
                target='_blank'
                rel="noreferrer"
                title={props.title}
            >
                
                <img className='ContactCards-img'
                    src={props.img}
                    alt={props.altText}
                />
            </a>
        </article>
    );
};

export default ContactCards;
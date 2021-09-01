import React from 'react';
import './Icons.css';

const Icons = (props) => {

    return (
        <section className='Icons'>
            {/* HTML */}
            <img
                className='Icons-icon'
                src='/img/icons/html.svg'
                alt='HTML 5 icon'
            />
            {/* CSS */}
            <img
                className="Icons-icon"
                src="/img/icons/css.svg"
                alt='CSS 3 icon'
            />
            {/* JS */}
            <img
                className="Icons-icon"
                src="/img/icons/javascript.svg"
                alt='JS icon'
            />
            {/* jQuery */}
            <img
                className="Icons-icon"
                src="/img/icons/jquery.svg"
                alt='jQuery icon'
            />
            {/* React */}
            <img
                className="Icons-icon"
                src="/img/icons/react.svg"
                alt='React icon'
            />
            {/* Node */}
            <img
                className="Icons-icon"
                src="/img/icons/node.svg"
                alt='Node icon'
            />
            {/* Express */}
            <img
                className="Icons-icon"
                src="/img/icons/express.svg"
                alt='Express icon'
            />
            {/* handlebars */}
            <img
                className="Icons-icon"
                src="/img/icons/handlebars.svg"
                alt='handlebars icon'
            />
            {/* mongodb */}
            <img
                className="Icons-icon"
                src="/img/icons/mongodb.svg"
                alt='mongodb icon'
            />
            {/* mysql */}
            <img
                className="Icons-icon"
                src="/img/icons/mysql.svg"
                alt='mysql icon'
            />
            {/* git */}
            <img
                className="Icons-icon"
                src="/img/icons/git.svg"
                alt='git icon'
            />
        </section>
    );
};

export default Icons;
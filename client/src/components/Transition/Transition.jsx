import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './Transition.css';

const Transition = (props) => {

    // Get Value of Dark Mode
    const [{ darkMode }, ] = useGlobalContext();

    // Set Classes Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ? props.imgDark : props.imgLight)
    })

    // Use State Change to Update DOM
    useEffect(() => {
        if (darkMode) {
            setBackImg(props.imgDark)
        } else {
            setBackImg(props.imgLight)
        }
    }, [darkMode, props.imgDark, props.imgLight])

    return (
        <section className={`App-backImg ${backImg} Transition-container` }>
            <article >
                <h2 className='center' >{props.text}</h2>
            </article>
        </section>
    );
};

export default Transition;
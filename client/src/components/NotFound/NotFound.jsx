import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import React from 'react'
import './NotFound.css';
import useBackImg from '../../utils/BackgroundImage';

const NotFound = (props) => {

    // Set Dark Mode Theme
    const { invisImg, backImg, smallBackImg, setSmallBackImg } = useBackImg(
        {
            lightImg: 'App-backImg-intro-light',
            darkImg: 'App-backImg-intro-dark',
            invisImgLight: '/assets/img/background/backImg-intro-light.jpg',
            invisImgDark: '/assets/img/background/backImg-intro-dark.jpg'
        });

    return (
        <section className={`App-backImg ${smallBackImg} ${backImg}`}>
            <img src={invisImg} alt='invisible img' className='App-Invisible-Img'
                onLoad={() => { setSmallBackImg('') }}
            />
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 className='typedFix App-dropShadow'>
                        <Typed
                            showCursor={false}
                            strings={['Page Not Found 😯']}
                            typeSpeed={40}
                        />
                    </h1>
                    {/* <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    /> */}
                    <section className='MyProjects-all'>
                        <Link to='/'>
                            <button className='MyProjects-button'>Return Home</button>
                        </Link>
                    </section>
                </article>
            </article>
        </section>
    );
};

export default NotFound;
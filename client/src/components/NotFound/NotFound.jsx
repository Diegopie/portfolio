import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import useDarkMode from '../../utils/DarkMode';
import './NotFound.css';

const NotFound = (props) => {

    // Set Dark Mode Theme
    const backImg = useDarkMode(
        {lightItem: 'App-backImg-intro-light',
        darkItem: 'App-backImg-intro-dark'
    });

    return (
        <section className={`App-backImg ${backImg}`}>
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
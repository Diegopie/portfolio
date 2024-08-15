import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './About.css';
import useDarkMode from '../../utils/DarkMode';

const About = (props) => {

    const [{ darkMode },] = useGlobalContext();

    const myLifeImg = useDarkMode(
        {
            lightItem: 'about-img2-light.jpg',
            darkItem: 'about-img2-dark.jpg'
        });

    const myLifeJsx = <>
        <p>
            I grew up in a small town in Utah with hopes of getting as far away as I can. Turns out, kids are kind of dumb and that town is pretty great. Regardless, I had always wanted more and am so grateful that I am where I am now.
        </p>
        <p>
            I attribute that all to my wonderful wife. She is my rock and my inspiration. My entire career is due to her encouragement, even when I was just that weird coworker that wore his Star Wars blanky as a cape.  
        </p>
        <p>
            We love to travel, love our kittens, and love helping people. 
        </p>
    </>

    const myLifeRef = useRef(null);

    const proImg = useDarkMode(
        {
            lightItem: 'about-img3-light.jpg',
            darkItem: 'about-img3-light.jpg'
        });

    const proJsx = <>
        <p>
            As as someone who is passionate about teaching and learning, web development has been my truest source of joy. After earning a Certificate in Full Stack Web Development from the University of Utah, I have been able to achieve much with a broad range of skills in responsive design, SQL/noSQL databases, component-based frameworks, backend servers, data analytics, security, and more.
        </p>
        <p>
            While I won't pretend that if one does what they love they will never work a day in their life (looking at you Adobe XD), I do love creating and contributing to a project. Watching a website come together is thrilling, be it at the workplace, helping a student create their first site, or constructing an experience a client has dreamed about.
        </p>
    </>

    const proRef = useRef(null);

    const freelanceImg = useDarkMode(
        {
            lightItem: 'about-img2-light.jpg',
            darkItem: 'about-img2-dark.jpg'
        });

    const freelanceJsx = <>
        <p>
            FREE As a Full Stack Web Developer who is passionate about teaching and learning, web development has been my truest source of joy.
            After earning a Certificate in Full Stack Web Development from the University of Utah, I have been able to achieve much with a broad range of skills in responsive design, SQL/noSQL databases, component-based frameworks, and Node.js.
        </p>
        <p>
            I am eager to continue to learn so I may build my own applications I dream about and act as a valuable asset to any workplace.
            I spend my free time tutoring web dev students and making applications for my colleagues to improve their productivity, such as moving state health insurance practice tests from an archaic set of spreadsheets to a single, easy to use website.
        </p>
        <p>
            With a background in customer service and an enthusiasm for sales, I have a keen eye for how users want to use an application and keep them engaged with responsive, intuitive experiences.
        </p>
    </>

    const freelanceRef = useRef(null);

    const coachImg = useDarkMode(
        {
            lightItem: 'about-img2-light.jpg',
            darkItem: 'about-img2-dark.jpg'
        });

    const coachJsx = <>
        <p>
            COUCHAs a Full Stack Web Developer who is passionate about teaching and learning, web development has been my truest source of joy.
            After earning a Certificate in Full Stack Web Development from the University of Utah, I have been able to achieve much with a broad range of skills in responsive design, SQL/noSQL databases, component-based frameworks, and Node.js.
        </p>
        <p>
            I am eager to continue to learn so I may build my own applications I dream about and act as a valuable asset to any workplace.
            I spend my free time tutoring web dev students and making applications for my colleagues to improve their productivity, such as moving state health insurance practice tests from an archaic set of spreadsheets to a single, easy to use website.
        </p>
        <p>
            With a background in customer service and an enthusiasm for sales, I have a keen eye for how users want to use an application and keep them engaged with responsive, intuitive experiences.
        </p>
    </>

    const coachRef = useRef(null);


    const selectedImg = useRef('my-life');

    const [displayImg, setDisplayImg] = useState(myLifeImg);
    const [displayJsx, setDisplayJsx] = useState(myLifeJsx);
    const [navColor, setNavColor] = useState('');
    const [navSelected, setNavSelected] = useState('light-selected');

    useEffect(() => {
        darkMode ? setNavColor('dark-nav') : setNavColor('');
        darkMode ? setNavSelected('dark-selected') : setNavSelected('light-selected');

        switch (selectedImg.current) {
            case 'my-life':
                setDisplayImg(myLifeImg);
                myLifeRef.current.classList.add(navSelected)
                break;
            case 'pro':
                setDisplayImg(proImg);
                proRef.current.classList.add(navSelected)
                break;
            case 'freelance':
                setDisplayImg(freelanceImg);
                freelanceRef.current.classList.add(navSelected)
                break;
            case 'coach':
                setDisplayImg(coachImg);
                coachRef.current.classList.add(navSelected)
                break;

            default:
                break;
        }

        
    }, [darkMode, myLifeImg, navSelected, coachImg, freelanceImg, proImg]);

    function handleNav(e, route) {
        document.getElementsByClassName(navSelected)[0].classList.remove(navSelected);
        e.target.classList.add(navSelected);

        switch (route) {
            case 'my-life':
                setDisplayImg(myLifeImg);
                setDisplayJsx(myLifeJsx);
                selectedImg.current = 'my-life'
                break;
            case 'pro':
                setDisplayImg(proImg);
                setDisplayJsx(proJsx);
                selectedImg.current = 'pro'
                break;
            case 'freelance':
                setDisplayImg(freelanceImg);
                setDisplayJsx(freelanceJsx);
                selectedImg.current = 'freelance'
                break;
            case 'coach':
                setDisplayImg(coachImg);
                setDisplayJsx(coachJsx);
                selectedImg.current = 'coach'
                break;
            default:
                break;
        }
    }

    return (
        <section className='About-container'>
            <img
                // style={imgStyle}
                className='About-photo'
                src={`/assets/img/${displayImg}`}
                alt='A beautiful sunset in Galveston'
            />
            <section className='About-text-body'>
                <nav className=''>
                    <button ref={myLifeRef} onClick={(e) => handleNav(e, 'my-life')} className={`${navColor}`}>My Life</button>
                    <button ref={proRef} onClick={(e) => handleNav(e, 'pro')} className={navColor}>Professional/Teaching</button>
                    {/* <button ref={freelanceRef} onClick={(e) => handleNav(e, 'freelance')} className={navColor}>Freelancing</button> */}
                    {/* <button ref={coachRef} onClick={(e) => handleNav(e, 'coach')} className={navColor}>Coaching/Entrepreneurial</button> */}
                </nav>
                <article className='About-text'>
                    {displayJsx}
                </article>
            </section>


        </section>
    );
};

export default About;
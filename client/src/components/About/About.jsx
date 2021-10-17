import React from 'react';
import './About.css';

const About = (props) => {

    return (
        <section className='About-container'>
            <img
                // style={imgStyle}
                className='About-photo'
                src='/assets/img/about-img-light.jpg'
                alt='Rock climbing in St George, Utah'
            />
            <article className='About-text'>
                <p>
                    As a Full Stack Web Developer who is passionate about teaching and learning, web development has been my truest source of joy.
                    After earning a Certificate in Full Stack Web Development from the University of Utah, I have been able to achieve much with a broad range of skills in responsive design, SQL/noSQL databases, component-based frameworks, and Node.js.
                </p>
                <p>
                    I am eager to continue to learn so I may build my own applications I dream about and act as a valuable asset to any workplace.
                    I spend my free time tutoring web dev students and making applications for my colleagues to improve their productivity, such as moving state health insurance practice tests from an archaic set of spreadsheets to a single, easy to use website.
                </p>
                <p>
                    With a background in customer service and an enthusiasm for sales, I have a keen eye for how users want to use an application and keep them engaged with responsive, intuitive experiences.
                </p>
            </article>

        </section>
    );
};

export default About;
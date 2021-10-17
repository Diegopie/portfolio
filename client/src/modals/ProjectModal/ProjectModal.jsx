import React from 'react';
import './ProjectModal.css';

const ProjectModal = (props) => {



    if (!props.showModal) {
        return null;
    }

    const { animateImage, githubLink, liveLink, name, projDesc, stillImage, techStack, role } = props.data

    const handleAnimate = (e) => {
        const target = e.currentTarget;
        if (target.attributes.data.value === 'still') {
            target.src = animateImage;
            target.attributes.data.value = 'animate'
            return;
        }
        target.src = stillImage;
        target.attributes.data.value = 'still'
    }

    const handleClose = () => {
        props.setShowModal(false);
        document.body.classList.remove('App-scrollLock');
    }

    return (
        <section className='ProjModal-container'>
            <article className='ProjModal-close'>
                <button
                    className='ProjModal-button'
                    onClick={handleClose}
                >X</button>
            </article>
            <article className='ProjModal-content'>
                <img
                    src={animateImage}
                    data='animate'
                    alt={`${name} demo`}
                    className='ProjModal-img'
                    title='Click To Stop Gif'
                    onClick={handleAnimate}
                ></img>
                <h3>{name}</h3>
                <p>{projDesc}</p>
                <p>{role}</p>
                <p>{techStack}</p>
                <article className='ProjModal-icon-container'>
                    {/* GitHub */}
                    <a href={githubLink} title={`View ${name} on GitHub`} target="_blank" rel="noreferrer">
                        <img className='ProjModal-icons' src='/img/icons/github.svg' alt='Logo for GitHub website'></img>
                    </a>
                    {/* Site Link */}
                    <a href={liveLink} title={`View ${name} Site`} target="_blank" rel="noreferrer">
                        <img className='ProjModal-icons' src='/img/icons/site.svg' alt='Icon to go to live site'></img>
                    </a>
                </article>
            </article>

        </section>
    );
};

export default ProjectModal;
import React from 'react';
import './ProjectModal.css';

const ProjectModal = (props) => {

    
   
    if (!props.showModal) {
        return null;
    }

    const { animateImage, githubLink, liveLink, name, projDesc, stillImage, techStack } = props.data

    const handleClose = () => {
        props.setShowModal(false);
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
                    alt={`${name} demo`}
                    className='ProjModal-img'
                ></img>
                <h3>{name}</h3>
                <p>{projDesc}</p>
                <article>
                    {/* GitHub */}
                    <a href="https://github.com/Diegopie/The-Smartest-Among-Us" title="View on GitHub" target="_blank" rel="noreferrer">
                        <img src='https://picsum.photos/80' alt='Logo for GitHub website'></img>
                    </a>
                    {/* Site Link */}
                    <a href="https://github.com/Diegopie/The-Smartest-Among-Us" title="View on GitHub" target="_blank" rel="noreferrer">
                        <img src='https://picsum.photos/80' alt='Icon to go to live site'></img>
                    </a>
                </article>
            </article>

        </section>
    );
};

export default ProjectModal;
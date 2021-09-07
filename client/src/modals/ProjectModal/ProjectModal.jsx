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
                <h3>Project Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur pretium nisl, eu viverra tellus. Etiam vestibulum finibus erat, quis finibus enim ultrices id. Cras rhoncus ullamcorper venenatis. Fusce sed ex ornare, ullamcorper ex sodales, semper ex. Nam vitae odio facilisis, mattis ipsum in, faucibus purus. Phasellus sapien felis, pulvinar ut massa sed, placerat aliquam lectus. Donec nec ante vestibulum, fermentum ipsum in, volutpat risus. Donec consectetur ornare elit, vel suscipit arcu suscipit vel. Nullam id nunc ut eros scelerisque imperdiet. Duis condimentum arcu ac viverra laoreet. Phasellus tellus massa, dapibus non luctus vitae, cursus eu odio. Morbi vitae nisi fringilla, viverra diam nec, condimentum purus. Suspendisse potenti. Phasellus tristique purus in dignissi</p>
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
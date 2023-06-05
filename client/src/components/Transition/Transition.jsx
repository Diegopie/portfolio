import useDarkMode from '../../utils/DarkMode';
import './Transition.css';

const Transition = (props) => {

    const backImg = useDarkMode(
        {lightItem: props.imgLight,
        darkItem: props.imgDark
    });

    return (
        <section className={`App-backImg ${backImg} Transition-container` }>
            <article >
                <h2 className='center App-dropShadow' >{props.text}</h2>
            </article>
        </section>
    );
};

export default Transition;
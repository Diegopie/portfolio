import React from 'react';
import './Transition.css';
import useBackImg from '../../utils/BackgroundImage';

const Transition = (props) => {

    const { invisImg, backImg, smallBackImg, setSmallBackImg } = useBackImg(
        {
            lightImg: props.lightImg,
            darkImg: props.darkImg,
            invisImgLight: props.invisImgLight,
            invisImgDark: props.invisImgDark
        });

    return (
        <section className={`App-backImg ${smallBackImg} ${backImg} Transition-container`}>
            <img src={invisImg} alt='invisible img' className='App-Invisible-Img'
                onLoad={() => { setSmallBackImg('') }}
            />
            <article >
                <h2 className='center App-dropShadow' >{props.text}</h2>
            </article>
        </section>
    );
};

export default Transition;
import React from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import './GamesInfo.css';

const GamesInfo = (props) => {

    const [{ game },] = useGlobalContext();

    return (
        <section className='container Guest-padding'>
            <article className='row'>
                <img
                    className='GamesInfo-img'
                    alt="this is the game"
                    src={game.img}
                />
            </article>
            <article className='row'>
                <h3> {game.title} </h3>
            </article>
            <article className='row'>
                <h3>{game.link}</h3>
            </article>
        </section>

    );
};

export default GamesInfo;
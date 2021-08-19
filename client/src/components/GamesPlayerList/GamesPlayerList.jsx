import React, {  } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext'
import GamesPlayerContainer from '../GamesPlayerContainer';
import dummyGuests from '../../data/develop/users';
import './GamesPlayerList.css';

const GamesPlayerList = (props) => {

    const [{ allHuman, allHumanFiltered, human }, ] = useGlobalContext();

    // * Change Data Given Based on Role
    const userDummyData = false;
    let humanData = allHumanFiltered;
    if (human.role === 'admin') {
        humanData = allHuman;
    }
    if (userDummyData) {
        humanData = dummyGuests;
    }

    // console.log(humanData);

    // * Create New Filtered Arrays To Render
    const playing = humanData.filter(human => {
        if (human.rsvp === 'Yes' && human.present) {
            return true
        }
        return false;
    });

    const notPlaying = humanData.filter(human => {
        if (human.rsvp === 'Yes' && !human.present) {
            return true
        }
        return false;
    });

    let forDiego = []

    playing.forEach(element => {
        forDiego.push(element.name)
    });

    console.log(forDiego);

    return (
        <section className='container'>
            {/* Check If Data Has a Truthy Value then Render */}
            {/* Playing */}
            <GamesPlayerContainer
                title='Playing:'
                array={playing}
                human={human}
            />
            {/* Not Playing */}
            <GamesPlayerContainer
                title='Not Playing:'
                array={notPlaying}
                human={human}
            />
        </section>
    );
};

export default GamesPlayerList;

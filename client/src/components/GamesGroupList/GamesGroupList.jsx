import React, {  } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext'
import dummyGuests from '../../data/develop/users';
import './GamesGroupList.css';

const GamesGroupList = (props) => {

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
   



    return (
        <section className='container Guest-padding'>
            <h5> im so done </h5>
        </section>
    );
};

export default GamesGroupList;

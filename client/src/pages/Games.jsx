import React, { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from '../utils/GlobalContext';
import ManageGamesModal from '../modals/ManageGamesModal';
import GamesInfo from '../components/GamesInfo/GamesInfo';
import GamesPlayerList from '../components/GamesPlayerList';
import './css/Pages.css'

const Games = () => {

    const [{ human, getGameData }, dispatch] = useGlobalContext();

    // * Manage CreateGuestModal
    const [showCreate, setShowCreate] = useState(false);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const handleHidePlayerList = () => {
        const idTarget = document.querySelector('#GamePlayerList')
        console.log(idTarget);
        idTarget.classList.remove('Games-HideHacks')
    }

    const handleShowPlayerList = () => {
        const idTarget = document.querySelector('#GamePlayerList')
        console.log(idTarget);
        idTarget.classList.add('Games-HideHacks')
    }

    // * Fetch and Store Game Info
    const runGetGameData = useCallback(() => {
        getGameData()
            .then(data => {
                if (data) {
                    dispatch({ type: 'setGame', payload: data });
                }
            })
    }, [dispatch, getGameData])

    useEffect(() => {
        runGetGameData();
    }, [runGetGameData])


    if (human) {
        return (
            <main>
                {/* Render For Admins  */}
                { human.role === 'admin' &&
                    <section className="container">
                        <article className='row Guest-admin-controls'>
                            <h3>Admin Controls: </h3>
                            <Button
                                onClick={() =>
                                    handleHidePlayerList()
                                }
                            > Manage Players </Button>
                            <Button
                                onClick={() => handleShowCreate()}
                            > Manage Game </Button>
                        </article>
                        <article
                            id='GamePlayerList'
                            className='Games-HideHacks'>
                            <GamesPlayerList />
                            <Button
                                onClick={() => handleShowPlayerList()}
                            >Hide Players</Button>
                        </article>
                    </section>
                }
                <GamesInfo />
                {/* <GuestList /> */}
                <ManageGamesModal
                    show={showCreate}
                    onHide={() => handleCloseCreate(false)}
                    human={human}
                />
            </main>
        );
    }

    return (
        <h3>Login To See The Games Page!</h3>
    );
};

export default Games;

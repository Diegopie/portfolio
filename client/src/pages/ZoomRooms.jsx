import React from 'react';

const ZoomRooms = () => {

    return (
        <main className='container'>
            <h1>Zoom Zoom</h1>
            <p> <a 
                    href="https://utah.zoom.us/j/97818309527"
                    target='_blank'
                >https://utah.zoom.us/j/97818309527</a></p>
            <section className='row'>
                <article className='col-12'>
                    <h4> Game Rooms </h4>
                </article>
                <p> For the games, we'll have a few Game Rooms to break into groups depending on the game. The Games page will eventually show the groups but this shit is a lot of work 😅 (update: Yeah it was a shit ton of work, some of it works 🤷‍♀️) </p>
            </section>
            <section className='row'>
                <article className='col-12'>
                    <h4> Blaze it </h4>
                </article>
                <p> For us alcoholics, we'll have a Room to take shots and toast. But only toast to me 😘</p>
                <p> You dirty stoners also have a Room for a hot toke sesh. Just know that Jesus is watching </p>
            </section>
            <section className='row'>
                <article className='col-12'>
                    <h4> Just Chillin </h4>
                </article>
                <p> There are also some Chill Rooms if ya'll just want to walk away from the main room to chat with other humans </p>
            </section>
            <section className='row'>
                <article className='col-12'>
                    <h4> Bye, Bitch </h4>
                </article>
                <p> Lol if you want to bail feel free to just yeet outta here </p>
            </section>
            <section className='row'>
                <img
                    className='ZoomRooms-img'
                    src='/img/zooms.png'
                    alt='Break out rooms'
                ></img>
            </section>
        </main>
    );
};

export default ZoomRooms;

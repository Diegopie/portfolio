import React from 'react';
import Typed from 'react-typed'

const Homepage = () => {

    const clientVh = document.documentElement.clientHeight;
    const target = document.querySelector('body');
    target.style.height = clientVh+'px';

    return (
        <main className='container justify-content-center'>
            <h1>
                <Typed
                    showCursor={false}
                    strings={['Diego Hernandez']}
                    typeSpeed={40}
                    // onComplete={(self) => self.cursor.remove()}
               />
            </h1> 
            <section className='row'>
                <p> Fist off, I am sorry for how bad this site is 😂 ( particularly my dev friends 😭 ). It's a combination of I'm bad and this shit takes a lot of time. I've kinda given up on making it look gooder.</p>
                <p> 
                    The Breakout Rooms page will show you the structure the Zoom meeting and the Games page doesn't do anything yet! Again, this shit takes a lot of time. The idea is it will sort us into groups and have links to the games that have them. We'll see if I get there by Saturday 😅
                </p>
                <p>
                    For now, the Guest page works (ugly, but it works) and you can login to update your info and RSVP
                </p>
            </section>
        </main>
    );
};

export default Homepage;

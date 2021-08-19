import React from 'react';
import Typed from 'react-typed'

const Homepage = () => {

    const clientVh = document.documentElement.clientHeight;
    const imgHeight = clientVh/3;
    console.log(imgHeight);
    const target = document.querySelector('body');
    target.style.height = clientVh + 'px';
    // document.querySelector('#hotPic').style.height = imgHeight;

    const imgStyle = {
        height: imgHeight
    };

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
                <img
                    id='hotPic'
                    style={imgStyle}
                    src='https://diegopie.herokuapp.com/assets/img/main-image-02-2.png'
                    alt='me xD'
                />
            </section>
        </main>
    );
};

export default Homepage;

import React from 'react';
import './DarkToggler.css';

const DarkToggler = (props) => {

    return (
        <label className="DarkToggler App-zIndex-1" htmlFor='toggler'>
            <input
                id='toggler'
                type='checkbox'
                onClick={props.handleToggle}
            />
            <span className='DarkToggler-slider DarkToggler-round'></span>
        </label>
    );
};

export default DarkToggler;
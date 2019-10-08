import React from 'react';


export default props => (
    <figure className='image'>
        <img src={props.photo} className='dog-image' alt='dog'></img>
    </figure>
);
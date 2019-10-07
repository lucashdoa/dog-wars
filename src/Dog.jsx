import React from 'react';


export default props => (
    <figure className='image'>
        <img src={props.photo} className='is-rounded' alt='dog'></img>
    </figure>
);
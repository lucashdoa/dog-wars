import React from 'react';
import './End.css';
import logo from '../img/dogwars.png';
import {Link} from 'react-router-dom';


export default () => (
    <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="carousel__container">
            <div className="carousel__item">
            <img alt='dog1' src="http://placekitten.com/480/270" className="carousel__image"/>
            </div>
            <div className="carousel__item">
            <img alt='dog2' src="http://placekitten.com/500/270" className="carousel__image"/>
            </div>
            <div className="carousel__item">
            <img alt='dog3' src="http://placekitten.com/520/300" className="carousel__image"/>
            </div>
        </div>
        <h1>Os JEDI venceram!</h1>
        <Link to='/' className="button is-warning"><span className='has-text-black'>Tela Inicial</span></Link>
    </div>
);      



  
  
  

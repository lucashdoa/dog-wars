import React from 'react';
import logo from './img/dogwars.png';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Desenvolvido por Lucas Andrade
          </h1>
          <a
            className="App-link"
            href="http://lucasandrade.atwebpages.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visite meu site pessoal!
          </a>
          <Link to='/main' className="button is-warning"><span className='has-text-black'>Iniciar</span></Link>
        </header>
      </div>
    );
  }
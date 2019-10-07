import React from 'react';
import logo from './img/dogwars.png';

export default function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Desenvolvido por Lucas Andrade
          </p>
          <a
            className="App-link"
            href="http://lucasandrade.atwebpages.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visite meu site pessoal!
          </a>
          <a href='/main' className="button is-warning">Iniciar</a>
        </header>
      </div>
    );
  }
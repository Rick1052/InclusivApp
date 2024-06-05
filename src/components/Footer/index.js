import React from 'react';
import './../../App.css';

function Footer(){
  return (
    <footer className='footerStyle'>
      <div className='sectionStyle'>
        <h3>Criadores:</h3>
        <ul className='listStyle'>
          <li>Henrique Santos</li>
          <li>João Pedro Ortolan</li>
          <li>Rafael Angelo Silva</li>
        </ul>
      </div>
      <div className='sectionStyle'>
        <h3>Tecnologias Utilizadas:</h3>
        <ul className='listStyle'>
          <li>React</li>
          <li>V Libras</li>
          <li>React Speech Kit</li>
        </ul>
      </div>
    </footer>
  );
};



export default Footer;
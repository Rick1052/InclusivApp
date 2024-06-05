import { Link } from 'react-router-dom';

import TextReader from '../../components/TextReader';

import './../../App.css';

import domNunes from './../../assets/imagens/dom_nunes.png';
import ccbeu from './../../assets/imagens/ccbu.jpg';
import centroEvento from './../../assets/imagens/centro_evento.jpg';
import havan from './../../assets/imagens/havan.jpg';
import comercialIvaipora from './../../assets/imagens/ivaipora.jpg';
import mcDonalds from './../../assets/imagens/mcdonalds.jpeg';
import pigalle from './../../assets/imagens/pigalle.jpg';
import shopping from './../../assets/imagens/shopping.jpg';
import superPao from './../../assets/imagens/super-pao.jpg';
import trajano from './../../assets/imagens/trajano.jpeg';

import cego from './../../assets/icones/cego.svg';
import surdo from './../../assets/icones/surdo.svg';
import braille from './../../assets/icones/braille.svg';
import cadeirante from './../../assets/icones/cadeirante.svg';
import estrela from './../../assets/icones/estrela.png';

let CreateDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', DOM);
}

let ImportScriptFile = () => {
    let script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script)
}

(() => {
    window.addEventListener('DOMContentLoaded', e => {
        CreateDOMObjects();
        ImportScriptFile();
    });
})();

function Catalogo() {
    return (
        <div className='container'>
            <div className='cards'>
                <div className='card-item'>
                    <img src={domNunes} alt='DomNues'/>
                    <h2><TextReader text="Dom Nunes"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                        <div className='icon'>
                            <img src={braille} alt='braille'/>
                            <label><TextReader text="Braille"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Retaurante inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/vnjbgHzo9KMLMwfNA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={ccbeu} alt='CCBEU'/>
                    <h2><TextReader text="CCBEU"/></h2><br/>
                    

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Escola de idiomas inclusiva para pessoas com deficiência visual e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/dmeo7Y82X6g3EtzHA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={centroEvento} alt='Centro de Eventos'/>
                    <h2><TextReader text="Centro de Evento Guarapuava"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Centro de Eventos inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/VkGirDoNY1LSDdUPA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={havan} alt='Havan'/>
                    <h2><TextReader text="Havan"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Centro de Eventos inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/xEeEXtBcL2s56ryT7'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={comercialIvaipora} alt='Comercial Ivaipora'/>
                    <h2><TextReader text="Comercial Ivaipora"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Material de contrução inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/jBBbY2rHyfg3ePgH6'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={mcDonalds} alt='mcDonalds'/>
                    <h2><TextReader text="McDonalds"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                        <div className='icon'>
                            <img src={braille} alt='braille'/>
                            <label><TextReader text="Braille"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Retaurante inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/ekynVztJnyW4KxWXA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={pigalle} alt='Pigalle'/>
                    <h2><TextReader text="Pigalle"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                        <div className='icon'>
                            <img src={braille} alt='braille'/>
                            <label><TextReader text="Braille"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Retaurante inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/EFXPJUkpYcN7frDX6'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={shopping} alt='Shopping'/>
                    <h2><TextReader text="Shopping"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                        <div className='icon'>
                            <img src={braille} alt='braille'/>
                            <label><TextReader text="Braille"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Shooping inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/dyvNgUtRAwfG8e1DA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={superPao} alt='SuperPao'/>
                    <h2><TextReader text="Super Pão Hiper"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Super Mercado inclusivo para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/s3sGY6MEPbBp3TvWA'><TextReader text="Ver Localização"/></Link></button>
                    </div>

                </div>
                <div className='card-item'>
                    <img src={trajano} alt='Trajano'/>
                    <h2><TextReader text="Trajano"/></h2><br/>

                    <div className='icones'>
                        <div className='icon'>
                            <img src={cego} alt='cego'/>
                            <label><TextReader text="Cego"/></label>
                        </div>
                        <div className='icon'>
                            <img src={surdo} alt='surdo'/>
                            <label><TextReader text="Surdo"/></label>
                        </div>
                        <div className='icon'>
                            <img src={cadeirante} alt='cadeirante'/>
                            <label><TextReader text="Cadeirante"/></label>
                        </div>
                    </div>

                    <p className='descricao-restaurante'>
                        <TextReader text="Farmácia inclusiva para pessoas com deficiência visual, auditiva e cadeirante."/>
                    </p>

                    <div className='row'>
                        <div className='pontuacao'>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>
                            <img src={estrela} alt='estrela'/>                        
                        </div>
                        <button type='button' className='btn-localizacao'><Link to='https://maps.app.goo.gl/CXoXQhZb2NwF4dYp8'><TextReader text="Ver Localização"/></Link></button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Catalogo;
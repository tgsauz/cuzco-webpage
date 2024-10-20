import React, { useReducer, useCallback } from 'react';

import ImgContainer from './imgContainer';
import GoogleMap from './map';
import MasonryGallery from './masonry';

import '../styles/home.css';

const initialState = {
    sala: false,
    estudio: false,
    activeButton: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SALA':
            return { ...state, sala: !state.sala, estudio: false, activeButton: 'sala' };
        case 'TOGGLE_ESTUDIO':
            return { ...state, estudio: !state.estudio, sala: false, activeButton: 'estudio' };
        default:
            return state;
    }
};

const Home = ({ onToggleMaximize }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleButtonClick = useCallback((type) => {
        dispatch({ type });
    }, []);

    return (
        <div className='home'>
            <section className='inicio'>
                <img className='img-home' src='/background/bg03.jpg'/>  
                <section className='contentwrapper'>
                    <img className='img-logo' src='/icon/elcuzcologo.jpg'/>
                    <div className='home-text'>
                        <h1>Salas de ensayo</h1>
                        <h1>estudio de grabacion</h1>
                    </div>
                    <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contáctanos</button>
                </section>
            </section>
            <section className='info'>
                <section className='contentwrapper'>
                    <div className='acercade'>
                        <p>Somos un espacio dedicado a la grabación y producción musical, con un ambiente cómodo y profesional donde los artistas pueden dar rienda suelta a su creatividad.</p>
                    </div>
                    <div className='services'>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                <h5>Grabación, mezcla y master</h5><p>Demos, singles, EPs, discos, tomas de baterías, grabación sobre pistas, etc.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                <h5>Salas de Ensayo</h5><p>Alquiler por hora con equipamiento completo.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <h5>Venta de insumos</h5><p>Púas, palillos de batería, cuerdas, pilas, etc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='intro-text'>
                            <p>Nuestra misión es poner al alcance de artistas independientes las instalaciones, el equipamiento y el conocimiento para lograr un producto musical de alta calidad. </p>
                    </div>
                </section>
            </section>
            <section className='about'>
                <section className='contentwrapper'>
                    <div className='galeria'>
                        <div className='salas'>
                            <button 
                                className={state.activeButton === 'sala' ? 'active' : ''}
                                onClick={() => handleButtonClick('TOGGLE_SALA')}
                            >
                                Nuestras Salas
                            </button>
                            <section className={`direction ${state.sala ? 'expanded' : ''}`}>
                                <div className='firstrow'>
                                    <ImgContainer
                                        title='Sala A'
                                        text='Capacidad hasta 12 personas.'
                                        image='/images/salaa.jpg'
                                        maximizedImage='/images/salaa.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                    <ImgContainer
                                        title='Sala B'
                                        text='Capacidad hasta 8 personas.'
                                        image='/images/salab.jpg'
                                        maximizedImage='/images/salab.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                </div>
                                <div className='secondrow'>
                                    <ImgContainer
                                        title='Sala C'
                                        text='Capacidad hasta 5 personas.'
                                        image='/images/salac.jpg'
                                        maximizedImage='/images/salac.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                    <ImgContainer
                                        title='Sala Z'
                                        text='Capacidad hasta 5 personas.'
                                        image='/images/salaz.jpg'
                                        maximizedImage='/images/salaz.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                </div>
                            </section>
                        </div>
                        <div className='estudio'>
                            <button
                                className={state.activeButton === 'estudio' ? 'active' : ''}
                                onClick={() => handleButtonClick('TOGGLE_ESTUDIO')}
                            >
                                Nuestro Estudio
                            </button>
                            <section className={`direction ${state.estudio ? 'expanded' : ''}`}>
                                <div className='firstcolumn'>
                                    <ImgContainer
                                        title='Sala E'
                                        text=''
                                        image='/images/salaestudio.jpg'
                                        maximizedImage='/images/salaestudio.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                    <ImgContainer
                                        title='Estudio'
                                        text=''
                                        image='/images/estudio.jpg'
                                        maximizedImage='/images/estudio.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                </div>
                                <div className='secondcolumn'>
                                    <ImgContainer
                                        title='Sala E + Estudio'
                                        text=''
                                        image='/images/salaestudio.jpg'
                                        maximizedImage='/images/salaestudio.jpg'
                                        description=''
                                        onToggleMaximize={onToggleMaximize}
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <h3>Todas nuestras salas cuentan con equipos de gama alta y acustica de clase A</h3>
            </section>
            <section className='albums'>
                <div className='contentwrapper'>
                    <h1>Nuestros trabajos</h1>
                    <MasonryGallery />
                    <div className='musiclinks'>
                        <a className='spotifylink' href='https://open.spotify.com/playlist/557fwZiBXeokptKmBgyb9U?si=na1f0aQkSQ2xcHDlwvRbXQ&pi=Q7ZdZQiBS56F-' target='_blank' rel='noopener noreferrer'>
                            ¡Escucha nuestra playlist en spotify!
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fillRule="nonzero"><g fill="#ed8117" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.5,0 -10,4.5 -10,10c0,5.5 4.5,10 10,10c5.5,0 10,-4.5 10,-10c0,-5.5 -4.5,-10 -10,-10zM16.057,16.406c-0.188,0 -0.282,-0.094 -0.47,-0.188c-1.411,-0.847 -3.198,-1.317 -5.079,-1.317c-1.035,0 -2.163,0.188 -3.104,0.376c-0.188,0 -0.376,0.094 -0.47,0.094c-0.376,0 -0.658,-0.282 -0.658,-0.658c0,-0.376 0.188,-0.658 0.564,-0.658c1.223,-0.282 2.446,-0.47 3.763,-0.47c2.163,0 4.139,0.564 5.832,1.505c0.188,0.188 0.376,0.282 0.376,0.658c-0.19,0.47 -0.472,0.658 -0.754,0.658zM17.091,13.773c-0.188,0 -0.376,-0.094 -0.564,-0.188c-1.599,-1.035 -3.857,-1.599 -6.302,-1.599c-1.223,0 -2.352,0.188 -3.198,0.376c-0.188,0.094 -0.282,0.094 -0.47,0.094c-0.47,0 -0.753,-0.376 -0.753,-0.753c0,-0.47 0.188,-0.658 0.658,-0.847c1.129,-0.282 2.258,-0.564 3.857,-0.564c2.634,0 5.079,0.658 7.149,1.881c0.282,0.188 0.47,0.47 0.47,0.753c-0.094,0.47 -0.376,0.847 -0.847,0.847zM18.314,10.762c-0.188,0 -0.282,-0.094 -0.564,-0.188c-1.881,-1.035 -4.609,-1.693 -7.243,-1.693c-1.317,0 -2.728,0.188 -3.951,0.47c-0.188,0 -0.282,0.094 -0.564,0.094c-0.564,0.095 -0.941,-0.376 -0.941,-0.94c0,-0.564 0.282,-0.847 0.658,-0.941c1.506,-0.376 3.105,-0.564 4.798,-0.564c2.916,0 5.926,0.658 8.278,1.881c0.282,0.188 0.564,0.47 0.564,0.941c-0.094,0.564 -0.471,0.94 -1.035,0.94z"></path></g></g></svg>
                        </a>
                        <a className='youtubelink' href='https://youtube.com/playlist?list=PLGdaSx2Yhf4syS6eLfPCl9GQnA8AFzntm&si=_hy1j4DGdLpc6_AG' target='_blank' rel='noopener noreferrer'>
                            ¡Mira nuestro mix de youtube!
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fillRule="nonzero"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M43.2,33.9c-0.4,2.1 -2.1,3.7 -4.2,4c-3.3,0.5 -8.8,1.1 -15,1.1c-6.1,0 -11.6,-0.6 -15,-1.1c-2.1,-0.3 -3.8,-1.9 -4.2,-4c-0.4,-2.3 -0.8,-5.7 -0.8,-9.9c0,-4.2 0.4,-7.6 0.8,-9.9c0.4,-2.1 2.1,-3.7 4.2,-4c3.3,-0.5 8.8,-1.1 15,-1.1c6.2,0 11.6,0.6 15,1.1c2.1,0.3 3.8,1.9 4.2,4c0.4,2.3 0.9,5.7 0.9,9.9c-0.1,4.2 -0.5,7.6 -0.9,9.9z" fill="#ed8117"></path><path d="M20,31v-14l12,7z" fill="#ffffff"></path></g></g></svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <img className='img-contact' src='/background/bg02.jpg'/>
                <section className='contentwrapper'>
                    <div className='mapa'>
                        <GoogleMap />
                    </div>
                    <div className='text'>
                        <span>
                            <h2>ABIERTO 24hs</h2>
                            <h2>TODOS LOS DIAS DEL AÑO</h2>
                            <h3>FERIADOS INCLUSIVE</h3>
                            <h3>(CON RESERVA PREVIA)</h3>    
                        </span>
                        <span>
                            <h3>Enterate de todas las novedades</h3>
                            <h3> en nuestras redes sociales</h3>    
                        </span>
                        <ul className='list'>
                            <li><a href='https://www.instagram.com/elcuzcoestudio/' target='_blank' rel='noopener noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a></li>
                            <li><a href='https://www.facebook.com/ElCuzcoEstudio/' target='_blank' rel='noopener noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a></li>
                        </ul>
                        <span>
                            <h3>Contacto:</h3>
                            <p>+54 9 11 2635-2412</p>
                            <p>info@elcuzco.com.ar</p>
                        </span>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home
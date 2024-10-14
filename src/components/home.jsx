import ImgContainer from './imgContainer'
import GoogleMap from './map'
import MasonryGallery from './masonry'

import '../styles/home.css'
function Home({ onToggleMaximize }) {

    return (
        <div className='home'>
            <section className='inicio'>
                <img className='img-home' src='/background/bg01.jpg'/>  
                <section className='contentwrapper'>
                    <img className='img-logo' src='/icon/elcuzcologo.jpg'/>
                    <div className='home-text'>
                        <h1>Salas de ensayo</h1>
                        <h2>Estudio de grabacion</h2>
                    </div>
                    <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contáctanos</button>
                </section>
            </section>
            <section className='info'>
                <section className='contentwrapper'>
                    <div className='acercade'>
                        <h2>Sobre El Cuzco</h2>
                        <p>Espacio comodo y profesional, pensado para inspirarte y disfrutar mientras desarrollas tu proceso creativo.</p>
                    </div>
                    <div className='services'>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                <h5>Grabación, mezcla y master:</h5><p>Demos, singles, EPs, discos, tomas de baterías, grabación sobre pistas, etc.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                <h5>Salas de Ensayo:</h5><p>Alquiler por hora, con equipamiento completo.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <h5>Venta de insumos:</h5><p>Púas, palillos de batería, tapones para oído, pilas, etc.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className='about'>
                <section className='contentwrapper'>
                    <div className='intro'>
                        <div className='intro-text'>
                            <div>
                                <h3>Todas nuestras salas cuentan con equipo de gama alta y acustica de clase A</h3>
                                <p>Nuestra misión es poner al alcance de artistas independientes de todo nivel  las instalaciones, el equipamiento y el conocimiento para lograr un producto musical de alta calidad. </p>
                            </div>
                        </div>
                    </div>
                    <div className='galeria'>
                        <div className='salas'>
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
                        </div>
                        <div className='separador'></div>
                        <div className='estudio'>
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
                            <div className='separador'></div>
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
                        </div>
                    </div>
                </section>
            </section>
            <section className='albums'>
                <div className='contentwrapper'>
                    <h1>Nuestros trabajos</h1>
                    <MasonryGallery />
                    <div className='musiclinks'>
                        <a className='spotifylink' href='https://open.spotify.com/playlist/557fwZiBXeokptKmBgyb9U?si=na1f0aQkSQ2xcHDlwvRbXQ&pi=Q7ZdZQiBS56F-' target='_blank' rel='noopener noreferrer'>¡Escucha nuestra playlist en spotify!</a>
                        <a className='youtubelink' href='https://youtube.com/playlist?list=PLGdaSx2Yhf4syS6eLfPCl9GQnA8AFzntm&si=_hy1j4DGdLpc6_AG' target='_blank' rel='noopener noreferrer'>¡Mira nuestro mix de youtube!</a>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <img className='img-contact' src='/background/bg03.jpg'/>
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
                            <p>info@elcuzcoestudio.com</p>

                        </span>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Homeimport ImgContainer from './imgContainer'
import GoogleMap from './map'
import MasonryGallery from './masonry'

import '../styles/home.css'
function Home({ onToggleMaximize }) {

    return (
        <div className='home'>
            <section className='inicio'>
                <img className='img-home' src='/background/bg01.jpg'/>  
                <section className='contentwrapper'>
                    <img className='img-logo' src='/icon/elcuzcologo.jpg'/>
                    <div className='home-text'>
                        <h1>Lleva tu música al próximo nivel</h1>
                        <h2>En El Cuzco Estudio, te ayudamos a hacer que tu música suene increíble</h2>
                    </div>
                    <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contáctanos</button>
                </section>
            </section>
            <section className='info'>
                <section className='contentwrapper'>
                    <div className='acercade'>
                        <h2>Sobre El Cuzco Estudio</h2>
                        <p>Somos un espacio dedicado a la grabación y producción musical, con un ambiente cómodo y profesional donde los artistas pueden dar rienda suelta a su creatividad.</p>
                    </div>
                    <div className='services'>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                <h5>Grabación, mezcla y master:</h5><p>Demos, singles, EPs, discos, tomas de baterías, grabación sobre pistas, etc.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                                <h5>Salas de Ensayo:</h5><p>Alquiler por hora, con equipamiento completo.</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <h5>Venta de insumos:</h5><p>Púas, palillos de batería, tapones para oído, pilas, etc.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className='about'>
                <section className='contentwrapper'>
                    <div className='intro'>
                        <div className='intro-text'>
                            <div>
                                <h3>Todas nuestras salas cuentan con equipo 'state of the art' y acustica de grado A</h3>
                                <p>Nuestra misión es poner al alcance de artistas independientes de todo nivel  las instalaciones, el equipamiento y el conocimiento para lograr un producto musical de alta calidad. </p>
                            </div>
                        </div>
                    </div>
                    <div className='galeria'>
                        <div className='salas'>
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
                        </div>
                        <div className='separador'></div>
                        <div className='estudio'>
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
                            <div className='separador'></div>
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
                        </div>
                    </div>
                </section>
            </section>
            <section className='albums'>
                <div className='contentwrapper'>
                    <h1>Algunos discos realizados en el cuzco</h1>
                    <MasonryGallery />
                    <div className='musiclinks'>
                        <a className='spotifylink' href='https://open.spotify.com/playlist/557fwZiBXeokptKmBgyb9U?si=na1f0aQkSQ2xcHDlwvRbXQ&pi=Q7ZdZQiBS56F-' target='_blank' rel='noopener noreferrer'>¡Escucha nuestra playlist en spotify!</a>
                        <a className='youtubelink' href='https://youtube.com/playlist?list=PLGdaSx2Yhf4syS6eLfPCl9GQnA8AFzntm&si=_hy1j4DGdLpc6_AG' target='_blank' rel='noopener noreferrer'>¡Mira nuestro mix de youtube!</a>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <img className='img-contact' src='/background/bg03.jpg'/>
                <section className='contentwrapper'>
                    <div className='mapa'>
                        <GoogleMap />
                    </div>
                    <div className='text'>
                        <span>
                            <h2>HORARIOS DE SERVICIO</h2>
                            <h2>LAS 24 HORAS</h2>    
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
                            <p>info@elcuzcoestudio.com</p>

                        </span>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home
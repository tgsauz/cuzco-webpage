import '../styles/home.css'
import GoogleMap from './map'
import MasonryGallery from './masonry'
function Home() {

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
                        <h4>Nuestros servicios:</h4>
                        <ul>
                            <li><h5>Grabación Completa:</h5><p>Demos, singles, EPs, discos.</p></li>
                            <li><h5>Trabajos Parciales:</h5><p>Tomas de baterías, grabación sobre pistas, re-amps, etc.</p></li>
                            <li><h5>Mezcla y Masterización:</h5><p>Servicio disponible tanto presencial como online.</p></li>
                            <li><h5>Salas de Ensayo:</h5><p>Alquiler por hora, con equipamiento completo.</p></li>
                            <li><h5>Alquiler de Instrumentos y Venta de Insumos</h5><p>Púas, palillos de batería, tapones para oído, pilas, etc.</p></li>
                            <li><h5>Grabación en Vivo:</h5><p>Sala con capacidad para 50 personas para shows en vivo.</p></li>
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
                        <div className='firstrow'>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Sala A</h3>
                                    <p>Capacidad hasta 12 personas.</p>
                                </div>
                                <img src='/images/salaa.jpg' alt='sala a'/>
                            </div>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Sala B</h3>
                                    <p>Capacidad hasta 8 personas.</p>
                                </div>
                                <img src='/images/salab.jpg' alt='sala b'/>
                            </div>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Sala C</h3>
                                    <p>Capacidad hasta 5 personas.</p>
                                </div>
                                <img src='/images/salac.jpg' alt='sala c'/>
                            </div>
                        </div>
                        <div className='secondrow'>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Sala Z</h3>
                                    <p>Capacidad hasta 5 personas.</p>
                                </div>
                                <img src='/images/salaz.jpg' alt='sala z'/>
                            </div>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Sala de grabacion</h3>
                                    <p></p>
                                </div>
                                <img src='/images/salaestudio.jpg' alt='sala de estudio'/>
                            </div>
                            <div className='img-container'>
                                <div className='text-container'>
                                    <h3>Estudio</h3>
                                    <p></p>
                                </div>
                                <img src='/images/estudio.jpg' alt='estudio'/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='albums'>
                <div className='contentwrapper'>
                    <h1>Discos realizados en el cuzco</h1>
                    <MasonryGallery />
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
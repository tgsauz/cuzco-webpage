import '../styles/home.css'
import GoogleMap from './map'

function Home() {

    return (
        <div className='home'>
            <img className='img-home' src='/background/bg01.jpg'/>
            <section className='inicio'>
                <section className='contentwrapper'>
                    <img className='img-logo' src='/icon/elcuzcologo.jpg'/>
                    <h2>ESTUDIO DE GRABACIÓN, PRODUCCION Y SALAS DE ENSAYO</h2>
                    <button>Contacto</button>
                </section>
            </section>
            <section className='about'>
                <img className='img-about' src='/background/bg02.jpg'/>
                <section className='contentwrapper'>
                    <div className='intro'>
                        <div className='intro-text'>
                            <h3>Todas nuestras salas cuentan con equipo 'state of the art' y salas con acustica de grado A</h3>
                            <p>Nuestra misión es poner al alcance de artistas independientes de todo nivel  las instalaciones, el equipamiento y el conocimiento para lograr un producto musical de alta calidad. </p>
                        </div>
                    </div>
                    <div className='galeria'>
                        <div className='firstrow'>
                            <img src='/images/salaa.jpg'/>
                            <img src='/images/salab.jpg'/>
                            <img src='/images/salac.jpg'/>
                        </div>
                        <div className='secondrow'>
                            <img src='/images/salaz.jpg'/>
                            <img src='/images/salaestudio.jpg'/>
                            <img src='/images/estudio.jpg'/>
                        </div>
                    </div>
                </section>
            </section>
            <section className='albums'>
                <div className='contentwrapper'>
                    <h1>ALBUMES GRABADOS EN NUESTRO TEMPLO</h1>
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

                        </span>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Home
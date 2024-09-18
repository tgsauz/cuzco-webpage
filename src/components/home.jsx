import '../styles/home.css'
import ImageCarousel from './imagecarousel.jsx'
import GoogleMap from './map'

function Home() {

    return (
        <>
            <section className="container">
                <img className='img-home' src='/background/bg01.jpg'/>
                <section className='home inicio'>
                    <section className='contentwrapper'>
                        <img className='img-logo' src='/icon/elcuzcologo.jpg'/>
                        <h2>ESTUDIO DE GRABACIÓN, PRODUCCION Y SALAS DE ENSAYO</h2>
                        <button>Contacto</button>
                    </section>
                </section>
                <section className='home about'>
                    <img className='img-about' src='/background/bg02.jpg'/>
                    <section className='contentwrapper'>
                            <div className='intro'>
                                <div className='intro-text'>
                                    <h3>Todas nuestras salas cuentan con equipo 'state of the art' y salas con acustica de grado A</h3>
                                    <p>Nuestra misión es poner al alcance de artistas independientes de todo nivel  las instalaciones, el equipamiento y el conocimiento para lograr un producto musical de alta calidad. </p>
                                </div>
                            </div>
                        <div className='galeria'>
                                <section className='text'>
                                    <h2>Galeria con diferente informacion</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum excepturi unde alias minima deleniti optio. Esse placeat dolor dolorum, sequi tenetur, accusamus eius natus necessitatibus, alias fuga laboriosam non dolorem!</p>

                                </section>
                                <div className='section-card'>
                                    <ImageCarousel/>
                                </div>
                            </div>
                    </section>
                </section>
                <section className='home contact'>
                    <img className='img-contact' src='/background/bg03.jpg'/>
                    <section className='contentwrapper'>
                        <div className='mapa'>
                            <GoogleMap />
                        </div>
                        <div className='text'>
                            <h2>Contacto</h2>
                            <p>En caso de dudas o consultas, puedes contactarnos por cualquiera de los siguientes medios:</p>
                            <ul className='list'>
                                <li><a href='' target='_blank' rel='noopener noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>    
                                </a></li>
                                <li><a href='https://www.instagram.com/elcuzcoestudio/' target='_blank' rel='noopener noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a></li>
                                <li><a href='https://www.facebook.com/ElCuzcoEstudio/' target='_blank' rel='noopener noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a></li>
                            </ul>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home
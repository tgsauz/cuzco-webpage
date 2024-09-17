import '../styles/home.css'
import ImageCarousel from './imagecarousel.jsx'
import GoogleMap from './map'

function Home() {

    return (
        <>
            <section className="container">
                <img className='img-home' src='/salaa.jpg'/>
                <section className='home inicio'>
                    <section className='contentwrapper'>
                        <img className='img-logo' src='/elcuzcologo.jpg'/>
                        <h2>ESTUDIO DE GRABACIÓN, PRODUCCION Y SALAS DE ENSAYO</h2>
                        <button>Contacto</button>
                    </section>
                </section>
                <section className='home about'>
                    <img className='img-about' src='/placeholder3.jpg'/>
                    <section className='contentwrapper'>
                            <div className='intro'>
                                <img className='intro-img' src='/placeholder3.jpg'/>
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
                    <section className='contentwrapper'>
                        <div className='mapa'>
                            <GoogleMap />
                        </div>
                        <div className='text'>
                            <h2>Contacto</h2>
                            <p>En caso de dudas o consultas, puedes contactarnos por cualquiera de los siguientes medios:</p>
                            <span> Diferentes metodos de contacto, etc...</span>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home
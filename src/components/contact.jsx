import GoogleMap from './map';

import '../styles/contact.css';

const Contact = () => {

    return (
        <section className='contact'>
        <img className='img-contact' src='/background/bg02.jpg'/>
        <section className='contentwrapper'>
            <div className='mapa'>
                <GoogleMap />
            </div>
            <div className='text'>
                <span>
                    <h2>ABIERTO 24hs TODOS LOS DIAS DEL AÑO</h2>
                    <h3>FERIADOS INCLUSIVE (CON RESERVA PREVIA)</h3>    
                </span>
                <span>
                    <h3>Enterate de todas las novedades en nuestras redes sociales</h3>    
                </span>
                <ul className='list'>
                    <li><a href='https://www.instagram.com/elcuzcoestudio/' target='_blank' rel='noopener noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a></li>
                    <li><a href='https://www.facebook.com/ElCuzcoEstudio/' target='_blank' rel='noopener noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a ></li>
                    <li><a href='mailto:info@elcuzco.com.ar' target='_blank' rel='noopener noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
    )
}

export default Contact
import React from 'react';

import Info from './info';
import About from './about';
import Albums from './albums';
import Contact from './contact';
import Footer from './footer.jsx';

import '../styles/home.css';

const Home = ({ onToggleMaximize }) => {

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
            <Info />
            <About onToggleMaximize={onToggleMaximize} />
            <Albums />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
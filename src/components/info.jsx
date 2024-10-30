const Info = () => {

    return (
        <section className='info'>
        <section className='contentwrapper'>
            <div className='acercade'>
                <p>Un espacio dedicado a la grabación y producción musical, con un ambiente cómodo y profesional donde los artistas pueden dar rienda suelta a su creatividad.</p>
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
    )
}

export default Info
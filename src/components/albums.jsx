import MasonryGallery from './masonry';

const Albums = () => {

    return (
        <section className='albums'>
            <div className='contentwrapper'>
                <h1>Algunos de nuestros trabajos</h1>
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
                    <a className='storelink' href='https://pedix.app/el-cuzco' target='_blank' rel='noopener noreferrer'>
                        ¡Accede a nuestra tienda online!
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </a>   
                </div>
            </div>
        </section>
    )
}

export default Albums
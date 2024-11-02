import React from 'react';

import '../styles/about.css'

import ImgContainer from './imgContainer';
import Slider from './slider';

const descriptionSalaA = (
    <div className='description-container'>
        <div>
            <h3>Sala A</h3>
            <h3>Capacidad hasta 12 musicos</h3>
        </div>
        <h4>28m2 - Luz natural diurna</h4>
        <ul>
            <li><p>Bateria Pearl Export Spark 5 cuerpos con fierros.</p></li>
            <li><p>Cabezal bajo Trace Elliot GP12SMX + Bafle Bajo Trace Elliott (8x10").</p></li>
            <li><p>Amplificador Fender Blues Deville - Valvular 60w (1x12").</p></li>
            <li><p>Cabezal Guitarra Marshall DSL 100H - Valvular 100w + Caja Marshall 1960 Serie 100 (4x12").</p></li>
            <li><p>Bafles (x2) DB Technologies Flexsys F15 (800w) (Parlante 15").</p></li>
            <li><p>Consola Allen & Heat Zed 16 FX (10 canales mono + 3 canales Stereo) - Efectos onboard.</p></li>
            <li><p>3 Microfonos Shure SM58.</p></li>
            <li><p>3 Pies guitarra/bajo Hercules.</p></li>
            <li><p>Afinador Korg.</p></li>
            <li><p>Cable en todos los equipos.</p></li>
        </ul>
    </div>
);

const descriptionSalaB = (
    <div className='description-container'>
        <div>
            <h3>Sala B</h3>
            <h3>Capacidad hasta 8 musicos</h3>
        </div>
        <h4>24m2 - Luz natural diurna</h4>
        <ul>
            <li><p>Bateria Pearl Export Red 5 cuerpos con fierros.</p></li>
            <li><p>Cabezal bajo Ampeg 4 SVTPro + Bafle Marshall (1x15"+ 4x10").</p></li>
            <li><p>Amplificador p/guitarra Marshall JVM 210C - Valvular 100w (2x12").</p></li>
            <li><p>Amplificador p/guitarra Mesa Nomade Fifty Five - Valvular 100w (2x12").</p></li>
            <li><p>Bafles  JBL Eon (Parlante 15" - Biamplificado 300w Low + 100w Hi) (x2).</p></li>
            <li><p>Consola Soundcraft EFX - (8 canales mono + 2 canales stereo) Efectos onboard.</p></li>
            <li><p>3 Microfonos Shure SM58.</p></li>
            <li><p>3 Pies guitarra/bajo Hercules.</p></li>
            <li><p>Afinador Korg.</p></li>
            <li><p>Cable en todos los equipos.</p></li>
        </ul>
    </div>
);

const descriptionSalaC = (
    <div className='description-container'>
        <div>
            <h3>Sala C</h3>
            <h3>Capacidad hasta 5 musicos</h3>
        </div>
        <h4>16m2</h4>
        <ul>
            <li><p>Bateria Pearl Export Red 5 cuerpos con fierros.</p></li>
            <li><p>Cabezal Hartke + Bafle Hartke (4x10").</p></li>
            <li><p>Amplificador p/guitarra Marshall JVM 205C - Valvular 50w (2x12").</p></li>
            <li><p>Amplificador p/guitarra Marshall Jcm 2000 - TSL601 - Valvular 60W (1x12").</p></li>
            <li><p>Bafles activos Mackie SRM 450 (x2) (Biamplificado 300w Low + 100w Hi continuos).</p></li>
            <li><p>Consola Soundcraft EFX - (8 canales mono + 2 canales stereo).</p></li>
            <li><p>Procesador de efectos Peavey Dual Deltafex.</p></li>
            <li><p>2 Microfonos Shure SM58.</p></li>
            <li><p>3 Pies guitarra/bajo Hercules.</p></li>
            <li><p>Afinador Korg.</p></li>
            <li><p>Cable en todos los equipos.</p></li>
        </ul>
    </div>
);

const descriptionSalaZ = (
    <div className='description-container'>
        <div>
            <h3>Sala Z</h3>
            <h3>Capacidad hasta 5 musicos</h3>
        </div>
        <h4>15m2</h4>
        <ul>
            <li><p>Bateria Pearl Export 5 cuerpos con Fierros.</p></li>
            <li><p>Cabezal bajo Aguilar Tonehammer 500 + Bafle Ampeg (4x10").</p></li>
            <li><p>Amplificador p/guitarra Marshall DSL40C - Valvular 40w (1x12").</p></li>
            <li><p>Amplificador p/guitarra Bugera Vintage V55 Infinium - Valvular 50w (1x12").</p></li>
            <li><p>Baffles (x2) DB Technologies Cromo 15 - 600w (15").</p></li>
            <li><p>Consola Allen & Heat Zed 10fx (4 canales mono + 2 canales stereo).</p></li>
            <li><p>2 Micrófonos Shure SM58.</p></li>
            <li><p>3 Pies guitarra/bajo Hercules.</p></li>
            <li><p>Afinador Korg.</p></li>
            <li><p>Cable en todos los equipos.</p></li>
        </ul>
    </div>
);

const descriptionSalaE = (
    <div className='description-container'>
    </div>
);

const descriptionEstudio = (
    <div className='description-container'>
    </div>
);

const About = ({ onToggleMaximize }) => {

    return (
        <section className='about'>
            <section className='contentwrapper'>
                <div className='galeria'>
                    <div className='salas'>
                        <h1 className='botonsala'>
                            Nuestras Salas
                        </h1>
                        <section className='direction'>
                            <div className='firstrow'>
                                <ImgContainer
                                    title='Sala A'
                                    text='Capacidad hasta 12 personas.'
                                    image='/images/salaa.jpg'
                                    maximizedImage='/images/salaa.jpg'
                                    description={descriptionSalaA}
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Sala B'
                                    text='Capacidad hasta 8 personas.'
                                    image='/images/salab.jpg'
                                    maximizedImage='/images/salab.jpg'
                                    description={descriptionSalaB}
                                    onToggleMaximize={onToggleMaximize}
                                />
                            </div>
                            <div className='secondrow'>
                                <ImgContainer
                                    title='Sala C'
                                    text='Capacidad hasta 5 personas.'
                                    image='/images/salac.jpg'
                                    maximizedImage='/images/salac.jpg'
                                    description={descriptionSalaC}
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Sala Z'
                                    text='Capacidad hasta 5 personas.'
                                    image='/images/salaz.jpg'
                                    maximizedImage='/images/salaz.jpg'
                                    description={descriptionSalaZ}
                                    onToggleMaximize={onToggleMaximize}
                                />
                            </div>
                        </section>
                    </div>
                    <div className='separator'/>
                    <Slider/>
                    <div className='separator'/>
                    <div className='estudio'>
                        <h1 className='botonestudio'>
                            Nuestro Estudio
                        </h1>
                        <section className='direction'>
                            <div className='firstcolumn'>
                                <ImgContainer
                                    title='Sala E'
                                    text=''
                                    image='/images/salaestudio.jpg'
                                    maximizedImage='/images/salaestudio.jpg'
                                    description={descriptionSalaE}
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Estudio'
                                    text=''
                                    image='/images/estudio.jpg'
                                    maximizedImage='/images/estudio.jpg'
                                    description={descriptionEstudio}
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
    );
};
export default About
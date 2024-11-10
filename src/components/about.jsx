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
        <div>
            <h3>Sala de grabación principal</h3>
        </div>
        <h4>32m2  - 92m3</h4>
        <h4>(32 líneas balanceadas a CR + 2 líneas de cue stereo +  4 mono + circuito de video + circuitos 220v/110v estabilizados)</h4>
        <h5>Microfonos:</h5>
        <h6>Dinamicos:</h6>
        <ul>
            <li><p>AKG D112 </p></li>
            <li><p>Electro-Voice RE-20</p></li>
            <li><p>Electro-Voice DS35</p></li>
            <li><p>Sennheiser MD421 II (x2)</p></li>
            <li><p>Sennheiser MD 441-U</p></li>
            <li><p>Sennheiser e 602 II</p></li>
            <li><p>Shure Beta 52</p></li>
            <li><p>Shure SM57 (x3)</p></li>
            <li><p>Shure Beta 57 (x2)</p></li>
            <li><p>Shure SM58 (x2)</p></li>
        </ul>
        <h6>Condensadores:</h6>
        <ul>
            <li><p>Neumann U-87</p></li>
            <li><p>AKG 414 BXL-S-II (x2)(stereo apareados)</p></li>
            <li><p>Audio-Technica 4050 (x2)</p></li>
            <li><p>Neumann KM 184 ni</p></li>
            <li><p>Shure SM81 (x2)</p></li>
        </ul>
        <h6>Electret:</h6>
        <ul>
            <li><p>PZM Crown</p></li>
        </ul>
    </div>
);

const descriptionEstudio = (
    <div className='description-container'>
        <div>
            <h3>Sala de control (Control Room)</h3>
        </div>
        <h4>17m2 - 50m3</h4>
        <h4>(circuito de 220v/110v estabilizados + circuito de video)</h4>
        <h4>Control de maquinas (CMR):  2m2</h4>
        <h5>Equipamiento:</h5>
        <ul>
            <li><p>Mixer API 1608 (16 mic inputs/ 24 line inputs - 12 EQ 550A + 4 EQ 560)</p></li>
            <li><p>Manley VoxBox All tube mic pre/compressor/eq/de-esser</p></li>
            <li><p>Preamp Portico 5012 dual, Rupert Neve Designs</p></li>
            <li><p>Preamp Grace 801</p></li>
            <li><p>Ecualizador Joe Meek VC5</p></li>
            <li><p>Drawmer 1961 Tube Stereo EQ parametrico</p></li>
            <li><p>Drawmer - 1960 dual Mic Pre/Vacuum Tube Compressor</p></li>
            <li><p>Patchbay (x4) 384 puntos</p></li>
        </ul>
        <h5>Procesadores y efectos:</h5>
        <ul>
            <li><p>API 2500 Stereo Compressor</p></li>
            <li><p>Compresor/Limitador mono JBL Urei 7110</p></li>
            <li><p>Compresor Stereo Portico 5043 Rupert Neve Designs</p></li>
            <li><p>Aural Exciter Type “C” Big Bottom Aphex System</p></li>
            <li><p>Lexicon PCM 91</p></li>
        </ul>
        <h5>Monitores:</h5>
        <ul>
            <li><p>Genelec 1032 A</p></li>
            <li><p>Yamaha NS10</p></li>
            <li><p>Amplificador Crown D-75 A</p></li>
        </ul>
        <h5>DAW, Hardware  & Software:</h5>
        <ul>
            <li><p>Pro Tools HD3 (3 Placas DSP)</p></li>
            <li><p>Interface Digidesign 192 I/O (8 In/ 16 Out)</p></li>
            <li><p>Interface Digidesign 888 I/O (8 In/ 8 Out)</p></li>
            <li><p>Pro Tools 10 HD - Version 10.3.9</p></li>
            <li><p>Amplia variedad de Plug-ins & Instrumentos virtuales</p></li>
        </ul>
    </div>
);

const descriptionSalaPrincipalEstudio = (
    <div className='description-container'>
        <div>
            <h3>Sala de grabación principal</h3>
        </div>
        <h4>32m2  - 92m3</h4>
        <h5>(32 líneas balanceadas a CR + 2 líneas de cue stereo +  4 mono + circuito de video + circuitos 220v/110v estabilizados)</h5>
        <h4>Boot 1/Soundlock:  9m2 - 20m3</h4>
        <h5>(4 lineas balanceadas a CR + 2 cue out +  1 speakon + 1 hi-z + circuito de video)</h5>
        <h6>Aire Acondicionado. Renovación de aire mecánica. Distintas configuraciones de luces escenográficas y/o dimmerizables.</h6>
    </div>
)

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
                    <div className='estudio'>
                        <h1 className='botonestudio'>
                            Nuestro Estudio
                        </h1>
                        <section className='direction'>
                            <div className='firstcolumn'>
                                <ImgContainer
                                    title='Control room + gear'
                                    text=''
                                    image='/images/estudio.jpg'
                                    maximizedImage='/images/estudio.jpg'
                                    description={descriptionEstudio}
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Rec Room + Mics'
                                    text=''
                                    image='/images/salae.jpg'
                                    maximizedImage='/images/salae.jpg'
                                    description={descriptionSalaE}
                                    onToggleMaximize={onToggleMaximize}
                                />
                            </div>
                            <div className='secondcolumn'>
                                <ImgContainer
                                    title='Rec Room'
                                    text=''
                                    image='/images/salaestudio.jpg'
                                    maximizedImage='/images/salaestudio.jpg'
                                    description={descriptionSalaPrincipalEstudio}
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
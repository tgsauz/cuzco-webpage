import React, { useCallback, useReducer } from 'react';

import ImgContainer from './imgContainer';

const initialState = {
    sala: false,
    estudio: false,
    activeButton: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_SALA':
            return {
                ...state,
                sala: !state.sala,
                estudio: false,
                activeButton: state.activeButton === 'sala' ? null : 'sala'
            };
        case 'TOGGLE_ESTUDIO':
            return { ...state,
                estudio: !state.estudio,
                sala: false,
                activeButton: state.activeButton === 'estudio' ? null : 'estudio'
            };
        default:
            return state;
    }
};
const About = ({ onToggleMaximize }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleButtonClick = useCallback((type) => {
        dispatch({ type });
    }, []);


    return (
        <section className='about'>
            <section className='contentwrapper'>
                <div className='galeria'>
                    <div className='salas'>
                        <button 
                            className={state.activeButton === 'sala' ? 'active' : ''}
                            onClick={() => handleButtonClick('TOGGLE_SALA')}
                        >
                            Nuestras Salas
                        </button>
                        <section className={`direction ${state.sala ? 'expanded' : ''}`}>
                            <div className='firstrow'>
                                <ImgContainer
                                    title='Sala A'
                                    text='Capacidad hasta 12 personas.'
                                    image='/images/salaa.jpg'
                                    maximizedImage='/images/salaa.jpg'
                                    description=''
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Sala B'
                                    text='Capacidad hasta 8 personas.'
                                    image='/images/salab.jpg'
                                    maximizedImage='/images/salab.jpg'
                                    description=''
                                    onToggleMaximize={onToggleMaximize}
                                />
                            </div>
                            <div className='secondrow'>
                                <ImgContainer
                                    title='Sala C'
                                    text='Capacidad hasta 5 personas.'
                                    image='/images/salac.jpg'
                                    maximizedImage='/images/salac.jpg'
                                    description=''
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Sala Z'
                                    text='Capacidad hasta 5 personas.'
                                    image='/images/salaz.jpg'
                                    maximizedImage='/images/salaz.jpg'
                                    description=''
                                    onToggleMaximize={onToggleMaximize}
                                />
                            </div>
                        </section>
                    </div>
                    <div className='estudio'>
                        <button
                            className={state.activeButton === 'estudio' ? 'active' : ''}
                            onClick={() => handleButtonClick('TOGGLE_ESTUDIO')}
                        >
                            Nuestro Estudio
                        </button>
                        <section className={`direction ${state.estudio ? 'expanded' : ''}`}>
                            <div className='firstcolumn'>
                                <ImgContainer
                                    title='Sala E'
                                    text=''
                                    image='/images/salaestudio.jpg'
                                    maximizedImage='/images/salaestudio.jpg'
                                    description=''
                                    onToggleMaximize={onToggleMaximize}
                                />
                                <ImgContainer
                                    title='Estudio'
                                    text=''
                                    image='/images/estudio.jpg'
                                    maximizedImage='/images/estudio.jpg'
                                    description=''
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
    )
}

export default About
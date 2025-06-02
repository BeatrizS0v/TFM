import './StudyFavCard.css'
import { useState } from 'react';

const StudyFavCard = () => {
    const [side, setSide] = useState(true);

    if(side){
        return(
            <div className='fav'>
            <div className="card card_study_f" style={{margin: "120px 0px"}}>
                <div className='catch'>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="title_study_f">
                    <h2>Título del estudio</h2>
                </div>
                    <p className="text_study_f"><strong className="title_study">Ubicación: </strong>Sevilla</p>
                    <p className="text_study_f"><strong className="title_study">Área de conocimiento: </strong>Artes y humanidades</p>
                    <p className="text_study_f"><strong className="title_study">Web del centro: </strong>webdelcentro.com</p>
                <div className="columns">
                    <div className='info_study_left'>
                        <p className="text_study_f"><strong className="title_study">Tipo: </strong>Pública</p>
                        <p className="text_study_f"><strong className="title_study">Nota de corte: </strong>8.8</p>
                        <p className="text_study_f"><strong className="title_study">Número de plazas: </strong>50</p>
                        <p className="text_study_f"><strong className="title_study">Valoración: </strong>3.5</p>
                    </div>
                    <div className="info_study_right">
                        <p className="text_study_right"><strong className="title_study">Modalidad: </strong>Presencial</p>
                        <p className="text_study_right"><strong className="title_study">Duración: </strong>4 años</p>
                        <p className="text_study_right"><strong className="title_study">Precio: </strong>XXXX€</p>
                    </div>
                </div>
                <div className='voltear'><svg id="svg8" clip-rule="evenodd" className='arrow' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path id="path2" d="m14.586 12-6.293-6.293c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l7 7c.391.39.391 1.024 0 1.414l-7 7c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414z"/></svg></div>
            </div>
        </div>
        )
    }
    return (
        <div className='fav'>
            <div className="card card_study_f" style={{margin: "120px 0px"}}>
                <div className='catch'>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="title_study_f">
                    <h2>Título del estudio</h2>
                </div>
                    <div className='info_study'>
                        <h3 className="title_study">Universidad:</h3>
                        <p className="text_study">textotexto texto texto textotexto</p>
                        <h3 className="title_study">Descripción:</h3>
                        <p className="text_study">textotexto texto texto textotexto</p>
                        <h3 className="title_study">Salidas y perspectivas:</h3>
                        <p className="text_study">textotexto texto texto textotexto</p>
                        <h3 className="title_study">Vinculación con empresas:</h3>
                        <p className="text_study">textotexto texto texto textotexto</p>
                        <h3 className="title_study">Requisitos de acceso:</h3>
                        <p className="text_study">textotexto texto texto textotexto</p>
                    </div>
                <div className='voltear'><svg id="svg8" clip-rule="evenodd" className='arrow' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><path id="path2" d="m14.586 12-6.293-6.293c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l7 7c.391.39.391 1.024 0 1.414l-7 7c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414z"/></svg></div>
            </div>
        </div>
    );
};

export default StudyFavCard;
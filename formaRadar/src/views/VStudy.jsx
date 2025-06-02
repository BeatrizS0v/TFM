import './VStudy.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStudiesById } from '../extras/api';

const VStudy = () => {
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState("");
    const [data, setData]=useState({});
    const {id}=useParams();

    useEffect(()=>{
            const fetchStudy = async () => {
                setLoading(true);
              try {
                const dataStudy= await getStudiesById(id);
                setData(dataStudy);
              } catch (err) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
            };
            console.log(data);
            fetchStudy();
    },[id]);

    if(loading){
        return(<div className='cont'>Cargando...</div>);
    }
    return (
        <div className='cont'>
            <div className="card_v_study container" style={{margin: "0px 0px"}}>
                <div className="title_study_b row">
                    <h2>{data.study}</h2>
                </div>
                <div className='row'>
                    <div className='info_study col-12 col-sm-8'>
                        <h3 className="title_study">Universidad:</h3>
                        <p className="text_study">{data.center}</p>
                        <h3 className="title_study">Descripción:</h3>
                        <p className="text_study">{data.description}</p>
                        <h3 className="title_study">Salidas y perspectivas:</h3>
                        <p className="text_study">{data.career_opportunities}</p>
                        <h3 className="title_study">Vinculación con empresas:</h3>
                        <p className="text_study">{data.industry_engagement}</p>
                        <h3 className="title_study">Requisitos de acceso:</h3>
                        <p className="text_study">{data.admission_requirements}</p>
                        <h3 className="title_study">Comentarios de antiguos alumnos:</h3>
                        <p className="text_study">vvv</p>
                    </div>
                    <div className='info_study col-12 col-sm-4' style={{margin: "20px 0px"}}>
                        <p className="text_study"><strong className="title_study">Ubicación: </strong>{data.location}</p>
                        <p className="text_study"><strong className="title_study">Área de conocimiento: </strong>{data.knowledge_area}</p>
                        <p className="text_study"><strong className="title_study">Tipo: </strong>{data.type_of_institution}</p>
                        <p className="text_study"><strong className="title_study">Modalidad: </strong>{data.modality}</p>
                        <p className="text_study"><strong className="title_study">Nota de corte: </strong>{data.cut_off_mark}</p>
                        <p className="text_study"><strong className="title_study">Número de plazas: </strong>{data.number_of_places}</p>
                        <p className="text_study"><strong className="title_study">Duración: </strong>{data.duration} años</p>
                        <p className="text_study"><strong className="title_study">Valoración: </strong>vvvv</p>
                        <p className="text_study"><strong className="title_study">Precio: </strong>{data.price}</p>
                        <p className="text_study"><strong className="title_study">Web del centro: </strong>{data.center_URL}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VStudy;
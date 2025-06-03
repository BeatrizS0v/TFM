import react from '../assets/react.svg'
import './Profile.css'
import { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../hooks/AuthContext';
import {getFavouritesById} from '../extras/api';
import { Link } from 'react-router-dom';
import Login from './Login';

const Profile = () => {
    const {user, logout} = useContext(AuthContext);
    const [loading, setLoading]=useState(true);
    const [favs, setFavs]=useState([]);

    const handleLogout = () => {
        logout();
    };

    // const dropDownFavs=()=>{
    //     console.log("dropdown");
    // };

    useEffect(()=>{
        const getData=async()=>{
            setLoading(true);
            try{
                if(user){
                    const dataFavs= await getFavouritesById(user.user_id);
                    setFavs(dataFavs);
                }
            } catch (error) {
                console.error("Error al obtener favoritos del usuario:", error);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [user]);

    const infoFavs=()=>{
        return(
            <>
            {favs.map((fav, index)=>(
                <div className='ap_fav' style={{transform: `translateY(${10+(6 * (index))}px)`}} key={index}>{fav.study} - {fav.location}</div>
            ))
        }
        </>)
    }

    if(loading){
        return(
            <p>Cargando...</p>
        )
    }
    return (
        <div className='content'>
            <img className='logo_perfil' src={user.avatar} alt='Foto de perfil'></img>
            <div className="info_perfil">
                <p className='text_perfil'>{user.name} {user.surname}</p>
                <p className='button text_perfil'>Editar perfil</p>
            </div>
            <div className="info_perfil">
                <p className='text_perfil'>Fecha de nacimiento: {user.date_birth}</p>
                <p className='text_perfil'>Correo electrónico: {user.email}</p>
            </div>
            <div className='favourites'>
                <Link to={`studies/favourites/${user.user_id}`}  style={{ all: "unset", width: "80%"}}>
                <div className='cab_fav' >VER ESTUDIOS FAVORITOS</div></Link>
                <div className='aps_fav'>
                    {infoFavs()}
                </div>
            </div>
            <p className='button signout text_perfil' onClick={handleLogout}>Cerrar sesión</p>
            
        </div>
    );
};

export default Profile;